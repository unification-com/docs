<template><div><h1 id="fees-and-gas" tabindex="-1"><a class="header-anchor" href="#fees-and-gas" aria-hidden="true">#</a> Fees and Gas</h1>
<p>Transactions consume gas, and the sender must pay a fee in order for the transaction be processed by the validator
nodes. The fee is calculated from the amount of gas a Tx will consume multiplied by the gas price.</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>The gas price for a transaction is set by the sender of the Tx, but each validator will have set their own
<code v-pre>minimum-gas-prices</code> value, and will not process transactions that do not meet this minimum requirement.</p>
</div>
<p>Fees are paid in <code v-pre>nund</code>, and may be either set or calculated depending on which flags are passed to the <code v-pre>und</code> command.</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>only <code v-pre>--fees</code> or <code v-pre>--gas-prices</code> may be used - not both at the same time.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>--gas-prices</code> can be used along with the <code v-pre>--gas=auto</code> and <code v-pre>--gas-adjustment</code> flags to estimate the gas requirement
and automatically calculate the Tx fees.</p>
</div>
<h2 id="example-1-setting-fees" tabindex="-1"><a class="header-anchor" href="#example-1-setting-fees" aria-hidden="true">#</a> Example 1: setting --fees</h2>
<p>In this example, we're manually setting the fee for a standard <code v-pre>send</code> transaction. The validator has a
<code v-pre>minimum-gas-prices</code> of <code v-pre>25.0nund</code>. We'll set the <code v-pre>--fee</code> to 2000000nund. For the purposes of simpler calculations,
we'll assume the amount of <strong>gas</strong> consumed for this <code v-pre>send</code> transaction, including a small <code v-pre>--memo</code> will be around 65000.</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>gas is defined on the chain as a flat cost per byte for a Tx, e.g. 10 gas per byte. The total size of our Tx will be
around 6500 bytes, and therefore the gas consumed by the Tx will be 6500 * 10 = 65000.</p>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx send [from] [to] 123456nund --memo="some und from me to you" --fees=2000000nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this instance, the <code v-pre>gas-price</code> is implied as approximately 30.77nund (fee / gas: 2000000 / 65000), so the Validator
will accept the Tx and include it in the block, since 30.77nund &gt; 25.0nund.</p>
<p>If we had set the <code v-pre>--fees</code> to 1000000, it would not have been processed by the Validator (1000000 / 65000 = 15.38nund).</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>the Tx with lower fees may remain the Tx pool until a validator with lower <code v-pre>minimum-gas-prices</code> picks it up and
proposes the block.</p>
</div>
<h2 id="example-2-setting-gas-and-gas-prices" tabindex="-1"><a class="header-anchor" href="#example-2-setting-gas-and-gas-prices" aria-hidden="true">#</a> Example 2: setting --gas and --gas-prices</h2>
<p>In this example, we'll set our own <code v-pre>--gas-prices</code>, and ask <code v-pre>und</code> to estimate the amount of gas the Tx will
consume based on the Tx input by passing the <code v-pre>--gas=auto</code> flag. We can also use the <code v-pre>--gas-adjustment</code>
flag to increase/decrease this gas estimate. We'll assume again that the calculated estimate will be around 65000 gas:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx send from to 123456nund --memo="some und from me to you" --gas=auto --gas-prices=25.0nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this example, the Tx <strong>fee</strong> will be calculated and included in the transaction for us.
The fee will be around 1625000nund (<code v-pre>gas * gas-prices</code>: 65000 * 25.0). Since we have set <code v-pre>gas-prices</code> already to 25.0
(and assuming the gas estimate is also correct), this Tx will be processed by the validator.</p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>Adding the <code v-pre>--gas-adjustment</code> flag, for example <code v-pre>--gas-adjustment=1.5</code>, will increase the gas estimate and
therefore the fee, but will increase the chances of the Tx being processed.</p>
</div>
<p>Validators will prioritise Txs with higher <code v-pre>gas-prices</code>, so it is worth setting higher prices to ensure your Tx is
processed.</p>
</div></template>
