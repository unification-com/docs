<template><div><h1 id="ooo-contract-initialisation-and-data-request-guide" tabindex="-1"><a class="header-anchor" href="#ooo-contract-initialisation-and-data-request-guide" aria-hidden="true">#</a> OoO Contract Initialisation and Data Request Guide</h1>
<p>This guide will walk you through the steps required to initialise your contract (add
Tokens and increase the Router's allowance), and also make a data request.</p>
<div class="custom-container warning"><p class="custom-container-title">Note</p>
<p>ensure you have gone though the <RouterLink to="/ooo/guide/implementation.html">implementation</RouterLink> guide
and deployed your smart contract before continuing with this guide.</p>
</div>
<p>Run the <code v-pre>truffle</code> development console, and connect to the Rinkeby testnet:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx truffle console --network<span class="token operator">=</span>rinkeby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>See <RouterLink to="/ooo/guide/ooo_api.html">OoO Data API Guide</RouterLink> for the latest <strong>Rinkeby</strong> OoO Finchains data
provider address, used for the <code v-pre>provider</code> variable below</p>
</div>
<p>Within the <code v-pre>truffle</code> console, load the contract instances, and accounts
ready for interaction</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> accounts <span class="token operator">=</span> await web3.eth.getAccounts<span class="token punctuation">(</span><span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> consumerOwner <span class="token operator">=</span> accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> provider <span class="token operator">=</span> <span class="token string">"0x611661f4B5D82079E924AcE2A6D113fAbd214b14"</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> myDataConsumer <span class="token operator">=</span> await MyDataConsumer.deployed<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-contract-initialisation" tabindex="-1"><a class="header-anchor" href="#_1-contract-initialisation" aria-hidden="true">#</a> 1. Contract Initialisation</h2>
<p>The following steps need only be done periodically, to ensure all parties have
the correct amount of tokens and gas to pay for data.</p>
<p>Go to <a href="https://rinkeby.etherscan.io/address/0x245330351344F9301690D5D8De2A07f5F32e1149#writeContract" target="_blank" rel="noopener noreferrer">xFUNDMOCK<ExternalLinkIcon/></a>
on Etherscan, and connect MetaMask <strong>with the account used to deploy the <code v-pre>MyDataConsumer</code>
smart contract</strong>, then run the <code v-pre>gimme()</code> function. This is a faucet function, and will
supply your wallet with 10 <code v-pre>xFUNDMOCK</code> tokens. You may do this once per hour.</p>
<p>Get the deployed address for your <code v-pre>MyDataConsumer</code> smart contract:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> myDataConsumer.address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, using either Etherscan, or MetaMask, transfer 5 <code v-pre>xFUNDMOCK</code> tokens to your
<code v-pre>MyDataConsumer</code> contract address.</p>
<p>Finally, we need to allow the <code v-pre>Router</code> smart contract to pay fees on the <code v-pre>MyDataConsumer</code>
contract's behalf:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> myDataConsumer.increaseRouterAllowance<span class="token punctuation">(</span><span class="token string">"115792089237316195423570985008687907853269984665640564039457584007913129639935"</span>, <span class="token punctuation">{</span>from: consumerOwner<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-data-request" tabindex="-1"><a class="header-anchor" href="#_2-data-request" aria-hidden="true">#</a> 2. Data Request</h2>
<p>Now that the <code v-pre>MyDataConsumer</code> smart contract has been initialised, we can request data to
be sent to the smart contract. You may need to top up Consumer contract's
tokens every so often.</p>
<p>First, check the current <code v-pre>price</code> in your <code v-pre>MyDataConsumer</code> contract. Run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> priceBefore <span class="token operator">=</span> await myDataConsumer.price<span class="token punctuation">(</span><span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> priceBefore.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result should be 0.</p>
<p>Next, request some data from the provider. Run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> endpoint <span class="token operator">=</span> web3.utils.asciiToHex<span class="token punctuation">(</span><span class="token string">"BTC.USD.PR.AVI"</span><span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> myDataConsumer.getData<span class="token punctuation">(</span>provider, <span class="token number">100000000</span>, endpoint, <span class="token punctuation">{</span>from: consumerOwner<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The first command encodes the data endpoint (the data we want to get) into a bytes32
value. We are requesting the mean (<code v-pre>PR.AVI</code>) US dollar (<code v-pre>USD</code>) price of Bitcoin (<code v-pre>BTC</code>), with
outliers (very high or very low) values removed (<code v-pre>AVI</code> as opposed to <code v-pre>AVG</code>)
from the final mean calculation.</p>
<p>A full list of supported currency pairs is available from the <a href="https://crypto.finchains.io/api/pairs" target="_blank" rel="noopener noreferrer">Finchains API<ExternalLinkIcon/></a></p>
<p>It may take a block or two for the request to be fully processed - the provider will listen for
the request, then submit a Tx with the data to the <code v-pre>Router</code>, which will forward it to
your smart contract.</p>
<p>After 30 seconds or so, run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> priceAfter <span class="token operator">=</span> await myDataConsumer.price<span class="token punctuation">(</span><span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> priceAfter.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If the price is still 0, simply run the following a couple more times:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> priceAfter <span class="token operator">=</span> await myDataConsumer.price<span class="token punctuation">(</span><span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> priceAfter.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The price should now be a non-zero value.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>By default, the OoO sends all price data converted to <code v-pre>actualPrice * (10 ** 18)</code> in
order to remove any decimals.</p>
<p>To convert to the actual decimal price, you can for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">let</span> actualPrice <span class="token operator">=</span> web3.utils.fromWei<span class="token punctuation">(</span>priceAfter<span class="token punctuation">)</span>
truffle<span class="token punctuation">(</span>rinkeby<span class="token punctuation">)</span><span class="token operator">></span> actualPrice.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>Next - see what data can be requested via the <RouterLink to="/ooo/guide/ooo_api.html">Finchains OoO API</RouterLink>.</p>
</div></template>
