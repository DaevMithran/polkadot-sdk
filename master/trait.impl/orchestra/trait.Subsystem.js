(function() {var implementors = {
"malus":[["impl&lt;Context, Sub, Interceptor&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"malus/interceptor/struct.InterceptedSubsystem.html\" title=\"struct malus::interceptor::InterceptedSubsystem\">InterceptedSubsystem</a>&lt;Sub, Interceptor&gt;<div class=\"where\">where\n    Context: SubsystemContext&lt;Error = <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>, Signal = <a class=\"enum\" href=\"polkadot_node_subsystem_types/enum.OverseerSignal.html\" title=\"enum polkadot_node_subsystem_types::OverseerSignal\">OverseerSignal</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"struct\" href=\"malus/interceptor/struct.InterceptedContext.html\" title=\"struct malus::interceptor::InterceptedContext\">InterceptedContext</a>&lt;Context, Interceptor&gt;: SubsystemContext&lt;Error = <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>, Signal = <a class=\"enum\" href=\"polkadot_node_subsystem_types/enum.OverseerSignal.html\" title=\"enum polkadot_node_subsystem_types::OverseerSignal\">OverseerSignal</a>&gt;,\n    Sub: Subsystem&lt;<a class=\"struct\" href=\"malus/interceptor/struct.InterceptedContext.html\" title=\"struct malus::interceptor::InterceptedContext\">InterceptedContext</a>&lt;Context, Interceptor&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt;,\n    Interceptor: <a class=\"trait\" href=\"malus/interceptor/trait.MessageInterceptor.html\" title=\"trait malus::interceptor::MessageInterceptor\">MessageInterceptor</a>&lt;&lt;Context as SubsystemContext&gt;::Sender, Message = &lt;Context as SubsystemContext&gt;::Message&gt;,\n    &lt;Context as SubsystemContext&gt;::Message: AssociateOutgoing,\n    &lt;Context as SubsystemContext&gt;::Sender: SubsystemSender&lt;&lt;&lt;Context as SubsystemContext&gt;::Message as AssociateOutgoing&gt;::OutgoingMessages&gt;,</div>"]],
"polkadot_approval_distribution":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_approval_distribution/struct.ApprovalDistribution.html\" title=\"struct polkadot_approval_distribution::ApprovalDistribution\">ApprovalDistribution</a><div class=\"where\">where\n    Context: ApprovalDistributionContextTrait + SubsystemContext,\n    &lt;Context as ApprovalDistributionContextTrait&gt;::Sender: ApprovalDistributionSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: ApprovalDistributionSenderTrait,</div>"]],
"polkadot_availability_bitfield_distribution":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_bitfield_distribution/struct.BitfieldDistribution.html\" title=\"struct polkadot_availability_bitfield_distribution::BitfieldDistribution\">BitfieldDistribution</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.BitfieldDistributionContextTrait.html\" title=\"trait polkadot_overseer::BitfieldDistributionContextTrait\">BitfieldDistributionContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.BitfieldDistributionContextTrait.html\" title=\"trait polkadot_overseer::BitfieldDistributionContextTrait\">BitfieldDistributionContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.BitfieldDistributionContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::BitfieldDistributionContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.BitfieldDistributionSenderTrait.html\" title=\"trait polkadot_overseer::BitfieldDistributionSenderTrait\">BitfieldDistributionSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.BitfieldDistributionSenderTrait.html\" title=\"trait polkadot_overseer::BitfieldDistributionSenderTrait\">BitfieldDistributionSenderTrait</a>,</div>"]],
"polkadot_availability_distribution":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_distribution/struct.AvailabilityDistributionSubsystem.html\" title=\"struct polkadot_availability_distribution::AvailabilityDistributionSubsystem\">AvailabilityDistributionSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityDistributionContextTrait.html\" title=\"trait polkadot_overseer::AvailabilityDistributionContextTrait\">AvailabilityDistributionContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityDistributionContextTrait.html\" title=\"trait polkadot_overseer::AvailabilityDistributionContextTrait\">AvailabilityDistributionContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.AvailabilityDistributionContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::AvailabilityDistributionContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityDistributionSenderTrait.html\" title=\"trait polkadot_overseer::AvailabilityDistributionSenderTrait\">AvailabilityDistributionSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityDistributionSenderTrait.html\" title=\"trait polkadot_overseer::AvailabilityDistributionSenderTrait\">AvailabilityDistributionSenderTrait</a>,</div>"]],
"polkadot_availability_recovery":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_recovery/struct.AvailabilityRecoverySubsystem.html\" title=\"struct polkadot_availability_recovery::AvailabilityRecoverySubsystem\">AvailabilityRecoverySubsystem</a><div class=\"where\">where\n    Context: AvailabilityRecoveryContextTrait + SubsystemContext,\n    &lt;Context as AvailabilityRecoveryContextTrait&gt;::Sender: AvailabilityRecoverySenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: AvailabilityRecoverySenderTrait,</div>"]],
"polkadot_collator_protocol":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_collator_protocol/struct.CollatorProtocolSubsystem.html\" title=\"struct polkadot_collator_protocol::CollatorProtocolSubsystem\">CollatorProtocolSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.CollatorProtocolContextTrait.html\" title=\"trait polkadot_overseer::CollatorProtocolContextTrait\">CollatorProtocolContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.CollatorProtocolContextTrait.html\" title=\"trait polkadot_overseer::CollatorProtocolContextTrait\">CollatorProtocolContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.CollatorProtocolContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::CollatorProtocolContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.CollatorProtocolSenderTrait.html\" title=\"trait polkadot_overseer::CollatorProtocolSenderTrait\">CollatorProtocolSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.CollatorProtocolSenderTrait.html\" title=\"trait polkadot_overseer::CollatorProtocolSenderTrait\">CollatorProtocolSenderTrait</a>,</div>"]],
"polkadot_dispute_distribution":[["impl&lt;Context, AD&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_dispute_distribution/struct.DisputeDistributionSubsystem.html\" title=\"struct polkadot_dispute_distribution::DisputeDistributionSubsystem\">DisputeDistributionSubsystem</a>&lt;AD&gt;<div class=\"where\">where\n    &lt;Context as DisputeDistributionContextTrait&gt;::Sender: DisputeDistributionSenderTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Context: DisputeDistributionContextTrait + SubsystemContext,\n    &lt;Context as DisputeDistributionContextTrait&gt;::Sender: DisputeDistributionSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: DisputeDistributionSenderTrait,</div>"]],
"polkadot_gossip_support":[["impl&lt;Context, AD&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_gossip_support/struct.GossipSupport.html\" title=\"struct polkadot_gossip_support::GossipSupport\">GossipSupport</a>&lt;AD&gt;<div class=\"where\">where\n    AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.GossipSupportContextTrait.html\" title=\"trait polkadot_overseer::GossipSupportContextTrait\">GossipSupportContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.GossipSupportContextTrait.html\" title=\"trait polkadot_overseer::GossipSupportContextTrait\">GossipSupportContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.GossipSupportContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::GossipSupportContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.GossipSupportSenderTrait.html\" title=\"trait polkadot_overseer::GossipSupportSenderTrait\">GossipSupportSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.GossipSupportSenderTrait.html\" title=\"trait polkadot_overseer::GossipSupportSenderTrait\">GossipSupportSenderTrait</a>,</div>"]],
"polkadot_network_bridge":[["impl&lt;Net, AD, Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_network_bridge/struct.NetworkBridgeRx.html\" title=\"struct polkadot_network_bridge::NetworkBridgeRx\">NetworkBridgeRx</a>&lt;Net, AD&gt;<div class=\"where\">where\n    Net: Network + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeRxContextTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeRxContextTrait\">NetworkBridgeRxContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeRxContextTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeRxContextTrait\">NetworkBridgeRxContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.NetworkBridgeRxContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::NetworkBridgeRxContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeRxSenderTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeRxSenderTrait\">NetworkBridgeRxSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeRxSenderTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeRxSenderTrait\">NetworkBridgeRxSenderTrait</a>,</div>"],["impl&lt;Net, AD, Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_network_bridge/struct.NetworkBridgeTx.html\" title=\"struct polkadot_network_bridge::NetworkBridgeTx\">NetworkBridgeTx</a>&lt;Net, AD&gt;<div class=\"where\">where\n    Net: Network + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeTxContextTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeTxContextTrait\">NetworkBridgeTxContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeTxContextTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeTxContextTrait\">NetworkBridgeTxContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.NetworkBridgeTxContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::NetworkBridgeTxContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeTxSenderTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeTxSenderTrait\">NetworkBridgeTxSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.NetworkBridgeTxSenderTrait.html\" title=\"trait polkadot_overseer::NetworkBridgeTxSenderTrait\">NetworkBridgeTxSenderTrait</a>,</div>"]],
"polkadot_node_collation_generation":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_collation_generation/struct.CollationGenerationSubsystem.html\" title=\"struct polkadot_node_collation_generation::CollationGenerationSubsystem\">CollationGenerationSubsystem</a><div class=\"where\">where\n    Context: CollationGenerationContextTrait + SubsystemContext,\n    &lt;Context as CollationGenerationContextTrait&gt;::Sender: CollationGenerationSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: CollationGenerationSenderTrait,</div>"]],
"polkadot_node_core_approval_voting":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_approval_voting/struct.ApprovalVotingSubsystem.html\" title=\"struct polkadot_node_core_approval_voting::ApprovalVotingSubsystem\">ApprovalVotingSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.ApprovalVotingContextTrait.html\" title=\"trait polkadot_overseer::ApprovalVotingContextTrait\">ApprovalVotingContextTrait</a> + SubsystemContext + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.ApprovalVotingContextTrait.html\" title=\"trait polkadot_overseer::ApprovalVotingContextTrait\">ApprovalVotingContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.ApprovalVotingContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::ApprovalVotingContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.ApprovalVotingSenderTrait.html\" title=\"trait polkadot_overseer::ApprovalVotingSenderTrait\">ApprovalVotingSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.ApprovalVotingSenderTrait.html\" title=\"trait polkadot_overseer::ApprovalVotingSenderTrait\">ApprovalVotingSenderTrait</a>,</div>"]],
"polkadot_node_core_av_store":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_av_store/struct.AvailabilityStoreSubsystem.html\" title=\"struct polkadot_node_core_av_store::AvailabilityStoreSubsystem\">AvailabilityStoreSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityStoreContextTrait.html\" title=\"trait polkadot_overseer::AvailabilityStoreContextTrait\">AvailabilityStoreContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityStoreContextTrait.html\" title=\"trait polkadot_overseer::AvailabilityStoreContextTrait\">AvailabilityStoreContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.AvailabilityStoreContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::AvailabilityStoreContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityStoreSenderTrait.html\" title=\"trait polkadot_overseer::AvailabilityStoreSenderTrait\">AvailabilityStoreSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.AvailabilityStoreSenderTrait.html\" title=\"trait polkadot_overseer::AvailabilityStoreSenderTrait\">AvailabilityStoreSenderTrait</a>,</div>"]],
"polkadot_node_core_backing":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_backing/struct.CandidateBackingSubsystem.html\" title=\"struct polkadot_node_core_backing::CandidateBackingSubsystem\">CandidateBackingSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"polkadot_overseer/trait.CandidateBackingContextTrait.html\" title=\"trait polkadot_overseer::CandidateBackingContextTrait\">CandidateBackingContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.CandidateBackingContextTrait.html\" title=\"trait polkadot_overseer::CandidateBackingContextTrait\">CandidateBackingContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.CandidateBackingContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::CandidateBackingContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.CandidateBackingSenderTrait.html\" title=\"trait polkadot_overseer::CandidateBackingSenderTrait\">CandidateBackingSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.CandidateBackingSenderTrait.html\" title=\"trait polkadot_overseer::CandidateBackingSenderTrait\">CandidateBackingSenderTrait</a>,</div>"]],
"polkadot_node_core_bitfield_signing":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_bitfield_signing/struct.BitfieldSigningSubsystem.html\" title=\"struct polkadot_node_core_bitfield_signing::BitfieldSigningSubsystem\">BitfieldSigningSubsystem</a><div class=\"where\">where\n    Context: BitfieldSigningContextTrait + SubsystemContext,\n    &lt;Context as BitfieldSigningContextTrait&gt;::Sender: BitfieldSigningSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: BitfieldSigningSenderTrait,</div>"]],
"polkadot_node_core_candidate_validation":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_candidate_validation/struct.CandidateValidationSubsystem.html\" title=\"struct polkadot_node_core_candidate_validation::CandidateValidationSubsystem\">CandidateValidationSubsystem</a><div class=\"where\">where\n    Context: CandidateValidationContextTrait + SubsystemContext,\n    &lt;Context as CandidateValidationContextTrait&gt;::Sender: CandidateValidationSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: CandidateValidationSenderTrait,</div>"]],
"polkadot_node_core_chain_api":[["impl&lt;Client, Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_chain_api/struct.ChainApiSubsystem.html\" title=\"struct polkadot_node_core_chain_api::ChainApiSubsystem\">ChainApiSubsystem</a>&lt;Client&gt;<div class=\"where\">where\n    Client: <a class=\"trait\" href=\"polkadot_node_subsystem_types/runtime_client/trait.ChainApiBackend.html\" title=\"trait polkadot_node_subsystem_types::runtime_client::ChainApiBackend\">ChainApiBackend</a> + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a> + 'static,\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainApiContextTrait.html\" title=\"trait polkadot_overseer::ChainApiContextTrait\">ChainApiContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.ChainApiContextTrait.html\" title=\"trait polkadot_overseer::ChainApiContextTrait\">ChainApiContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.ChainApiContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::ChainApiContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainApiSenderTrait.html\" title=\"trait polkadot_overseer::ChainApiSenderTrait\">ChainApiSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainApiSenderTrait.html\" title=\"trait polkadot_overseer::ChainApiSenderTrait\">ChainApiSenderTrait</a>,</div>"]],
"polkadot_node_core_chain_selection":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_chain_selection/struct.ChainSelectionSubsystem.html\" title=\"struct polkadot_node_core_chain_selection::ChainSelectionSubsystem\">ChainSelectionSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainSelectionContextTrait.html\" title=\"trait polkadot_overseer::ChainSelectionContextTrait\">ChainSelectionContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.ChainSelectionContextTrait.html\" title=\"trait polkadot_overseer::ChainSelectionContextTrait\">ChainSelectionContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.ChainSelectionContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::ChainSelectionContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainSelectionSenderTrait.html\" title=\"trait polkadot_overseer::ChainSelectionSenderTrait\">ChainSelectionSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.ChainSelectionSenderTrait.html\" title=\"trait polkadot_overseer::ChainSelectionSenderTrait\">ChainSelectionSenderTrait</a>,</div>"]],
"polkadot_node_core_dispute_coordinator":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_dispute_coordinator/struct.DisputeCoordinatorSubsystem.html\" title=\"struct polkadot_node_core_dispute_coordinator::DisputeCoordinatorSubsystem\">DisputeCoordinatorSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.DisputeCoordinatorContextTrait.html\" title=\"trait polkadot_overseer::DisputeCoordinatorContextTrait\">DisputeCoordinatorContextTrait</a> + SubsystemContext + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.DisputeCoordinatorContextTrait.html\" title=\"trait polkadot_overseer::DisputeCoordinatorContextTrait\">DisputeCoordinatorContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.DisputeCoordinatorContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::DisputeCoordinatorContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.DisputeCoordinatorSenderTrait.html\" title=\"trait polkadot_overseer::DisputeCoordinatorSenderTrait\">DisputeCoordinatorSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.DisputeCoordinatorSenderTrait.html\" title=\"trait polkadot_overseer::DisputeCoordinatorSenderTrait\">DisputeCoordinatorSenderTrait</a>,</div>"]],
"polkadot_node_core_prospective_parachains":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_prospective_parachains/struct.ProspectiveParachainsSubsystem.html\" title=\"struct polkadot_node_core_prospective_parachains::ProspectiveParachainsSubsystem\">ProspectiveParachainsSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ProspectiveParachainsContextTrait + SubsystemContext,\n    &lt;Context as ProspectiveParachainsContextTrait&gt;::Sender: ProspectiveParachainsSenderTrait,\n    &lt;Context as SubsystemContext&gt;::Sender: ProspectiveParachainsSenderTrait,</div>"]],
"polkadot_node_core_provisioner":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_provisioner/struct.ProvisionerSubsystem.html\" title=\"struct polkadot_node_core_provisioner::ProvisionerSubsystem\">ProvisionerSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.ProvisionerContextTrait.html\" title=\"trait polkadot_overseer::ProvisionerContextTrait\">ProvisionerContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.ProvisionerContextTrait.html\" title=\"trait polkadot_overseer::ProvisionerContextTrait\">ProvisionerContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.ProvisionerContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::ProvisionerContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.ProvisionerSenderTrait.html\" title=\"trait polkadot_overseer::ProvisionerSenderTrait\">ProvisionerSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.ProvisionerSenderTrait.html\" title=\"trait polkadot_overseer::ProvisionerSenderTrait\">ProvisionerSenderTrait</a>,</div>"]],
"polkadot_node_core_pvf_checker":[["impl&lt;Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_pvf_checker/struct.PvfCheckerSubsystem.html\" title=\"struct polkadot_node_core_pvf_checker::PvfCheckerSubsystem\">PvfCheckerSubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.PvfCheckerContextTrait.html\" title=\"trait polkadot_overseer::PvfCheckerContextTrait\">PvfCheckerContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.PvfCheckerContextTrait.html\" title=\"trait polkadot_overseer::PvfCheckerContextTrait\">PvfCheckerContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.PvfCheckerContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::PvfCheckerContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.PvfCheckerSenderTrait.html\" title=\"trait polkadot_overseer::PvfCheckerSenderTrait\">PvfCheckerSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.PvfCheckerSenderTrait.html\" title=\"trait polkadot_overseer::PvfCheckerSenderTrait\">PvfCheckerSenderTrait</a>,</div>"]],
"polkadot_node_core_runtime_api":[["impl&lt;Client, Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_runtime_api/struct.RuntimeApiSubsystem.html\" title=\"struct polkadot_node_core_runtime_api::RuntimeApiSubsystem\">RuntimeApiSubsystem</a>&lt;Client&gt;<div class=\"where\">where\n    Client: <a class=\"trait\" href=\"polkadot_node_subsystem_types/runtime_client/trait.RuntimeApiSubsystemClient.html\" title=\"trait polkadot_node_subsystem_types::runtime_client::RuntimeApiSubsystemClient\">RuntimeApiSubsystemClient</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.RuntimeApiContextTrait.html\" title=\"trait polkadot_overseer::RuntimeApiContextTrait\">RuntimeApiContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.RuntimeApiContextTrait.html\" title=\"trait polkadot_overseer::RuntimeApiContextTrait\">RuntimeApiContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.RuntimeApiContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::RuntimeApiContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.RuntimeApiSenderTrait.html\" title=\"trait polkadot_overseer::RuntimeApiSenderTrait\">RuntimeApiSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.RuntimeApiSenderTrait.html\" title=\"trait polkadot_overseer::RuntimeApiSenderTrait\">RuntimeApiSenderTrait</a>,</div>"]],
"polkadot_node_subsystem":[],
"polkadot_node_subsystem_test_helpers":[["impl&lt;M, Context&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_subsystem_test_helpers/struct.ForwardSubsystem.html\" title=\"struct polkadot_node_subsystem_test_helpers::ForwardSubsystem\">ForwardSubsystem</a>&lt;M&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"polkadot_overseer/trait.AssociateOutgoing.html\" title=\"trait polkadot_overseer::AssociateOutgoing\">AssociateOutgoing</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    Context: SubsystemContext&lt;Message = M, Signal = <a class=\"enum\" href=\"polkadot_node_subsystem_types/enum.OverseerSignal.html\" title=\"enum polkadot_node_subsystem_types::OverseerSignal\">OverseerSignal</a>, Error = <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>, OutgoingMessages = &lt;M as <a class=\"trait\" href=\"polkadot_overseer/trait.AssociateOutgoing.html\" title=\"trait polkadot_overseer::AssociateOutgoing\">AssociateOutgoing</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.AssociateOutgoing.html#associatedtype.OutgoingMessages\" title=\"type polkadot_overseer::AssociateOutgoing::OutgoingMessages\">OutgoingMessages</a>&gt;,</div>"]],
"polkadot_node_subsystem_util":[],
"polkadot_overseer":[["impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer/trait.Subsystem.html\" title=\"trait polkadot_overseer::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_overseer/enum.SubsystemError.html\" title=\"enum polkadot_overseer::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_overseer/dummy/struct.DummySubsystem.html\" title=\"struct polkadot_overseer::dummy::DummySubsystem\">DummySubsystem</a><div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.SubsystemContext.html\" title=\"trait polkadot_overseer::SubsystemContext\">SubsystemContext</a>&lt;Signal = <a class=\"enum\" href=\"polkadot_overseer/enum.OverseerSignal.html\" title=\"enum polkadot_overseer::OverseerSignal\">OverseerSignal</a>, Error = <a class=\"enum\" href=\"polkadot_overseer/enum.SubsystemError.html\" title=\"enum polkadot_overseer::SubsystemError\">SubsystemError</a>&gt;,</div>"]],
"polkadot_statement_distribution":[["impl&lt;Context, R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; Subsystem&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_statement_distribution/struct.StatementDistributionSubsystem.html\" title=\"struct polkadot_statement_distribution::StatementDistributionSubsystem\">StatementDistributionSubsystem</a>&lt;R&gt;<div class=\"where\">where\n    Context: <a class=\"trait\" href=\"polkadot_overseer/trait.StatementDistributionContextTrait.html\" title=\"trait polkadot_overseer::StatementDistributionContextTrait\">StatementDistributionContextTrait</a> + SubsystemContext,\n    &lt;Context as <a class=\"trait\" href=\"polkadot_overseer/trait.StatementDistributionContextTrait.html\" title=\"trait polkadot_overseer::StatementDistributionContextTrait\">StatementDistributionContextTrait</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_overseer/trait.StatementDistributionContextTrait.html#associatedtype.Sender\" title=\"type polkadot_overseer::StatementDistributionContextTrait::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer/trait.StatementDistributionSenderTrait.html\" title=\"trait polkadot_overseer::StatementDistributionSenderTrait\">StatementDistributionSenderTrait</a>,\n    &lt;Context as SubsystemContext&gt;::Sender: <a class=\"trait\" href=\"polkadot_overseer/trait.StatementDistributionSenderTrait.html\" title=\"trait polkadot_overseer::StatementDistributionSenderTrait\">StatementDistributionSenderTrait</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()