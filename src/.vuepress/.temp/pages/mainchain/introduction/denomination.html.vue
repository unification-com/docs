<template><div><h1 id="native-coin-denomination-nund" tabindex="-1"><a class="header-anchor" href="#native-coin-denomination-nund" aria-hidden="true">#</a> Native Coin Denomination <code v-pre>nund</code></h1>
<p>The currency used on Mainchain is FUND. However, the native on-chain coin denomination (on MainNet, TestNet and DevNet)
is <strong><code v-pre>nund</code></strong>, or &quot;Nano Unification Denomination&quot;, such that <strong>1,000,000,000 nund == 1 FUND</strong>.</p>
<p>All transactions, fees and stakes are defined and paid for in <code v-pre>nund</code>. For example, if you need to send <strong>1 FUND</strong> to
your friend, you will need to set your Tx to send <code v-pre>1000000000nund</code>.</p>
<p>The <code v-pre>und</code> CMD has a simple conversion utility to help convert any fees
and FUND transactions into <code v-pre>nund</code>, and vice-versa:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und convert <span class="token number">1000000000</span> nund fund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will result in:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>1000000000nund <span class="token operator">=</span> <span class="token number">1</span>.000000000fund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Likewise,</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und convert <span class="token number">10</span> fund nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will result in:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>10fund <span class="token operator">=</span> 10000000000nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hd-wallet-path" tabindex="-1"><a class="header-anchor" href="#hd-wallet-path" aria-hidden="true">#</a> HD Wallet Path</h2>
<p>The <code v-pre>BIP-0044</code> Path for our HD Wallets is as follows:</p>
<p><code v-pre>44'/5555'/0'/0</code></p>
<p><code v-pre>SLIP-0044</code> Coin ID is <code v-pre>5555</code></p>
</div></template>
