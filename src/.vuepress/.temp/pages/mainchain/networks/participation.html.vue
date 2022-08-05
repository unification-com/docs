<template><div><h1 id="non-validator-participation" tabindex="-1"><a class="header-anchor" href="#non-validator-participation" aria-hidden="true">#</a> Non-Validator Participation</h1>
<p>There are many ways in which users can contribute to the running of the network without the need to become a full validator.</p>
<h2 id="local-full-nodes" tabindex="-1"><a class="header-anchor" href="#local-full-nodes" aria-hidden="true">#</a> Local full-nodes</h2>
<p>One of the simplest ways to participate in the network is to run your own full node in which to send your own
transactions to. Your node, by default, will only accept transactions sent to it from <code v-pre>localhost</code> before broadcasting
them to its network peers, and is therefore a secure method by which to broadcast your transactions to the network.
Further, by running your own local full node, transactions and their messages can be validated locally prior to being
broadcast to network peers.</p>
<p>By default, your node's <code v-pre>P2P</code> address is not advertised, and its <code v-pre>RPC</code> is only accessible to the <code v-pre>localhost</code>.</p>
<p>This scenario is ideal for users who wish to infrequently spin up their node for the purpose of sending transactions
to the network, or for users who are for example running a WRKChain, and wish to use the local node for broadcasting
their WRKChain transactions.</p>
<p>Local full nodes can be run on your local PC, or server/cloud VMs alongside WRKChain architecture.</p>
<h2 id="seed-nodes" tabindex="-1"><a class="header-anchor" href="#seed-nodes" aria-hidden="true">#</a> Seed Nodes</h2>
<p>Seed nodes are used by full nodes to bootstrap their address book, by keeping a record of permanently connected nodes,
and broadcasting their addresses on request. Seed nodes don't accept or broadcast transactions, and immediately
disconnect from a peer once it has sent its address book to the connected peer.</p>
<p>Seed nodes are best run on servers/cloud VMs with high uptimes.</p>
<h3 id="configuring-a-seed-node" tabindex="-1"><a class="header-anchor" href="#configuring-a-seed-node" aria-hidden="true">#</a> Configuring a seed node</h3>
<p>In <code v-pre>$HOME/.und_mainchain/config/config.toml</code>:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">p2p.persistent_peers</span> <span class="token punctuation">=</span> <span class="token string">"[node_id_1]@[ip_1]:[port],[node_id_2]@[ip_2]:[port]"</span> <span class="token comment"># List of peers known to the seed that are permanently available</span>
<span class="token key property">p2p.seed_mode</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Seed nodes can also prune all data, by setting <code v-pre>pruning=everything</code> in <code v-pre>$HOME/.und_mainchain/config/app.toml</code>.</p>
<h2 id="archive-data-nodes" tabindex="-1"><a class="header-anchor" href="#archive-data-nodes" aria-hidden="true">#</a> Archive/Data Nodes</h2>
<p>Archive nodes are full nodes that keep a complete history of the chain state, by not pruning any state data
(i.e. <code v-pre>pruning</code> is set to <code v-pre>nothing</code> in <code v-pre>$HOME/.und_mainchain/app.toml</code>). They are used as the data source for
third party applications such as block explorers and wallet apps, since they keep a complete event and transaction
history.</p>
<p>Archive nodes are best run on servers/cloud VMs with high uptimes and large disk space.</p>
<h3 id="configuring-an-archive-node" tabindex="-1"><a class="header-anchor" href="#configuring-an-archive-node" aria-hidden="true">#</a> Configuring an archive node</h3>
<p>In <code v-pre>$HOME/.und_mainchain/config/config.toml</code>, the following suggested settings offer a basic starting point. Users
are encouraged to explore the settings and configure as required to increase security and availability:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">p2p.external_address</span> <span class="token punctuation">=</span> <span class="token string">"[ip]:26656"</span>
<span class="token key property">rpc.laddr</span> <span class="token punctuation">=</span> <span class="token string">"tcp://0.0.0.0:26657"</span>
<span class="token key property">tx_index.index_keys</span> <span class="token punctuation">=</span> <span class="token string">""</span>
<span class="token key property">tx_index.index_all_keys</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In <code v-pre>$HOME/.und_mainchain/config/app.toml</code>:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">"25.0nund"</span>
<span class="token key property">pruning</span> <span class="token punctuation">=</span> <span class="token string">"nothing"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ensure any firewall rules allow incoming requests to ports <code v-pre>26656</code> and <code v-pre>26657</code> from <code v-pre>0.0.0.0/0</code> - this will allow
any clients to query your node.</p>
<h3 id="rest-server" tabindex="-1"><a class="header-anchor" href="#rest-server" aria-hidden="true">#</a> REST server</h3>
<p>A REST (light-client) server can be run alongside an Archive Node to offer deeper querying capabilities to the network.
Third party applications such as block explorers and wallet apps rely on REST servers along with Archive nodes for
their data.</p>
<p>REST servers are best run on servers/cloud VMs with high uptimes, along with an Archive node.</p>
<p>The REST server can be started by setting the configuring options in <code v-pre>app.toml</code> as follows:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">api</span><span class="token punctuation">]</span>
<span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">swagger</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">address</span> <span class="token punctuation">=</span> <span class="token string">"tcp://0.0.0.0:1317"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="relay-nodes" tabindex="-1"><a class="header-anchor" href="#relay-nodes" aria-hidden="true">#</a> Relay Nodes</h2>
<p>A relay node is simply a full node that is always online and advertises its <code v-pre>P2P</code> network address to other peers.
Relay nodes can potentially help reduce overall P2P network latency.</p>
<h3 id="configuring-a-relay-node" tabindex="-1"><a class="header-anchor" href="#configuring-a-relay-node" aria-hidden="true">#</a> Configuring a Relay Node</h3>
<p>A relay node should have high availability (for example, be running on a Cloud VM, or other host that is always
online with a static IP address).</p>
<p>In <code v-pre>$HOME/.und_mainchain/config/config.toml</code> set the <code v-pre>p2p.external_address</code> value to <code v-pre>0.0.0.0:26656</code>, and ensure any
firewall rules allow incoming requests from <code v-pre>0.0.0.0/0</code> on port <code v-pre>26656</code></p>
<p>In <code v-pre>$HOME/.und_mainchin/config/app.toml</code> set the <code v-pre>minimum-gas-prices</code> value, to for example <code v-pre>25.0nund</code>.</p>
</div></template>
