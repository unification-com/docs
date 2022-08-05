<template><div><h1 id="light-client-rest" tabindex="-1"><a class="header-anchor" href="#light-client-rest" aria-hidden="true">#</a> Light Client/REST</h1>
<p>The <code v-pre>und</code> binary comes packaged with a full REST capable server, from which the majority of
the <code v-pre>und query ...</code> and <code v-pre>und tx ...</code> commands can also be served.</p>
<p>The REST server is generally useful for third party services such as
<a href="https://github.com/unification-com/web-wallet" target="_blank" rel="noopener noreferrer">wallets<ExternalLinkIcon/></a> and
<a href="https://github.com/unification-com/mainchain-explorer" target="_blank" rel="noopener noreferrer">block explorers<ExternalLinkIcon/></a>. It interacts with, and can be used
alongside the <code v-pre>und</code> RPC interface.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#running-a-light-client">Running a light client</router-link></li><li><router-link to="#running-an-archive-rpc-node">Running an Archive RPC node</router-link></li></ul></nav>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Before continuing, ensure you have gone through the following docs:</p>
<ol>
<li><RouterLink to="/mainchain/software/installation.html">Installing the software</RouterLink></li>
<li><RouterLink to="/mainchain/networks/join-network.html">join a Network</RouterLink>, or <RouterLink to="/mainchain/networks/devnet/local-devnet-docker.html">run DevNet</RouterLink></li>
</ol>
<h2 id="running-a-light-client" tabindex="-1"><a class="header-anchor" href="#running-a-light-client" aria-hidden="true">#</a> Running a light client</h2>
<p>The Light Client can be started by setting the configuring options in <code v-pre>app.toml</code> as follows:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">api</span><span class="token punctuation">]</span>
<span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">swagger</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">address</span> <span class="token punctuation">=</span> <span class="token string">"tcp://0.0.0.0:1317"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then running the <code v-pre>und start</code> command as normal</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will start the light client on your local host listening on <code v-pre>localhost:1317</code>, and use the node
hosted at <code v-pre>11.22.33.44:26657</code> to source its data and interface with the <code v-pre>FUND-Mainchain-TestNet-v8</code> chain
(e.g. broadcast any transactions).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>setting the listen address IP to <code v-pre>0.0.0.0</code>, e.g. <code v-pre>tcp://0.0.0.0:1317</code> will allow any host to connect to your REST server.</p>
</div>
<p>Once running, you can visit <a href="http://localhost:1317/swagger/" target="_blank" rel="noopener noreferrer">http://localhost:1317/swagger/<ExternalLinkIcon/></a> to view all the REST
endpoints available.</p>
<h2 id="running-an-archive-rpc-node" tabindex="-1"><a class="header-anchor" href="#running-an-archive-rpc-node" aria-hidden="true">#</a> Running an Archive RPC node</h2>
<p>Light Clients are more effective when interfacing with full nodes running in &quot;archive&quot; mode. Nodes running in archive
mode do not prune any sync data, and keep a complete transaction event history.</p>
<p>The quickest way to get up and running with an archive node is to configure the pruning option in
<code v-pre>$HOME/.und_mainchain/config/app.toml</code>:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">pruning</span> <span class="token punctuation">=</span> <span class="token string">"nothing"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, start the full node as usual using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Your light client can then be configured to connect to it via the <code v-pre>--node</code> flag by passing <code v-pre>tcp://127.0.0.1:26657</code> to it.</p>
</div></template>
