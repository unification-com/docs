<template><div><h1 id="vor-quickstart" tabindex="-1"><a class="header-anchor" href="#vor-quickstart" aria-hidden="true">#</a> VOR Quickstart</h1>
<p>Example implementations can be found at
<a href="https://github.com/unification-com/vor-demos" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/vor-demos<ExternalLinkIcon/></a></p>
<h2 id="integration" tabindex="-1"><a class="header-anchor" href="#integration" aria-hidden="true">#</a> Integration</h2>
<p>In order to request randomness,you will need to import the <code v-pre>VORConsumerBase.sol</code> smart contract
and set up some simple functions within your smart contract. It is advisable to also implement
OpenZeppelin's <code v-pre>Ownable</code> functionality to secure functions:</p>
<ol>
<li>Add the packages to your project:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add @unification-com/xfund-vor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>In your smart contract, import <code v-pre>VORConsumerBase.sol</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-vor/contracts/VORConsumerBase.sol"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>Extend your contract, adding <code v-pre>is VORConsumerBase</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">MyRandomNumberContract</span> <span class="token keyword">is</span> VORConsumerBase <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>Ensure your <code v-pre>constructor</code> function has at least two parameters to accept the <code v-pre>VORCoordinator</code>
and <code v-pre>xFUND</code> smart contract addresses, and pass them to the <code v-pre>ConsumerBase</code>:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _vorCoordinator<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">VORConsumerBase</span><span class="token punctuation">(</span>_vorCoordinator<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// other stuff...</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Implement a <code v-pre>requestRandomness</code> function, for example:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">requestRandomness</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _userProvidedSeed<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _keyHash<span class="token punctuation">,</span> unit256 _fee<span class="token punctuation">)</span> 
<span class="token keyword">public</span> 
onlyOwner 
<span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">require</span><span class="token punctuation">(</span>xFUND<span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">>=</span> _fee<span class="token punctuation">,</span> <span class="token string">"Not enough xFUND to pay fee"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    requestId <span class="token operator">=</span> <span class="token function">requestRandomness</span><span class="token punctuation">(</span>_keyHash<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _userProvidedSeed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">emit</span> <span class="token function">RandomnessRequested</span><span class="token punctuation">(</span>requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Implement the <code v-pre>fulfillRandomness</code> function for data Providers to send data, for example:</li>
</ol>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">fulfillRandomness</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> randomness<span class="token punctuation">)</span> <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
    <span class="token comment">// do something with the received number</span>
    <span class="token builtin">uint256</span> randVal <span class="token operator">=</span> randomness<span class="token punctuation">.</span><span class="token function">mod</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// then for example, emit an event</span>
    <span class="token keyword">emit</span> <span class="token function">RandomnessReceived</span><span class="token punctuation">(</span>requestId<span class="token punctuation">,</span> randomness<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should now be ready to compile and deploy your smart contract with your preferred toolchain
(Truffle, Hardhat etc.)</p>
<h2 id="initialisation" tabindex="-1"><a class="header-anchor" href="#initialisation" aria-hidden="true">#</a> Initialisation</h2>
<p>Assuming the most basic implementation outlined above, once integrated, compiled and deployed,
you will need to send some transactions to the Ethereum blockchain in order to initialise the fee
payment and data acquisition environment. This involves:</p>
<ol>
<li>
<p>Increasing the <code v-pre>xFUND</code> token allowance on the <code v-pre>VORCoordinator</code> smart contract, in order for the <code v-pre>VORCoordinator</code>
to accept and pay xFUND fees to VOR providers. This need only be run once, if the initial
allowance is set high enough.</p>
</li>
<li>
<p>Transfer some <code v-pre>xFUND</code> tokens to your smart contract, that is integrating the Consumer Library.
This allows you to submit randomness requests, and your contract to pay fees. The required amount
of <code v-pre>xFUND</code> to pay for a request fee is sent to the <code v-pre>VORCoordinator</code> with each request.</p>
<p><strong>Note</strong>: The <code v-pre>xFUNDMOCK</code> Token on Rinkeby testnet has a faucet function, <code v-pre>gimme()</code> which can be used
to grab some test tokens.</p>
</li>
</ol>
<p>Once these steps have been run through, you will be able to initialise data requests via your
smart contract.</p>
<h2 id="requesting-randomness" tabindex="-1"><a class="header-anchor" href="#requesting-randomness" aria-hidden="true">#</a> Requesting Randomness</h2>
<p>Once the environment has been initialised, you will be able to request randomness</p>
<p>Requesting a random number is a simple case of calling your <code v-pre>requestRandomness</code> function
and passing the relevant data - i.e. a seed (can be any number), the key hash of the provider
(supplied by them), for example see <RouterLink to="/vor/contracts.html">Contracts</RouterLink>, and the required fee amount
to pay for the request.</p>
<p>The selected VOR Oracle (defied by the key hash you send) will see the request, generate a random
number and submit it via the <code v-pre>VORCoordinator</code> to your defined <code v-pre>fulfillRandomness</code> function. Once
received, you can do whatever you need with the number.</p>
<p>For a full implementation run through, see our <RouterLink to="/vor/guide/implementation.html">implementation guide</RouterLink>.</p>
</div></template>
