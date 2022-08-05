<template><div><h1 id="vor" tabindex="-1"><a class="header-anchor" href="#vor" aria-hidden="true">#</a> VOR</h1>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#VOR-bigModExp-uint256-uint256-"><code v-pre>bigModExp(uint256 base, uint256 exponent) internal</code></a></li>
<li><a href="#VOR-squareRoot-uint256-"><code v-pre>squareRoot(uint256 x) internal</code></a></li>
<li><a href="#VOR-ySquared-uint256-"><code v-pre>ySquared(uint256 x) internal</code></a></li>
<li><a href="#VOR-isOnCurve-uint256-2--"><code v-pre>isOnCurve(uint256[2] p) internal</code></a></li>
<li><a href="#VOR-fieldHash-bytes-"><code v-pre>fieldHash(bytes b) internal</code></a></li>
<li><a href="#VOR-newCandidateSecp256k1Point-bytes-"><code v-pre>newCandidateSecp256k1Point(bytes b) internal</code></a></li>
<li><a href="#VOR-hashToCurve-uint256-2--uint256-"><code v-pre>hashToCurve(uint256[2] pk, uint256 input) internal</code></a></li>
<li><a href="#VOR-ecmulVerify-uint256-2--uint256-uint256-2--"><code v-pre>ecmulVerify(uint256[2] multiplicand, uint256 scalar, uint256[2] product) internal</code></a></li>
<li><a href="#VOR-projectiveSub-uint256-uint256-uint256-uint256-"><code v-pre>projectiveSub(uint256 x1, uint256 z1, uint256 x2, uint256 z2) internal</code></a></li>
<li><a href="#VOR-projectiveMul-uint256-uint256-uint256-uint256-"><code v-pre>projectiveMul(uint256 x1, uint256 z1, uint256 x2, uint256 z2) internal</code></a></li>
<li><a href="#VOR-projectiveECAdd-uint256-uint256-uint256-uint256-"><code v-pre>projectiveECAdd(uint256 px, uint256 py, uint256 qx, uint256 qy) internal</code></a></li>
<li><a href="#VOR-affineECAdd-uint256-2--uint256-2--uint256-"><code v-pre>affineECAdd(uint256[2] p1, uint256[2] p2, uint256 invZ) internal</code></a></li>
<li><a href="#VOR-verifyLinearCombinationWithGenerator-uint256-uint256-2--uint256-address-"><code v-pre>verifyLinearCombinationWithGenerator(uint256 c, uint256[2] p, uint256 s, address lcWitness) internal</code></a></li>
<li><a href="#VOR-linearCombination-uint256-uint256-2--uint256-2--uint256-uint256-2--uint256-2--uint256-"><code v-pre>linearCombination(uint256 c, uint256[2] p1, uint256[2] cp1Witness, uint256 s, uint256[2] p2, uint256[2] sp2Witness, uint256 zInv) internal</code></a></li>
<li><a href="#VOR-scalarFromCurvePoints-uint256-2--uint256-2--uint256-2--address-uint256-2--"><code v-pre>scalarFromCurvePoints(uint256[2] hash, uint256[2] pk, uint256[2] gamma, address uWitness, uint256[2] v) internal</code></a></li>
<li><a href="#VOR-verifyVORProof-uint256-2--uint256-2--uint256-uint256-uint256-address-uint256-2--uint256-2--uint256-"><code v-pre>verifyVORProof(uint256[2] pk, uint256[2] gamma, uint256 c, uint256 s, uint256 seed, address uWitness, uint256[2] cGammaWitness, uint256[2] sHashWitness, uint256 zInv) internal</code></a></li>
<li><a href="#VOR-randomValueFromVORProof-bytes-"><code v-pre>randomValueFromVORProof(bytes proof) internal</code></a></li>
</ul>
<p><a name="VOR-bigModExp-uint256-uint256-"></a></p>
<h3 id="function-bigmodexp-uint256-base-uint256-exponent-internal-uint256-exponentiation" tabindex="-1"><a class="header-anchor" href="#function-bigmodexp-uint256-base-uint256-exponent-internal-uint256-exponentiation" aria-hidden="true">#</a> Function <code v-pre>bigModExp(uint256 base, uint256 exponent) internal  -&gt; uint256 exponentiation</code></h3>
<p>No description
<a name="VOR-squareRoot-uint256-"></a></p>
<h3 id="function-squareroot-uint256-x-internal-uint256" tabindex="-1"><a class="header-anchor" href="#function-squareroot-uint256-x-internal-uint256" aria-hidden="true">#</a> Function <code v-pre>squareRoot(uint256 x) internal  -&gt; uint256</code></h3>
<p>No description
<a name="VOR-ySquared-uint256-"></a></p>
<h3 id="function-ysquared-uint256-x-internal-uint256" tabindex="-1"><a class="header-anchor" href="#function-ysquared-uint256-x-internal-uint256" aria-hidden="true">#</a> Function <code v-pre>ySquared(uint256 x) internal  -&gt; uint256</code></h3>
<p>No description
<a name="VOR-isOnCurve-uint256-2--"></a></p>
<h3 id="function-isoncurve-uint256-2-p-internal-bool" tabindex="-1"><a class="header-anchor" href="#function-isoncurve-uint256-2-p-internal-bool" aria-hidden="true">#</a> Function <code v-pre>isOnCurve(uint256[2] p) internal  -&gt; bool</code></h3>
<p>No description
<a name="VOR-fieldHash-bytes-"></a></p>
<h3 id="function-fieldhash-bytes-b-internal-uint256-x" tabindex="-1"><a class="header-anchor" href="#function-fieldhash-bytes-b-internal-uint256-x" aria-hidden="true">#</a> Function <code v-pre>fieldHash(bytes b) internal  -&gt; uint256 x_</code></h3>
<p>No description
<a name="VOR-newCandidateSecp256k1Point-bytes-"></a></p>
<h3 id="function-newcandidatesecp256k1point-bytes-b-internal-uint256-2-p" tabindex="-1"><a class="header-anchor" href="#function-newcandidatesecp256k1point-bytes-b-internal-uint256-2-p" aria-hidden="true">#</a> Function <code v-pre>newCandidateSecp256k1Point(bytes b) internal  -&gt; uint256[2] p</code></h3>
<p>No description
<a name="VOR-hashToCurve-uint256-2--uint256-"></a></p>
<h3 id="function-hashtocurve-uint256-2-pk-uint256-input-internal-uint256-2-rv" tabindex="-1"><a class="header-anchor" href="#function-hashtocurve-uint256-2-pk-uint256-input-internal-uint256-2-rv" aria-hidden="true">#</a> Function <code v-pre>hashToCurve(uint256[2] pk, uint256 input) internal  -&gt; uint256[2] rv</code></h3>
<p>No description
<a name="VOR-ecmulVerify-uint256-2--uint256-uint256-2--"></a></p>
<h3 id="function-ecmulverify-uint256-2-multiplicand-uint256-scalar-uint256-2-product-internal-bool-verifies" tabindex="-1"><a class="header-anchor" href="#function-ecmulverify-uint256-2-multiplicand-uint256-scalar-uint256-2-product-internal-bool-verifies" aria-hidden="true">#</a> Function <code v-pre>ecmulVerify(uint256[2] multiplicand, uint256 scalar, uint256[2] product) internal  -&gt; bool verifies</code></h3>
<p>Based on Vitalik Buterin's idea in ethresear.ch post cited below.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>secp256k1</code>: point</p>
</li>
<li>
<p><code v-pre>zero</code>: GF(GROUP_ORDER) scalar</p>
</li>
<li>
<p><code v-pre>secp256k1</code>: expected to be multiplier * multiplicand</p>
</li>
</ul>
<h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>verifies true iff product==scalar*multiplicand, with cryptographically high probability
/
func
<a name="VOR-projectiveSub-uint256-uint256-uint256-uint256-"></a></li>
</ul>
<h3 id="function-projectivesub-uint256-x1-uint256-z1-uint256-x2-uint256-z2-internal-uint256-x3-uint256-z3" tabindex="-1"><a class="header-anchor" href="#function-projectivesub-uint256-x1-uint256-z1-uint256-x2-uint256-z2-internal-uint256-x3-uint256-z3" aria-hidden="true">#</a> Function <code v-pre>projectiveSub(uint256 x1, uint256 z1, uint256 x2, uint256 z2) internal  -&gt; uint256 x3, uint256 z3</code></h3>
<p>No description
<a name="VOR-projectiveMul-uint256-uint256-uint256-uint256-"></a></p>
<h3 id="function-projectivemul-uint256-x1-uint256-z1-uint256-x2-uint256-z2-internal-uint256-x3-uint256-z3" tabindex="-1"><a class="header-anchor" href="#function-projectivemul-uint256-x1-uint256-z1-uint256-x2-uint256-z2-internal-uint256-x3-uint256-z3" aria-hidden="true">#</a> Function <code v-pre>projectiveMul(uint256 x1, uint256 z1, uint256 x2, uint256 z2) internal  -&gt; uint256 x3, uint256 z3</code></h3>
<p>No description
<a name="VOR-projectiveECAdd-uint256-uint256-uint256-uint256-"></a></p>
<h3 id="function-projectiveecadd-uint256-px-uint256-py-uint256-qx-uint256-qy-internal-uint256-sx-uint256-sy-uint256-sz" tabindex="-1"><a class="header-anchor" href="#function-projectiveecadd-uint256-px-uint256-py-uint256-qx-uint256-qy-internal-uint256-sx-uint256-sy-uint256-sz" aria-hidden="true">#</a> Function <code v-pre>projectiveECAdd(uint256 px, uint256 py, uint256 qx, uint256 qy) internal  -&gt; uint256 sx, uint256 sy, uint256 sz</code></h3>
<p>No description
<a name="VOR-affineECAdd-uint256-2--uint256-2--uint256-"></a></p>
<h3 id="function-affineecadd-uint256-2-p1-uint256-2-p2-uint256-invz-internal-uint256-2" tabindex="-1"><a class="header-anchor" href="#function-affineecadd-uint256-2-p1-uint256-2-p2-uint256-invz-internal-uint256-2" aria-hidden="true">#</a> Function <code v-pre>affineECAdd(uint256[2] p1, uint256[2] p2, uint256 invZ) internal  -&gt; uint256[2]</code></h3>
<p>No description
<a name="VOR-verifyLinearCombinationWithGenerator-uint256-uint256-2--uint256-address-"></a></p>
<h3 id="function-verifylinearcombinationwithgenerator-uint256-c-uint256-2-p-uint256-s-address-lcwitness-internal-bool" tabindex="-1"><a class="header-anchor" href="#function-verifylinearcombinationwithgenerator-uint256-c-uint256-2-p-uint256-s-address-lcwitness-internal-bool" aria-hidden="true">#</a> Function <code v-pre>verifyLinearCombinationWithGenerator(uint256 c, uint256[2] p, uint256 s, address lcWitness) internal  -&gt; bool</code></h3>
<p>No description
<a name="VOR-linearCombination-uint256-uint256-2--uint256-2--uint256-uint256-2--uint256-2--uint256-"></a></p>
<h3 id="function-linearcombination-uint256-c-uint256-2-p1-uint256-2-cp1witness-uint256-s-uint256-2-p2-uint256-2-sp2witness-uint256-zinv-internal-uint256-2" tabindex="-1"><a class="header-anchor" href="#function-linearcombination-uint256-c-uint256-2-p1-uint256-2-cp1witness-uint256-s-uint256-2-p2-uint256-2-sp2witness-uint256-zinv-internal-uint256-2" aria-hidden="true">#</a> Function <code v-pre>linearCombination(uint256 c, uint256[2] p1, uint256[2] cp1Witness, uint256 s, uint256[2] p2, uint256[2] sp2Witness, uint256 zInv) internal  -&gt; uint256[2]</code></h3>
<p>No description
<a name="VOR-scalarFromCurvePoints-uint256-2--uint256-2--uint256-2--address-uint256-2--"></a></p>
<h3 id="function-scalarfromcurvepoints-uint256-2-hash-uint256-2-pk-uint256-2-gamma-address-uwitness-uint256-2-v-internal-uint256-s" tabindex="-1"><a class="header-anchor" href="#function-scalarfromcurvepoints-uint256-2-hash-uint256-2-pk-uint256-2-gamma-address-uwitness-uint256-2-v-internal-uint256-s" aria-hidden="true">#</a> Function <code v-pre>scalarFromCurvePoints(uint256[2] hash, uint256[2] pk, uint256[2] gamma, address uWitness, uint256[2] v) internal  -&gt; uint256 s</code></h3>
<p>No description
<a name="VOR-verifyVORProof-uint256-2--uint256-2--uint256-uint256-uint256-address-uint256-2--uint256-2--uint256-"></a></p>
<h3 id="function-verifyvorproof-uint256-2-pk-uint256-2-gamma-uint256-c-uint256-s-uint256-seed-address-uwitness-uint256-2-cgammawitness-uint256-2-shashwitness-uint256-zinv-internal" tabindex="-1"><a class="header-anchor" href="#function-verifyvorproof-uint256-2-pk-uint256-2-gamma-uint256-c-uint256-s-uint256-seed-address-uwitness-uint256-2-cgammawitness-uint256-2-shashwitness-uint256-zinv-internal" aria-hidden="true">#</a> Function <code v-pre>verifyVORProof(uint256[2] pk, uint256[2] gamma, uint256 c, uint256 s, uint256 seed, address uWitness, uint256[2] cGammaWitness, uint256[2] sHashWitness, uint256 zInv) internal </code></h3>
<p>No description
<a name="VOR-randomValueFromVORProof-bytes-"></a></p>
<h3 id="function-randomvaluefromvorproof-bytes-proof-internal-uint256-output" tabindex="-1"><a class="header-anchor" href="#function-randomvaluefromvorproof-bytes-proof-internal-uint256-output" aria-hidden="true">#</a> Function <code v-pre>randomValueFromVORProof(bytes proof) internal  -&gt; uint256 output</code></h3>
<p>No description</p>
</div></template>
