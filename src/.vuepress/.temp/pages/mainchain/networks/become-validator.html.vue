<template><div><h1 id="becoming-a-validator" tabindex="-1"><a class="header-anchor" href="#becoming-a-validator" aria-hidden="true">#</a> Becoming a Validator</h1>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>If you intend to become a <code v-pre>MainNet</code> Validator, it is <strong>HIGHLY</strong> recommended that you practice on <code v-pre>TestNet</code> first
in order to fully familiarise yourself with the process.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Whenever you use <code v-pre>und</code> to send Txs or query the chain ensure you pass the correct data to the <code v-pre>--chain-id</code> and if
necessary <code v-pre>--node=</code> flags so that you connect to the correct network!</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Validator nodes require high availability and uptimes. The following guide therefore assumes the node is running on a
server/cloud VM, as opposed to a laptop or home PC.</p>
</div>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#creating-a-validator">Creating a validator</router-link><ul><li><router-link to="#verify">Verify</router-link></li></ul></li></ul></nav>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Before continuing, ensure you have gone through the following docs:</p>
<ol>
<li><RouterLink to="/mainchain/software/installation.html">Installing the software</RouterLink></li>
<li><RouterLink to="/mainchain/networks/join-network.html">Join a Public Network</RouterLink></li>
<li><RouterLink to="/mainchain/software/accounts-wallets.html">Accounts and Wallets</RouterLink></li>
<li>Chain ID - if you haven't already, you can get the current chain ID by running:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>jq --raw-output '.chain_id' $HOME/.und_mainchain/config/genesis.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command assumes you have downloaded the appropriate genesis for the network you wish to become a Validator
on to the default <code v-pre>$HOME/.und_mainchain</code> directory.</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>you will need an account with sufficient FUND to self-delegate to your validator node.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>if you intend to fully participate in the running of a network, your node will need to be permanently available and
online. In which case, you will need to investigate running <code v-pre>und</code> as a <RouterLink to="/mainchain/networks/run-und-as-service.html">background service</RouterLink></p>
</div>
<h2 id="creating-a-validator" tabindex="-1"><a class="header-anchor" href="#creating-a-validator" aria-hidden="true">#</a> Creating a validator</h2>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT!</p>
<p>keep your <code v-pre>$HOME/.und_mainchain/config/node_key.json</code> and <code v-pre>$HOME/.und_mainchain/config/priv_validator_key.json</code> files
<strong>safe and secure</strong>! These are required for your node to propose and sign blocks. If you ever migrate your node to a
different host machine or need to restore your node, you will need these!</p>
</div>
<p>The first thing you will need is your node's Tendermint validator public key. This will be used to register your node
as a Validator on the network. To get the key, open a terminal and run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tendermint show-validator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will output your node's public key. Make a note of it, as it will be required soon.</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Before continuing, ensure your full node has fully synced with the network and downloaded all the blocks (this may take
a while, so go and make a brew). You can check the status of your node's sync by running the following from the node
host:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -s http://localhost:26657/status <span class="token operator">|</span> jq <span class="token string">'.result.sync_info.catching_up'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>if the value is <code v-pre>false</code>, the node is fully synced</p>
</div>
<p>To create your Validator, you will need to generate, sign and broadcast a special transaction to the network which will
register your Tendermint validator public key and stake the amount of FUND (in <code v-pre>nund</code>) specified (via self-delegation).
Run the following command, modifying as required:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx staking create-validator <span class="token punctuation">\</span>
  --amount<span class="token operator">=</span>STAKE_IN_NUND <span class="token punctuation">\</span>
  --pubkey<span class="token operator">=</span>NODE_TENDERMINT_PUBLIC_KEY <span class="token punctuation">\</span>
  --moniker<span class="token operator">=</span><span class="token string">"YOUR_VALIDATOR_MONIKER"</span> <span class="token punctuation">\</span>
  --website<span class="token operator">=</span><span class="token string">"YOUR_WEBSITE_URL"</span> <span class="token punctuation">\</span>
  --identity<span class="token operator">=</span>16_DIGIT_KEYBASE_IO_ID <span class="token punctuation">\</span>
  --details<span class="token operator">=</span><span class="token string">"NODE_DESCRIPTION"</span> <span class="token punctuation">\</span>
  --security-contact<span class="token operator">=</span><span class="token string">"SECURITY_CONTACT_EMAIL"</span> <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>CHAIN_ID <span class="token punctuation">\</span>
  --commission-rate<span class="token operator">=</span><span class="token string">"0.10"</span> <span class="token punctuation">\</span>
  --commission-max-rate<span class="token operator">=</span><span class="token string">"0.20"</span> <span class="token punctuation">\</span>
  --commission-max-change-rate<span class="token operator">=</span><span class="token string">"0.01"</span> <span class="token punctuation">\</span>
  --min-self-delegation<span class="token operator">=</span><span class="token string">"1"</span> <span class="token punctuation">\</span>
  --gas<span class="token operator">=</span><span class="token string">"auto"</span> <span class="token punctuation">\</span>
  --gas-prices<span class="token operator">=</span><span class="token string">"0.25nund"</span> <span class="token punctuation">\</span>
  --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
  --from<span class="token operator">=</span>SELF_DELEGATOR_ACCOUNT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Mandatory fields</strong></p>
<p><code v-pre>STAKE_IN_NUND</code>: the amount in nund you want to delegate to yourself. For example, if you want to stake 1000 FUND,
enter 1000000000000nund.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can use the built in <code v-pre>und</code> conversion tool to calculate this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und convert 1000 fund nund.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>do not attempt to stake more than you have in your account. <strong>Ensure you have enough FUND to pay for the transaction
fees, and enough left over for future transactions such as withdrawing rewards!</strong></p>
</div>
<p><code v-pre>NODE_TENDERMINT_PUBLIC_KEY</code>: Your node's tendermint public key, obtained earlier via the
<code v-pre>und tendermint show-validator</code> command.</p>
<p><code v-pre>CHAIN_ID</code>: the chain you are creating a validator for. This was obtained previously via the <code v-pre>jq</code> command, and will
be for example <code v-pre>FUND-TestNet-2</code> or <code v-pre>FUND-Mainchain-MainNet-v1</code> etc.</p>
<p><code v-pre>SELF_DELEGATOR_ACCOUNT</code>: the name of the account being used to stake self-delegated FUND and sign the
transaction — for example, the identifier you entered when running the <code v-pre>und keys add</code> command to
create/import an account.</p>
<p><code v-pre>YOUR_VALIDATOR_MONIKER</code>: a moniker which will publicly identify your Validator node on the network.</p>
<p><strong>Optional fields</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Ensure you create your validator with as much of the following additional information as you can. It will be
publicly visible, and help potential stakers connect with you</p>
</div>
<p><code v-pre>YOUR_WEBSITE_URL</code>: the URL for the site promoting your validation node</p>
<p><code v-pre>16_DIGIT_KEYBASE_IO_ID</code>: Your 16 digit public <a href="https://keybase.io" target="_blank" rel="noopener noreferrer">keybase.io<ExternalLinkIcon/></a> PGP public key ID if you have one
and want to associate your ID to your validator node.</p>
<p><code v-pre>NODE_DESCRIPTION</code>: a brief description of your validator node</p>
<p><code v-pre>SECURITY_CONTACT_EMAIL</code>: Email address for the security contact for your validator node</p>
<p><strong>Commission Rates</strong></p>
<p>Your commission rates can be set using the <code v-pre>--commission-rate</code> , <code v-pre>--commission-max-change-rate</code> and
<code v-pre>--commission-max-rate</code> flags.</p>
<p><code v-pre>--commission-rate</code>: The % commission you will earn from delegators’ rewards. Keeping this relatively low can
attract more delegators to your node.</p>
<p><code v-pre>--commission-max-rate</code>: The maximum you will ever increase your commission rate to — you cannot raise commission
above this value. Again, keeping this low can attract more delegators.</p>
<p><code v-pre>--commission-max-change-rate</code>: The maximum you can increase the commission-rate by per day. For example, if your
maximum change rate is 0.01, you can only make changes in 0.01 increments, so from 0.10 (10%) to 0.11 (11%).</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>The values for <code v-pre>--commission-max-change-rate</code> and <code v-pre>--commission-max-rate</code> flags <strong>cannot be changed</strong> after
the <code v-pre>create-validator</code> command has been run.</p>
</div>
<p>Finally, the <code v-pre>--min-self-delegation</code> flag is the minimum amount of <code v-pre>nund</code> you are required to keep self-delegated
to your validator, meaning you must always have <em>at least</em> this amount self-delegated to your node.</p>
<p><strong>Example: creating a TestNet validator</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx staking create-validator <span class="token punctuation">\</span>
--amount<span class="token operator">=</span>1000000000000nund <span class="token punctuation">\</span>
--pubkey<span class="token operator">=</span>undvalconspub1zcjduepq6yq7drzefkavsrxhxk69cy63tj3r<span class="token punctuation">..</span>. <span class="token punctuation">\</span>
--moniker<span class="token operator">=</span><span class="token string">"MyAwesomeNode"</span> <span class="token punctuation">\</span>
--website<span class="token operator">=</span><span class="token string">"https://my-node-site.com"</span> <span class="token punctuation">\</span>
--details<span class="token operator">=</span><span class="token string">"My node is awesome"</span> <span class="token punctuation">\</span>
--security-contact<span class="token operator">=</span><span class="token string">"security@my-node-site.com"</span> <span class="token punctuation">\</span>
--chain-id<span class="token operator">=</span>FUND-TestNet-2 <span class="token punctuation">\</span>
--commission-rate<span class="token operator">=</span><span class="token string">"0.07"</span> <span class="token punctuation">\</span>
--commission-max-rate<span class="token operator">=</span><span class="token string">"0.20"</span> <span class="token punctuation">\</span>
--commission-max-change-rate<span class="token operator">=</span><span class="token string">"0.01"</span> <span class="token punctuation">\</span>
--min-self-delegation<span class="token operator">=</span><span class="token string">"1000000000"</span> <span class="token punctuation">\</span>
--gas<span class="token operator">=</span><span class="token string">"auto"</span> <span class="token punctuation">\</span>
--gas-prices<span class="token operator">=</span><span class="token string">"0.25nund"</span> <span class="token punctuation">\</span>
--gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
--from<span class="token operator">=</span>my_new_wallet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command will return a Tx hash, which you can use to query whether or not the transaction was successful:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query tx TX_HASH --chain-id FUND-TestNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>you can set the <code v-pre>--broadcast-mode</code> flag in the command to <code v-pre>block</code>. This will tell <code v-pre>und</code> to wait for the
transaction to be processed in a block before returning the result. This will take up to 5-6 seconds to complete,
but the Tx result will be included in the output.</p>
</div>
<h3 id="verify" tabindex="-1"><a class="header-anchor" href="#verify" aria-hidden="true">#</a> Verify</h3>
<p>You can verify your node is registered as a validator by running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query staking validator <span class="token punctuation">\</span>
  <span class="token variable"><span class="token variable">$(</span>und keys show SELF_DELEGATOR_ACCOUNT --bech<span class="token operator">=</span>val -a<span class="token variable">)</span></span> <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span>CHAIN_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>replacing <code v-pre>SELF_DELEGATOR_ACCOUNT</code> and <code v-pre>CHAIN_ID</code> accordingly.</p>
</div></template>
