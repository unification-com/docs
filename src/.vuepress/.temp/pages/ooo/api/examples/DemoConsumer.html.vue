<template><div><h1 id="ooo-data-consumer-demo" tabindex="-1"><a class="header-anchor" href="#ooo-data-consumer-demo" aria-hidden="true">#</a> OoO Data Consumer Demo</h1>
<p>Note the &quot;is ConsumerBase&quot;, to extend
https://github.com/unification-com/xfund-router/blob/main/contracts/lib/ConsumerBase.sol
ConsumerBase.sol interacts with the deployed Router.sol smart contract
which will route data requests and fee payment to the selected provider
and handle data fulfilment.</p>
<p>The selected provider will listen to the Router for requests, then send the data
back to the Router, which will in turn forward the data to your smart contract
after verifying the source of the data.</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#DemoConsumer-constructor-address-address-address-uint256-"><code v-pre>constructor(address _router, address _xfund, address _provider, uint256 _fee) public</code></a></li>
<li><a href="#DemoConsumer-setProvider-address-"><code v-pre>setProvider(address _provider) external</code></a></li>
<li><a href="#DemoConsumer-setFee-uint256-"><code v-pre>setFee(uint256 _fee) external</code></a></li>
<li><a href="#DemoConsumer-getData-bytes32-"><code v-pre>getData(bytes32 _data) external</code></a></li>
<li><a href="#DemoConsumer-increaseRouterAllowance-uint256-"><code v-pre>increaseRouterAllowance(uint256 _amount) external</code></a></li>
<li><a href="#DemoConsumer-setRouter-address-"><code v-pre>setRouter(address _router) external</code></a></li>
<li><a href="#DemoConsumer-withdrawxFund-address-uint256-"><code v-pre>withdrawxFund(address _to, uint256 _value) external</code></a></li>
<li><a href="#DemoConsumer-receiveData-uint256-bytes32-"><code v-pre>receiveData(uint256 _price, bytes32 _requestId) internal</code></a></li>
</ul>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events:</h2>
<ul>
<li><a href="#DemoConsumer-PriceDiff-bytes32-uint256-uint256-int256-"><code v-pre>PriceDiff(bytes32 requestId, uint256 oldPrice, uint256 newPrice, int256 diff)</code></a></li>
</ul>
<p><a name="DemoConsumer-constructor-address-address-address-uint256-"></a></p>
<h3 id="function-constructor-address-router-address-xfund-address-provider-uint256-fee-public" tabindex="-1"><a class="header-anchor" href="#function-constructor-address-router-address-xfund-address-provider-uint256-fee-public" aria-hidden="true">#</a> Function <code v-pre>constructor(address _router, address _xfund, address _provider, uint256 _fee) public </code></h3>
<p>constructor must pass the address of the Router and xFUND smart
contracts to the constructor of your contract! Without it, this contract
cannot interact with the system, nor request/receive any data.
The constructor calls the parent ConsumerBase constructor to set these.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_router</code>: address of the Router smart contract</p>
</li>
<li>
<p><code v-pre>_xfund</code>: address of the xFUND smart contract</p>
</li>
<li>
<p><code v-pre>_provider</code>: address of the default provider</p>
</li>
<li>
<p><code v-pre>_fee</code>: uint256 default fee
<a name="DemoConsumer-setProvider-address-"></a></p>
</li>
</ul>
<h3 id="function-setprovider-address-provider-external" tabindex="-1"><a class="header-anchor" href="#function-setprovider-address-provider-external" aria-hidden="true">#</a> Function <code v-pre>setProvider(address _provider) external </code></h3>
<p>setProvider change default provider. Uses OpenZeppelin's
onlyOwner modifier to secure the function.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_provider</code>: address of the default provider
<a name="DemoConsumer-setFee-uint256-"></a></li>
</ul>
<h3 id="function-setfee-uint256-fee-external" tabindex="-1"><a class="header-anchor" href="#function-setfee-uint256-fee-external" aria-hidden="true">#</a> Function <code v-pre>setFee(uint256 _fee) external </code></h3>
<p>setFee change default fee. Uses OpenZeppelin's
onlyOwner modifier to secure the function.</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_fee</code>: uint256 default fee
<a name="DemoConsumer-getData-bytes32-"></a></li>
</ul>
<h3 id="function-getdata-bytes32-data-external-bytes32" tabindex="-1"><a class="header-anchor" href="#function-getdata-bytes32-data-external-bytes32" aria-hidden="true">#</a> Function <code v-pre>getData(bytes32 _data) external  -&gt; bytes32</code></h3>
<p>getData the actual function to request data.</p>
<p>NOTE: Calls ConsumerBase.sol's requestData function.</p>
<p>Uses OpenZeppelin's onlyOwner modifier to secure the function.
The data format can be found at
https://docs.finchains.io/guide/ooo_api.html
Endpoints should be Hex encoded using, for example
the web3.utils.asciiToHex function.</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_data</code>: bytes32 data being requested.
<a name="DemoConsumer-increaseRouterAllowance-uint256-"></a></li>
</ul>
<h3 id="function-increaserouterallowance-uint256-amount-external" tabindex="-1"><a class="header-anchor" href="#function-increaserouterallowance-uint256-amount-external" aria-hidden="true">#</a> Function <code v-pre>increaseRouterAllowance(uint256 _amount) external </code></h3>
<p>increaseRouterAllowance allows the Router to spend xFUND on behalf of this
smart contract.</p>
<p>NOTE: Calls the internal _increaseRouterAllowance function in ConsumerBase.sol.</p>
<p>Required so that xFUND fees can be paid. Uses OpenZeppelin's onlyOwner modifier
to secure the function.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_amount</code>: uint256 amount to increase
<a name="DemoConsumer-setRouter-address-"></a></li>
</ul>
<h3 id="function-setrouter-address-router-external" tabindex="-1"><a class="header-anchor" href="#function-setrouter-address-router-external" aria-hidden="true">#</a> Function <code v-pre>setRouter(address _router) external </code></h3>
<p>setRouter allows updating the Router contract address</p>
<p>NOTE: Calls the internal setRouter function in ConsumerBase.sol.</p>
<p>Can be used if network upgrades require new Router deployments.
Uses OpenZeppelin's onlyOwner modifier to secure the function.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>_router</code>: address new Router address
<a name="DemoConsumer-withdrawxFund-address-uint256-"></a></li>
</ul>
<h3 id="function-withdrawxfund-address-to-uint256-value-external" tabindex="-1"><a class="header-anchor" href="#function-withdrawxfund-address-to-uint256-value-external" aria-hidden="true">#</a> Function <code v-pre>withdrawxFund(address _to, uint256 _value) external </code></h3>
<p>increaseRouterAllowance allows contract owner to withdraw
any xFUND held in this contract.
Uses OpenZeppelin's onlyOwner modifier to secure the function.</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_to</code>: address recipient</p>
</li>
<li>
<p><code v-pre>_value</code>: uint256 amount to withdraw
<a name="DemoConsumer-receiveData-uint256-bytes32-"></a></p>
</li>
</ul>
<h3 id="function-receivedata-uint256-price-bytes32-requestid-internal" tabindex="-1"><a class="header-anchor" href="#function-receivedata-uint256-price-bytes32-requestid-internal" aria-hidden="true">#</a> Function <code v-pre>receiveData(uint256 _price, bytes32 _requestId) internal </code></h3>
<p>recieveData - example end user function to receive data. This will be called
by the data provider, via the Router's fulfillRequest, and through the ConsumerBase's
rawReceiveData function.</p>
<p>Note: validation of the data and data provider sending the data is handled
by the Router smart contract prior to it forwarding the data to your contract, allowing
devs to focus on pure functionality. ConsumerBase.sol's rawReceiveData
function can only be called by the Router smart contract.</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_price</code>: uint256 result being sent</p>
</li>
<li>
<p><code v-pre>_requestId</code>: bytes32 request ID of the request being fulfilled</p>
</li>
</ul>
<p><a name="DemoConsumer-PriceDiff-bytes32-uint256-uint256-int256-"></a></p>
<h3 id="event-pricediff-bytes32-requestid-uint256-oldprice-uint256-newprice-int256-diff" tabindex="-1"><a class="header-anchor" href="#event-pricediff-bytes32-requestid-uint256-oldprice-uint256-newprice-int256-diff" aria-hidden="true">#</a> Event <code v-pre>PriceDiff(bytes32 requestId, uint256 oldPrice, uint256 newPrice, int256 diff)</code></h3>
<p>No description</p>
</div></template>
