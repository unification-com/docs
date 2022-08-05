<template><div><h1 id="accounts-and-wallets" tabindex="-1"><a class="header-anchor" href="#accounts-and-wallets" aria-hidden="true">#</a> Accounts and Wallets</h1>
<p>The <code v-pre>und</code> CMD can be used to create new accounts, or import previous accounts
and keys.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#create-a-new-account">Create a new account</router-link></li><li><router-link to="#import-an-account">Import an account</router-link></li><li><router-link to="#list-show-accounts">List &amp; show accounts</router-link></li></ul></nav>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Before continuing, ensure you have gone through the following docs:</p>
<ol>
<li><RouterLink to="/mainchain/software/installation.html">Installing the software</RouterLink></li>
</ol>
<h2 id="create-a-new-account" tabindex="-1"><a class="header-anchor" href="#create-a-new-account" aria-hidden="true">#</a> Create a new account</h2>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p>When you create a new account, the CMD will output a mnemonic. KEEP THIS SAFE - if you lose it, you will not be able to
recover your account!</p>
</div>
<p>To create a new account, run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> <span class="token punctuation">[</span>account_name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>[account_name]</code> is whatever name you would like to use as an identifier when signing transactions. For example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> my_new_wallet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>stick to alphanumeric characters, hyphens, underscores and full stops.</p>
</div>
<p>If your OS keyring for <code v-pre>und</code> is not already unlocked/created, you will be prompted for a password. Once entered,
the application will output your account details, including your wallet address, public key and mnemonic for
recovery/future importing.</p>
<p>Accounts and keys are stored in your OS keyring by default.</p>
<h2 id="import-an-account" tabindex="-1"><a class="header-anchor" href="#import-an-account" aria-hidden="true">#</a> Import an account</h2>
<p>The same command can be used to import a previously saved mnemonic by passing
the <code v-pre>--recover</code> flag:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys <span class="token function">add</span> <span class="token punctuation">[</span>account_name<span class="token punctuation">]</span> --recover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will be prompted to enter your mnemonic.</p>
<h2 id="list-show-accounts" tabindex="-1"><a class="header-anchor" href="#list-show-accounts" aria-hidden="true">#</a> List &amp; show accounts</h2>
<p>You can list locally stored account with the following command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or show the details of a particular account:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und keys show my_new_wallet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run <code v-pre>und keys --help</code> for further details</p>
</div></template>
