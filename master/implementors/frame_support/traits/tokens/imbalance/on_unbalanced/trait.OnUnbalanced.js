(function() {var implementors = {
"collectives_polkadot_runtime":[["impl&lt;TreasuryAccount, PalletAccount, T&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"collectives_polkadot_runtime/impls/struct.ToParentTreasury.html\" title=\"struct collectives_polkadot_runtime::impls::ToParentTreasury\">ToParentTreasury</a>&lt;TreasuryAccount, PalletAccount, T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"pallet_balances/pallet/trait.Config.html\" title=\"trait pallet_balances::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_xcm/pallet/trait.Config.html\" title=\"trait pallet_xcm::pallet::Config\">Config</a> + <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,\n    &lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeOrigin\" title=\"type frame_system::pallet::Config::RuntimeOrigin\">RuntimeOrigin</a> as <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a>&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.AccountId\" title=\"type frame_support::traits::dispatch::OriginTrait::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;,\n    [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.array.html\">32</a>]: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;,\n    TreasuryAccount: Get&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;,\n    PalletAccount: Get&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;,\n    <a class=\"type\" href=\"collectives_polkadot_runtime/impls/type.BalanceOf.html\" title=\"type collectives_polkadot_runtime::impls::BalanceOf\">BalanceOf</a>&lt;T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/multiasset/enum.Fungibility.html\" title=\"enum staging_xcm::v3::multiasset::Fungibility\">Fungibility</a>&gt;,</span>"]],
"frame":[],
"frame_support":[],
"kitchensink_runtime":[["impl <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;<a class=\"struct\" href=\"kitchensink_runtime/struct.Runtime.html\" title=\"struct kitchensink_runtime::Runtime\">Runtime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"kitchensink_runtime/struct.DealWithFees.html\" title=\"struct kitchensink_runtime::DealWithFees\">DealWithFees</a>"],["impl <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;<a class=\"struct\" href=\"frame_support/traits/tokens/fungible/imbalance/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungible::imbalance::Imbalance\">Imbalance</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;<a class=\"struct\" href=\"kitchensink_runtime/struct.Runtime.html\" title=\"struct kitchensink_runtime::Runtime\">Runtime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungible/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungible::regular::Inspect\">Inspect</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungible/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungible::regular::Inspect::Balance\">Balance</a>, &lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;<a class=\"struct\" href=\"kitchensink_runtime/struct.Runtime.html\" title=\"struct kitchensink_runtime::Runtime\">Runtime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungible/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungible::regular::Balanced\">Balanced</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungible/regular/trait.Balanced.html#associatedtype.OnDropCredit\" title=\"type frame_support::traits::tokens::fungible::regular::Balanced::OnDropCredit\">OnDropCredit</a>, &lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;<a class=\"struct\" href=\"kitchensink_runtime/struct.Runtime.html\" title=\"struct kitchensink_runtime::Runtime\">Runtime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungible/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungible::regular::Balanced\">Balanced</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungible/regular/trait.Balanced.html#associatedtype.OnDropDebt\" title=\"type frame_support::traits::tokens::fungible::regular::Balanced::OnDropDebt\">OnDropDebt</a>&gt;&gt; for <a class=\"struct\" href=\"kitchensink_runtime/struct.IntoAuthor.html\" title=\"struct kitchensink_runtime::IntoAuthor\">IntoAuthor</a>"],["impl <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;<a class=\"struct\" href=\"kitchensink_runtime/struct.Runtime.html\" title=\"struct kitchensink_runtime::Runtime\">Runtime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"kitchensink_runtime/impls/struct.Author.html\" title=\"struct kitchensink_runtime::impls::Author\">Author</a>"]],
"pallet_society":[["impl&lt;T: <a class=\"trait\" href=\"pallet_society/pallet/trait.Config.html\" title=\"trait pallet_society::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_society/pallet/trait.Config.html\" title=\"trait pallet_society::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_society/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_society::pallet::Config::Currency\">Currency</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"pallet_society/pallet/struct.Pallet.html\" title=\"struct pallet_society::pallet::Pallet\">Pallet</a>&lt;T, I&gt;"]],
"pallet_treasury":[["impl&lt;T: <a class=\"trait\" href=\"pallet_treasury/pallet/trait.Config.html\" title=\"trait pallet_treasury::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_treasury/pallet/trait.Config.html\" title=\"trait pallet_treasury::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_treasury/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_treasury::pallet::Config::Currency\">Currency</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"pallet_treasury/pallet/struct.Pallet.html\" title=\"struct pallet_treasury::pallet::Pallet\">Pallet</a>&lt;T, I&gt;"]],
"parachains_common":[["impl&lt;R&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;R, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"parachains_common/impls/struct.DealWithFees.html\" title=\"struct parachains_common::impls::DealWithFees\">DealWithFees</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"pallet_balances/pallet/trait.Config.html\" title=\"trait pallet_balances::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_collator_selection/pallet/trait.Config.html\" title=\"trait pallet_collator_selection::pallet::Config\">Config</a>,\n    <a class=\"type\" href=\"parachains_common/impls/type.AccountIdOf.html\" title=\"type parachains_common::impls::AccountIdOf\">AccountIdOf</a>&lt;R&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt;,\n    &lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeEvent\" title=\"type frame_system::pallet::Config::RuntimeEvent\">RuntimeEvent</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_balances/pallet/enum.Event.html\" title=\"enum pallet_balances::pallet::Event\">Event</a>&lt;R&gt;&gt;,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;<a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;R, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"parachains_common/impls/struct.ToStakingPot.html\" title=\"struct parachains_common::impls::ToStakingPot\">ToStakingPot</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"pallet_balances/pallet/trait.Config.html\" title=\"trait pallet_balances::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_collator_selection/pallet/trait.Config.html\" title=\"trait pallet_collator_selection::pallet::Config\">Config</a>,\n    <a class=\"type\" href=\"parachains_common/impls/type.AccountIdOf.html\" title=\"type parachains_common::impls::AccountIdOf\">AccountIdOf</a>&lt;R&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt;,\n    &lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeEvent\" title=\"type frame_system::pallet::Config::RuntimeEvent\">RuntimeEvent</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_balances/pallet/enum.Event.html\" title=\"enum pallet_balances::pallet::Event\">Event</a>&lt;R&gt;&gt;,</span>"]],
"polkadot_runtime_common":[["impl&lt;R&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;Pallet&lt;R, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.DealWithFees.html\" title=\"struct polkadot_runtime_common::impls::DealWithFees\">DealWithFees</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: Config + <a class=\"trait\" href=\"pallet_treasury/pallet/trait.Config.html\" title=\"trait pallet_treasury::pallet::Config\">Config</a> + Config,\n    <a class=\"struct\" href=\"pallet_treasury/pallet/struct.Pallet.html\" title=\"struct pallet_treasury::pallet::Pallet\">Pallet</a>&lt;R&gt;: <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;<a class=\"type\" href=\"polkadot_runtime_common/type.NegativeImbalance.html\" title=\"type polkadot_runtime_common::NegativeImbalance\">NegativeImbalance</a>&lt;R&gt;&gt;,\n    &lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt;,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"frame_support/traits/tokens/imbalance/on_unbalanced/trait.OnUnbalanced.html\" title=\"trait frame_support::traits::tokens::imbalance::on_unbalanced::OnUnbalanced\">OnUnbalanced</a>&lt;&lt;Pallet&lt;R, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.unit.html\">()</a>&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.NegativeImbalance\" title=\"type frame_support::traits::tokens::currency::Currency::NegativeImbalance\">NegativeImbalance</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.ToAuthor.html\" title=\"struct polkadot_runtime_common::impls::ToAuthor\">ToAuthor</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: Config + Config,\n    &lt;R as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.AccountId.html\" title=\"type polkadot_core_primitives::AccountId\">AccountId</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()