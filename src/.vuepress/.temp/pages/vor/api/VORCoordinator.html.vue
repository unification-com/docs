<template><div><h1 id="vorcoordinator" tabindex="-1"><a class="header-anchor" href="#vorcoordinator" aria-hidden="true">#</a> VORCoordinator</h1>
<p>Coordinates on-chain verifiable-randomness requests</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#VORCoordinator-constructor-address-address-"><code v-pre>constructor(address _xfund, address _blockHashStore) public</code></a></li>
<li><a href="#VORCoordinator-getProviderAddress-bytes32-"><code v-pre>getProviderAddress(bytes32 _keyHash) external</code></a></li>
<li><a href="#VORCoordinator-getProviderFee-bytes32-"><code v-pre>getProviderFee(bytes32 _keyHash) external</code></a></li>
<li><a href="#VORCoordinator-getProviderGranularFee-bytes32-address-"><code v-pre>getProviderGranularFee(bytes32 _keyHash, address _consumer) external</code></a></li>
<li><a href="#VORCoordinator-registerProvingKey-uint256-address-payable-uint256-2--"><code v-pre>registerProvingKey(uint256 _fee, address payable _oracle, uint256[2] _publicProvingKey) external</code></a></li>
<li><a href="#VORCoordinator-changeFee-uint256-2--uint256-"><code v-pre>changeFee(uint256[2] _publicProvingKey, uint256 _fee) external</code></a></li>
<li><a href="#VORCoordinator-changeGranularFee-uint256-2--uint256-address-"><code v-pre>changeGranularFee(uint256[2] _publicProvingKey, uint256 _fee, address _consumer) external</code></a></li>
<li><a href="#VORCoordinator-withdraw-address-uint256-"><code v-pre>withdraw(address _recipient, uint256 _amount) external</code></a></li>
<li><a href="#VORCoordinator-randomnessRequest-bytes32-uint256-uint256-"><code v-pre>randomnessRequest(bytes32 _keyHash, uint256 _consumerSeed, uint256 _feePaid) external</code></a></li>
<li><a href="#VORCoordinator-hashOfKey-uint256-2--"><code v-pre>hashOfKey(uint256[2] _publicKey) public</code></a></li>
<li><a href="#VORCoordinator-fulfillRandomnessRequest-bytes-"><code v-pre>fulfillRandomnessRequest(bytes _proof) public</code></a></li>
<li><a href="#VORCoordinator-callBackWithRandomness-bytes32-uint256-address-"><code v-pre>callBackWithRandomness(bytes32 requestId, uint256 randomness, address consumerContract) internal</code></a></li>
<li><a href="#VORCoordinator-getRandomnessFromProof-bytes-"><code v-pre>getRandomnessFromProof(bytes _proof) internal</code></a></li>
</ul>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events:</h2>
<ul>
<li><a href="#VORCoordinator-RandomnessRequest-bytes32-uint256-address-uint256-bytes32-"><code v-pre>RandomnessRequest(bytes32 keyHash, uint256 seed, address sender, uint256 fee, bytes32 requestID)</code></a></li>
<li><a href="#VORCoordinator-NewServiceAgreement-bytes32-uint256-"><code v-pre>NewServiceAgreement(bytes32 keyHash, uint256 fee)</code></a></li>
<li><a href="#VORCoordinator-ChangeFee-bytes32-uint256-"><code v-pre>ChangeFee(bytes32 keyHash, uint256 fee)</code></a></li>
<li><a href="#VORCoordinator-ChangeGranularFee-bytes32-address-uint256-"><code v-pre>ChangeGranularFee(bytes32 keyHash, address consumer, uint256 fee)</code></a></li>
<li><a href="#VORCoordinator-RandomnessRequestFulfilled-bytes32-uint256-"><code v-pre>RandomnessRequestFulfilled(bytes32 requestId, uint256 output)</code></a></li>
</ul>
<h2 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers:</h2>
<ul>
<li><a href="#VORCoordinator-sufficientXFUND-uint256-bytes32-"><code v-pre>sufficientXFUND(uint256 _feePaid, bytes32 _keyHash)</code></a></li>
<li><a href="#VORCoordinator-hasAvailableFunds-uint256-"><code v-pre>hasAvailableFunds(uint256 _amount)</code></a></li>
</ul>
<p><a name="VORCoordinator-constructor-address-address-"></a></p>
<h3 id="function-constructor-address-xfund-address-blockhashstore-public" tabindex="-1"><a class="header-anchor" href="#function-constructor-address-xfund-address-blockhashstore-public" aria-hidden="true">#</a> Function <code v-pre>constructor(address _xfund, address _blockHashStore) public </code></h3>
<p>No description
<a name="VORCoordinator-getProviderAddress-bytes32-"></a></p>
<h3 id="function-getprovideraddress-bytes32-keyhash-external-address" tabindex="-1"><a class="header-anchor" href="#function-getprovideraddress-bytes32-keyhash-external-address" aria-hidden="true">#</a> Function <code v-pre>getProviderAddress(bytes32 _keyHash) external  -&gt; address</code></h3>
<p>getProviderAddress - get provider address</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_keyHash</code>: ID of the VOR public key</li>
</ul>
<p><a name="VORCoordinator-getProviderFee-bytes32-"></a></p>
<h3 id="function-getproviderfee-bytes32-keyhash-external-uint96" tabindex="-1"><a class="header-anchor" href="#function-getproviderfee-bytes32-keyhash-external-uint96" aria-hidden="true">#</a> Function <code v-pre>getProviderFee(bytes32 _keyHash) external  -&gt; uint96</code></h3>
<p>getProviderFee - get provider's base fee</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_keyHash</code>: ID of the VOR public key</li>
</ul>
<p><a name="VORCoordinator-getProviderGranularFee-bytes32-address-"></a></p>
<h3 id="function-getprovidergranularfee-bytes32-keyhash-address-consumer-external-uint96" tabindex="-1"><a class="header-anchor" href="#function-getprovidergranularfee-bytes32-keyhash-address-consumer-external-uint96" aria-hidden="true">#</a> Function <code v-pre>getProviderGranularFee(bytes32 _keyHash, address _consumer) external  -&gt; uint96</code></h3>
<p>getProviderGranularFee - get provider's granular fee for selected consumer</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_keyHash</code>: ID of the VOR public key</p>
</li>
<li>
<p><code v-pre>_consumer</code>: address of the consumer smart contract</p>
</li>
</ul>
<p><a name="VORCoordinator-registerProvingKey-uint256-address-payable-uint256-2--"></a></p>
<h3 id="function-registerprovingkey-uint256-fee-address-payable-oracle-uint256-2-publicprovingkey-external" tabindex="-1"><a class="header-anchor" href="#function-registerprovingkey-uint256-fee-address-payable-oracle-uint256-2-publicprovingkey-external" aria-hidden="true">#</a> Function <code v-pre>registerProvingKey(uint256 _fee, address payable _oracle, uint256[2] _publicProvingKey) external </code></h3>
<p>No description</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_fee</code>: minimum xFUND payment required to serve randomness</p>
</li>
<li>
<p><code v-pre>_oracle</code>: the address of the node with the proving key</p>
</li>
<li>
<p><code v-pre>_publicProvingKey</code>: public key used to prove randomness
<a name="VORCoordinator-changeFee-uint256-2--uint256-"></a></p>
</li>
</ul>
<h3 id="function-changefee-uint256-2-publicprovingkey-uint256-fee-external" tabindex="-1"><a class="header-anchor" href="#function-changefee-uint256-2-publicprovingkey-uint256-fee-external" aria-hidden="true">#</a> Function <code v-pre>changeFee(uint256[2] _publicProvingKey, uint256 _fee) external </code></h3>
<p>No description</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_publicProvingKey</code>: public key used to prove randomness</p>
</li>
<li>
<p><code v-pre>_fee</code>: minimum xFUND payment required to serve randomness
<a name="VORCoordinator-changeGranularFee-uint256-2--uint256-address-"></a></p>
</li>
</ul>
<h3 id="function-changegranularfee-uint256-2-publicprovingkey-uint256-fee-address-consumer-external" tabindex="-1"><a class="header-anchor" href="#function-changegranularfee-uint256-2-publicprovingkey-uint256-fee-address-consumer-external" aria-hidden="true">#</a> Function <code v-pre>changeGranularFee(uint256[2] _publicProvingKey, uint256 _fee, address _consumer) external </code></h3>
<p>No description</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_publicProvingKey</code>: public key used to prove randomness</p>
</li>
<li>
<p><code v-pre>_fee</code>: minimum xFUND payment required to serve randomness
<a name="VORCoordinator-withdraw-address-uint256-"></a></p>
</li>
</ul>
<h3 id="function-withdraw-address-recipient-uint256-amount-external" tabindex="-1"><a class="header-anchor" href="#function-withdraw-address-recipient-uint256-amount-external" aria-hidden="true">#</a> Function <code v-pre>withdraw(address _recipient, uint256 _amount) external </code></h3>
<p>Allows the oracle operator to withdraw their xFUND</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_recipient</code>: is the address the funds will be sent to</p>
</li>
<li>
<p><code v-pre>_amount</code>: is the amount of xFUND transferred from the Coordinator contract
<a name="VORCoordinator-randomnessRequest-bytes32-uint256-uint256-"></a></p>
</li>
</ul>
<h3 id="function-randomnessrequest-bytes32-keyhash-uint256-consumerseed-uint256-feepaid-external" tabindex="-1"><a class="header-anchor" href="#function-randomnessrequest-bytes32-keyhash-uint256-consumerseed-uint256-feepaid-external" aria-hidden="true">#</a> Function <code v-pre>randomnessRequest(bytes32 _keyHash, uint256 _consumerSeed, uint256 _feePaid) external </code></h3>
<p>_consumerSeed is mixed with key hash, sender address and nonce to
obtain preSeed, which is passed to VOR oracle, which mixes it with the
hash of the block containing this request, to compute the final seed.</p>
<p>The requestId used to store the request data is constructed from the
preSeed and keyHash.</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_keyHash</code>: ID of the VOR public key against which to generate output</p>
</li>
<li>
<p><code v-pre>_consumerSeed</code>: Input to the VOR, from which randomness is generated</p>
</li>
<li>
<p><code v-pre>_feePaid</code>: Amount of xFUND sent with request. Must exceed fee for key</p>
</li>
</ul>
<p><a name="VORCoordinator-hashOfKey-uint256-2--"></a></p>
<h3 id="function-hashofkey-uint256-2-publickey-public-bytes32" tabindex="-1"><a class="header-anchor" href="#function-hashofkey-uint256-2-publickey-public-bytes32" aria-hidden="true">#</a> Function <code v-pre>hashOfKey(uint256[2] _publicKey) public  -&gt; bytes32</code></h3>
<p>No description</p>
<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_publicKey</code>: the key to return the address for
<a name="VORCoordinator-fulfillRandomnessRequest-bytes-"></a></li>
</ul>
<h3 id="function-fulfillrandomnessrequest-bytes-proof-public" tabindex="-1"><a class="header-anchor" href="#function-fulfillrandomnessrequest-bytes-proof-public" aria-hidden="true">#</a> Function <code v-pre>fulfillRandomnessRequest(bytes _proof) public </code></h3>
<p>No description</p>
<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_proof</code>: the proof of randomness. Actual random output built from this
<a name="VORCoordinator-callBackWithRandomness-bytes32-uint256-address-"></a></li>
</ul>
<h3 id="function-callbackwithrandomness-bytes32-requestid-uint256-randomness-address-consumercontract-internal" tabindex="-1"><a class="header-anchor" href="#function-callbackwithrandomness-bytes32-requestid-uint256-randomness-address-consumercontract-internal" aria-hidden="true">#</a> Function <code v-pre>callBackWithRandomness(bytes32 requestId, uint256 randomness, address consumerContract) internal </code></h3>
<p>No description
<a name="VORCoordinator-getRandomnessFromProof-bytes-"></a></p>
<h3 id="function-getrandomnessfromproof-bytes-proof-internal-bytes32-currentkeyhash-struct-vorcoordinator-callback-callback-bytes32-requestid-uint256-randomness" tabindex="-1"><a class="header-anchor" href="#function-getrandomnessfromproof-bytes-proof-internal-bytes32-currentkeyhash-struct-vorcoordinator-callback-callback-bytes32-requestid-uint256-randomness" aria-hidden="true">#</a> Function <code v-pre>getRandomnessFromProof(bytes _proof) internal  -&gt; bytes32 currentKeyHash, struct VORCoordinator.Callback callback, bytes32 requestId, uint256 randomness</code></h3>
<p>No description</p>
<p><a name="VORCoordinator-RandomnessRequest-bytes32-uint256-address-uint256-bytes32-"></a></p>
<h3 id="event-randomnessrequest-bytes32-keyhash-uint256-seed-address-sender-uint256-fee-bytes32-requestid" tabindex="-1"><a class="header-anchor" href="#event-randomnessrequest-bytes32-keyhash-uint256-seed-address-sender-uint256-fee-bytes32-requestid" aria-hidden="true">#</a> Event <code v-pre>RandomnessRequest(bytes32 keyHash, uint256 seed, address sender, uint256 fee, bytes32 requestID)</code></h3>
<p>No description
<a name="VORCoordinator-NewServiceAgreement-bytes32-uint256-"></a></p>
<h3 id="event-newserviceagreement-bytes32-keyhash-uint256-fee" tabindex="-1"><a class="header-anchor" href="#event-newserviceagreement-bytes32-keyhash-uint256-fee" aria-hidden="true">#</a> Event <code v-pre>NewServiceAgreement(bytes32 keyHash, uint256 fee)</code></h3>
<p>No description
<a name="VORCoordinator-ChangeFee-bytes32-uint256-"></a></p>
<h3 id="event-changefee-bytes32-keyhash-uint256-fee" tabindex="-1"><a class="header-anchor" href="#event-changefee-bytes32-keyhash-uint256-fee" aria-hidden="true">#</a> Event <code v-pre>ChangeFee(bytes32 keyHash, uint256 fee)</code></h3>
<p>No description
<a name="VORCoordinator-ChangeGranularFee-bytes32-address-uint256-"></a></p>
<h3 id="event-changegranularfee-bytes32-keyhash-address-consumer-uint256-fee" tabindex="-1"><a class="header-anchor" href="#event-changegranularfee-bytes32-keyhash-address-consumer-uint256-fee" aria-hidden="true">#</a> Event <code v-pre>ChangeGranularFee(bytes32 keyHash, address consumer, uint256 fee)</code></h3>
<p>No description
<a name="VORCoordinator-RandomnessRequestFulfilled-bytes32-uint256-"></a></p>
<h3 id="event-randomnessrequestfulfilled-bytes32-requestid-uint256-output" tabindex="-1"><a class="header-anchor" href="#event-randomnessrequestfulfilled-bytes32-requestid-uint256-output" aria-hidden="true">#</a> Event <code v-pre>RandomnessRequestFulfilled(bytes32 requestId, uint256 output)</code></h3>
<p>No description</p>
<p><a name="VORCoordinator-sufficientXFUND-uint256-bytes32-"></a></p>
<h3 id="modifier-sufficientxfund-uint256-feepaid-bytes32-keyhash" tabindex="-1"><a class="header-anchor" href="#modifier-sufficientxfund-uint256-feepaid-bytes32-keyhash" aria-hidden="true">#</a> Modifier <code v-pre>sufficientXFUND(uint256 _feePaid, bytes32 _keyHash)</code></h3>
<p>Reverts if amount is not at least what was agreed upon in the service agreement</p>
<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_feePaid</code>: The payment for the request</p>
</li>
<li>
<p><code v-pre>_keyHash</code>: The key which the request is for
<a name="VORCoordinator-hasAvailableFunds-uint256-"></a></p>
</li>
</ul>
<h3 id="modifier-hasavailablefunds-uint256-amount" tabindex="-1"><a class="header-anchor" href="#modifier-hasavailablefunds-uint256-amount" aria-hidden="true">#</a> Modifier <code v-pre>hasAvailableFunds(uint256 _amount)</code></h3>
<p>Reverts if amount requested is greater than withdrawable balance</p>
<h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_amount</code>: The given amount to compare to <code v-pre>withdrawableTokens</code></li>
</ul>
</div></template>
