<template><div><h1 id="blockhashstore" tabindex="-1"><a class="header-anchor" href="#blockhashstore" aria-hidden="true">#</a> BlockhashStore</h1>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions:</h2>
<ul>
<li><a href="#BlockhashStore-storeEarliest--"><code v-pre>storeEarliest() external</code></a></li>
<li><a href="#BlockhashStore-getBlockhash-uint256-"><code v-pre>getBlockhash(uint256 n) external</code></a></li>
<li><a href="#BlockhashStore-store-uint256-"><code v-pre>store(uint256 n) public</code></a></li>
<li><a href="#BlockhashStore-storeVerifyHeader-uint256-bytes-"><code v-pre>storeVerifyHeader(uint256 n, bytes header) public</code></a></li>
</ul>
<p><a name="BlockhashStore-storeEarliest--"></a></p>
<h3 id="function-storeearliest-external" tabindex="-1"><a class="header-anchor" href="#function-storeearliest-external" aria-hidden="true">#</a> Function <code v-pre>storeEarliest() external </code></h3>
<p>No description
<a name="BlockhashStore-getBlockhash-uint256-"></a></p>
<h3 id="function-getblockhash-uint256-n-external-bytes32" tabindex="-1"><a class="header-anchor" href="#function-getblockhash-uint256-n-external-bytes32" aria-hidden="true">#</a> Function <code v-pre>getBlockhash(uint256 n) external  -&gt; bytes32</code></h3>
<p>No description</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>n</code>: the number of the block whose blockhash should be returned
<a name="BlockhashStore-store-uint256-"></a></li>
</ul>
<h3 id="function-store-uint256-n-public" tabindex="-1"><a class="header-anchor" href="#function-store-uint256-n-public" aria-hidden="true">#</a> Function <code v-pre>store(uint256 n) public </code></h3>
<p>No description</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li><code v-pre>n</code>: the number of the block whose blockhash should be stored
<a name="BlockhashStore-storeVerifyHeader-uint256-bytes-"></a></li>
</ul>
<h3 id="function-storeverifyheader-uint256-n-bytes-header-public" tabindex="-1"><a class="header-anchor" href="#function-storeverifyheader-uint256-n-bytes-header-public" aria-hidden="true">#</a> Function <code v-pre>storeVerifyHeader(uint256 n, bytes header) public </code></h3>
<p>No description</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4>
<ul>
<li>
<p><code v-pre>n</code>: the number of the block whose blockhash should be stored</p>
</li>
<li>
<p><code v-pre>header</code>: the rlp-encoded blockheader of block n+1. We verify its correctness by checking
that it hashes to a stored blockhash, and then extract parentHash to get the n-th blockhash.</p>
</li>
</ul>
</div></template>
