<template><div><h1 id="wrkchain-example" tabindex="-1"><a class="header-anchor" href="#wrkchain-example" aria-hidden="true">#</a> WRKChain Example</h1>
<p>This document will guide you though registering a new WRKChain and submitting hashes via a manual process. Although hash
submission is usually automated with the WRKOracle software, this guide will help you understand the process, and allow
for testing.</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Whenever you use <code v-pre>und</code> to send Txs or query the chain ensure you pass the correct data to the <code v-pre>--chain-id</code> and if
necessary <code v-pre>--node=</code> flags so that you connect to the correct network!</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>It is <em>HIGHLY</em> recommended that you only undertake this guide on
either <RouterLink to="/mainchain/examples/local-devnet.html">DevNet</RouterLink> or TestNet first.</p>
</div>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#registering-your-wrkchain">Registering your WRKChain</router-link></li><li><router-link to="#filter-wrkchain-metadata">Filter WRKChain metadata</router-link></li><li><router-link to="#recording-hashes">Recording Hashes</router-link></li><li><router-link to="#querying-a-wrkchain-on-mainchain">Querying a WRKChain on Mainchain</router-link></li></ul></nav>
<h2 id="registering-your-wrkchain" tabindex="-1"><a class="header-anchor" href="#registering-your-wrkchain" aria-hidden="true">#</a> Registering your WRKChain</h2>
<p>Registration is required so that the WRKChain has an identifier on Mainchain.
Registration incurs a one-time fee.</p>
<p>The following <code v-pre>und</code> command can be used to register your WRKChain, and assumes you have a local full node running,
connected to either DevNet or TestNet:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx wrkchain register --moniker<span class="token operator">=</span><span class="token string">"[YOUR_MONIKER]"</span> --genesis<span class="token operator">=</span><span class="token string">"[GENESIS_BLOCK_HASH]"</span> --name<span class="token operator">=</span><span class="token string">"[WRKCHAIN NAME]"</span> --base<span class="token operator">=</span><span class="token string">"[WRKCHAIN_TYPE]"</span> --from <span class="token punctuation">[</span>from_account<span class="token punctuation">]</span> --chain-id <span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span> --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>[YOUR_MONIKER]</code> - any alphanumeric identifier you want to give your WRKChain, e.g. wrkchain1</li>
<li><code v-pre>[GENESIS_BLOCK_HASH]</code> - the hash value for your genesis block. The <code v-pre>--genesis</code> flag is optional. The hash can be
obtained by running your genesis through a sha256 generator, for example.</li>
<li><code v-pre>[WRKCHAIN NAME]</code> - a name for your WRKChain, e.g. My First WRKChain. Optional</li>
<li><code v-pre>[from_account]</code> - your local account identifier (see <RouterLink to="/mainchain/examples/accounts-wallets.html">Accounts and Wallets</RouterLink>). This will be used
as the WRKChain Owner. <strong>Only the owner will be able to submit block hashes, so it is important to keep this account
safe!</strong></li>
<li><code v-pre>[chain_id]</code> - the ID of the chain to run the transaction on</li>
<li><code v-pre>[WRKCHAIN_TYPE]</code> - the type of WRKChain. Currently supported by WRKOracle are WRKChains built using <code v-pre>cosmos</code>, <code v-pre>eos</code>
, <code v-pre>geth</code>, <code v-pre>neo</code>, <code v-pre>stellar</code>, <code v-pre>tendermint</code>.</li>
</ul>
<p>For example, we have a local account and key set up called &quot;testwrk&quot;, and want
to register a new WRKChain, with the moniker &quot;wrkchain1&quot; called &quot;WRKChain Example 1&quot;:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx wrkchain register --moniker<span class="token operator">=</span><span class="token string">"wrkchain1"</span> --genesis<span class="token operator">=</span><span class="token string">"78521D6EFBEDF6D7EE9C73EDD3443B8021DADBE06ECE81F639B6EC57D8E3F3EA"</span> --name<span class="token operator">=</span><span class="token string">"WRKChain Example 1"</span> --base<span class="token operator">=</span><span class="token string">"tendermint"</span> --from testwrk --chain-id FUND-DevNet-2 --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once broadcast, you will receive confirmation with the TX Hash, which can be used to query the Tx.</p>
<p>Your WRKCHain's on-chain ID will be embedded in the Tx query result. Alternatively, you can run a search query to get
your WRKChain's details, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query wrkchain search --moniker wrkchain1 --chain-id FUND-DevNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will return a result similar to:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"wrkchain_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
    <span class="token property">"moniker"</span><span class="token operator">:</span> <span class="token string">"wrkchain1"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"WRKChain Example 1"</span><span class="token punctuation">,</span>
    <span class="token property">"genesis"</span><span class="token operator">:</span> <span class="token string">"78521D6EFBEDF6D7EE9C73EDD3443B8021DADBE06ECE81F639B6EC57D8E3F3EA"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"tendermint"</span><span class="token punctuation">,</span>
    <span class="token property">"lastblock"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"num_blocks"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"reg_time"</span><span class="token operator">:</span> <span class="token string">"1585752449"</span><span class="token punctuation">,</span>
    <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>wrkchain_id</code> value is what is required to submit hashes, and find your WRKChain's submitted block hashes.</p>
<p>The <code v-pre>lastblock</code> tells us for which block number hashes were last submitted for the WRKChain, and <code v-pre>num_blocks</code> the number
of block hashes the WRKChain has submitted in total. Finally, <code v-pre>reg_time</code> is a UNIX timestamp for when the WRKChain was
registered on Mainchain.</p>
<blockquote>
<p><strong>Important</strong>: Only the <code v-pre>owner</code> - i.e. the account used to register the WRKChain - will be able to submit block
hashes.</p>
</blockquote>
<h2 id="filter-wrkchain-metadata" tabindex="-1"><a class="header-anchor" href="#filter-wrkchain-metadata" aria-hidden="true">#</a> Filter WRKChain metadata</h2>
<p>WRKChain metadata can be searched for on Mainchain:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query wrkchain search --moniker wrkchain1
und query wrkchain search --owner und1chknpc8nf2tmj5582vhlvphnjyekc9ypspx5ay
und query wrkchain search --page=2 --limit=100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recording-hashes" tabindex="-1"><a class="header-anchor" href="#recording-hashes" aria-hidden="true">#</a> Recording Hashes</h2>
<p>Once successfully registered, you will be able to submit block hashes however
frequently suits your needs. To simulate how the WRKOracle works, we can run the following command to submit hashes:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx wrkchain record <span class="token number">1</span> --wc_height<span class="token operator">=</span><span class="token punctuation">[</span>BLOCK_HEIGHT<span class="token punctuation">]</span> --block_hash<span class="token operator">=</span><span class="token punctuation">[</span>BLOCK_HASH<span class="token punctuation">]</span> --parent_hash<span class="token operator">=</span><span class="token punctuation">[</span>PARENT_HASH<span class="token punctuation">]</span> --hash1<span class="token operator">=</span><span class="token punctuation">[</span>HASH1<span class="token punctuation">]</span> --hash2<span class="token operator">=</span><span class="token punctuation">[</span>HASH2<span class="token punctuation">]</span> --hash3<span class="token operator">=</span><span class="token punctuation">[</span>HASH3<span class="token punctuation">]</span> --from <span class="token punctuation">[</span>account_name<span class="token punctuation">]</span> --chain-id <span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span> --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>[BLOCK_HEIGHT]</code> - the height/number of the WRKChain block you are submitting hashes for</li>
<li><code v-pre>[BLOCK_HASH]</code> - the main block hash</li>
<li><code v-pre>[PARENT_HASH]</code> - the main block's parent block hash (optional)</li>
<li><code v-pre>[HASH1]</code> - an optional, arbitrary hash. This can be, for example, the Tx Merkle root hash</li>
<li><code v-pre>[HASH2]</code> - an optional, arbitrary hash. This can be, for example, the Tx Merkle root hash</li>
<li><code v-pre>[HASH3]</code> - an optional, arbitrary hash. This can be, for example, the Tx Merkle root hash</li>
<li><code v-pre>[from_account]</code> - your local account identifier (see <RouterLink to="/mainchain/examples/accounts-wallets.html">Accounts and Wallets</RouterLink>). This <strong>must</strong> be
the same as the <strong>owner</strong> used to register the WRKChain.</li>
<li><code v-pre>[chain_id]</code> - the ID of the chain to run the transaction on</li>
</ul>
<p>For example, if we just want to submit the block hash for block number 123, we can run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx wrkchain record <span class="token number">1</span> --wc_height<span class="token operator">=</span><span class="token number">123</span> --block_hash<span class="token operator">=</span>1BB457C575E72D7401C809B66290FAC56347223912F2484BA7E881D42495CD0F --from testwrk --chain-id FUND-DevNet-2 --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="querying-a-wrkchain-on-mainchain" tabindex="-1"><a class="header-anchor" href="#querying-a-wrkchain-on-mainchain" aria-hidden="true">#</a> Querying a WRKChain on Mainchain</h2>
<p>To retrieve a particular hash submitted for a WRKChain, we can run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query wrkchain block <span class="token punctuation">[</span>WRKCHAIN_ID<span class="token punctuation">]</span> <span class="token punctuation">[</span>HEIGHT<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>[WRKCHAIN_ID]</code> - the numeric ID for the WRKChain</li>
<li><code v-pre>[HEIGHT]</code> - the block number we wish to retrieve</li>
</ul>
<p>If <code v-pre>[HEIGHT]</code> has been submitted for <code v-pre>[WRKCHAIN_ID]</code>, the data will be
returned in a JSON object, If not, the returned object will contain empty
values, meaning the WRKChain has not submitted a value for this block
height.</p>
</div></template>
