<template><div><h1 id="ooo-requestidbase" tabindex="-1"><a class="header-anchor" href="#ooo-requestidbase" aria-hidden="true">#</a> OoO RequestIdBase</h1>
<p>A contract used by ConsumerBase and Router to generate requestIds</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#RequestIdBase-makeRequestId-address-address-address-uint256-bytes32-"><code v-pre>makeRequestId(address _dataConsumer, address _dataProvider, address _router, uint256 _requestNonce, bytes32 _data) internal</code></a></li>
</ul>
<p><a name="RequestIdBase-makeRequestId-address-address-address-uint256-bytes32-"></a></p>
<h3 id="function-makerequestid-address-dataconsumer-address-dataprovider-address-router-uint256-requestnonce-bytes32-data-internal-bytes32" tabindex="-1"><a class="header-anchor" href="#function-makerequestid-address-dataconsumer-address-dataprovider-address-router-uint256-requestnonce-bytes32-data-internal-bytes32" aria-hidden="true">#</a> Function <code v-pre>makeRequestId(address _dataConsumer, address _dataProvider, address _router, uint256 _requestNonce, bytes32 _data) internal  -&gt; bytes32</code></h3>
<p>makeRequestId generates a requestId</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>_dataConsumer</code>: address of consumer contract</p>
</li>
<li>
<p><code v-pre>_dataProvider</code>: address of provider</p>
</li>
<li>
<p><code v-pre>_router</code>: address of Router contract</p>
</li>
<li>
<p><code v-pre>_requestNonce</code>: uint256 request nonce</p>
</li>
<li>
<p><code v-pre>_data</code>: bytes32 hex encoded data endpoint</p>
</li>
</ul>
<h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values:</h4>
<ul>
<li>bytes32 requestId</li>
</ul>
</div></template>
