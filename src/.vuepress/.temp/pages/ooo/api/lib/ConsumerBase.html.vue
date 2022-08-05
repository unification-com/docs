<template><div><h1 id="ooo-consumerbase-smart-contract" tabindex="-1"><a class="header-anchor" href="#ooo-consumerbase-smart-contract" aria-hidden="true">#</a> OoO ConsumerBase smart contract</h1>
<p>This contract can be imported by any smart contract wishing to include
off-chain data or data from a different network within it.</p>
<p>The consumer initiates a data request by forwarding the request to the Router
smart contract, from where the data provider(s) pick up and process the
data request, and forward it back to the specified callback function.</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#ConsumerBase-constructor-address-address-"><code v-pre>constructor(address _router, address _xfund) internal</code></a></li>
<li><a href="#ConsumerBase-_setRouter-address-"><code v-pre>_setRouter(address _router) internal</code></a></li>
<li><a href="#ConsumerBase-_increaseRouterAllowance-uint256-"><code v-pre>_increaseRouterAllowance(uint256 _amount) internal</code></a></li>
<li><a href="#ConsumerBase-_requestData-address-uint256-bytes32-"><code v-pre>_requestData(address _dataProvider, uint256 _fee, bytes32 _data) internal</code></a></li>
<li><a href="#ConsumerBase-rawReceiveData-uint256-bytes32-"><code v-pre>rawReceiveData(uint256 _price, bytes32 _requestId) external</code></a></li>
<li><a href="#ConsumerBase-receiveData-uint256-bytes32-"><code v-pre>receiveData(uint256 _price, bytes32 _requestId) internal</code></a></li>
<li><a href="#ConsumerBase-getRouterAddress--"><code v-pre>getRouterAddress() external</code></a></li>
</ul>
<p><a name="ConsumerBase-constructor-address-address-"></a></p>
<h3 id="function-constructor-address-router-address-xfund-internal" tabindex="-1"><a class="header-anchor" href="#function-constructor-address-router-address-xfund-internal" aria-hidden="true">#</a> Function <code v-pre>constructor(address _router, address _xfund) internal </code></h3>
<p>Contract constructor. Accepts the address for the router smart contract,
and a token allowance for the Router to spend on the consumer's behalf (to pay fees).</p>
<p>The Consumer contract should have enough tokens allocated to it to pay fees
and the Router should be able to use the Tokens to forward fees.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_router</code>: address of the deployed Router smart contract</p>
</li>
<li>
<p><code v-pre>_xfund</code>: address of the deployed xFUND smart contract
<a name="ConsumerBase-_setRouter-address-"></a></p>
</li>
</ul>
<h3 id="function-setrouter-address-router-internal-bool" tabindex="-1"><a class="header-anchor" href="#function-setrouter-address-router-internal-bool" aria-hidden="true">#</a> Function <code v-pre>_setRouter(address _router) internal  -&gt; bool</code></h3>
<p>No description</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_router</code>: address of the deployed Router smart contract
<a name="ConsumerBase-_increaseRouterAllowance-uint256-"></a></li>
</ul>
<h3 id="function-increaserouterallowance-uint256-amount-internal-bool" tabindex="-1"><a class="header-anchor" href="#function-increaserouterallowance-uint256-amount-internal-bool" aria-hidden="true">#</a> Function <code v-pre>_increaseRouterAllowance(uint256 _amount) internal  -&gt; bool</code></h3>
<p>No description</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_amount</code>: uint256 amount to increase allowance by
<a name="ConsumerBase-_requestData-address-uint256-bytes32-"></a></li>
</ul>
<h3 id="function-requestdata-address-dataprovider-uint256-fee-bytes32-data-internal-bytes32" tabindex="-1"><a class="header-anchor" href="#function-requestdata-address-dataprovider-uint256-fee-bytes32-data-internal-bytes32" aria-hidden="true">#</a> Function <code v-pre>_requestData(address _dataProvider, uint256 _fee, bytes32 _data) internal  -&gt; bytes32</code></h3>
<p>_requestData - initialises a data request. forwards the request to the deployed
Router smart contract.</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_dataProvider</code>: payable address of the data provider</p>
</li>
<li>
<p><code v-pre>_fee</code>: uint256 fee to be paid</p>
</li>
<li>
<p><code v-pre>_data</code>: bytes32 value of data being requested, e.g. PRICE.BTC.USD.AVG requests
average price for BTC/USD pair</p>
</li>
</ul>
<h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>requestId bytes32 request ID which can be used to track or cancel the request
<a name="ConsumerBase-rawReceiveData-uint256-bytes32-"></a></li>
</ul>
<h3 id="function-rawreceivedata-uint256-price-bytes32-requestid-external" tabindex="-1"><a class="header-anchor" href="#function-rawreceivedata-uint256-price-bytes32-requestid-external" aria-hidden="true">#</a> Function <code v-pre>rawReceiveData(uint256 _price, bytes32 _requestId) external </code></h3>
<p>rawReceiveData - Called by the Router's fulfillRequest function
in order to fulfil a data request. Data providers call the Router's fulfillRequest function
The request is validated to ensure it has indeed been sent via the Router.</p>
<p>The Router will only call rawReceiveData once it has validated the origin of the data fulfillment.
rawReceiveData then calls the user defined receiveData function to finalise the fulfilment.
Contract developers will need to override the abstract receiveData function defined below.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_price</code>: uint256 result being sent</p>
</li>
<li>
<p><code v-pre>_requestId</code>: bytes32 request ID of the request being fulfilled
has sent the data
<a name="ConsumerBase-receiveData-uint256-bytes32-"></a></p>
</li>
</ul>
<h3 id="function-receivedata-uint256-price-bytes32-requestid-internal" tabindex="-1"><a class="header-anchor" href="#function-receivedata-uint256-price-bytes32-requestid-internal" aria-hidden="true">#</a> Function <code v-pre>receiveData(uint256 _price, bytes32 _requestId) internal </code></h3>
<p>receiveData - should be overridden by contract developers to process the
data fulfilment in their own contract.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_price</code>: uint256 result being sent</p>
</li>
<li>
<p><code v-pre>_requestId</code>: bytes32 request ID of the request being fulfilled
<a name="ConsumerBase-getRouterAddress--"></a></p>
</li>
</ul>
<h3 id="function-getrouteraddress-external-address" tabindex="-1"><a class="header-anchor" href="#function-getrouteraddress-external-address" aria-hidden="true">#</a> Function <code v-pre>getRouterAddress() external  -&gt; address</code></h3>
<p>getRouterAddress returns the address of the Router smart contract being used</p>
</div></template>
