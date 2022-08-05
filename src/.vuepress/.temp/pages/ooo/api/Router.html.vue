<template><div><h1 id="ooo-router-smart-contract" tabindex="-1"><a class="header-anchor" href="#ooo-router-smart-contract" aria-hidden="true">#</a> OoO Router smart contract</h1>
<p>Routes requests for data from Consumers to data providers.
Data providers listen for requests and process data, sending it back to the
Consumer's smart contract.</p>
<p>An ERC-20 Token fee is charged by the provider, and paid for by the consumer</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#Router-constructor-address-"><code v-pre>constructor(address _token) public</code></a></li>
<li><a href="#Router-registerAsProvider-uint256-"><code v-pre>registerAsProvider(uint256 _minFee) external</code></a></li>
<li><a href="#Router-setProviderMinFee-uint256-"><code v-pre>setProviderMinFee(uint256 _newMinFee) external</code></a></li>
<li><a href="#Router-setProviderGranularFee-address-uint256-"><code v-pre>setProviderGranularFee(address _consumer, uint256 _newFee) external</code></a></li>
<li><a href="#Router-withdraw-address-uint256-"><code v-pre>withdraw(address _recipient, uint256 _amount) external</code></a></li>
<li><a href="#Router-initialiseRequest-address-uint256-bytes32-"><code v-pre>initialiseRequest(address _provider, uint256 _fee, bytes32 _data) external</code></a></li>
<li><a href="#Router-fulfillRequest-bytes32-uint256-bytes-"><code v-pre>fulfillRequest(bytes32 _requestId, uint256 _requestedData, bytes _signature) external</code></a></li>
<li><a href="#Router-getTokenAddress--"><code v-pre>getTokenAddress() external</code></a></li>
<li><a href="#Router-getDataRequestConsumer-bytes32-"><code v-pre>getDataRequestConsumer(bytes32 _requestId) external</code></a></li>
<li><a href="#Router-getDataRequestProvider-bytes32-"><code v-pre>getDataRequestProvider(bytes32 _requestId) external</code></a></li>
<li><a href="#Router-requestExists-bytes32-"><code v-pre>requestExists(bytes32 _requestId) external</code></a></li>
<li><a href="#Router-getRequestStatus-bytes32-"><code v-pre>getRequestStatus(bytes32 _requestId) external</code></a></li>
<li><a href="#Router-getProviderMinFee-address-"><code v-pre>getProviderMinFee(address _provider) external</code></a></li>
<li><a href="#Router-getProviderGranularFee-address-address-"><code v-pre>getProviderGranularFee(address _provider, address _consumer) external</code></a></li>
<li><a href="#Router-getWithdrawableTokens-address-"><code v-pre>getWithdrawableTokens(address _provider) external</code></a></li>
</ul>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events:</h2>
<ul>
<li><a href="#Router-DataRequested-address-address-uint256-bytes32-bytes32-"><code v-pre>DataRequested(address consumer, address provider, uint256 fee, bytes32 data, bytes32 requestId)</code></a></li>
<li><a href="#Router-RequestFulfilled-address-address-bytes32-uint256-"><code v-pre>RequestFulfilled(address consumer, address provider, bytes32 requestId, uint256 requestedData)</code></a></li>
<li><a href="#Router-TokenSet-address-"><code v-pre>TokenSet(address tokenAddress)</code></a></li>
<li><a href="#Router-ProviderRegistered-address-uint256-"><code v-pre>ProviderRegistered(address provider, uint256 minFee)</code></a></li>
<li><a href="#Router-SetProviderMinFee-address-uint256-uint256-"><code v-pre>SetProviderMinFee(address provider, uint256 oldMinFee, uint256 newMinFee)</code></a></li>
<li><a href="#Router-SetProviderGranularFee-address-address-uint256-uint256-"><code v-pre>SetProviderGranularFee(address provider, address consumer, uint256 oldFee, uint256 newFee)</code></a></li>
<li><a href="#Router-WithdrawFees-address-address-uint256-"><code v-pre>WithdrawFees(address provider, address recipient, uint256 amount)</code></a></li>
</ul>
<h2 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers:</h2>
<ul>
<li><a href="#Router-paidSufficientFee-uint256-address-"><code v-pre>paidSufficientFee(uint256 _feePaid, address _provider)</code></a></li>
<li><a href="#Router-hasAvailableTokens-uint256-"><code v-pre>hasAvailableTokens(uint256 _amount)</code></a></li>
</ul>
<p><a name="Router-constructor-address-"></a></p>
<h3 id="function-constructor-address-token-public" tabindex="-1"><a class="header-anchor" href="#function-constructor-address-token-public" aria-hidden="true">#</a> Function <code v-pre>constructor(address _token) public </code></h3>
<p>Contract constructor. Accepts the address for a Token smart contract.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_token</code>: address must be for an ERC-20 token (e.g. xFUND)
<a name="Router-registerAsProvider-uint256-"></a></li>
</ul>
<h3 id="function-registerasprovider-uint256-minfee-external-bool-success" tabindex="-1"><a class="header-anchor" href="#function-registerasprovider-uint256-minfee-external-bool-success" aria-hidden="true">#</a> Function <code v-pre>registerAsProvider(uint256 _minFee) external  -&gt; bool success</code></h3>
<p>registerAsProvider - register as a provider</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_minFee</code>: uint256 - minimum fee provider will accept to fulfill request</li>
</ul>
<p><a name="Router-setProviderMinFee-uint256-"></a></p>
<h3 id="function-setproviderminfee-uint256-newminfee-external-bool-success" tabindex="-1"><a class="header-anchor" href="#function-setproviderminfee-uint256-newminfee-external-bool-success" aria-hidden="true">#</a> Function <code v-pre>setProviderMinFee(uint256 _newMinFee) external  -&gt; bool success</code></h3>
<p>setProviderMinFee - provider calls for setting its minimum fee</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_newMinFee</code>: uint256 - minimum fee provider will accept to fulfill request</li>
</ul>
<p><a name="Router-setProviderGranularFee-address-uint256-"></a></p>
<h3 id="function-setprovidergranularfee-address-consumer-uint256-newfee-external-bool-success" tabindex="-1"><a class="header-anchor" href="#function-setprovidergranularfee-address-consumer-uint256-newfee-external-bool-success" aria-hidden="true">#</a> Function <code v-pre>setProviderGranularFee(address _consumer, uint256 _newFee) external  -&gt; bool success</code></h3>
<p>setProviderGranularFee - provider calls for setting its fee for the selected consumer</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_consumer</code>: address of consumer contract</p>
</li>
<li>
<p><code v-pre>_newFee</code>: uint256 - minimum fee provider will accept to fulfill request</p>
</li>
</ul>
<p><a name="Router-withdraw-address-uint256-"></a></p>
<h3 id="function-withdraw-address-recipient-uint256-amount-external" tabindex="-1"><a class="header-anchor" href="#function-withdraw-address-recipient-uint256-amount-external" aria-hidden="true">#</a> Function <code v-pre>withdraw(address _recipient, uint256 _amount) external </code></h3>
<p>Allows the provider to withdraw their xFUND</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_recipient</code>: is the address the funds will be sent to</p>
</li>
<li>
<p><code v-pre>_amount</code>: is the amount of xFUND transferred from the Coordinator contract
<a name="Router-initialiseRequest-address-uint256-bytes32-"></a></p>
</li>
</ul>
<h3 id="function-initialiserequest-address-provider-uint256-fee-bytes32-data-external-bool-success" tabindex="-1"><a class="header-anchor" href="#function-initialiserequest-address-provider-uint256-fee-bytes32-data-external-bool-success" aria-hidden="true">#</a> Function <code v-pre>initialiseRequest(address _provider, uint256 _fee, bytes32 _data) external  -&gt; bool success</code></h3>
<p>initialiseRequest - called by Consumer contract to initialise a data request. Can only be called by
a contract. Daata providers can watch for the DataRequested being emitted, and act on any requests
for the provider. Only the provider specified in the request may fulfil the request.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_provider</code>: address of the data provider.</p>
</li>
<li>
<p><code v-pre>_fee</code>: amount of Tokens to pay for data</p>
</li>
<li>
<p><code v-pre>_data</code>: type of data being requested. E.g. PRICE.BTC.USD.AVG requests average price for BTC/USD pair</p>
</li>
</ul>
<h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>success if the execution was successful. Status is checked in the Consumer contract
<a name="Router-fulfillRequest-bytes32-uint256-bytes-"></a></li>
</ul>
<h3 id="function-fulfillrequest-bytes32-requestid-uint256-requesteddata-bytes-signature-external-bool" tabindex="-1"><a class="header-anchor" href="#function-fulfillrequest-bytes32-requestid-uint256-requesteddata-bytes-signature-external-bool" aria-hidden="true">#</a> Function <code v-pre>fulfillRequest(bytes32 _requestId, uint256 _requestedData, bytes _signature) external  -&gt; bool</code></h3>
<p>fulfillRequest - called by data provider to forward data to the Consumer. Only the specified provider
may fulfil the data request.</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_requestId</code>: the request the provider is sending data for</p>
</li>
<li>
<p><code v-pre>_requestedData</code>: the data to send</p>
</li>
<li>
<p><code v-pre>_signature</code>: data provider's signature of the _requestId, _requestedData and Consumer's address
this will used to validate the data's origin in the Consumer's contract</p>
</li>
</ul>
<h4 id="return-values-1" tabindex="-1"><a class="header-anchor" href="#return-values-1" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>success if the execution was successful.
<a name="Router-getTokenAddress--"></a></li>
</ul>
<h3 id="function-gettokenaddress-external-address" tabindex="-1"><a class="header-anchor" href="#function-gettokenaddress-external-address" aria-hidden="true">#</a> Function <code v-pre>getTokenAddress() external  -&gt; address</code></h3>
<p>getTokenAddress - get the contract address of the Token being used for paying fees</p>
<h4 id="return-values-2" tabindex="-1"><a class="header-anchor" href="#return-values-2" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>address of the token smart contract
<a name="Router-getDataRequestConsumer-bytes32-"></a></li>
</ul>
<h3 id="function-getdatarequestconsumer-bytes32-requestid-external-address" tabindex="-1"><a class="header-anchor" href="#function-getdatarequestconsumer-bytes32-requestid-external-address" aria-hidden="true">#</a> Function <code v-pre>getDataRequestConsumer(bytes32 _requestId) external  -&gt; address</code></h3>
<p>getDataRequestConsumer - get the consumer for a request</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_requestId</code>: bytes32 request id</li>
</ul>
<h4 id="return-values-3" tabindex="-1"><a class="header-anchor" href="#return-values-3" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>address data consumer contract address
<a name="Router-getDataRequestProvider-bytes32-"></a></li>
</ul>
<h3 id="function-getdatarequestprovider-bytes32-requestid-external-address" tabindex="-1"><a class="header-anchor" href="#function-getdatarequestprovider-bytes32-requestid-external-address" aria-hidden="true">#</a> Function <code v-pre>getDataRequestProvider(bytes32 _requestId) external  -&gt; address</code></h3>
<p>getDataRequestProvider - get the consumer for a request</p>
<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_requestId</code>: bytes32 request id</li>
</ul>
<h4 id="return-values-4" tabindex="-1"><a class="header-anchor" href="#return-values-4" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>address data provider address
<a name="Router-requestExists-bytes32-"></a></li>
</ul>
<h3 id="function-requestexists-bytes32-requestid-external-bool" tabindex="-1"><a class="header-anchor" href="#function-requestexists-bytes32-requestid-external-bool" aria-hidden="true">#</a> Function <code v-pre>requestExists(bytes32 _requestId) external  -&gt; bool</code></h3>
<p>requestExists - check a request ID exists</p>
<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_requestId</code>: bytes32 request id</li>
</ul>
<p><a name="Router-getRequestStatus-bytes32-"></a></p>
<h3 id="function-getrequeststatus-bytes32-requestid-external-uint8" tabindex="-1"><a class="header-anchor" href="#function-getrequeststatus-bytes32-requestid-external-uint8" aria-hidden="true">#</a> Function <code v-pre>getRequestStatus(bytes32 _requestId) external  -&gt; uint8</code></h3>
<p>getRequestStatus - check a request status
0 = does not exist/not yet initialised
1 = Request initialised</p>
<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_requestId</code>: bytes32 request id</li>
</ul>
<p><a name="Router-getProviderMinFee-address-"></a></p>
<h3 id="function-getproviderminfee-address-provider-external-uint256" tabindex="-1"><a class="header-anchor" href="#function-getproviderminfee-address-provider-external-uint256" aria-hidden="true">#</a> Function <code v-pre>getProviderMinFee(address _provider) external  -&gt; uint256</code></h3>
<p>getProviderMinFee - returns minimum fee provider will accept to fulfill data request</p>
<h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_provider</code>: address of data provider</li>
</ul>
<p><a name="Router-getProviderGranularFee-address-address-"></a></p>
<h3 id="function-getprovidergranularfee-address-provider-address-consumer-external-uint256" tabindex="-1"><a class="header-anchor" href="#function-getprovidergranularfee-address-provider-address-consumer-external-uint256" aria-hidden="true">#</a> Function <code v-pre>getProviderGranularFee(address _provider, address _consumer) external  -&gt; uint256</code></h3>
<p>getProviderGranularFee - returns fee provider will accept to fulfill data request
for the given consumer</p>
<h4 id="parameters-12" tabindex="-1"><a class="header-anchor" href="#parameters-12" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_provider</code>: address of data provider</p>
</li>
<li>
<p><code v-pre>_consumer</code>: address of consumer contract</p>
</li>
</ul>
<p><a name="Router-getWithdrawableTokens-address-"></a></p>
<h3 id="function-getwithdrawabletokens-address-provider-external-uint256" tabindex="-1"><a class="header-anchor" href="#function-getwithdrawabletokens-address-provider-external-uint256" aria-hidden="true">#</a> Function <code v-pre>getWithdrawableTokens(address _provider) external  -&gt; uint256</code></h3>
<p>getWithdrawableTokens - returns withdrawable tokens for the given provider</p>
<h4 id="parameters-13" tabindex="-1"><a class="header-anchor" href="#parameters-13" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_provider</code>: address of data provider</li>
</ul>
<p><a name="Router-DataRequested-address-address-uint256-bytes32-bytes32-"></a></p>
<h3 id="event-datarequested-address-consumer-address-provider-uint256-fee-bytes32-data-bytes32-requestid" tabindex="-1"><a class="header-anchor" href="#event-datarequested-address-consumer-address-provider-uint256-fee-bytes32-data-bytes32-requestid" aria-hidden="true">#</a> Event <code v-pre>DataRequested(address consumer, address provider, uint256 fee, bytes32 data, bytes32 requestId)</code></h3>
<p>DataRequested. Emitted when a data request is sent by a Consumer.</p>
<h4 id="parameters-14" tabindex="-1"><a class="header-anchor" href="#parameters-14" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>consumer</code>: address of the Consumer's contract</p>
</li>
<li>
<p><code v-pre>provider</code>: address of the data provider</p>
</li>
<li>
<p><code v-pre>fee</code>: amount of xFUND paid for data request</p>
</li>
<li>
<p><code v-pre>data</code>: data being requested</p>
</li>
<li>
<p><code v-pre>requestId</code>: the request ID
<a name="Router-RequestFulfilled-address-address-bytes32-uint256-"></a></p>
</li>
</ul>
<h3 id="event-requestfulfilled-address-consumer-address-provider-bytes32-requestid-uint256-requesteddata" tabindex="-1"><a class="header-anchor" href="#event-requestfulfilled-address-consumer-address-provider-bytes32-requestid-uint256-requesteddata" aria-hidden="true">#</a> Event <code v-pre>RequestFulfilled(address consumer, address provider, bytes32 requestId, uint256 requestedData)</code></h3>
<p>RequestFulfilled. Emitted when a provider fulfils a data request</p>
<h4 id="parameters-15" tabindex="-1"><a class="header-anchor" href="#parameters-15" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>consumer</code>: address of the Consumer's contract</p>
</li>
<li>
<p><code v-pre>provider</code>: address of the data provider</p>
</li>
<li>
<p><code v-pre>requestId</code>: the request ID being fulfilled</p>
</li>
<li>
<p><code v-pre>requestedData</code>: the data sent to the Consumer's contract
<a name="Router-TokenSet-address-"></a></p>
</li>
</ul>
<h3 id="event-tokenset-address-tokenaddress" tabindex="-1"><a class="header-anchor" href="#event-tokenset-address-tokenaddress" aria-hidden="true">#</a> Event <code v-pre>TokenSet(address tokenAddress)</code></h3>
<p>TokenSet. Emitted once during contract construction</p>
<h4 id="parameters-16" tabindex="-1"><a class="header-anchor" href="#parameters-16" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>tokenAddress</code>: contract address of token being used to pay fees
<a name="Router-ProviderRegistered-address-uint256-"></a></li>
</ul>
<h3 id="event-providerregistered-address-provider-uint256-minfee" tabindex="-1"><a class="header-anchor" href="#event-providerregistered-address-provider-uint256-minfee" aria-hidden="true">#</a> Event <code v-pre>ProviderRegistered(address provider, uint256 minFee)</code></h3>
<p>ProviderRegistered. Emitted when a provider registers</p>
<h4 id="parameters-17" tabindex="-1"><a class="header-anchor" href="#parameters-17" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>provider</code>: address of the provider</p>
</li>
<li>
<p><code v-pre>minFee</code>: new fee value
<a name="Router-SetProviderMinFee-address-uint256-uint256-"></a></p>
</li>
</ul>
<h3 id="event-setproviderminfee-address-provider-uint256-oldminfee-uint256-newminfee" tabindex="-1"><a class="header-anchor" href="#event-setproviderminfee-address-provider-uint256-oldminfee-uint256-newminfee" aria-hidden="true">#</a> Event <code v-pre>SetProviderMinFee(address provider, uint256 oldMinFee, uint256 newMinFee)</code></h3>
<p>SetProviderMinFee. Emitted when a provider changes their minimum token fee for providing data</p>
<h4 id="parameters-18" tabindex="-1"><a class="header-anchor" href="#parameters-18" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>provider</code>: address of the provider</p>
</li>
<li>
<p><code v-pre>oldMinFee</code>: old fee value</p>
</li>
<li>
<p><code v-pre>newMinFee</code>: new fee value
<a name="Router-SetProviderGranularFee-address-address-uint256-uint256-"></a></p>
</li>
</ul>
<h3 id="event-setprovidergranularfee-address-provider-address-consumer-uint256-oldfee-uint256-newfee" tabindex="-1"><a class="header-anchor" href="#event-setprovidergranularfee-address-provider-address-consumer-uint256-oldfee-uint256-newfee" aria-hidden="true">#</a> Event <code v-pre>SetProviderGranularFee(address provider, address consumer, uint256 oldFee, uint256 newFee)</code></h3>
<p>SetProviderGranularFee. Emitted when a provider changes their token fee for providing data
to a selected consumer contract</p>
<h4 id="parameters-19" tabindex="-1"><a class="header-anchor" href="#parameters-19" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>provider</code>: address of the provider</p>
</li>
<li>
<p><code v-pre>consumer</code>: address of the consumer</p>
</li>
<li>
<p><code v-pre>oldFee</code>: old fee value</p>
</li>
<li>
<p><code v-pre>newFee</code>: new fee value
<a name="Router-WithdrawFees-address-address-uint256-"></a></p>
</li>
</ul>
<h3 id="event-withdrawfees-address-provider-address-recipient-uint256-amount" tabindex="-1"><a class="header-anchor" href="#event-withdrawfees-address-provider-address-recipient-uint256-amount" aria-hidden="true">#</a> Event <code v-pre>WithdrawFees(address provider, address recipient, uint256 amount)</code></h3>
<p>WithdrawFees. Emitted when a provider withdraws their accumulated fees</p>
<h4 id="parameters-20" tabindex="-1"><a class="header-anchor" href="#parameters-20" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>provider</code>: address of the provider withdrawing</p>
</li>
<li>
<p><code v-pre>recipient</code>: address of the recipient</p>
</li>
<li>
<p><code v-pre>amount</code>: uint256 amount being withdrawn</p>
</li>
</ul>
<p><a name="Router-paidSufficientFee-uint256-address-"></a></p>
<h3 id="modifier-paidsufficientfee-uint256-feepaid-address-provider" tabindex="-1"><a class="header-anchor" href="#modifier-paidsufficientfee-uint256-feepaid-address-provider" aria-hidden="true">#</a> Modifier <code v-pre>paidSufficientFee(uint256 _feePaid, address _provider)</code></h3>
<p>Reverts if amount is not at least what the provider has set as their min fee</p>
<h4 id="parameters-21" tabindex="-1"><a class="header-anchor" href="#parameters-21" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_feePaid</code>: The payment for the request</p>
</li>
<li>
<p><code v-pre>_provider</code>: address of the provider
<a name="Router-hasAvailableTokens-uint256-"></a></p>
</li>
</ul>
<h3 id="modifier-hasavailabletokens-uint256-amount" tabindex="-1"><a class="header-anchor" href="#modifier-hasavailabletokens-uint256-amount" aria-hidden="true">#</a> Modifier <code v-pre>hasAvailableTokens(uint256 _amount)</code></h3>
<p>Reverts if amount requested is greater than withdrawable balance</p>
<h4 id="parameters-22" tabindex="-1"><a class="header-anchor" href="#parameters-22" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_amount</code>: The given amount to compare to <code v-pre>withdrawableTokens</code></li>
</ul>
</div></template>
