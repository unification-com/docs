<template><div><h1 id="run-a-full-node-join-a-public-network" tabindex="-1"><a class="header-anchor" href="#run-a-full-node-join-a-public-network" aria-hidden="true">#</a> Run a Full Node &amp; Join a Public Network</h1>
<p>Once you have <RouterLink to="/mainchain/software/installation.html">installed</RouterLink> the required software, you can run a full node, join one of the
public networks (TestNet or MainNet) and try out <RouterLink to="/mainchain/networks/become-validator.html">becoming a validator</RouterLink>.</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Whenever you use <code v-pre>und</code> to send Txs or query the chain ensure you pass the correct data to the<br>
<code v-pre>--chain-id</code> and if necessary <code v-pre>--node</code> flags so that you connect to the correct network!</p>
</div>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#initialising-a-new-node">Initialising a New Node</router-link></li><li><router-link to="#genesis">Genesis</router-link><ul><li><router-link to="#download-the-latest-genesis">Download the latest Genesis</router-link></li><li><router-link to="#get-the-current-chain-id">Get the current Chain ID</router-link></li></ul></li><li><router-link to="#seed-node-peers">Seed Node Peers</router-link></li><li><router-link to="#minimum-gas">Minimum Gas</router-link></li><li><router-link to="#running-your-node">Running your node</router-link><ul><li><router-link to="#full-sync">Full Sync</router-link></li><li><router-link to="#using-statesync-snapshots">Using statesync Snapshots</router-link></li><li><router-link to="#checkin-the-node-s-status">Checkin the node&#39;s status</router-link></li></ul></li><li><router-link to="#block-explorer">Block Explorer</router-link></li><li><router-link to="#testnet-faucet">TestNet Faucet</router-link></li></ul></nav>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Before continuing, ensure you have gone through the following docs:</p>
<ol>
<li><RouterLink to="/mainchain/software/installation.html">Installing the software</RouterLink></li>
</ol>
<h2 id="initialising-a-new-node" tabindex="-1"><a class="header-anchor" href="#initialising-a-new-node" aria-hidden="true">#</a> Initialising a New Node</h2>
<p>Once installed, you will need to initialise your node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und init <span class="token punctuation">[</span>your_node_moniker<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>[your_node_moniker]</code> can be any identifier you like, but are limited to ASCII characters. For example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und init MyAwesomeNode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once initialised, you can edit your configuration in <code v-pre>$HOME/.und_mainchain/config/config.toml</code> and in
<code v-pre>$HOME/.und_mainchain/config/app.toml</code>. See <RouterLink to="/mainchain/software/und-mainchain-config-ref.html">configuration reference</RouterLink>
for more details on the config file.</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>the default directory used by <code v-pre>und</code> is <code v-pre>$HOME/.und_mainchain</code>. This can be changed by passing the global <code v-pre>--home</code>
flag to the <code v-pre>und</code> command, for example <code v-pre>und start --home $HOME/.und_mainchain_TestNet</code>.</p>
</div>
<h2 id="genesis" tabindex="-1"><a class="header-anchor" href="#genesis" aria-hidden="true">#</a> Genesis</h2>
<p>The latest genesis for each network can always be found in their respective Github repos:</p>
<h4 id="testnet-https-github-com-unification-com-testnet-latest" tabindex="-1"><a class="header-anchor" href="#testnet-https-github-com-unification-com-testnet-latest" aria-hidden="true">#</a> TestNet: <a href="https://github.com/unification-com/testnet/latest" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/testnet/latest<ExternalLinkIcon/></a></h4>
<h4 id="mainnet-https-github-com-unification-com-mainnet-latest" tabindex="-1"><a class="header-anchor" href="#mainnet-https-github-com-unification-com-mainnet-latest" aria-hidden="true">#</a> MainNet: <a href="https://github.com/unification-com/mainnet/latest" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainnet/latest<ExternalLinkIcon/></a></h4>
<h3 id="download-the-latest-genesis" tabindex="-1"><a class="header-anchor" href="#download-the-latest-genesis" aria-hidden="true">#</a> Download the latest Genesis</h3>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p>Please ensure you download the correct genesis for the network you would like to join! Remember to change the output
directory in the command below if you are using something other than the default <code v-pre>$HOME/.und_mainchain</code> directory!</p>
</div>
<p>To spin up your new node, download the latest <code v-pre>genesis.json</code> for the network you would like to join:</p>
<h4 id="testnet" tabindex="-1"><a class="header-anchor" href="#testnet" aria-hidden="true">#</a> TestNet</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json <span class="token operator">></span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mainnet" tabindex="-1"><a class="header-anchor" href="#mainnet" aria-hidden="true">#</a> MainNet</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json <span class="token operator">></span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-the-current-chain-id" tabindex="-1"><a class="header-anchor" href="#get-the-current-chain-id" aria-hidden="true">#</a> Get the current Chain ID</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You'll need <code v-pre>jq</code> installed to run the command below. Use your package manager to install, for example
<code v-pre>sudo apt install jq</code> on Debian based systems, and <code v-pre>sudo yum install jq</code> on CentOS/RedHat systems.</p>
</div>
<p>The Chain ID will need to be passed to all <code v-pre>und</code> commands via the <code v-pre>--chain-id</code> flag. The current Chain ID for the
network your node is connecting to can easily be found by running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>jq --raw-output <span class="token string">'.chain_id'</span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will output, for example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>FUND-TestNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>FUND-MainNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which can then be passed to your <code v-pre>und</code> commands:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query tx FCDFE69F20431B23CF16CAA68C10325EB2E1126FCDF8AD4010CCE927A0808740 --chain-id FUND-TestNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="seed-node-peers" tabindex="-1"><a class="header-anchor" href="#seed-node-peers" aria-hidden="true">#</a> Seed Node Peers</h2>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p>Please ensure you get the correct seed node information for the network you would like to join! Remember to change the
directory if you are using something other than the default <code v-pre>$HOME/.und_mainchain</code> directory!
For this guide, we are using <code v-pre>/mnt/disks/data/.und_mainchain</code> for the node's home directory.</p>
</div>
<p>Your node will need to know at least one seed node in order to join the network
and begin P2P communication with other nodes in the network. The latest seed information will always be available at
each network's respective Github repo:</p>
<h4 id="testnet-https-github-com-unification-com-testnet-blob-master-latest-seed-nodes-md" tabindex="-1"><a class="header-anchor" href="#testnet-https-github-com-unification-com-testnet-blob-master-latest-seed-nodes-md" aria-hidden="true">#</a> TestNet: <a href="https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md<ExternalLinkIcon/></a></h4>
<h4 id="mainnet-https-github-com-unification-com-mainnet-blob-master-latest-seed-nodes-md" tabindex="-1"><a class="header-anchor" href="#mainnet-https-github-com-unification-com-mainnet-blob-master-latest-seed-nodes-md" aria-hidden="true">#</a> MainNet: <a href="https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md<ExternalLinkIcon/></a></h4>
<p>Go to the repo for the network you are connecting to and copy one or more of the seed nodes (you only need
the <code v-pre>id@address:port</code>)</p>
<p>Edit your node configuration file using nano:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> /path/to/.und_mainchain/config/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hit <kbd>Ctrl</kbd>+<kbd>W</kbd>, type <code v-pre>[p2p]</code> (including the square brackets) and hit return - this will take you to
the <code v-pre>[p2p]</code> section of the config file, which begins with:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>##### peer to peer configuration options #####
[p2p]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Find the <code v-pre>seeds = &quot;&quot;</code> variable about 12 lines below, and add the seed node information between the double quotes (comma
separated, no spaces if more than one). For example:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">seeds</span> <span class="token punctuation">=</span> <span class="token string">"node_id@ip:port"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="minimum-gas" tabindex="-1"><a class="header-anchor" href="#minimum-gas" aria-hidden="true">#</a> Minimum Gas</h2>
<p>It is good practice to set the minimum-gas-prices value in <code v-pre>$HOME/.und_mainchain/config/app.toml</code>, in order to protect
your full node from spam transactions. This should be set as a decimal value in <code v-pre>nund</code>, and the recommended value is
currently <code v-pre>25.0nund</code>. This means your node will ignore any Txs with a gas price below this value. To do so, open
up <code v-pre>$HOME/.und_mainchain/config/app.toml</code> in a text editor, and set <code v-pre>minimum-gas-prices</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/app.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Change:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To, for example:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">"25.0nund"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hit <kbd>Ctrl</kbd>+<kbd>X</kbd> followed by <code v-pre>y</code> and then return to save the file and exit nano.</p>
<h2 id="running-your-node" tabindex="-1"><a class="header-anchor" href="#running-your-node" aria-hidden="true">#</a> Running your node</h2>
<p>Now that you have <code v-pre>genesis</code>, and some seed nodes, you can run your full node. There are two methods currently for
syncing your node: full sync, and <code v-pre>statesync</code> from a snapshot.</p>
<h3 id="full-sync" tabindex="-1"><a class="header-anchor" href="#full-sync" aria-hidden="true">#</a> Full Sync</h3>
<p>A full sync will sync the entire chain from genesis to the current block. This is simple, but may take several hours
or even days depending on the size of the chain since it replays every block. To begin a full sync, simply start
the node:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should see that your node connects to some peers, and after a few seconds begins syncing with the network.</p>
<h3 id="using-statesync-snapshots" tabindex="-1"><a class="header-anchor" href="#using-statesync-snapshots" aria-hidden="true">#</a> Using <code v-pre>statesync</code> Snapshots</h3>
<p>Cosmos SDK &gt;= 0.42, which is used by the latest <code v-pre>und</code> software, can use State Syncing  from Snapshots to quickly
sync your node from a safe checkpoint. This potentially reduces the sync time to no more than an hour or so, and in
most cases mere minutes.</p>
<p>Setting this up requires a few more steps</p>
<ol>
<li>Run the following command to get the latest block hash and height. For <strong>TestNet</strong>:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s https://rest-testnet.unification.io/blocks/latest <span class="token operator">|</span> jq <span class="token string">'.|[.block_id.hash,.block.header.height]'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For <strong>MainNet</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s https://rest.unification.io/blocks/latest <span class="token operator">|</span> jq <span class="token string">'.|[.block_id.hash,.block.header.height]'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example output:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token string">"820275B5EE63EDA2923886A01C0B1196A7CE1D96A89FA0D774942999C6698AAC"</span><span class="token punctuation">,</span>
  <span class="token string">"1052423"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Using the output from the above command, configure <code v-pre>[statesync]</code> section in <code v-pre>.und_mainchain/config.toml</code>:</li>
</ol>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">rpc_servers</span> <span class="token punctuation">=</span> <span class="token string">"TWO_RPC_NODES"</span>
<span class="token key property">trust_height</span> <span class="token punctuation">=</span> <span class="token number">1052423</span>
<span class="token key property">trust_hash</span> <span class="token punctuation">=</span> <span class="token string">"820275B5EE63EDA2923886A01C0B1196A7CE1D96A89FA0D774942999C6698AAC"</span>
<span class="token key property">trust_period</span> <span class="token punctuation">=</span> <span class="token string">"168h0m0s"</span>
<span class="token key property">discovery_time</span> <span class="token punctuation">=</span> <span class="token string">"30s"</span>
<span class="token key property">temp_dir</span> <span class="token punctuation">=</span> <span class="token string">""</span>
<span class="token key property">chunk_request_timeout</span> <span class="token punctuation">=</span> <span class="token string">"60s"</span>
<span class="token key property">chunk_fetchers</span> <span class="token punctuation">=</span> <span class="token string">"4"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>rpc_servers</code> requires two RPC nodes for verification.</p>
<p>For <strong>TestNet</strong>, replace <code v-pre>TWO_RPC_NODES</code> with:</p>
<p><code v-pre>sync1-testnet.unification.io:26657,sync2-testnet.unification.io:26657</code></p>
<p>For <strong>MainNet</strong>:</p>
<p><code v-pre>sync1.unification.io:26657,sync2.unification.io:26657</code></p>
<p>e.g.:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">rpc_servers</span> <span class="token punctuation">=</span> <span class="token string">"sync1.unification.io:26657,sync2.unification.io:26657"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or any RPC servers of your choice for the target network.</p>
<ol start="3">
<li>Start your node</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und start --home<span class="token operator">=</span>/path/to/.und_mainchain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>you should start seeing the following:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">11</span>:53AM INF Discovered new snapshot <span class="token assign-left variable">format</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span><span class="token string">"V0���&amp;�U1�J0�yP4A%�/���GŽ@<span class="token entity" title="\x05">\x05</span>�&lt;�j"</span> <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1051600</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>statesync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After a few seconds (or at most, minutes), you should see your node start downloading the blocks:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">11</span>:56AM INF received proposal <span class="token assign-left variable">module</span><span class="token operator">=</span>consensus <span class="token assign-left variable">proposal</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Type"</span>:32,<span class="token string">"block_id"</span>:<span class="token punctuation">{</span><span class="token string">"hash"</span><span class="token builtin class-name">:</span><span class="token string">"632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E"</span>,<span class="token string">"parts"</span>:<span class="token punctuation">{</span><span class="token string">"hash"</span><span class="token builtin class-name">:</span><span class="token string">"E8246C504B9BC14275874A90C95E6AA035678302AD3BF9269B6F253B04C038BE"</span>,<span class="token string">"total"</span>:1<span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token string">"height"</span>:1052494,<span class="token string">"pol_round"</span>:-1,<span class="token string">"round"</span>:0,<span class="token string">"signature"</span><span class="token builtin class-name">:</span><span class="token string">"HYJz0rV7o6bNm7za82sj1Az1rV25qVkLh9Y4s0K95nf86uVq+YmuDIf3LtIP7pDfFEYErxNVyeSplPGh7IVHDQ=="</span>,<span class="token string">"timestamp"</span><span class="token builtin class-name">:</span><span class="token string">"2022-05-19T10:56:03.273030584Z"</span><span class="token punctuation">}</span>
<span class="token number">11</span>:56AM INF received complete proposal block <span class="token assign-left variable">hash</span><span class="token operator">=</span>632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1052494</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>consensus
<span class="token number">11</span>:56AM INF finalizing commit of block <span class="token assign-left variable">hash</span><span class="token operator">=</span>632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1052494</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>consensus <span class="token assign-left variable">num_txs</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">root</span><span class="token operator">=</span>7EC77102840743503BD71FD89F60FD0B912DD0DE27575408B6AD67990CE4A6B8
<span class="token number">11</span>:56AM INF executed block <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1052494</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>state <span class="token assign-left variable">num_invalid_txs</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">num_valid_txs</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">11</span>:56AM INF commit synced <span class="token assign-left variable">commit</span><span class="token operator">=</span>436F6D6D697449447B5B3234312031333020323235203834203837203234372031303220323820323435203234382032372032303920313432203133372031303620353920343520323220323020313737203135342032303320323338203136352030203231322034392031383620313638203433203839203233395D3A3130304634457D
<span class="token number">11</span>:56AM INF committed state <span class="token assign-left variable">app_hash</span><span class="token operator">=</span>F182E15457F7661CF5F81BD18E896A3B2D1614B19ACBEEA500D431BAA82B59EF <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1052494</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>state <span class="token assign-left variable">num_txs</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">11</span>:56AM INF indexed block <span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token number">1052494</span> <span class="token assign-left variable">module</span><span class="token operator">=</span>txindex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="checkin-the-node-s-status" tabindex="-1"><a class="header-anchor" href="#checkin-the-node-s-status" aria-hidden="true">#</a> Checkin the node's status</h3>
<p>Running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in a separate terminal should output show that the node is running and connected to your chosen network.</p>
<p>By default, any transactions you send via the <code v-pre>und</code> command will be
sent via your local node (which was started using the <code v-pre>und start</code> command, and whose RPC is on <code v-pre>tcp://localhost:26656</code>
and only open to <code v-pre>localhost</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can use the <code v-pre>--node</code> flag with the <code v-pre>und</code> command to have it send to a different node instead. Default client values
for <code v-pre>und</code> can also be set in <code v-pre>$HOME/.und_mainchain/config/client.toml</code></p>
</div>
<h2 id="block-explorer" tabindex="-1"><a class="header-anchor" href="#block-explorer" aria-hidden="true">#</a> Block Explorer</h2>
<p>Our public block explorers can be found at:</p>
<h4 id="testnet-https-explorer-testnet-unification-io" tabindex="-1"><a class="header-anchor" href="#testnet-https-explorer-testnet-unification-io" aria-hidden="true">#</a> TestNet: <a href="https://explorer-testnet.unification.io" target="_blank" rel="noopener noreferrer">https://explorer-testnet.unification.io<ExternalLinkIcon/></a></h4>
<h4 id="mainnet-https-explorer-unification-io" tabindex="-1"><a class="header-anchor" href="#mainnet-https-explorer-unification-io" aria-hidden="true">#</a> MainNet: <a href="https://explorer.unification.io" target="_blank" rel="noopener noreferrer">https://explorer.unification.io<ExternalLinkIcon/></a></h4>
<h2 id="testnet-faucet" tabindex="-1"><a class="header-anchor" href="#testnet-faucet" aria-hidden="true">#</a> TestNet Faucet</h2>
<p>Our public TestNet has a faucet which can be used to obtain Test FUND for
use <strong>exclusively on the TestNet network</strong>. You will need an <RouterLink to="/mainchain/networks/accounts-wallets.html">account</RouterLink> and its associated address
in order to be able to claim Test FUND.</p>
<p>See <a href="https://faucet-testnet.unification.io" target="_blank" rel="noopener noreferrer">https://faucet-testnet.unification.io<ExternalLinkIcon/></a></p>
<h4 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> Next</h4>
<p>Creating and importing <RouterLink to="/mainchain/networks/accounts-wallets.html">accounts and wallets</RouterLink>, <RouterLink to="/mainchain/networks/examples/transactions.html">sending transactions</RouterLink>
and <RouterLink to="/mainchain/networks/become-validator.html">becoming a Validator</RouterLink></p>
</div></template>
