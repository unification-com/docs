<template><div><h1 id="vorconsumerbase" tabindex="-1"><a class="header-anchor" href="#vorconsumerbase" aria-hidden="true">#</a> VORConsumerBase</h1>
<p>PURPOSE</p>
<p>Reggie the Random Oracle (not his real job) wants to provide randomness
to Vera the verifier in such a way that Vera can be sure he's not
making his output up to suit himself. Reggie provides Vera a public key
to which he knows the secret key. Each time Vera provides a seed to
Reggie, he gives back a value which is computed completely
deterministically from the seed and the secret key.</p>
<p>Reggie provides a proof by which Vera can verify that the output was
correctly computed once Reggie tells it to her, but without that proof,
the output is indistinguishable to her from a uniform random sample
from the output space.</p>
<p>The purpose of this contract is to make it easy for unrelated contracts
to talk to Vera the verifier about the work Reggie is doing, to provide
simple access to a verifiable source of randomness.</p>
<p>USAGE</p>
<p>Calling contracts must inherit from VORConsumerBase, and can
initialize VORConsumerBase's attributes in their constructor as
shown:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  contract VORConsumer {
    constuctor(&lt;other arguments>, address _vorCoordinator, address _xfund)
      VORConsumerBase(_vorCoordinator, _xfund) public {
        &lt;initialization with other arguments goes here>
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The oracle will have given you an ID for the VOR keypair they have
committed to (let's call it keyHash), and have told you the minimum xFUND
price for VOR service. Make sure your contract has sufficient xFUND, and
call requestRandomness(keyHash, fee, seed), where seed is the input you
want to generate randomness from.</p>
<p>Once the VORCoordinator has received and validated the oracle's response
to your request, it will call your contract's fulfillRandomness method.</p>
<p>The randomness argument to fulfillRandomness is the actual random value
generated from your seed.</p>
<p>The requestId argument is generated from the keyHash and the seed by
makeRequestId(keyHash, seed). If your contract could have concurrent
requests open, you can use the requestId to track which seed is
associated with which randomness. See VORRequestIDBase.sol for more
details. (See &quot;SECURITY CONSIDERATIONS&quot; for principles to keep in mind,
if your contract could have multiple requests in flight simultaneously.)</p>
<p>Colliding <code v-pre>requestId</code>s are cryptographically impossible as long as seeds
differ. (Which is critical to making unpredictable randomness! See the
next section.)</p>
<p>SECURITY CONSIDERATIONS</p>
<p>A method with the ability to call your fulfillRandomness method directly
could spoof a VOR response with any random value, so it's critical that
it cannot be directly called by anything other than this base contract
(specifically, by the VORConsumerBase.rawFulfillRandomness method).</p>
<p>For your users to trust that your contract's random behavior is free
from malicious interference, it's best if you can write it so that all
behaviors implied by a VOR response are executed <em>during</em> your
fulfillRandomness method. If your contract must store the response (or
anything derived from it) and use it later, you must ensure that any
user-significant behavior which depends on that stored value cannot be
manipulated by a subsequent VOR request.</p>
<p>Similarly, both miners and the VOR oracle itself have some influence
over the order in which VOR responses appear on the blockchain, so if
your contract could have multiple VOR requests in flight simultaneously,
you must ensure that the order in which the VOR responses arrive cannot
be used to manipulate your contract's user-significant behavior.</p>
<p>Since the ultimate input to the VOR is mixed with the block hash of the
block in which the request is made, user-provided seeds have no impact
on its economic security properties. They are only included for API
compatability with previous versions of this contract.</p>
<p>Since the block hash of the block which contains the requestRandomness
call is mixed into the input to the VOR <em>last</em>, a sufficiently powerful
miner could, in principle, fork the blockchain to evict the block
containing the request, forcing the request to be included in a
different block with a different hash, and therefore a different input
to the VOR. However, such an attack would incur a substantial economic
cost. This cost scales with the number of blocks the VOR oracle waits
until it calls responds to a request.</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#VORConsumerBase-fulfillRandomness-bytes32-uint256-"><code v-pre>fulfillRandomness(bytes32 requestId, uint256 randomness) internal</code></a></li>
<li><a href="#VORConsumerBase-requestRandomness-bytes32-uint256-uint256-"><code v-pre>requestRandomness(bytes32 _keyHash, uint256 _fee, uint256 _seed) internal</code></a></li>
<li><a href="#VORConsumerBase-_increaseVorCoordinatorAllowance-uint256-"><code v-pre>_increaseVorCoordinatorAllowance(uint256 _amount) internal</code></a></li>
<li><a href="#VORConsumerBase-_setVORCoordinator-address-"><code v-pre>_setVORCoordinator(address _vorCoordinator) internal</code></a></li>
<li><a href="#VORConsumerBase-constructor-address-address-"><code v-pre>constructor(address _vorCoordinator, address _xfund) internal</code></a></li>
<li><a href="#VORConsumerBase-rawFulfillRandomness-bytes32-uint256-"><code v-pre>rawFulfillRandomness(bytes32 requestId, uint256 randomness) external</code></a></li>
</ul>
<p><a name="VORConsumerBase-fulfillRandomness-bytes32-uint256-"></a></p>
<h3 id="function-fulfillrandomness-bytes32-requestid-uint256-randomness-internal" tabindex="-1"><a class="header-anchor" href="#function-fulfillrandomness-bytes32-requestid-uint256-randomness-internal" aria-hidden="true">#</a> Function <code v-pre>fulfillRandomness(bytes32 requestId, uint256 randomness) internal </code></h3>
<p>VORConsumerBase expects its subcontracts to have a method with this
signature, and will call it once it has verified the proof
associated with the randomness. (It is triggered via a call to
rawFulfillRandomness, below.)</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>requestId</code>: The Id initially returned by requestRandomness</p>
</li>
<li>
<p><code v-pre>randomness</code>: the VOR output
<a name="VORConsumerBase-requestRandomness-bytes32-uint256-uint256-"></a></p>
</li>
</ul>
<h3 id="function-requestrandomness-bytes32-keyhash-uint256-fee-uint256-seed-internal-bytes32-requestid" tabindex="-1"><a class="header-anchor" href="#function-requestrandomness-bytes32-keyhash-uint256-fee-uint256-seed-internal-bytes32-requestid" aria-hidden="true">#</a> Function <code v-pre>requestRandomness(bytes32 _keyHash, uint256 _fee, uint256 _seed) internal  -&gt; bytes32 requestId</code></h3>
<p>The fulfillRandomness method receives the output, once it's provided
by the Oracle, and verified by the vorCoordinator.</p>
<p>The _keyHash must already be registered with the VORCoordinator, and
the _fee must exceed the fee specified during registration of the
_keyHash.</p>
<p>The _seed parameter is vestigial, and is kept only for API
compatibility with older versions. It can't <em>hurt</em> to mix in some of
your own randomness, here, but it's not necessary because the VOR
oracle will mix the hash of the block containing your request into the
VOR seed it ultimately uses.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_keyHash</code>: ID of public key against which randomness is generated</p>
</li>
<li>
<p><code v-pre>_fee</code>: The amount of xFUND to send with the request</p>
</li>
<li>
<p><code v-pre>_seed</code>: seed mixed into the input of the VOR.</p>
</li>
</ul>
<h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>requestId unique ID for this request</li>
</ul>
<p>The returned requestId can be used to distinguish responses to
concurrent requests. It is passed as the first argument to
fulfillRandomness.
<a name="VORConsumerBase-_increaseVorCoordinatorAllowance-uint256-"></a></p>
<h3 id="function-increasevorcoordinatorallowance-uint256-amount-internal-bool" tabindex="-1"><a class="header-anchor" href="#function-increasevorcoordinatorallowance-uint256-amount-internal-bool" aria-hidden="true">#</a> Function <code v-pre>_increaseVorCoordinatorAllowance(uint256 _amount) internal  -&gt; bool</code></h3>
<p>No description</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_amount</code>: uint256 amount to increase allowance by
<a name="VORConsumerBase-_setVORCoordinator-address-"></a></li>
</ul>
<h3 id="function-setvorcoordinator-address-vorcoordinator-internal" tabindex="-1"><a class="header-anchor" href="#function-setvorcoordinator-address-vorcoordinator-internal" aria-hidden="true">#</a> Function <code v-pre>_setVORCoordinator(address _vorCoordinator) internal </code></h3>
<p>No description</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_vorCoordinator</code>: address new VORCoordinator address
<a name="VORConsumerBase-constructor-address-address-"></a></li>
</ul>
<h3 id="function-constructor-address-vorcoordinator-address-xfund-internal" tabindex="-1"><a class="header-anchor" href="#function-constructor-address-vorcoordinator-address-xfund-internal" aria-hidden="true">#</a> Function <code v-pre>constructor(address _vorCoordinator, address _xfund) internal </code></h3>
<p>No description</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_vorCoordinator</code>: address of VORCoordinator contract</p>
</li>
<li>
<p><code v-pre>_xfund</code>: address of xFUND token contract
<a name="VORConsumerBase-rawFulfillRandomness-bytes32-uint256-"></a></p>
</li>
</ul>
<h3 id="function-rawfulfillrandomness-bytes32-requestid-uint256-randomness-external" tabindex="-1"><a class="header-anchor" href="#function-rawfulfillrandomness-bytes32-requestid-uint256-randomness-external" aria-hidden="true">#</a> Function <code v-pre>rawFulfillRandomness(bytes32 requestId, uint256 randomness) external </code></h3>
<p>No description</p>
</div></template>
