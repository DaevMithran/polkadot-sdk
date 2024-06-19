(function() {var type_impls = {
"cumulus_primitives_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_unchecked\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.into_unchecked\" class=\"fn\">into_unchecked</a>(self) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.UncheckedSigned.html\" title=\"struct cumulus_primitives_core::relay_chain::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h4></section></summary><div class=\"docblock\"><p>Convert back to an unchecked type.</p>\n</div></details></div></details>",0,"cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"cumulus_primitives_core/relay_chain/trait.EncodeAs.html\" title=\"trait cumulus_primitives_core::relay_chain::EncodeAs\">EncodeAs</a>&lt;RealPayload&gt;,\n    RealPayload: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.new\" class=\"fn\">new</a>&lt;H&gt;(\n    payload: Payload,\n    validator_index: <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.ValidatorIndex.html\" title=\"struct cumulus_primitives_core::relay_chain::ValidatorIndex\">ValidatorIndex</a>,\n    signature: Signature,\n    context: &amp;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.SigningContext.html\" title=\"struct cumulus_primitives_core::relay_chain::SigningContext\">SigningContext</a>&lt;H&gt;,\n    key: &amp;Public\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;&gt;<div class=\"where\">where\n    H: Encode,</div></h4></section></summary><div class=\"docblock\"><p>Used to create a <code>Signed</code> from already existing parts.</p>\n<p>The signature is checked as part of the process.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.sign\" class=\"fn\">sign</a>&lt;H&gt;(\n    keystore: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"sp_keystore/trait.Keystore.html\" title=\"trait sp_keystore::Keystore\">Keystore</a>&gt;,\n    payload: Payload,\n    context: &amp;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.SigningContext.html\" title=\"struct cumulus_primitives_core::relay_chain::SigningContext\">SigningContext</a>&lt;H&gt;,\n    validator_index: <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.ValidatorIndex.html\" title=\"struct cumulus_primitives_core::relay_chain::ValidatorIndex\">ValidatorIndex</a>,\n    key: &amp;Public\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;&gt;, <a class=\"enum\" href=\"sp_keystore/enum.Error.html\" title=\"enum sp_keystore::Error\">Error</a>&gt;<div class=\"where\">where\n    H: Encode,</div></h4></section></summary><div class=\"docblock\"><p>Create a new <code>Signed</code> by signing data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from_unchecked\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.try_from_unchecked\" class=\"fn\">try_from_unchecked</a>&lt;H&gt;(\n    unchecked: <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.UncheckedSigned.html\" title=\"struct cumulus_primitives_core::relay_chain::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;,\n    context: &amp;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.SigningContext.html\" title=\"struct cumulus_primitives_core::relay_chain::SigningContext\">SigningContext</a>&lt;H&gt;,\n    key: &amp;Public\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;, <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.UncheckedSigned.html\" title=\"struct cumulus_primitives_core::relay_chain::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;&gt;<div class=\"where\">where\n    H: Encode,</div></h4></section></summary><div class=\"docblock\"><p>Try to convert from <code>UncheckedSigned</code> by checking the signature.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_unchecked\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.as_unchecked\" class=\"fn\">as_unchecked</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.UncheckedSigned.html\" title=\"struct cumulus_primitives_core::relay_chain::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h4></section></summary><div class=\"docblock\"><p>Get a reference to data as unchecked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.payload\" class=\"fn\">payload</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Payload</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the payload.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validator_index\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.validator_index\" class=\"fn\">validator_index</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.ValidatorIndex.html\" title=\"struct cumulus_primitives_core::relay_chain::ValidatorIndex\">ValidatorIndex</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the validator index.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.signature\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.signature\" class=\"fn\">signature</a>(&amp;self) -&gt; &amp;Signature</h4></section></summary><div class=\"docblock\"><p>Immutably access the signature.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_payload\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.into_payload\" class=\"fn\">into_payload</a>(self) -&gt; Payload</h4></section></summary><div class=\"docblock\"><p>Discard signing data, get the payload</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert_payload\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.convert_payload\" class=\"fn\">convert_payload</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;RealPayload&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a Payload</a>: for&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;RealPayload&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Convert <code>Payload</code> into <code>RealPayload</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert_to_superpayload\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.convert_to_superpayload\" class=\"fn\">convert_to_superpayload</a>&lt;SuperPayload&gt;(\n    self,\n    claimed: SuperPayload\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;SuperPayload, RealPayload&gt;, (<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;, SuperPayload)&gt;<div class=\"where\">where\n    SuperPayload: <a class=\"trait\" href=\"cumulus_primitives_core/relay_chain/trait.EncodeAs.html\" title=\"trait cumulus_primitives_core::relay_chain::EncodeAs\">EncodeAs</a>&lt;RealPayload&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Convert <code>Payload</code> into some claimed <code>SuperPayload</code> if the encoding matches.</p>\n<p>Succeeds if and only if the super-payload provided actually encodes as\nthe expected payload.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert_to_superpayload_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/relay_chain/struct.Signed.html#tymethod.convert_to_superpayload_with\" class=\"fn\">convert_to_superpayload_with</a>&lt;F, SuperPayload&gt;(\n    self,\n    convert: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;SuperPayload, RealPayload&gt;, SuperPayload&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Payload) -&gt; SuperPayload,\n    SuperPayload: <a class=\"trait\" href=\"cumulus_primitives_core/relay_chain/trait.EncodeAs.html\" title=\"trait cumulus_primitives_core::relay_chain::EncodeAs\">EncodeAs</a>&lt;RealPayload&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Convert <code>Payload</code> into some converted <code>SuperPayload</code> if the encoding matches.</p>\n<p>This invokes the closure on the current payload, which is irreversible.</p>\n<p>Succeeds if and only if the super-payload provided actually encodes as\nthe expected payload.</p>\n</div></details></div></details>",0,"cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<section id=\"impl-StructuralPartialEq-for-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;</h3></section>","StructuralPartialEq","cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<section id=\"impl-Eq-for-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Signed%3CPayload,+RealPayload%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Signed%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/relay_chain/struct.Signed.html\" title=\"struct cumulus_primitives_core::relay_chain::Signed\">Signed</a>&lt;Payload, RealPayload&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_primitives_core::relay_chain::SignedStatement","cumulus_primitives_core::relay_chain::SignedAvailabilityBitfield"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()