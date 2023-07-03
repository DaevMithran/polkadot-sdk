// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Parity Bridges Common.

// Parity Bridges Common is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity Bridges Common is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity Bridges Common.  If not, see <http://www.gnu.org/licenses/>.

//! Runtime module that allows sending and receiving messages using lane concept:
//!
//! 1) the message is sent using `send_message()` call;
//! 2) every outbound message is assigned nonce;
//! 3) the messages are stored in the storage;
//! 4) external component (relay) delivers messages to bridged chain;
//! 5) messages are processed in order (ordered by assigned nonce);
//! 6) relay may send proof-of-delivery back to this chain.
//!
//! Once message is sent, its progress can be tracked by looking at module events.
//! The assigned nonce is reported using `MessageAccepted` event. When message is
//! delivered to the the bridged chain, it is reported using `MessagesDelivered` event.
//!
//! **IMPORTANT NOTE**: after generating weights (custom `WeighInfo` implementation) for
//! your runtime (where this module is plugged to), please add test for these weights.
//! The test should call the `ensure_weights_are_correct` function from this module.
//! If this test fails with your weights, then either weights are computed incorrectly,
//! or some benchmarks assumptions are broken for your runtime.

#![warn(missing_docs)]
#![cfg_attr(not(feature = "std"), no_std)]

pub use inbound_lane::{InboundLane, InboundLaneStorage, StoredInboundLaneData};
pub use lanes_manager::{
	LanesManager, LanesManagerError, RuntimeInboundLaneStorage, RuntimeOutboundLaneStorage,
};
pub use outbound_lane::{
	OutboundLane, OutboundLaneStorage, ReceptionConfirmationError, StoredMessagePayload,
};
pub use weights::WeightInfo;
pub use weights_ext::{
	ensure_able_to_receive_confirmation, ensure_able_to_receive_message,
	ensure_maximal_message_dispatch, ensure_weights_are_correct, WeightInfoExt,
	EXPECTED_DEFAULT_MESSAGE_LENGTH, EXTRA_STORAGE_PROOF_SIZE,
};

use bp_header_chain::HeaderChain;
use bp_messages::{
	source_chain::{
		DeliveryConfirmationPayments, FromBridgedChainMessagesDeliveryProof, OnMessagesDelivered,
		SendMessageArtifacts,
	},
	target_chain::{
		DeliveryPayments, DispatchMessage, FromBridgedChainMessagesProof, MessageDispatch,
		ProvedLaneMessages, ProvedMessages,
	},
	ChainWithMessages, DeliveredMessages, InboundLaneData, InboundMessageDetails, LaneId,
	MessageKey, MessageNonce, MessagePayload, MessagesOperatingMode, OutboundLaneData,
	OutboundMessageDetails, UnrewardedRelayersState, VerificationError,
};
use bp_runtime::{
	AccountIdOf, BasicOperatingMode, HashOf, OwnedBridgeModule, PreComputedSize, RangeInclusiveExt,
	Size,
};
use codec::{Decode, Encode};
use frame_support::{dispatch::PostDispatchInfo, ensure, fail, traits::Get, DefaultNoBound};
use sp_std::{marker::PhantomData, prelude::*};

mod inbound_lane;
mod lanes_manager;
mod outbound_lane;
mod proofs;
mod tests;
mod weights_ext;

pub mod weights;

#[cfg(feature = "runtime-benchmarks")]
pub mod benchmarking;

pub use pallet::*;
#[cfg(feature = "test-helpers")]
pub use tests::*;

/// The target that will be used when publishing logs related to this pallet.
pub const LOG_TARGET: &str = "runtime::bridge-messages";

#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use bp_messages::{ReceivedMessages, ReceptionResult};
	use bp_runtime::RangeInclusiveExt;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;

	#[pallet::config]
	pub trait Config<I: 'static = ()>: frame_system::Config {
		// General types

		/// The overarching event type.
		type RuntimeEvent: From<Event<Self, I>>
			+ IsType<<Self as frame_system::Config>::RuntimeEvent>;
		/// Benchmarks results from runtime we're plugged into.
		type WeightInfo: WeightInfoExt;

		/// This chain type.
		type ThisChain: ChainWithMessages;
		/// Bridged chain type.
		type BridgedChain: ChainWithMessages;
		/// Bridged chain headers provider.
		type BridgedHeaderChain: HeaderChain<Self::BridgedChain>;

		/// Payload type of outbound messages. This payload is dispatched on the bridged chain.
		type OutboundPayload: Parameter + Size;
		/// Payload type of inbound messages. This payload is dispatched on this chain.
		type InboundPayload: Decode;

		/// Handler for relayer payments that happen during message delivery transaction.
		type DeliveryPayments: DeliveryPayments<Self::AccountId>;
		/// Handler for relayer payments that happen during message delivery confirmation
		/// transaction.
		type DeliveryConfirmationPayments: DeliveryConfirmationPayments<Self::AccountId>;
		/// Delivery confirmation callback.
		type OnMessagesDelivered: OnMessagesDelivered;

		/// Message dispatch handler.
		type MessageDispatch: MessageDispatch<DispatchPayload = Self::InboundPayload>;
	}

	/// Shortcut to this chain type for Config.
	pub type ThisChainOf<T, I> = <T as Config<I>>::ThisChain;
	/// Shortcut to bridged chain type for Config.
	pub type BridgedChainOf<T, I> = <T as Config<I>>::BridgedChain;
	/// Shortcut to bridged header chain type for Config.
	pub type BridgedHeaderChainOf<T, I> = <T as Config<I>>::BridgedHeaderChain;

	#[pallet::pallet]
	pub struct Pallet<T, I = ()>(PhantomData<(T, I)>);

	impl<T: Config<I>, I: 'static> OwnedBridgeModule<T> for Pallet<T, I> {
		const LOG_TARGET: &'static str = LOG_TARGET;
		type OwnerStorage = PalletOwner<T, I>;
		type OperatingMode = MessagesOperatingMode;
		type OperatingModeStorage = PalletOperatingMode<T, I>;
	}

	#[pallet::call]
	impl<T: Config<I>, I: 'static> Pallet<T, I> {
		/// Change `PalletOwner`.
		///
		/// May only be called either by root, or by `PalletOwner`.
		#[pallet::call_index(0)]
		#[pallet::weight((T::DbWeight::get().reads_writes(1, 1), DispatchClass::Operational))]
		pub fn set_owner(origin: OriginFor<T>, new_owner: Option<T::AccountId>) -> DispatchResult {
			<Self as OwnedBridgeModule<_>>::set_owner(origin, new_owner)
		}

		/// Halt or resume all/some pallet operations.
		///
		/// May only be called either by root, or by `PalletOwner`.
		#[pallet::call_index(1)]
		#[pallet::weight((T::DbWeight::get().reads_writes(1, 1), DispatchClass::Operational))]
		pub fn set_operating_mode(
			origin: OriginFor<T>,
			operating_mode: MessagesOperatingMode,
		) -> DispatchResult {
			<Self as OwnedBridgeModule<_>>::set_operating_mode(origin, operating_mode)
		}

		/// Receive messages proof from bridged chain.
		///
		/// The weight of the call assumes that the transaction always brings outbound lane
		/// state update. Because of that, the submitter (relayer) has no benefit of not including
		/// this data in the transaction, so reward confirmations lags should be minimal.
		///
		/// The call fails if:
		///
		/// - the pallet is halted;
		///
		/// - the call origin is not `Signed(_)`;
		///
		/// - there are too many messages in the proof;
		///
		/// - the proof verification procedure returns an error - e.g. because header used to craft
		///   proof is not imported by the associated finality pallet;
		///
		/// - the `dispatch_weight` argument is not sufficient to dispatch all bundled messages.
		///
		/// The call may succeed, but some messages may not be delivered e.g. if they are not fit
		/// into the unrewarded relayers vector.
		#[pallet::call_index(2)]
		#[pallet::weight(T::WeightInfo::receive_messages_proof_weight(&**proof, *messages_count, *dispatch_weight))]
		pub fn receive_messages_proof(
			origin: OriginFor<T>,
			relayer_id_at_bridged_chain: AccountIdOf<BridgedChainOf<T, I>>,
			proof: Box<FromBridgedChainMessagesProof<HashOf<BridgedChainOf<T, I>>>>,
			messages_count: u32,
			dispatch_weight: Weight,
		) -> DispatchResultWithPostInfo {
			Self::ensure_not_halted().map_err(Error::<T, I>::BridgeModule)?;
			let relayer_id_at_this_chain = ensure_signed(origin)?;

			// reject transactions that are declaring too many messages
			ensure!(
				MessageNonce::from(messages_count) <=
					BridgedChainOf::<T, I>::MAX_UNCONFIRMED_MESSAGES_IN_CONFIRMATION_TX,
				Error::<T, I>::TooManyMessagesInTheProof
			);

			// if message dispatcher is currently inactive, we won't accept any messages
			ensure!(T::MessageDispatch::is_active(), Error::<T, I>::MessageDispatchInactive);

			// why do we need to know the weight of this (`receive_messages_proof`) call? Because
			// we may want to return some funds for not-dispatching (or partially dispatching) some
			// messages to the call origin (relayer). And this is done by returning actual weight
			// from the call. But we only know dispatch weight of every messages. So to refund
			// relayer because we have not dispatched Message, we need to:
			//
			// ActualWeight = DeclaredWeight - Message.DispatchWeight
			//
			// The DeclaredWeight is exactly what's computed here. Unfortunately it is impossible
			// to get pre-computed value (and it has been already computed by the executive).
			let declared_weight = T::WeightInfo::receive_messages_proof_weight(
				&*proof,
				messages_count,
				dispatch_weight,
			);
			let mut actual_weight = declared_weight;

			// verify messages proof && convert proof into messages
			let messages = verify_and_decode_messages_proof::<T, I>(*proof, messages_count)
				.map_err(|err| {
					log::trace!(target: LOG_TARGET, "Rejecting invalid messages proof: {:?}", err,);

					Error::<T, I>::InvalidMessagesProof
				})?;

			// dispatch messages and (optionally) update lane(s) state(s)
			let mut total_messages = 0;
			let mut valid_messages = 0;
			let mut messages_received_status = Vec::with_capacity(messages.len());
			let mut dispatch_weight_left = dispatch_weight;
			for (lane_id, lane_data) in messages {
				let mut lane = inbound_lane::<T, I>(lane_id)?;

				// subtract extra storage proof bytes from the actual PoV size - there may be
				// less unrewarded relayers than the maximal configured value
				let lane_extra_proof_size_bytes = lane.storage().extra_proof_size_bytes();
				actual_weight = actual_weight.set_proof_size(
					actual_weight.proof_size().saturating_sub(lane_extra_proof_size_bytes),
				);

				if let Some(lane_state) = lane_data.lane_state {
					let updated_latest_confirmed_nonce = lane.receive_state_update(lane_state);
					if let Some(updated_latest_confirmed_nonce) = updated_latest_confirmed_nonce {
						log::trace!(
							target: LOG_TARGET,
							"Received lane {:?} state update: latest_confirmed_nonce={}. Unrewarded relayers: {:?}",
							lane_id,
							updated_latest_confirmed_nonce,
							UnrewardedRelayersState::from(&lane.storage().data()),
						);
					}
				}

				let mut lane_messages_received_status =
					ReceivedMessages::new(lane_id, Vec::with_capacity(lane_data.messages.len()));
				for mut message in lane_data.messages {
					debug_assert_eq!(message.key.lane_id, lane_id);
					total_messages += 1;

					// ensure that relayer has declared enough weight for dispatching next message
					// on this lane. We can't dispatch lane messages out-of-order, so if declared
					// weight is not enough, let's move to next lane
					let message_dispatch_weight = T::MessageDispatch::dispatch_weight(&mut message);
					if message_dispatch_weight.any_gt(dispatch_weight_left) {
						log::trace!(
							target: LOG_TARGET,
							"Cannot dispatch any more messages on lane {:?}. Weight: declared={}, left={}",
							lane_id,
							message_dispatch_weight,
							dispatch_weight_left,
						);

						fail!(Error::<T, I>::InsufficientDispatchWeight);
					}

					let receival_result = lane.receive_message::<T::MessageDispatch>(
						&relayer_id_at_bridged_chain,
						message.key.nonce,
						message.data,
					);

					// note that we're returning unspent weight to relayer even if message has been
					// rejected by the lane. This allows relayers to submit spam transactions with
					// e.g. the same set of already delivered messages over and over again, without
					// losing funds for messages dispatch. But keep in mind that relayer pays base
					// delivery transaction cost anyway. And base cost covers everything except
					// dispatch, so we have a balance here.
					let unspent_weight = match &receival_result {
						ReceptionResult::Dispatched(dispatch_result) => {
							valid_messages += 1;
							dispatch_result.unspent_weight
						},
						ReceptionResult::InvalidNonce |
						ReceptionResult::TooManyUnrewardedRelayers |
						ReceptionResult::TooManyUnconfirmedMessages => message_dispatch_weight,
					};
					lane_messages_received_status.push(message.key.nonce, receival_result);

					let unspent_weight = unspent_weight.min(message_dispatch_weight);
					dispatch_weight_left -= message_dispatch_weight - unspent_weight;
					actual_weight = actual_weight.saturating_sub(unspent_weight);
				}

				messages_received_status.push(lane_messages_received_status);
			}

			// let's now deal with relayer payments
			T::DeliveryPayments::pay_reward(
				relayer_id_at_this_chain,
				total_messages,
				valid_messages,
				actual_weight,
			);

			log::debug!(
				target: LOG_TARGET,
				"Received messages: total={}, valid={}. Weight used: {}/{}.",
				total_messages,
				valid_messages,
				actual_weight,
				declared_weight,
			);

			Self::deposit_event(Event::MessagesReceived(messages_received_status));

			Ok(PostDispatchInfo { actual_weight: Some(actual_weight), pays_fee: Pays::Yes })
		}

		/// Receive messages delivery proof from bridged chain.
		#[pallet::call_index(3)]
		#[pallet::weight(T::WeightInfo::receive_messages_delivery_proof_weight(
			proof,
			relayers_state,
		))]
		pub fn receive_messages_delivery_proof(
			origin: OriginFor<T>,
			proof: FromBridgedChainMessagesDeliveryProof<HashOf<BridgedChainOf<T, I>>>,
			mut relayers_state: UnrewardedRelayersState,
		) -> DispatchResultWithPostInfo {
			Self::ensure_not_halted().map_err(Error::<T, I>::BridgeModule)?;

			let proof_size = proof.size();
			let confirmation_relayer = ensure_signed(origin)?;
			let (lane_id, lane_data) = proofs::verify_messages_delivery_proof::<T, I>(proof)
				.map_err(|err| {
					log::trace!(
						target: LOG_TARGET,
						"Rejecting invalid messages delivery proof: {:?}",
						err,
					);

					Error::<T, I>::InvalidMessagesDeliveryProof
				})?;
			ensure!(
				relayers_state.is_valid(&lane_data),
				Error::<T, I>::InvalidUnrewardedRelayersState
			);

			// mark messages as delivered
			let mut lane = outbound_lane::<T, I>(lane_id)?;
			let last_delivered_nonce = lane_data.last_delivered_nonce();
			let confirmed_messages = lane
				.confirm_delivery(
					relayers_state.total_messages,
					last_delivered_nonce,
					&lane_data.relayers,
				)
				.map_err(Error::<T, I>::ReceptionConfirmation)?;

			if let Some(confirmed_messages) = confirmed_messages {
				// emit 'delivered' event
				let received_range = confirmed_messages.begin..=confirmed_messages.end;
				Self::deposit_event(Event::MessagesDelivered {
					lane_id,
					messages: confirmed_messages,
				});

				// if some new messages have been confirmed, reward relayers
				let actually_rewarded_relayers = T::DeliveryConfirmationPayments::pay_reward(
					lane_id,
					lane_data.relayers,
					&confirmation_relayer,
					&received_range,
				);

				// update relayers state with actual numbers to compute actual weight below
				relayers_state.unrewarded_relayer_entries = sp_std::cmp::min(
					relayers_state.unrewarded_relayer_entries,
					actually_rewarded_relayers,
				);
				relayers_state.total_messages = sp_std::cmp::min(
					relayers_state.total_messages,
					received_range.checked_len().unwrap_or(MessageNonce::MAX),
				);
			};

			log::trace!(
				target: LOG_TARGET,
				"Received messages delivery proof up to (and including) {} at lane {:?}",
				last_delivered_nonce,
				lane_id,
			);

			// notify others about messages delivery
			T::OnMessagesDelivered::on_messages_delivered(
				lane_id,
				lane.data().queued_messages().saturating_len(),
			);

			// because of lags, the inbound lane state (`lane_data`) may have entries for
			// already rewarded relayers and messages (if all entries are duplicated, then
			// this transaction must be filtered out by our signed extension)
			let actual_weight = T::WeightInfo::receive_messages_delivery_proof_weight(
				&PreComputedSize(proof_size as usize),
				&relayers_state,
			);

			Ok(PostDispatchInfo { actual_weight: Some(actual_weight), pays_fee: Pays::Yes })
		}
	}

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config<I>, I: 'static = ()> {
		/// Message has been accepted and is waiting to be delivered.
		MessageAccepted {
			/// Lane, which has accepted the message.
			lane_id: LaneId,
			/// Nonce of accepted message.
			nonce: MessageNonce,
		},
		/// Messages have been received from the bridged chain.
		MessagesReceived(
			/// Result of received messages dispatch.
			Vec<ReceivedMessages<<T::MessageDispatch as MessageDispatch>::DispatchLevelResult>>,
		),
		/// Messages in the inclusive range have been delivered to the bridged chain.
		MessagesDelivered {
			/// Lane for which the delivery has been confirmed.
			lane_id: LaneId,
			/// Delivered messages.
			messages: DeliveredMessages,
		},
	}

	#[pallet::error]
	#[derive(PartialEq, Eq)]
	pub enum Error<T, I = ()> {
		/// Pallet is not in Normal operating mode.
		NotOperatingNormally,
		/// The inbound message dispatcher is inactive.
		MessageDispatchInactive,
		/// Error that is reported by the lanes manager.
		LanesManager(LanesManagerError),
		/// Message has been treated as invalid by the pallet logic.
		MessageRejectedByPallet(VerificationError),
		/// The transaction brings too many messages.
		TooManyMessagesInTheProof,
		/// Invalid messages has been submitted.
		InvalidMessagesProof,
		/// Invalid messages delivery proof has been submitted.
		InvalidMessagesDeliveryProof,
		/// The relayer has declared invalid unrewarded relayers state in the
		/// `receive_messages_delivery_proof` call.
		InvalidUnrewardedRelayersState,
		/// The cumulative dispatch weight, passed by relayer is not enough to cover dispatch
		/// of all bundled messages.
		InsufficientDispatchWeight,
		/// Error confirming messages receival.
		ReceptionConfirmation(ReceptionConfirmationError),
		/// Error generated by the `OwnedBridgeModule` trait.
		BridgeModule(bp_runtime::OwnedBridgeModuleError),
	}

	/// Optional pallet owner.
	///
	/// Pallet owner has a right to halt all pallet operations and then resume it. If it is
	/// `None`, then there are no direct ways to halt/resume pallet operations, but other
	/// runtime methods may still be used to do that (i.e. democracy::referendum to update halt
	/// flag directly or call the `set_operating_mode`).
	#[pallet::storage]
	#[pallet::getter(fn module_owner)]
	pub type PalletOwner<T: Config<I>, I: 'static = ()> = StorageValue<_, T::AccountId>;

	/// The current operating mode of the pallet.
	///
	/// Depending on the mode either all, some, or no transactions will be allowed.
	#[pallet::storage]
	#[pallet::getter(fn operating_mode)]
	pub type PalletOperatingMode<T: Config<I>, I: 'static = ()> =
		StorageValue<_, MessagesOperatingMode, ValueQuery>;

	// TODO: https://github.com/paritytech/parity-bridges-common/pull/2213: let's limit number of
	// possible opened lanes && use it to constraint maps below

	/// Map of lane id => inbound lane data.
	#[pallet::storage]
	pub type InboundLanes<T: Config<I>, I: 'static = ()> =
		StorageMap<_, Blake2_128Concat, LaneId, StoredInboundLaneData<T, I>, OptionQuery>;

	/// Map of lane id => outbound lane data.
	#[pallet::storage]
	pub type OutboundLanes<T: Config<I>, I: 'static = ()> = StorageMap<
		Hasher = Blake2_128Concat,
		Key = LaneId,
		Value = OutboundLaneData,
		QueryKind = OptionQuery,
	>;

	// TODO:(bridges-v2) - do we still need this?
	/// Map of lane id => is congested signal sent. It is managed by the
	/// `bridge_runtime_common::LocalXcmQueueManager`.
	///
	/// **bridges-v1**: this map is a temporary hack and will be dropped in the `v2`. We can emulate
	/// a storage map using `sp_io::unhashed` storage functions, but then benchmarks are not
	/// accounting its `proof_size`, so it is missing from the final weights. So we need to make it
	/// a map inside some pallet. We could use a simply value instead of map here, because
	/// in `v1` we'll only have a single lane. But in the case of adding another lane before `v2`,
	/// it'll be easier to deal with the isolated storage map instead.
	#[pallet::storage]
	pub type OutboundLanesCongestedSignals<T: Config<I>, I: 'static = ()> = StorageMap<
		Hasher = Blake2_128Concat,
		Key = LaneId,
		Value = bool,
		QueryKind = ValueQuery,
		OnEmpty = GetDefault,
		MaxValues = MaybeOutboundLanesCount<T, I>,
	>;

	/// All queued outbound messages.
	#[pallet::storage]
	pub type OutboundMessages<T: Config<I>, I: 'static = ()> =
		StorageMap<_, Blake2_128Concat, MessageKey, StoredMessagePayload<T, I>>;

	#[pallet::genesis_config]
	#[derive(DefaultNoBound)]
	pub struct GenesisConfig<T: Config<I>, I: 'static = ()> {
		/// Initial pallet operating mode.
		pub operating_mode: MessagesOperatingMode,
		/// Initial pallet owner.
		pub owner: Option<T::AccountId>,
		/// Opened lanes.
		pub opened_lanes: Vec<LaneId>,
		/// Dummy marker.
		pub phantom: sp_std::marker::PhantomData<I>,
	}

	#[pallet::genesis_build]
	impl<T: Config<I>, I: 'static> BuildGenesisConfig for GenesisConfig<T, I> {
		fn build(&self) {
			PalletOperatingMode::<T, I>::put(self.operating_mode);
			if let Some(ref owner) = self.owner {
				PalletOwner::<T, I>::put(owner);
			}

			for lane_id in &self.opened_lanes {
				InboundLanes::<T, I>::insert(lane_id, InboundLaneData::opened());
				OutboundLanes::<T, I>::insert(lane_id, OutboundLaneData::opened());
			}
		}
	}

	impl<T: Config<I>, I: 'static> Pallet<T, I> {
		/// Get stored data of the outbound message with given nonce.
		pub fn outbound_message_data(lane: LaneId, nonce: MessageNonce) -> Option<MessagePayload> {
			OutboundMessages::<T, I>::get(MessageKey { lane_id: lane, nonce }).map(Into::into)
		}

		/// Prepare data, related to given inbound message.
		pub fn inbound_message_data(
			lane: LaneId,
			payload: MessagePayload,
			outbound_details: OutboundMessageDetails,
		) -> InboundMessageDetails {
			let mut dispatch_message = DispatchMessage {
				key: MessageKey { lane_id: lane, nonce: outbound_details.nonce },
				data: payload.into(),
			};
			InboundMessageDetails {
				dispatch_weight: T::MessageDispatch::dispatch_weight(&mut dispatch_message),
			}
		}

		/// Return outbound lane data.
		pub fn outbound_lane_data(lane: LaneId) -> Option<OutboundLaneData> {
			OutboundLanes::<T, I>::get(lane)
		}

		/// Return inbound lane data.
		pub fn inbound_lane_data(
			lane: LaneId,
		) -> Option<InboundLaneData<AccountIdOf<BridgedChainOf<T, I>>>> {
			InboundLanes::<T, I>::get(lane).map(|lane| lane.0)
		}
	}

	/// Get-parameter that returns number of active outbound lanes that the pallet maintains.
	pub struct MaybeOutboundLanesCount<T, I>(PhantomData<(T, I)>);

	impl<T: Config<I>, I: 'static> Get<Option<u32>> for MaybeOutboundLanesCount<T, I> {
		fn get() -> Option<u32> {
			Some(OutboundLanes::<T, I>::iter().count() as u32)
		}
	}
}

/// Structure, containing a validated message payload and all the info required
/// to send it on the bridge.
#[derive(Debug, PartialEq, Eq)]
pub struct SendMessageArgs<T: Config<I>, I: 'static> {
	lane_id: LaneId,
	lane: OutboundLane<RuntimeOutboundLaneStorage<T, I>>,
	payload: StoredMessagePayload<T, I>,
}

impl<T, I> bp_messages::source_chain::MessagesBridge<T::OutboundPayload> for Pallet<T, I>
where
	T: Config<I>,
	I: 'static,
{
	type Error = Error<T, I>;
	type SendMessageArgs = SendMessageArgs<T, I>;

	fn validate_message(
		lane_id: LaneId,
		message: &T::OutboundPayload,
	) -> Result<SendMessageArgs<T, I>, Self::Error> {
		ensure_normal_operating_mode::<T, I>()?;

		// check lane
		let lane = outbound_lane::<T, I>(lane_id)?;

		Ok(SendMessageArgs {
			lane_id,
			lane,
			payload: StoredMessagePayload::<T, I>::try_from(message.encode()).map_err(|_| {
				Error::<T, I>::MessageRejectedByPallet(VerificationError::MessageTooLarge)
			})?,
		})
	}

	fn send_message(args: SendMessageArgs<T, I>) -> SendMessageArtifacts {
		// save message in outbound storage and emit event
		let mut lane = args.lane;
		let message_len = args.payload.len();
		let nonce = lane.send_message(args.payload);

		// return number of messages in the queue to let sender know about its state
		let enqueued_messages = lane.data().queued_messages().saturating_len();

		log::trace!(
			target: LOG_TARGET,
			"Accepted message {} to lane {:?}. Message size: {:?}",
			nonce,
			args.lane_id,
			message_len,
		);

		Pallet::<T, I>::deposit_event(Event::MessageAccepted { lane_id: args.lane_id, nonce });

		SendMessageArtifacts { nonce, enqueued_messages }
	}
}

/// Ensure that the pallet is in normal operational mode.
fn ensure_normal_operating_mode<T: Config<I>, I: 'static>() -> Result<(), Error<T, I>> {
	if PalletOperatingMode::<T, I>::get() ==
		MessagesOperatingMode::Basic(BasicOperatingMode::Normal)
	{
		return Ok(())
	}

	Err(Error::<T, I>::NotOperatingNormally)
}

/// Creates new inbound lane object, backed by runtime storage.
fn inbound_lane<T: Config<I>, I: 'static>(
	lane_id: LaneId,
) -> Result<InboundLane<RuntimeInboundLaneStorage<T, I>>, Error<T, I>> {
	LanesManager::<T, I>::new()
		.active_inbound_lane(lane_id)
		.map_err(Error::LanesManager)
}

/// Creates new outbound lane object, backed by runtime storage.
fn outbound_lane<T: Config<I>, I: 'static>(
	lane_id: LaneId,
) -> Result<OutboundLane<RuntimeOutboundLaneStorage<T, I>>, Error<T, I>> {
	LanesManager::<T, I>::new()
		.active_outbound_lane(lane_id)
		.map_err(Error::LanesManager)
}

/// Verify messages proof and return proved messages with decoded payload.
fn verify_and_decode_messages_proof<T: Config<I>, I: 'static>(
	proof: FromBridgedChainMessagesProof<HashOf<BridgedChainOf<T, I>>>,
	messages_count: u32,
) -> Result<ProvedMessages<DispatchMessage<T::InboundPayload>>, VerificationError> {
	// `receive_messages_proof` weight formula and `MAX_UNCONFIRMED_MESSAGES_IN_CONFIRMATION_TX`
	// check guarantees that the `message_count` is sane and Vec<Message> may be allocated.
	// (tx with too many messages will either be rejected from the pool, or will fail earlier)
	proofs::verify_messages_proof::<T, I>(proof, messages_count).map(|messages_by_lane| {
		messages_by_lane
			.into_iter()
			.map(|(lane, lane_data)| {
				(
					lane,
					ProvedLaneMessages {
						lane_state: lane_data.lane_state,
						messages: lane_data.messages.into_iter().map(Into::into).collect(),
					},
				)
			})
			.collect()
	})
}

// 	#[test]
// 	fn chain_verifier_rejects_invalid_message_in_send_message() {
// 		run_test(|| {
// 			// messages with this payload are rejected by target chain verifier
// 			assert_noop!(
// 				Pallet::<TestRuntime, ()>::validate_message(
// 					TEST_LANE_ID,
// 					&PAYLOAD_REJECTED_BY_TARGET_CHAIN,
// 				),
// 				Error::<TestRuntime, ()>::MessageRejectedByChainVerifier(VerificationError::Other(
// 					mock::TEST_ERROR
// 				)),
// 			);
// 		});
// 	}
//
// 	#[test]
// 	fn receive_messages_fails_if_dispatcher_is_inactive() {
// 		run_test(|| {
// 			TestMessageDispatch::deactivate();
// 			assert_noop!(
// 				Pallet::<TestRuntime>::receive_messages_proof(
// 					RuntimeOrigin::signed(1),
// 					TEST_RELAYER_A,
// 					Ok(vec![message(1, REGULAR_PAYLOAD)]).into(),
// 					1,
// 					REGULAR_PAYLOAD.declared_weight,
// 				),
// 				Error::<TestRuntime, ()>::MessageDispatchInactive,
// 			);
// 		});
// 	}
//
// 	#[test]
// 	fn actual_dispatch_weight_does_not_overflow() {
// 		run_test(|| {
// 			let message1 = message(1, message_payload(0, u64::MAX / 2));
// 			let message2 = message(2, message_payload(0, u64::MAX / 2));
// 			let message3 = message(3, message_payload(0, u64::MAX / 2));
//
// 			assert_noop!(
// 				Pallet::<TestRuntime, ()>::receive_messages_proof(
// 					RuntimeOrigin::signed(1),
// 					TEST_RELAYER_A,
// 					// this may cause overflow if source chain storage is invalid
// 					Ok(vec![message1, message2, message3]).into(),
// 					3,
// 					Weight::MAX,
// 				),
// 				Error::<TestRuntime, ()>::InsufficientDispatchWeight
// 			);
// 			assert_eq!(InboundLanes::<TestRuntime>::get(TEST_LANE_ID).last_delivered_nonce(), 0);
// 		});
// 	}
//
// 	#[test]
// 	fn messages_delivered_callbacks_are_called() {
// 		run_test(|| {
// 			send_regular_message(TEST_LANE_ID);
// 			send_regular_message(TEST_LANE_ID);
// 			send_regular_message(TEST_LANE_ID);
//
// 			// messages 1+2 are confirmed in 1 tx, message 3 in a separate tx
// 			// dispatch of message 2 has failed
// 			let mut delivered_messages_1_and_2 = DeliveredMessages::new(1);
// 			delivered_messages_1_and_2.note_dispatched_message();
// 			let messages_1_and_2_proof = Ok((
// 				TEST_LANE_ID,
// 				InboundLaneData {
// 					last_confirmed_nonce: 0,
// 					relayers: vec![UnrewardedRelayer {
// 						relayer: 0,
// 						messages: delivered_messages_1_and_2.clone(),
// 					}]
// 					.into_iter()
// 					.collect(),
// 				},
// 			));
// 			let delivered_message_3 = DeliveredMessages::new(3);
// 			let messages_3_proof = Ok((
// 				TEST_LANE_ID,
// 				InboundLaneData {
// 					last_confirmed_nonce: 0,
// 					relayers: vec![UnrewardedRelayer { relayer: 0, messages: delivered_message_3 }]
// 						.into_iter()
// 						.collect(),
// 				},
// 			));
//
// 			// first tx with messages 1+2
// 			assert_ok!(Pallet::<TestRuntime>::receive_messages_delivery_proof(
// 				RuntimeOrigin::signed(1),
// 				TestMessagesDeliveryProof(messages_1_and_2_proof),
// 				UnrewardedRelayersState {
// 					unrewarded_relayer_entries: 1,
// 					messages_in_oldest_entry: 2,
// 					total_messages: 2,
// 					last_delivered_nonce: 2,
// 				},
// 			));
// 			// second tx with message 3
// 			assert_ok!(Pallet::<TestRuntime>::receive_messages_delivery_proof(
// 				RuntimeOrigin::signed(1),
// 				TestMessagesDeliveryProof(messages_3_proof),
// 				UnrewardedRelayersState {
// 					unrewarded_relayer_entries: 1,
// 					messages_in_oldest_entry: 1,
// 					total_messages: 1,
// 					last_delivered_nonce: 3,
// 				},
// 			));
// 		});
// 	}
//
// 	#[test]
// 	fn on_idle_callback_respects_remaining_weight() {
// 		run_test(|| {
// 			send_regular_message(TEST_LANE_ID);
// 			send_regular_message(TEST_LANE_ID);
// 			send_regular_message(TEST_LANE_ID);
// 			send_regular_message(TEST_LANE_ID);
//
// 			assert_ok!(Pallet::<TestRuntime>::receive_messages_delivery_proof(
// 				RuntimeOrigin::signed(1),
// 				TestMessagesDeliveryProof(Ok((
// 					TEST_LANE_ID,
// 					InboundLaneData {
// 						last_confirmed_nonce: 4,
// 						relayers: vec![unrewarded_relayer(1, 4, TEST_RELAYER_A)]
// 							.into_iter()
// 							.collect(),
// 					},
// 				))),
// 				UnrewardedRelayersState {
// 					unrewarded_relayer_entries: 1,
// 					messages_in_oldest_entry: 4,
// 					total_messages: 4,
// 					last_delivered_nonce: 4,
// 				},
// 			));
//
// 			// all 4 messages may be pruned now
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().latest_received_nonce,
// 				4
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				1
// 			);
// 			System::<TestRuntime>::set_block_number(2);
//
// 			// if passed wight is too low to do anything
// 			let dbw = DbWeight::get();
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(1, 1)),
// 				Weight::zero(),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				1
// 			);
//
// 			// if passed wight is enough to prune single message
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(1, 2)),
// 				dbw.reads_writes(1, 2),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				2
// 			);
//
// 			// if passed wight is enough to prune two more messages
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(1, 3)),
// 				dbw.reads_writes(1, 3),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				4
// 			);
//
// 			// if passed wight is enough to prune many messages
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(100, 100)),
// 				dbw.reads_writes(1, 2),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				5
// 			);
// 		});
// 	}
//
// 	#[test]
// 	fn on_idle_callback_is_rotating_lanes_to_prune() {
// 		run_test(|| {
// 			// send + receive confirmation for lane 1
// 			send_regular_message(TEST_LANE_ID);
// 			receive_messages_delivery_proof();
// 			// send + receive confirmation for lane 2
// 			send_regular_message(TEST_LANE_ID_2);
// 			assert_ok!(Pallet::<TestRuntime>::receive_messages_delivery_proof(
// 				RuntimeOrigin::signed(1),
// 				TestMessagesDeliveryProof(Ok((
// 					TEST_LANE_ID_2,
// 					InboundLaneData {
// 						last_confirmed_nonce: 1,
// 						relayers: vec![unrewarded_relayer(1, 1, TEST_RELAYER_A)]
// 							.into_iter()
// 							.collect(),
// 					},
// 				))),
// 				UnrewardedRelayersState {
// 					unrewarded_relayer_entries: 1,
// 					messages_in_oldest_entry: 1,
// 					total_messages: 1,
// 					last_delivered_nonce: 1,
// 				},
// 			));
//
// 			// nothing is pruned yet
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().latest_received_nonce,
// 				1
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				1
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID_2).data().latest_received_nonce,
// 				1
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID_2).data().oldest_unpruned_nonce,
// 				1
// 			);
//
// 			// in block#2.on_idle lane messages of lane 1 are pruned
// 			let dbw = DbWeight::get();
// 			System::<TestRuntime>::set_block_number(2);
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(100, 100)),
// 				dbw.reads_writes(1, 2),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				2
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID_2).data().oldest_unpruned_nonce,
// 				1
// 			);
//
// 			// in block#3.on_idle lane messages of lane 2 are pruned
// 			System::<TestRuntime>::set_block_number(3);
//
// 			assert_eq!(
// 				Pallet::<TestRuntime, ()>::on_idle(0, dbw.reads_writes(100, 100)),
// 				dbw.reads_writes(1, 2),
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID).data().oldest_unpruned_nonce,
// 				2
// 			);
// 			assert_eq!(
// 				outbound_lane::<TestRuntime, ()>(TEST_LANE_ID_2).data().oldest_unpruned_nonce,
// 				2
// 			);
// 		});
// 	}
