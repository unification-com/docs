<template><div><div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
