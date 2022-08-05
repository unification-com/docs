<template><div><div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p>Please ensure you download the correct genesis for the network you would like to join! Remember to change the output
directory in the command below if you are using something other than the default <code v-pre>$HOME/.und_mainchain</code> directory!</p>
</div>
<p>To spin up your new node, download the latest <code v-pre>genesis.json</code> for the network you would like to join:</p>
<h4 id="testnet" tabindex="-1"><a class="header-anchor" href="#testnet" aria-hidden="true">#</a> TestNet</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json <span class="token operator">></span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mainnet" tabindex="-1"><a class="header-anchor" href="#mainnet" aria-hidden="true">#</a> MainNet</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json <span class="token operator">></span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
