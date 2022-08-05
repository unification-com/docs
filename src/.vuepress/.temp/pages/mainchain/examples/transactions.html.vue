<template><div><h1 id="sending-simple-transactions" tabindex="-1"><a class="header-anchor" href="#sending-simple-transactions" aria-hidden="true">#</a> Sending Simple Transactions</h1>
<p>The <code v-pre>und</code> CMD can be used to generate, sign and broadcast new transactions
to the network. It can also be used to query transactions, accounts and
a variety of other network information.</p>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>Whenever you use <code v-pre>und</code> to send Txs or query the chain ensure you pass the correct data to the <code v-pre>--chain-id</code> and if
necessary <code v-pre>--node=</code> flags so that you connect to the correct network!</p>
</div>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#sending-a-transaction">Sending a Transaction</router-link></li><li><router-link to="#query-a-transaction">Query a Transaction</router-link></li><li><router-link to="#query-an-account">Query an Account</router-link></li></ul></nav>
<h2 id="sending-a-transaction" tabindex="-1"><a class="header-anchor" href="#sending-a-transaction" aria-hidden="true">#</a> Sending a Transaction</h2>
<p>In this example, we'll generate and sign a simple <code v-pre>send</code> transaction, which will
send 1 FUND. IF you have followed the documentation so far, you should already
have the software installed, be running a full node, and have an account
with funds.</p>
<p>The <code v-pre>send</code> command is as follows:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx send <span class="token punctuation">[</span>from_key_or_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>to_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>amount<span class="token punctuation">]</span> --chain-id <span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span> --node<span class="token operator">=</span>tcp://<span class="token punctuation">[</span>ip<span class="token punctuation">]</span>:<span class="token punctuation">[</span>port<span class="token punctuation">]</span> --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> --gas-prices<span class="token operator">=</span><span class="token number">0</span>.25nund --trust-node <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>[from_key_or_address]</code> - this can be either your account identifier, or your <code v-pre>bech32</code> address</li>
<li><code v-pre>[to_address]</code> - the <code v-pre>bech32</code> address of the account you are sending FUND to</li>
<li><code v-pre>[amount]</code> - the amount, in <code v-pre>nund</code></li>
<li><code v-pre>[chain_id]</code> - the ID of the chain to run the transaction on</li>
<li><code v-pre>[ip]:[port]</code> - the IP and Port of the RPC node to broadcast the Tx</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you are running your own full node, you can set the <code v-pre>--trust-node</code> flag to <code v-pre>true</code>, which will tell <code v-pre>und</code> not to
verify the proofs form the response.</p>
</div>
<p>For example, we are running on DevNet, and would like to send 1 FUND from
our account <code v-pre>und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed</code>, to our friend's
account <code v-pre>und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy</code>. We would
therefore run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx send und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy 1000000000nund --chain-id FUND-DevNet-2 --node<span class="token operator">=</span>tcp://172.25.0.3:26661 --gas<span class="token operator">=</span>auto --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> --gas-prices<span class="token operator">=</span><span class="token number">0</span>.25nund --trust-node<span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will be prompted for confirmation, along with your password for the account.</p>
<p>If all goes well, the transaction will be broadcast and you should see a result
similar to the following:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"height"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
  <span class="token property">"txhash"</span><span class="token operator">:</span> <span class="token string">"6FC93147D467E27C104BD68DADAC0CFD6AA130E37E8B29F6652570A891E38F71"</span><span class="token punctuation">,</span>
  <span class="token property">"raw_log"</span><span class="token operator">:</span> <span class="token string">"[]"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>you can set the <code v-pre>--broadcast-mode</code> flag in the command to <code v-pre>block</code>. This will tell <code v-pre>und</code> to wait for the transaction
to be processed in a block before returning the result. This will take up to 5-6 seconds to complete, but the Tx result
will be included in the output.</p>
</div>
<h2 id="query-a-transaction" tabindex="-1"><a class="header-anchor" href="#query-a-transaction" aria-hidden="true">#</a> Query a Transaction</h2>
<p>You can then query the transaction's progress and final result by running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query tx 6FC93147D467E27C104BD68DADAC0CFD6AA130E37E8B29F6652570A891E38F71 --chain-id FUND-DevNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output should be similar to:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"height"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
  <span class="token property">"txhash"</span><span class="token operator">:</span> <span class="token string">"6FC93147D467E27C104BD68DADAC0CFD6AA130E37E8B29F6652570A891E38F71"</span><span class="token punctuation">,</span>
  <span class="token property">"raw_log"</span><span class="token operator">:</span> <span class="token string">"[{\"msg_index\":0,\"log\":\"\",\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"send\"},{\"key\":\"sender\",\"value\":\"und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy\"},{\"key\":\"amount\",\"value\":\"100000000000nund\"}]}]}]"</span><span class="token punctuation">,</span>
  <span class="token property">"logs"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"msg_index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"log"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"events"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"message"</span><span class="token punctuation">,</span>
          <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"action"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"send"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"sender"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"bank"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"transfer"</span><span class="token punctuation">,</span>
          <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"recipient"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"amount"</span><span class="token punctuation">,</span>
              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"100000000000nund"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"gas_wanted"</span><span class="token operator">:</span> <span class="token string">"75420"</span><span class="token punctuation">,</span>
  <span class="token property">"gas_used"</span><span class="token operator">:</span> <span class="token string">"63558"</span><span class="token punctuation">,</span>
  <span class="token property">"tx"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"cosmos-sdk/StdTx"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"cosmos-sdk/MsgSend"</span><span class="token punctuation">,</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"from_address"</span><span class="token operator">:</span> <span class="token string">"und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed"</span><span class="token punctuation">,</span>
            <span class="token property">"to_address"</span><span class="token operator">:</span> <span class="token string">"und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy"</span><span class="token punctuation">,</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
                <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"100000000000"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"fee"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"1886"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"gas"</span><span class="token operator">:</span> <span class="token string">"75420"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"signatures"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"pub_key"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"tendermint/PubKeySecp256k1"</span><span class="token punctuation">,</span>
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"A1qL4KCBiGgrE/PYIrUtpN08HxA7+Up+Q7eh3XNbCdSD"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token string">"VLldGBkI0C3xcqwGShR2ImIc76btDGtW7QlEVfeDHuZtONIHDR5Ckf87wROazxqVw3rM35RvPgTyoj8VkVFV4w=="</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"memo"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2020-04-01T14:28:51Z"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="query-an-account" tabindex="-1"><a class="header-anchor" href="#query-an-account" aria-hidden="true">#</a> Query an Account</h2>
<p>Finally, to check that the funds have been sent and received, we can query the
account:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query account und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy --chain-id FUND-DevNet-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Which will output a result similar to:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"account"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"cosmos-sdk/Account"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy"</span><span class="token punctuation">,</span>
      <span class="token property">"coins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
          <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"100400000000000"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"public_key"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"account_number"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"sequence"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"enterprise"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"0"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"available_for_wrkchain"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
        <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"100400000000000"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> Next</h4>
<p>Example transactions for <RouterLink to="/mainchain/examples/wrkchain.html">registering a WRKChain and submitting hashes</RouterLink></p>
</div></template>
