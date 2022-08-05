<template><div><h1 id="ooo-quickstart" tabindex="-1"><a class="header-anchor" href="#ooo-quickstart" aria-hidden="true">#</a> OoO Quickstart</h1>
<h2 id="integration" tabindex="-1"><a class="header-anchor" href="#integration" aria-hidden="true">#</a> Integration</h2>
<p>In order to request data, and enable data provision in your smart contract, you will need to
import the <code v-pre>ConsumerBase.sol</code> smart contract and set up two simple functions within your smart contract.</p>
<ol>
<li>Add the package to your project:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add @unification-com/xfund-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>In your smart contract, import <code v-pre>ConsumerBase.sol</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-router/contracts/lib/ConsumerBase.sol"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>Extend your contract, adding <code v-pre>is ConsumerBase</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">MyConsumer</span> <span class="token keyword">is</span> ConsumerBase <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>Ensure your <code v-pre>constructor</code> function has a parameter to accept the <code v-pre>Router</code>  and <code v-pre>xFUND</code>
smart contract addresses, and pass it to the <code v-pre>ConsumerBase</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _router<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">ConsumerBase</span><span class="token punctuation">(</span>_router<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// other stuff...</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>See <RouterLink to="/ooo/contracts.html">Contract Addresses</RouterLink> for the latest contract addresses</p>
</div>
<ol start="5">
<li>Implement the <code v-pre>receiveData</code> function for data Providers to send data, e.g.</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _price<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _requestId<span class="token punctuation">)</span> <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
    price <span class="token operator">=</span> _price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Thus must be <code v-pre>internal</code> and override the <code v-pre>ConsumerBase</code>'s <code v-pre>receiveData</code>.</p>
</div>
<ol start="6">
<li>Implement a function to request data, for example:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token builtin">address</span> _provider<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _fee<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_requestData</span><span class="token punctuation">(</span>_provider<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>Deploy. For example, using <code v-pre>truffle</code>, a very simple migration script for <code v-pre>Rinkeby</code> testnet
may look like:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Load my contract which implements ConsumerLib</span>
<span class="token keyword">const</span> MyConsumer <span class="token operator">=</span> artifacts<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"MyConsumer"</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deployer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// deploy, passing the Router and xFUND smart contract addresses</span>
  deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>MyConsumer<span class="token punctuation">,</span> <span class="token string">"0x...ROUTER_ADDRES"</span><span class="token punctuation">,</span> <span class="token string">"0x...XFUND_ADDRESS"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initialisation" tabindex="-1"><a class="header-anchor" href="#initialisation" aria-hidden="true">#</a> Initialisation</h2>
<p>Once integrated, compiled and deployed, you will need to send some transactions to the
Ethereum blockchain in order to initialise the fee payment, and data acquisition environment.
This involves:</p>
<ol>
<li>
<p>Increasing the <code v-pre>xFUND</code> token allowance on the <code v-pre>Router</code> smart contract, in order for the <code v-pre>Router</code>
to accept and pay xFUND fees to data providers. This need only be run once, if the initial
allowance is set high enough. A function is available in the ConsumerBase contract to facilitate
this, which can be wrapped around a function in your contract.</p>
</li>
<li>
<p>Transfer some <code v-pre>xFUND</code> tokens to your smart contract, that is integrating <code v-pre>ConsumerBase</code>.
This allows you to submit data requests, and your contract to pay fees. The required amount
of <code v-pre>xFUND</code> to pay for a request fee is sent to the <code v-pre>Router</code> with each request.
Your contract may need periodically topping up with <code v-pre>xFUND</code>, depending on how you implement
fee payment.</p>
<p><strong>Note</strong>: The <code v-pre>xFUNDMOCK</code> Token on Rinkeby testnet has a faucet function, <code v-pre>gimme()</code> which can be used
to grab some test tokens.</p>
</li>
</ol>
<p>Once these steps have been run through, you will be able to initialise data requests via your
smart contract.</p>
</div></template>
