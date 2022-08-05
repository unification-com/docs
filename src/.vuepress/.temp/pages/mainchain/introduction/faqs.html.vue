<template><div><h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#_1-what-is-unification-mainchain">1. What is Unification Mainchain?</router-link><ul><li><router-link to="#_1-1-what-is-the-official-project-website">1.1. What is the official project website?</router-link></li><li><router-link to="#_1-2-what-are-the-github-repo-addresses">1.2. What are the Github repo addresses?</router-link></li></ul></li><li><router-link to="#_2-where-can-i-find-the-main-api-documents">2. Where can I find the main API documents?</router-link></li><li><router-link to="#_3-where-is-the-block-explorer">3. Where is the block explorer?</router-link></li><li><router-link to="#_4-where-can-i-get-the-pre-compiled-binaries">4. Where can I get the pre-compiled binaries?</router-link></li><li><router-link to="#_5-how-do-i-compile-the-code-from-source">5. How do I compile the code from source?</router-link></li><li><router-link to="#_6-what-is-the-currency-used-on-mainchain">6. What is the currency used on Mainchain?</router-link></li><li><router-link to="#_7-quick-start-commands">7. Quick start commands</router-link><ul><li><router-link to="#_7-1-how-to-get-the-block-height">7.1. How to get the block height?</router-link></li><li><router-link to="#_7-2-how-do-i-create-new-wallet-address">7.2. How do I create new wallet address?</router-link></li><li><router-link to="#_7-3-how-to-transfer-fund">7.3. How to transfer FUND?</router-link></li><li><router-link to="#_7-4-how-do-i-get-all-transactions-related-to-one-wallet-account">7.4. How do I get all transactions related to one wallet/account?</router-link></li><li><router-link to="#_7-5-how-do-i-get-the-fund-balance-for-one-wallet-account">7.5. How do I get the FUND balance for one wallet/account?</router-link></li><li><router-link to="#_7-6-how-do-i-query-the-total-fund-supply">7.6 How do I query the total FUND supply?</router-link></li><li><router-link to="#_7-7-how-do-i-query-the-enterprise-fund-supply-and-what-is-the-significance-of-amount-locked-total">7.7 How do I query the Enterprise FUND supply, and what is the significance of amount/locked/total?</router-link></li><li><router-link to="#_7-8-how-do-i-export-dump-backup-a-wallet">7.8. How do I export（dump/backup）a wallet?</router-link></li><li><router-link to="#_7-9-how-do-i-import-a-wallet">7.9. How do I import a wallet?</router-link></li></ul></li></ul></nav>
<h2 id="_1-what-is-unification-mainchain" tabindex="-1"><a class="header-anchor" href="#_1-what-is-unification-mainchain" aria-hidden="true">#</a> 1. What is Unification Mainchain?</h2>
<p>Unification is a scalable master blockchain for Enterprise.</p>
<ol>
<li>WrkChains can be considered similar to side-chains which allow scaling processing power and cost metrics for
enterprises who need an immutable blockchain without being directly on a public blockchain</li>
<li>Mainchain  is the master 100% public blockchain which WrkChains consume FUND to submit their block header hashes to
Mainchain for public immutability.</li>
</ol>
<p>See <RouterLink to="/mainchain/introduction/about-mainchain.html">About Mainchain</RouterLink> for further details.</p>
<h3 id="_1-1-what-is-the-official-project-website" tabindex="-1"><a class="header-anchor" href="#_1-1-what-is-the-official-project-website" aria-hidden="true">#</a> 1.1. What is the official project website?</h3>
<p><a href="https://unification.com" target="_blank" rel="noopener noreferrer">https://unification.com<ExternalLinkIcon/></a></p>
<h3 id="_1-2-what-are-the-github-repo-addresses" tabindex="-1"><a class="header-anchor" href="#_1-2-what-are-the-github-repo-addresses" aria-hidden="true">#</a> 1.2. What are the Github repo addresses?</h3>
<ul>
<li><a href="https://github.com/unification-com" target="_blank" rel="noopener noreferrer">https://github.com/unification-com<ExternalLinkIcon/></a></li>
<li>Mainchain repo - <a href="https://github.com/unification-com/mainchain" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_2-where-can-i-find-the-main-api-documents" tabindex="-1"><a class="header-anchor" href="#_2-where-can-i-find-the-main-api-documents" aria-hidden="true">#</a> 2. Where can I find the main API documents?</h2>
<ul>
<li><code v-pre>und</code> command reference: <RouterLink to="/mainchain/software/und_cmd/und.html">und commands</RouterLink></li>
<li>Public REST API:<br>
<strong>MainNet</strong> - <a href="https://rest.unification.io/swagger/" target="_blank" rel="noopener noreferrer">https://rest.unification.io/swagger/<ExternalLinkIcon/></a><br>
<strong>TestNet</strong> - <a href="https://rest-testnet.unification.io/swagger/" target="_blank" rel="noopener noreferrer">https://rest-testnet.unification.io/swagger/<ExternalLinkIcon/></a></li>
<li>Public RPC Interface:<br>
<strong>MainNet</strong> - <a href="https://rpc1.unification.io" target="_blank" rel="noopener noreferrer">https://rpc1.unification.io:443<ExternalLinkIcon/></a><br>
<strong>TestNet</strong> - <a href="https://rpc-testnet.unification.io" target="_blank" rel="noopener noreferrer">https://rpc-testnet.unification.io:443<ExternalLinkIcon/></a><br>
The RPC specification is the same as <a href="https://docs.tendermint.com/master/rpc/" target="_blank" rel="noopener noreferrer">Tendermint<ExternalLinkIcon/></a>.</li>
</ul>
<h2 id="_3-where-is-the-block-explorer" tabindex="-1"><a class="header-anchor" href="#_3-where-is-the-block-explorer" aria-hidden="true">#</a> 3. Where is the block explorer?</h2>
<ul>
<li><strong>MainNet</strong> - <a href="https://explorer.unification.io" target="_blank" rel="noopener noreferrer">https://explorer.unification.io<ExternalLinkIcon/></a></li>
<li><strong>TestNet</strong> - <a href="https://explorer-testnet.unification.io" target="_blank" rel="noopener noreferrer">https://explorer-testnet.unification.io<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_4-where-can-i-get-the-pre-compiled-binaries" tabindex="-1"><a class="header-anchor" href="#_4-where-can-i-get-the-pre-compiled-binaries" aria-hidden="true">#</a> 4. Where can I get the pre-compiled binaries?</h2>
<p>Latest compiled binaries available from <a href="https://github.com/unification-com/mainchain/releases" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain/releases<ExternalLinkIcon/></a></p>
<ul>
<li><code v-pre>und</code> software has been compiled for Linux x86_64, OSX and Windows. Tested on CentOS, and Ubuntu</li>
</ul>
<h2 id="_5-how-do-i-compile-the-code-from-source" tabindex="-1"><a class="header-anchor" href="#_5-how-do-i-compile-the-code-from-source" aria-hidden="true">#</a> 5. How do I compile the code from source?</h2>
<p>Build instructions are <RouterLink to="/mainchain/software/installation.html#building-from-source">available here</RouterLink></p>
<p>This will build and install the <code v-pre>und</code> binary into <code v-pre>$GOPATH/bin</code></p>
<h2 id="_6-what-is-the-currency-used-on-mainchain" tabindex="-1"><a class="header-anchor" href="#_6-what-is-the-currency-used-on-mainchain" aria-hidden="true">#</a> 6. What is the currency used on Mainchain?</h2>
<p>The currency used on Mainchain is <strong>FUND</strong>. However, the native on-chain coin denomination
(on MainNet, TestNet and DevNet) is <strong><code v-pre>nund</code></strong>, or &quot;Nano Unification Denomination&quot;,
such that <strong>1,000,000,000 nund == 1 FUND</strong>.</p>
<p>All transactions, fees and stakes are defined and paid for in <code v-pre>nund</code>. For example, if you need to send <strong>1 FUND</strong> to
your friend, you will need to set your Tx to send <code v-pre>1000000000nund</code>.</p>
<p>See &quot;<RouterLink to="/mainchain/introduction/denomination.html">Native Coin Denomination <code v-pre>nund</code></RouterLink>&quot; for more details.</p>
<h2 id="_7-quick-start-commands" tabindex="-1"><a class="header-anchor" href="#_7-quick-start-commands" aria-hidden="true">#</a> 7. Quick start commands</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>PROTOCOL</code> in the <code v-pre>--node</code> flags below may be <code v-pre>tcp</code>, <code v-pre>http</code> or <code v-pre>https</code>, depending on the configuration of the full
node being queried/used for broadcast.</p>
</div>
<h3 id="_7-1-how-to-get-the-block-height" tabindex="-1"><a class="header-anchor" href="#_7-1-how-to-get-the-block-height" aria-hidden="true">#</a> 7.1. How to get the block height?</h3>
<p>Several methods available:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und status --chain-id<span class="token operator">=</span>CHAIN_ID --node PROTOCOL://NODE:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>TestNet Example</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und status --chain-id<span class="token operator">=</span>FUND-TestNet-2 --node<span class="token operator">=</span>https://rpc-testnet.unification.io:443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>MainNet Example</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und status --chain-id<span class="token operator">=</span>FUND-MainNet-2 --node<span class="token operator">=</span>https://rpc1.unification.io:443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A JSON or text object is returned, and latest height available from <code v-pre>sync_info.latest_block_height</code></p>
<p>RPC equivalent on TestNet: <a href="https://rpc-testnet.unification.io:443/abci_info" target="_blank" rel="noopener noreferrer">https://rpc-testnet.unification.io:443/abci_info<ExternalLinkIcon/></a>
and MainNet: <a href="https://rpc1.unification.io:443/abci_info" target="_blank" rel="noopener noreferrer">https://rpc1.unification.io:443/abci_info<ExternalLinkIcon/></a></p>
<p><code v-pre>und query block</code> can also be used:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query block --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return the latest block info if no height is passed to the query.</p>
<p><strong>TestNet</strong> example, using the public RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query block --chain-id<span class="token operator">=</span>FUND-TestNet-2 --node<span class="token operator">=</span>https://rpc-testnet.unification.io:443 --trust-node<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>MainNet</strong> example, using the public RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query block --chain-id<span class="token operator">=</span>FUND-MainNet-2 --node<span class="token operator">=</span>https://rpc1.unification.io:443 --trust-node<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finally, a <code v-pre>curl</code> request can be made to the RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s https://rpc-testnet.unification.io/status
<span class="token function">curl</span> -s https://rpc1.unification.io/status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-how-do-i-create-new-wallet-address" tabindex="-1"><a class="header-anchor" href="#_7-2-how-do-i-create-new-wallet-address" aria-hidden="true">#</a> 7.2. How do I create new wallet address?</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> ACC_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>ACC_NAME</code> is whatever ASCII identifier you want to give the account/wallet/address, and is used to reference the
account when creating/signing Txs.</p>
<p>The command will output pertinent information - name (as passed in the command), wallet address, public key and recovery
mnemonic in either JSON or text format.</p>
<p>Example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> some_new_account
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run <code v-pre>und keys add --help</code> or see the <RouterLink to="/mainchain/software/und_cmd/und_keys_add.html">und keys add</RouterLink> reference for details on
flags/command options  etc.</p>
<h3 id="_7-3-how-to-transfer-fund" tabindex="-1"><a class="header-anchor" href="#_7-3-how-to-transfer-fund" aria-hidden="true">#</a> 7.3. How to transfer FUND?</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx send <span class="token punctuation">[</span>from_key_or_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>to_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>amount<span class="token punctuation">]</span> --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE_IP:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Amount is <code v-pre>nund</code> - &quot;Nano Unification Denomination&quot;, such that <strong>1,000,000,000 nund == 1 FUND</strong>. See <RouterLink to="/mainchain/introduction/denomination.html">denomination</RouterLink>.</p>
<p>Example to send <strong>10 FUND</strong> from <code v-pre>my_account</code> account (see Q7.2 about account names) on <strong>TestNet</strong>, using the public RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx send my_account und1nkhnc5e8pvph4phv93k0lkscc7yf5eh9kas5f6 10000000000nund <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>FUND-TestNet-2 <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>https://rpc-testnet.unification.io:443 <span class="token punctuation">\</span>
  --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
  --gas-prices<span class="token operator">=</span><span class="token number">25</span>.0nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The same example, using <strong>MainNet</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx send my_account und1nkhnc5e8pvph4phv93k0lkscc7yf5eh9kas5f6 10000000000nund <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>FUND-MainNet-2 <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>https://rpc1.unification.io:443 <span class="token punctuation">\</span>
  --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
  --gas-prices<span class="token operator">=</span><span class="token number">25</span>.0nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <RouterLink to="/mainchain/software/und_cmd/und_tx_bank_send.html">und tx bank send</RouterLink> and <RouterLink to="/mainchain/introduction/fees-and-gas.html">fees and gas</RouterLink> for more in-depth
information.</p>
<h3 id="_7-4-how-do-i-get-all-transactions-related-to-one-wallet-account" tabindex="-1"><a class="header-anchor" href="#_7-4-how-do-i-get-all-transactions-related-to-one-wallet-account" aria-hidden="true">#</a> 7.4. How do I get all transactions related to one wallet/account?</h3>
<p><code v-pre>und query txs</code> can be used to query all transactions. Passing the <code v-pre>--events</code> flag will allow you to filter indexed events by a particular account. Data is returned paginated.</p>
<p><strong>TestNet</strong> example to get Txs sent by <code v-pre>und17jv7rerc2e3undqumpf32a3xs9jc0kjk4z2car</code>, using the public RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query txs --events <span class="token string">'message.sender=und17jv7rerc2e3undqumpf32a3xs9jc0kjk4z2car'</span> <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>FUND-TestNet-2 <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>https://rpc-testnet.unification.io:443 <span class="token punctuation">\</span>
  --page <span class="token number">1</span> <span class="token punctuation">\</span>
  --limit <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The same query, using <strong>MainNet</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query txs --events <span class="token string">'message.sender=und17jv7rerc2e3undqumpf32a3xs9jc0kjk4z2car'</span> <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>FUND-MainNet-2 <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>https://rpc1.unification.io:443 <span class="token punctuation">\</span>
  --page <span class="token number">1</span> <span class="token punctuation">\</span>
  --limit <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>--events</code> flag can contain any <code v-pre>{eventType}.{eventAttribute}={value}</code> type query. For
example <code v-pre>--events 'transfer.recipient=und17jv7rerc2e3undqumpf32a3xs9jc0kjk4z2car'</code> will return queries relating
to transfers into the account. See <RouterLink to="/mainchain/software/und_cmd/und_query_txs.html">und query txs</RouterLink> for further information.</p>
<h3 id="_7-5-how-do-i-get-the-fund-balance-for-one-wallet-account" tabindex="-1"><a class="header-anchor" href="#_7-5-how-do-i-get-the-fund-balance-for-one-wallet-account" aria-hidden="true">#</a> 7.5. How do I get the FUND balance for one wallet/account?</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query account <span class="token punctuation">[</span>address<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE_IP:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example on <strong>TestNet</strong>, using the public RPC node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query account und1eyn7s6qz2gcnfld0uskwxedyunpgjhlcjhvul9 --chain-id<span class="token operator">=</span>FUND-TestNet-2 --node<span class="token operator">=</span>https://rpc-testnet.unification.io:443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Using <strong>MainNet</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query account und1eyn7s6qz2gcnfld0uskwxedyunpgjhlcjhvul9 --chain-id<span class="token operator">=</span>FUND-MainNet-2 --node<span class="token operator">=</span>https://rpc1.unification.io:443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return a JSON or text object (depending on options passed). <code v-pre>account.value.coins</code> in the returned result shows
the amount of <code v-pre>nund</code>. The above example (currently) shows the account has <strong>10000000000 nund (10 FUND)</strong> on TestNet.</p>
<h3 id="_7-6-how-do-i-query-the-total-fund-supply" tabindex="-1"><a class="header-anchor" href="#_7-6-how-do-i-query-the-total-fund-supply" aria-hidden="true">#</a> 7.6 How do I query the total FUND supply?</h3>
<p>The command</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query supply --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE_IP:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">amount</span><span class="token punctuation">:</span> <span class="token string">"120010263000000000"</span>
  <span class="token key atrule">denom</span><span class="token punctuation">:</span> nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The equivalent REST query is at the enpoint <code v-pre>/mainchain/enterprise/v1/supply</code> - for example:</p>
<ul>
<li>TestNet public REST server <a href="https://rest-testnet.unification.io/mainchain/enterprise/v1/supply" target="_blank" rel="noopener noreferrer">https://rest-testnet.unification.io/mainchain/enterprise/v1/supply<ExternalLinkIcon/></a></li>
<li>MainNet public REST server <a href="https://rest.unification.io/mainchain/enterprise/v1/supply" target="_blank" rel="noopener noreferrer">https://rest.unification.io/mainchain/enterprise/v1/supply<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT!!!</p>
<p>the <code v-pre>/mainchain/enterprise/v1/supply</code> endpoint <strong>MUST</strong> be used instead of <code v-pre>/cosmos/bank/v1beta1/supply</code> to get true
total supply available for general use, i.e. with locked eFUND removed from total</p>
</div>
<h3 id="_7-7-how-do-i-query-the-enterprise-fund-supply-and-what-is-the-significance-of-amount-locked-total" tabindex="-1"><a class="header-anchor" href="#_7-7-how-do-i-query-the-enterprise-fund-supply-and-what-is-the-significance-of-amount-locked-total" aria-hidden="true">#</a> 7.7 How do I query the Enterprise FUND supply, and what is the significance of amount/locked/total?</h3>
<p>The command</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query enterprise ent-supply --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE_IP:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return the complete supply information. Three quantity values are returned:</p>
<ol>
<li><strong>amount</strong>: Liquid FUND in active circulation, and the actual circulating total supply which is available and can be used for FUND transfers, staking, Tx fees etc. It is the <strong>locked</strong> amount subtracted from <strong>total</strong>. <em>This is the important value when processing any calculations dependent on FUND circulation/total supply of FUND etc.</em></li>
<li><strong>locked</strong>: Total FUND locked through Enterprise purchases. This FUND is only available specifically to pay WRKChain/BEACON fees and <strong>cannot</strong> be used for transfers, staking/delegation or any other transactions. <em>Locked FUND only enters the active circulation supply once it has been used to pay for WRKChain/BEACON fees. Until then, it is considered &quot;dormant&quot;, and not part of the circulating total supply</em></li>
<li><strong>total</strong>: The total amount of FUND currently known on the chain, including any Enterprise <strong>locked</strong> FUND. This is for informational purposes only and should not be used for any &quot;circulating/total supply&quot; calculations.</li>
</ol>
<p>The <strong>amount</strong> value is the important value regarding total supply <em>currently in active circulation</em>, and is the
information that should be used to represent any &quot;total supply/circulation&quot; values for example in block explorers,
wallets, exchanges etc.</p>
<p>Consider the following <code v-pre>und query supply</code> result:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">supply</span><span class="token punctuation">:</span>
  <span class="token key atrule">amount</span><span class="token punctuation">:</span> <span class="token string">"120010263000000000"</span>
  <span class="token key atrule">denom</span><span class="token punctuation">:</span> nund
  <span class="token key atrule">locked</span><span class="token punctuation">:</span> <span class="token string">"89737000000000"</span>
  <span class="token key atrule">total</span><span class="token punctuation">:</span> <span class="token string">"120100000000000000"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, the active circulating supply - usable for transfers and standard transactions etc. - is
currently 120,010,263 FUND. 89,737 FUND is currently locked, and can only be used for paying for WRKChain/BEACON
fees - it is &quot;dormant&quot; and <em>cannot be used for any other purpose until it has been used to pay for WRKChain/BEACON fees</em>.
Finally, the total amount of FUND known on the chain is 120,100,000 FUND, and is the equivalent of 120,010,263 + 89,737.</p>
<p>See <RouterLink to="/mainchain/software/und_cmd/und_query_supply.html">und query supply</RouterLink> for more details on command flags and parameters,
and <RouterLink to="/mainchain/introduction/total-supply.html">total supply</RouterLink> for more information on the query results and FUND conversion.</p>
<h3 id="_7-8-how-do-i-export-dump-backup-a-wallet" tabindex="-1"><a class="header-anchor" href="#_7-8-how-do-i-export-dump-backup-a-wallet" aria-hidden="true">#</a> 7.8. How do I export（dump/backup）a wallet?</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token builtin class-name">export</span> some_new_account
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will export an account private key in ASCII-armored encrypted format.</p>
<h3 id="_7-9-how-do-i-import-a-wallet" tabindex="-1"><a class="header-anchor" href="#_7-9-how-do-i-import-a-wallet" aria-hidden="true">#</a> 7.9. How do I import a wallet?</h3>
<p>There are a couple of methods, depending on the import format. If the bip39 mnemonic is available, then:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> some_new_account --recover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will prompt you for the bip39 mnemonic. See <RouterLink to="/mainchain/software/und_cmd/und_keys_add.html">und keys add</RouterLink></p>
<p>If the private key has been exported (e.g. via <code v-pre>und keys export</code>), then the <code v-pre>und keys import</code> command can be used:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">import</span> ACC_NAME KEYFILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>See <RouterLink to="/mainchain/software/und_cmd/und_keys_import.html">und keys import</RouterLink></p>
</div></template>
