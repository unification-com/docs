<template><div><h1 id="client-toml-reference" tabindex="-1"><a class="header-anchor" href="#client-toml-reference" aria-hidden="true">#</a> <code v-pre>client.toml</code> Reference</h1>
<p>The <code v-pre>$HOME/.und_mainchain/config/client.toml</code> file contains all the configuration options for the <code v-pre>und</code> client
configuration. Below is a reference for the file.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#main-base-config-options">Main base config options</router-link><ul><li><router-link to="#chain-id">chain-id</router-link></li><li><router-link to="#keyring-backend">keyring-backend</router-link></li><li><router-link to="#output">output</router-link></li><li><router-link to="#node">node</router-link></li><li><router-link to="#broadcast-mode">broadcast-mode</router-link></li></ul></li></ul></nav>
<h2 id="main-base-config-options" tabindex="-1"><a class="header-anchor" href="#main-base-config-options" aria-hidden="true">#</a> Main base config options</h2>
<h3 id="chain-id" tabindex="-1"><a class="header-anchor" href="#chain-id" aria-hidden="true">#</a> chain-id</h3>
<p>The network chain ID</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">chain-id</span> <span class="token punctuation">=</span> <span class="token string">"FUND-TestNet-2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="keyring-backend" tabindex="-1"><a class="header-anchor" href="#keyring-backend" aria-hidden="true">#</a> keyring-backend</h3>
<p>The keyring's backend, where the keys are stored (<code v-pre>os|file|kwallet|pass|test|memory</code>)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">keyring-backend</span> <span class="token punctuation">=</span> <span class="token string">"os"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3>
<p>CLI output format (<code v-pre>text|json</code>)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">output</span> <span class="token punctuation">=</span> <span class="token string">"text"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h3>
<p><code v-pre>&lt;host&gt;:&lt;port&gt;</code> to Tendermint RPC interface for this chain</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">node</span> <span class="token punctuation">=</span> <span class="token string">"https://rpc-testnet.unification.io:443"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="broadcast-mode" tabindex="-1"><a class="header-anchor" href="#broadcast-mode" aria-hidden="true">#</a> broadcast-mode</h3>
<p>Transaction broadcasting mode (<code v-pre>sync|async|block</code>)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">broadcast-mode</span> <span class="token punctuation">=</span> <span class="token string">"sync"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
