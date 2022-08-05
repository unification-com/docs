<template><div><h1 id="_3-node-docker-devnet" tabindex="-1"><a class="header-anchor" href="#_3-node-docker-devnet" aria-hidden="true">#</a> 3-Node Docker DevNet</h1>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Whenever you use <code v-pre>und</code> to send Txs or query the chain ensure you pass the correct data to the <code v-pre>--chain-id</code>
and if necessary <code v-pre>--node=</code> flags so that you connect to the correct network!</p>
</div>
<p>The repository contains a ready to deploy Docker composition for local development and testing. The Docker composition
will spin up a DevNet using the current checked out branch's code to build and run the <code v-pre>und</code> binaries.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#getting-devnet">Getting DevNet</router-link></li><li><router-link to="#spinning-up-devnet">Spinning up DevNet</router-link></li><li><router-link to="#devnet-chain-id">DevNet Chain ID</router-link></li><li><router-link to="#devnet-rpc-nodes">DevNet RPC Nodes</router-link></li><li><router-link to="#devnet-docker-containers">DevNet Docker containers</router-link></li><li><router-link to="#devnet-test-accounts-wallets-and-keys">DevNet test accounts, wallets and keys</router-link><ul><li><router-link to="#importing-the-devnet-keys">Importing the DevNet keys</router-link></li><li><router-link to="#useful-devnet-defaults-for-und">Useful DevNet Defaults for und</router-link></li><li><router-link to="#rest-api-endpoints">REST API Endpoints</router-link></li></ul></li></ul></nav>
<h2 id="getting-devnet" tabindex="-1"><a class="header-anchor" href="#getting-devnet" aria-hidden="true">#</a> Getting DevNet</h2>
<p>Check out the <code v-pre>mainchain</code> repository:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/unification-com/mainchain
<span class="token builtin class-name">cd</span> mainchain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spinning-up-devnet" tabindex="-1"><a class="header-anchor" href="#spinning-up-devnet" aria-hidden="true">#</a> Spinning up DevNet</h2>
<p>DevNet can be started by using the <code v-pre>make</code> target:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> devnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To bring DevNet down cleanly, use <kbd>Ctrl</kbd>+<kbd>C</kbd>, followed by:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> devnet-down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="devnet-chain-id" tabindex="-1"><a class="header-anchor" href="#devnet-chain-id" aria-hidden="true">#</a> DevNet Chain ID</h2>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>DevNet's Chain ID is <code v-pre>FUND-DevNet-2</code>. Any <code v-pre>und</code> commands
intended for DevNet should use the flag <code v-pre>--chain-id FUND-DevNet-2</code></p>
</div>
<h2 id="devnet-rpc-nodes" tabindex="-1"><a class="header-anchor" href="#devnet-rpc-nodes" aria-hidden="true">#</a> DevNet RPC Nodes</h2>
<p>By default <code v-pre>und</code> will attempt to broadcast transactions to tcp://localhost:26656. However, any of the DevNet
nodes can be used to send transactions via <code v-pre>und</code> using the <code v-pre>--node=</code> flag, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query tx TX_HASH --chain-id FUND-DevNet-2 --node<span class="token operator">=</span>tcp://172.25.0.3:26661
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>See below for each node's RPC IPs and Ports.</p>
<h2 id="devnet-docker-containers" tabindex="-1"><a class="header-anchor" href="#devnet-docker-containers" aria-hidden="true">#</a> DevNet Docker containers</h2>
<p>The DevNet composition will spin up three full validator nodes and a proxy server in the following
Docker containers:</p>
<ul>
<li><code v-pre>dn_node1</code> - Full validation node, RPC on 172.25.0.3:26661, P2P on 172.25.0.3:26651</li>
<li><code v-pre>dn_node2</code> - Full validation node, RPC on 172.25.0.4:26662, P2P on 172.25.0.4:26652</li>
<li><code v-pre>dn_node3</code> - Full validation node, RPC on 172.25.0.5:26663, P2P on 172.25.0.5:26653</li>
<li><code v-pre>proxy</code> - a small proxy server allowing CORS queries to the <code v-pre>dn_node1</code> REST API via 172.25.0.7:1318</li>
</ul>
<p>The RPC interface is available via <code v-pre>dn_node1</code> on port <code v-pre>26661</code>, and non-CORS REST on port <code v-pre>1317</code></p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>The DevNet nodes:<br>
P2P ports set to 26651, 26652 and 26653 respectively, and not the default 26656.<br>
RPC ports set to 26661, 26662 and 26663 respectively, and not the default 26657.</p>
</div>
<h2 id="devnet-test-accounts-wallets-and-keys" tabindex="-1"><a class="header-anchor" href="#devnet-test-accounts-wallets-and-keys" aria-hidden="true">#</a> DevNet test accounts, wallets and keys</h2>
<p>DevNet is deployed with a pre-defined
<a href="https://raw.githubusercontent.com/unification-com/mainchain/master/Docker/assets/node1/config/genesis.json" target="_blank" rel="noopener noreferrer">genesis.json<ExternalLinkIcon/></a>,
containing several test accounts loaded with FUND and pre-defined validators with self delegation.</p>
<p>See <a href="https://github.com/unification-com/mainchain/blob/master/Docker/README.md" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain/blob/master/Docker/README.md<ExternalLinkIcon/></a>
for the mnemonic phrases and keys used by the above nodes, and for test accounts included in DevNet's genesis.</p>
<h3 id="importing-the-devnet-keys" tabindex="-1"><a class="header-anchor" href="#importing-the-devnet-keys" aria-hidden="true">#</a> Importing the DevNet keys</h3>
<p>The DevNet accounts can be imported as follows. First, build the <code v-pre>und</code> and
<code v-pre>und</code> binaries:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, for each account run the following command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./build/und keys <span class="token function">add</span> devnet_node1 --recover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will be prompted to enter the mnemonic phrase, and a password for your OS's keyring. Change <code v-pre>devnet_node1</code> to an
appropriate moniker for each imported account.</p>
<h3 id="useful-devnet-defaults-for-und" tabindex="-1"><a class="header-anchor" href="#useful-devnet-defaults-for-und" aria-hidden="true">#</a> Useful DevNet Defaults for <code v-pre>und</code></h3>
<p><code v-pre>und</code> defaults for DevNet can be set as follows. This will set the corresponding values in
<code v-pre>$HOME/.und_mainchain/config/client.toml</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und config chain-id FUND-DevNet-2
und config node tcp://localhost:26661
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rest-api-endpoints" tabindex="-1"><a class="header-anchor" href="#rest-api-endpoints" aria-hidden="true">#</a> REST API Endpoints</h3>
<p>With DevNet up, the REST API endpoints can be seen via <a href="http://localhost:1317/swagger/" target="_blank" rel="noopener noreferrer">http://localhost:1317/swagger/<ExternalLinkIcon/></a></p>
<h4 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> Next</h4>
<p>Creating and importing <RouterLink to="/mainchain/networks/devnet/accounts-wallets.html">accounts and wallets</RouterLink>, <RouterLink to="/mainchain/networks/devnet/transactions.html">sending transactions</RouterLink></p>
</div></template>
