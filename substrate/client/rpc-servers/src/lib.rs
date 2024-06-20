// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

//! Substrate RPC servers.

#![warn(missing_docs)]

pub mod middleware;
pub mod utils;

use std::{
	error::Error as StdError,
	net::{Ipv4Addr, Ipv6Addr, SocketAddr, SocketAddrV4, SocketAddrV6},
	num::NonZeroU32,
	sync::Arc,
	time::Duration,
};

use jsonrpsee::{
	core::BoxError,
	server::{
		serve_with_graceful_shutdown, stop_channel, ws, PingConfig, StopHandle, TowerServiceBuilder,
	},
	Methods, RpcModule,
};
use middleware::NodeHealthProxyLayer;
use tokio::net::TcpListener;
use tower::Service;
use utils::{build_rpc_api, format_cors, get_proxy_ip, host_filtering, try_into_cors};

pub use ip_network::IpNetwork;
pub use jsonrpsee::{
	core::{
		id_providers::{RandomIntegerIdProvider, RandomStringIdProvider},
		traits::IdProvider,
	},
	server::{middleware::rpc::RpcServiceBuilder, BatchRequestConfig},
};
pub use middleware::{Metrics, MiddlewareLayer, RpcMetrics};

const MEGABYTE: u32 = 1024 * 1024;

/// Type alias for the JSON-RPC server.
pub type Server = jsonrpsee::server::ServerHandle;

/// Listen address for the RPC server.
#[derive(Copy, Clone, Debug)]
pub enum ListenAddr {
	/// The listen address is specified.
	Only(SocketAddr),
	/// Default listen address that includes both ipv4 and ipv6.
	Ipv4AndIpv6(Ipv4AndIpv6),
}

impl ListenAddr {
	/// The listen address is specified.
	pub fn only(listen_address: SocketAddr) -> Self {
		Self::Only(listen_address)
	}

	/// Default listen address that includes both ipv4 and ipv6.
	pub fn new(ipv4: Ipv4Addr, ipv6: Ipv6Addr, port: u16) -> Self {
		Self::Ipv4AndIpv6(Ipv4AndIpv6::new(
			SocketAddrV4::new(ipv4, port),
			SocketAddrV6::new(ipv6, port, 0, 0),
		))
	}

	/// Whether the listen address is external.
	pub fn is_external(&self) -> bool {
		match self {
			ListenAddr::Only(addr) => !addr.ip().is_loopback(),
			ListenAddr::Ipv4AndIpv6(inner) => inner.is_external(),
		}
	}
}

/// Listen addresses for both ipv4 and ipv6.
///
/// If binding the specified port failed then a random port is assigned by the OS.
#[derive(Copy, Clone, Debug)]
pub struct Ipv4AndIpv6 {
	ipv4: SocketAddr,
	ipv4_backup: SocketAddr,
	ipv6: SocketAddr,
	ipv6_backup: SocketAddr,
}

impl Ipv4AndIpv6 {
	/// Create a new `ListenAddresses` instance.
	pub fn new(ipv4: SocketAddrV4, ipv6: SocketAddrV6) -> Self {
		// if binding the specified port failed then a random port is assigned by the OS.
		let backup_port = |mut addr: SocketAddr| {
			addr.set_port(0);
			addr
		};

		let ipv4 = ipv4.into();
		let ipv6 = ipv6.into();

		Self { ipv4, ipv4_backup: backup_port(ipv4), ipv6, ipv6_backup: backup_port(ipv6) }
	}

	/// Get the ipv4 listen addresses.
	pub fn ipv4(&self) -> [SocketAddr; 2] {
		[self.ipv4, self.ipv4_backup]
	}

	/// Get the ipv6 listen addresses.
	pub fn ipv6(&self) -> [SocketAddr; 2] {
		[self.ipv6, self.ipv6_backup]
	}

	/// Check if the listen addresses are external.
	pub fn is_external(&self) -> bool {
		!self.ipv4.ip().is_loopback() || !self.ipv6.ip().is_loopback()
	}
}

/// RPC server configuration.
#[derive(Debug)]
pub struct Config<'a, M: Send + Sync + 'static> {
	/// Listen addresses.
	pub listen_addrs: ListenAddr,
	/// CORS.
	pub cors: Option<&'a Vec<String>>,
	/// Maximum connections.
	pub max_connections: u32,
	/// Maximum subscriptions per connection.
	pub max_subs_per_conn: u32,
	/// Maximum rpc request payload size.
	pub max_payload_in_mb: u32,
	/// Maximum rpc response payload size.
	pub max_payload_out_mb: u32,
	/// Metrics.
	pub metrics: Option<RpcMetrics>,
	/// Message buffer size
	pub message_buffer_capacity: u32,
	/// RPC API.
	pub rpc_api: RpcModule<M>,
	/// Subscription ID provider.
	pub id_provider: Option<Box<dyn IdProvider>>,
	/// Tokio runtime handle.
	pub tokio_handle: tokio::runtime::Handle,
	/// Batch request config.
	pub batch_config: BatchRequestConfig,
	/// Rate limit calls per minute.
	pub rate_limit: Option<NonZeroU32>,
	/// Disable rate limit for certain ips.
	pub rate_limit_whitelisted_ips: Vec<IpNetwork>,
	/// Trust proxy headers for rate limiting.
	pub rate_limit_trust_proxy_headers: bool,
}

#[derive(Debug, Clone)]
struct PerConnection<RpcMiddleware, HttpMiddleware> {
	methods: Methods,
	stop_handle: StopHandle,
	metrics: Option<RpcMetrics>,
	tokio_handle: tokio::runtime::Handle,
	service_builder: TowerServiceBuilder<RpcMiddleware, HttpMiddleware>,
	rate_limit_whitelisted_ips: Arc<Vec<IpNetwork>>,
}

/// Start RPC server listening on given address.
pub async fn start_server<M>(
	config: Config<'_, M>,
) -> Result<Server, Box<dyn StdError + Send + Sync>>
where
	M: Send + Sync,
{
	let Config {
		listen_addrs,
		batch_config,
		cors,
		max_payload_in_mb,
		max_payload_out_mb,
		max_connections,
		max_subs_per_conn,
		metrics,
		message_buffer_capacity,
		id_provider,
		tokio_handle,
		rpc_api,
		rate_limit,
		rate_limit_whitelisted_ips,
		rate_limit_trust_proxy_headers,
	} = config;

	// In the default case `listener1 == ipv4_listener` and `listener2 == ipv6`.
	let (listener, maybe_listener2) = match listen_addrs {
		ListenAddr::Only(addr) => {
			let listener = TcpListener::bind(addr).await?;
			(listener, None)
		},
		ListenAddr::Ipv4AndIpv6(listen_addrs) => {
			let ipv4_listener = TcpListener::bind(listen_addrs.ipv4().as_slice()).await?;
			let ipv6_listener = TcpListener::bind(listen_addrs.ipv6().as_slice()).await?;
			(ipv4_listener, Some(ipv6_listener))
		},
	};

	let local_addr = listener.local_addr()?;
	let local_addr2 = match maybe_listener2.as_ref().map(|l| l.local_addr()) {
		Some(Ok(addr)) => Some(addr),
		Some(Err(e)) => return Err(Box::new(e)),
		None => None,
	};

	let host_filter = host_filtering(cors.is_some(), local_addr, local_addr2);

	let http_middleware = tower::ServiceBuilder::new()
		.option_layer(host_filter)
		// Proxy `GET /health, /health/readiness` requests to the internal `system_health` method.
		.layer(NodeHealthProxyLayer::default())
		.layer(try_into_cors(cors)?);

	let mut builder = jsonrpsee::server::Server::builder()
		.max_request_body_size(max_payload_in_mb.saturating_mul(MEGABYTE))
		.max_response_body_size(max_payload_out_mb.saturating_mul(MEGABYTE))
		.max_connections(max_connections)
		.max_subscriptions_per_connection(max_subs_per_conn)
		.enable_ws_ping(
			PingConfig::new()
				.ping_interval(Duration::from_secs(30))
				.inactive_limit(Duration::from_secs(60))
				.max_failures(3),
		)
		.set_http_middleware(http_middleware)
		.set_message_buffer_capacity(message_buffer_capacity)
		.set_batch_request_config(batch_config)
		.custom_tokio_runtime(tokio_handle.clone());

	if let Some(provider) = id_provider {
		builder = builder.set_id_provider(provider);
	} else {
		builder = builder.set_id_provider(RandomStringIdProvider::new(16));
	};

	let (stop_handle, server_handle) = stop_channel();
	let cfg = PerConnection {
		methods: build_rpc_api(rpc_api).into(),
		service_builder: builder.to_service_builder(),
		metrics,
		tokio_handle: tokio_handle.clone(),
		stop_handle,
		rate_limit_whitelisted_ips: Arc::new(rate_limit_whitelisted_ips),
	};

	tokio_handle.spawn(async move {
		loop {
			let (sock, remote_addr) = if let Some(ref listener2) = maybe_listener2.as_ref() {
				tokio::select! {
					res = listener.accept() => {
						match res {
							Ok(s) => s,
							Err(e) => {
								log::debug!(target: "rpc", "Failed to accept ipv4 connection: {:?}", e);
								continue;
							}
						}
					}
					res = listener2.accept() => {
						match res {
							Ok(s) => s,
							Err(e) => {
								log::debug!(target: "rpc", "Failed to accept ipv6 connection: {:?}", e);
								continue;
							}
						}
					}
					_ = cfg.stop_handle.clone().shutdown() => break,
				}
			} else {
				tokio::select! {
					res = listener.accept() => {
						match res {
							Ok(s) => s,
							Err(e) => {
								log::debug!(target: "rpc", "Failed to accept ipv4 connection: {:?}", e);
								continue;
							}
						}
					}
					_ = cfg.stop_handle.clone().shutdown() => break,
				}
			};

			let ip = remote_addr.ip();
			let cfg2 = cfg.clone();
			let svc = tower::service_fn(move |req: http::Request<hyper::body::Incoming>| {
				let PerConnection {
					methods,
					service_builder,
					metrics,
					tokio_handle,
					stop_handle,
					rate_limit_whitelisted_ips,
				} = cfg2.clone();

				let proxy_ip =
					if rate_limit_trust_proxy_headers { get_proxy_ip(&req) } else { None };

				let rate_limit_cfg = if rate_limit_whitelisted_ips
					.iter()
					.any(|ips| ips.contains(proxy_ip.unwrap_or(ip)))
				{
					log::debug!(target: "rpc", "ip={ip}, proxy_ip={:?} is trusted, disabling rate-limit", proxy_ip);
					None
				} else {
					if !rate_limit_whitelisted_ips.is_empty() {
						log::debug!(target: "rpc", "ip={ip}, proxy_ip={:?} is not trusted, rate-limit enabled", proxy_ip);
					}
					rate_limit
				};

				let is_websocket = ws::is_upgrade_request(&req);
				let transport_label = if is_websocket { "ws" } else { "http" };

				let middleware_layer = match (metrics, rate_limit_cfg) {
					(None, None) => None,
					(Some(metrics), None) => Some(
						MiddlewareLayer::new().with_metrics(Metrics::new(metrics, transport_label)),
					),
					(None, Some(rate_limit)) =>
						Some(MiddlewareLayer::new().with_rate_limit_per_minute(rate_limit)),
					(Some(metrics), Some(rate_limit)) => Some(
						MiddlewareLayer::new()
							.with_metrics(Metrics::new(metrics, transport_label))
							.with_rate_limit_per_minute(rate_limit),
					),
				};

				let rpc_middleware =
					RpcServiceBuilder::new().option_layer(middleware_layer.clone());
				let mut svc =
					service_builder.set_rpc_middleware(rpc_middleware).build(methods, stop_handle);

				async move {
					if is_websocket {
						let on_disconnect = svc.on_session_closed();

						// Spawn a task to handle when the connection is closed.
						tokio_handle.spawn(async move {
							let now = std::time::Instant::now();
							middleware_layer.as_ref().map(|m| m.ws_connect());
							on_disconnect.await;
							middleware_layer.as_ref().map(|m| m.ws_disconnect(now));
						});
					}

					// https://github.com/rust-lang/rust/issues/102211 the error type can't be inferred
					// to be `Box<dyn std::error::Error + Send + Sync>` so we need to convert it to
					// a concrete type as workaround.
					svc.call(req).await.map_err(|e| BoxError::from(e))
				}
			});

			cfg.tokio_handle.spawn(serve_with_graceful_shutdown(
				sock,
				svc,
				cfg.stop_handle.clone().shutdown(),
			));
		}
	});

	if let Some(local_addr2) = local_addr2 {
		log::info!(
			"Running JSON-RPC server: addr={local_addr}, addr2={}, allowed origins={}",
			local_addr2,
			format_cors(cors)
		);
	} else {
		log::info!(
			"Running JSON-RPC server: addr={local_addr}, allowed origins={}",
			format_cors(cors)
		);
	}

	Ok(server_handle)
}
