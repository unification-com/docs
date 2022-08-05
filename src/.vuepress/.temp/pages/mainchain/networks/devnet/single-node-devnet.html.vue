<template><div><h1 id="single-node-devnet" tabindex="-1"><a class="header-anchor" href="#single-node-devnet" aria-hidden="true">#</a> Single Node DevNet</h1>
<p>The <code v-pre>und</code> binary can be used to generate a quick and simple single-node <code v-pre>DevNet</code></p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#getting-und">Getting und</router-link></li><li><router-link to="#initialise-the-chain">Initialise the chain</router-link></li><li><router-link to="#create-some-test-accounts-keys">Create some test accounts &amp; keys</router-link></li><li><router-link to="#add-the-accounts-to-genesis-in-this-order">Add the accounts to genesis - in this order</router-link></li><li><router-link to="#generate-validator-gentx">Generate validator gentx</router-link></li><li><router-link to="#start-the-daemon">Start the daemon</router-link></li><li><router-link to="#automated-script">Automated Script</router-link></li></ul></nav>
<h2 id="getting-und" tabindex="-1"><a class="header-anchor" href="#getting-und" aria-hidden="true">#</a> Getting <code v-pre>und</code></h2>
<p>Either clone the repo and build/install <code v-pre>und</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/unification-com/mainchain
<span class="token builtin class-name">cd</span> mainchain
<span class="token function">git</span> checkout <span class="token punctuation">[</span>latest release tag<span class="token punctuation">]</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or download the latest release from
<a href="https://github.com/unification-com/mainchain/releases/latest" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain/releases/latest<ExternalLinkIcon/></a></p>
<h2 id="initialise-the-chain" tabindex="-1"><a class="header-anchor" href="#initialise-the-chain" aria-hidden="true">#</a> Initialise the chain</h2>
<p>We'll use the chain ID <code v-pre>FUND-DevNet</code>, and home directory <code v-pre>$HOME/.und_mainchain_DevNet</code></p>
<ol>
<li>Initialise <code v-pre>und</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und init devnet_validator --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --chain-id FUND-DevNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Set some client config defaults</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und config chain-id FUND-DevNet --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
und config keyring-backend <span class="token builtin class-name">test</span> --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Modify the default denominations in <code v-pre>genesis.json</code></li>
</ol>
<p>This is required because the Cosmos SDK default denomination is <code v-pre>stake</code>, and we need it to be <code v-pre>nund</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">"s/stake/nund/g"</span> <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>Enable REST and swagger (optional)</li>
</ol>
<p>This will allow REST access on <a href="http://localhost:1317" target="_blank" rel="noopener noreferrer">http://localhost:1317<ExternalLinkIcon/></a> and Swagger
via <a href="http://localhost:1317/swagger/" target="_blank" rel="noopener noreferrer">http://localhost:1317/swagger/<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">"s/enable = false/enable = true/g"</span> <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet/config/app.toml
<span class="token function">sed</span> -i <span class="token string">"s/swagger = false/swagger = true/g"</span> <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet/config/app.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-some-test-accounts-keys" tabindex="-1"><a class="header-anchor" href="#create-some-test-accounts-keys" aria-hidden="true">#</a> Create some test accounts &amp; keys</h2>
<p>We'll create four accounts - one for the validator, and three test accounts</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> validator --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
und keys <span class="token function">add</span> t0 --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
und keys <span class="token function">add</span> t1 --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
und keys <span class="token function">add</span> t2 --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-the-accounts-to-genesis-in-this-order" tabindex="-1"><a class="header-anchor" href="#add-the-accounts-to-genesis-in-this-order" aria-hidden="true">#</a> Add the accounts to genesis - in this order</h2>
<p>Next, we need to add the wallet addresses to <code v-pre>genesis.json</code> along with some <code v-pre>nund</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und add-genesis-account t0 1000000000000nund --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --keyring-backend <span class="token builtin class-name">test</span>
und add-genesis-account validator 1000000000000nund --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --keyring-backend <span class="token builtin class-name">test</span>
und add-genesis-account t1 1000000000000nund --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --keyring-backend <span class="token builtin class-name">test</span>
und add-genesis-account t2 1000000000000nund --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --keyring-backend <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate-validator-gentx" tabindex="-1"><a class="header-anchor" href="#generate-validator-gentx" aria-hidden="true">#</a> Generate validator gentx</h2>
<p>Add the validator to <code v-pre>genesis.json</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und gentx validator 1000000nund --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet --chain-id FUND-DevNet
und collect-gentxs --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-the-daemon" tabindex="-1"><a class="header-anchor" href="#start-the-daemon" aria-hidden="true">#</a> Start the daemon</h2>
<p>Finall, start DevNet</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und start --home <span class="token environment constant">$HOME</span>/.und_mainchain_DevNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="automated-script" tabindex="-1"><a class="header-anchor" href="#automated-script" aria-hidden="true">#</a> Automated Script</h2>
<p>Here's a handy <code v-pre>bash</code> script that can be configured and run. Simply save it as <code v-pre>und_testnet.sh</code> and run
with <code v-pre>bash und_testnet.sh</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">####################################################</span>
<span class="token comment"># A script for quickly spinning up a local devnet  #</span>
<span class="token comment">####################################################</span>

<span class="token comment"># Testnet configuration</span>
<span class="token assign-left variable">TEST_PATH</span><span class="token operator">=</span><span class="token string">"/tmp/und_devnet"</span>
<span class="token assign-left variable">CHAIN_ID</span><span class="token operator">=</span><span class="token string">"FUND-DevNet"</span>
<span class="token assign-left variable">UND_VERS</span><span class="token operator">=</span><span class="token string">"1.5.1"</span>

<span class="token comment"># Internal VARS</span>
<span class="token assign-left variable">DATA_DIR</span><span class="token operator">=</span><span class="token string">"<span class="token variable">${TEST_PATH}</span>/.und_mainchain"</span>
<span class="token assign-left variable">UND_BIN</span><span class="token operator">=</span><span class="token string">"<span class="token variable">${TEST_PATH}</span>/und"</span>
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token string">"v"</span>

<span class="token keyword">function</span> <span class="token function-name function">version_lt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">test</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$@</span>"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">" "</span> <span class="token string">"<span class="token entity" title="\n">\n</span>"</span> <span class="token operator">|</span> <span class="token function">sort</span> -rV <span class="token operator">|</span> <span class="token function">head</span> -n <span class="token number">1</span><span class="token variable">)</span></span>"</span> <span class="token operator">!=</span> <span class="token string">"<span class="token variable">$1</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">if</span> version_lt <span class="token variable">$UND_VERS</span> <span class="token string">"1.6.1"</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token string">""</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> version_lt <span class="token variable">$UND_VERS</span> <span class="token string">"1.5.0"</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"versions &lt; 1.5.0 not supported"</span>
  <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment"># check for previous tests</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$TEST_PATH</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Found previous test configuration in <span class="token variable">${TEST_PATH}</span>."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Either delete <span class="token variable">${TEST_PATH}</span> and rerun this script"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"or start the chain again using:"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">""</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"  <span class="token variable">${UND_BIN}</span> start --home <span class="token variable">${DATA_DIR}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">""</span>
  <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token function">mkdir</span> -p <span class="token string">"<span class="token variable">${TEST_PATH}</span>"</span>

<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable">${TEST_PATH}</span>"</span>

<span class="token comment"># download und</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token string">"<span class="token variable">$UND_BIN</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">wget</span> <span class="token string">"https://github.com/unification-com/mainchain/releases/download/<span class="token variable">${PREFIX}</span><span class="token variable">${UND_VERS}</span>/und_v<span class="token variable">${UND_VERS}</span>_linux_x86_64.tar.gz"</span>
  <span class="token function">tar</span> -zxvf <span class="token string">"und_v<span class="token variable">${UND_VERS}</span>_linux_x86_64.tar.gz"</span>
<span class="token keyword">fi</span>

<span class="token comment"># init chain</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> init devnet-validator --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span> --chain-id<span class="token operator">=</span><span class="token string">"<span class="token variable">${CHAIN_ID}</span>"</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> config chain-id <span class="token string">"<span class="token variable">${CHAIN_ID}</span>"</span> --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> config keyring-backend <span class="token builtin class-name">test</span> --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span>

<span class="token comment"># change default denoms from stake to nund in genesis</span>
<span class="token function">sed</span> -i <span class="token string">"s/stake/nund/g"</span> <span class="token string">"<span class="token variable">${DATA_DIR}</span>/config/genesis.json"</span>

<span class="token comment"># enable REST &amp; swagger</span>
<span class="token function">sed</span> -i <span class="token string">"s/enable = false/enable = true/g"</span> <span class="token string">"<span class="token variable">${DATA_DIR}</span>/config/app.toml"</span>
<span class="token function">sed</span> -i <span class="token string">"s/swagger = false/swagger = true/g"</span> <span class="token string">"<span class="token variable">${DATA_DIR}</span>/config/app.toml"</span>

<span class="token comment"># add test keys to keychain</span>
<span class="token comment"># add a validator</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> --home <span class="token variable">${DATA_DIR}</span> keys <span class="token function">add</span> validator
<span class="token comment"># add a test key for account 0. If v &lt; 1.6.x, do not use account 0 in testing.</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> --home <span class="token variable">${DATA_DIR}</span> keys <span class="token function">add</span> t0
<span class="token comment"># add a test key</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> --home <span class="token variable">${DATA_DIR}</span> keys <span class="token function">add</span> t1
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> --home <span class="token variable">${DATA_DIR}</span> keys <span class="token function">add</span> t2

<span class="token comment"># add accounts to genesis - in this order</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> add-genesis-account t0 1000000000000nund --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span> --keyring-backend <span class="token builtin class-name">test</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> add-genesis-account validator 1000000000000nund --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span> --keyring-backend <span class="token builtin class-name">test</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> add-genesis-account t1 1000000000000nund --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span> --keyring-backend <span class="token builtin class-name">test</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> add-genesis-account t2 1000000000000nund --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span> --keyring-backend <span class="token builtin class-name">test</span>

<span class="token comment"># validator gentx</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> gentx validator 1000000nund --home <span class="token variable">${DATA_DIR}</span> --chain-id<span class="token operator">=</span><span class="token string">"<span class="token variable">${CHAIN_ID}</span>"</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> collect-gentxs --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span>

<span class="token comment"># start the daemon</span>
<span class="token string">"<span class="token variable">${UND_BIN}</span>"</span> start --home <span class="token string">"<span class="token variable">${DATA_DIR}</span>"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
