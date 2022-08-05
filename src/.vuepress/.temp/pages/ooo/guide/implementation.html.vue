<template><div><h1 id="ooo-implementation-integration-guide" tabindex="-1"><a class="header-anchor" href="#ooo-implementation-integration-guide" aria-hidden="true">#</a> OoO Implementation &amp; Integration Guide</h1>
<p>This guide will walk you through all the necessary steps to get a fully working (albeit simple)
smart contract, which can obtain Price data from the Finchains Oracle of Oracles.</p>
<p>This guide will result in something similar to the <a href="https://github.com/unification-com/data-consumer-demo" target="_blank" rel="noopener noreferrer">Data Consumer Demo<ExternalLinkIcon/></a>.</p>
<p>The instructions will outline the steps required to deploy on the Rinkeby testnet, but
will also work with mainnet.</p>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p>You <strong>do not</strong> need to implement or deploy the <code v-pre>Router.sol</code> smart contract.</p>
<p>This is a smart contract deployed and maintained by the Unification Foundation and is
the core of the xFUND Router network. Your smart contract will only import and build on
the <code v-pre>ConsumerBase.sol</code> base smart contract, which in turn interacts
with the <code v-pre>Router</code> smart contract.</p>
</div>
<h2 id="_1-initialise-your-project-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_1-initialise-your-project-install-dependencies" aria-hidden="true">#</a> 1. Initialise your project &amp; install dependencies</h2>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>if you are integrating into an existing project, or are already familiar with
initialising <code v-pre>NodeJS</code> and <code v-pre>Truffle</code> projects, you can skip this section and move on
to <a href="#_1-2-install-the-required-dependencies">1.2. Install the required dependencies</a>.</p>
</div>
<h3 id="_1-1-initialise-your-project" tabindex="-1"><a class="header-anchor" href="#_1-1-initialise-your-project" aria-hidden="true">#</a> 1.1. Initialise your project</h3>
<p>Create the directory, and initialise NPM - accept the defaults for the <code v-pre>npm init</code> command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> consumer_demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> consumer_demo
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Install truffle, and initialise the Truffle project:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> truffle --save-dev
npx truffle init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You should now have a project structure as follows:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>contracts
migrations
node_modules
package.json
package-lock.json
<span class="token builtin class-name">test</span>
truffle-config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-install-the-required-dependencies" tabindex="-1"><a class="header-anchor" href="#_1-2-install-the-required-dependencies" aria-hidden="true">#</a> 1.2. Install the required dependencies</h3>
<p>We need to install some dependencies for the project - <code v-pre>@unification-com/xfund-router</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @unification-com/xfund-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you don't have them installed already, we also need <code v-pre>dotenv</code> and
<code v-pre>@truffle/hdwallet-provider</code>, both of which will be used to aid deployment and
interaction later:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> dotenv
<span class="token function">npm</span> <span class="token function">install</span> @truffle/hdwallet-provider --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-create-the-initial-contract" tabindex="-1"><a class="header-anchor" href="#_2-create-the-initial-contract" aria-hidden="true">#</a> 2. Create the initial Contract</h2>
<p>We'll start with a simple contract structure. With a text editor, create <code v-pre>contracts/MyDataConsumer.sol</code>
with the following contents:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">>=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">MyDataConsumer</span> <span class="token punctuation">{</span>

    <span class="token builtin">uint256</span> <span class="token keyword">public</span> price<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        price <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will be the basis for adding the OoO functionality from the <code v-pre>xfund-router</code> libraries.</p>
<p>The <code v-pre>price</code> variable is what we would like to be updated by OoO when we request data.</p>
<h3 id="_2-1-import-the-xfund-router-library-contracts" tabindex="-1"><a class="header-anchor" href="#_2-1-import-the-xfund-router-library-contracts" aria-hidden="true">#</a> 2.1 Import the <code v-pre>xfund-router</code> Library contracts</h3>
<p>Next, we need to import the <code v-pre>ConsumerBase.sol</code> smart contract, which interacts with
the <code v-pre>Router.sol</code> smart contract (which has been deployed and is maintained by the Unification
Foundation). The <code v-pre>ConsumerBase.sol</code> smart contract contains required functions for
interacting with the system. You only need to define a couple of functions in your own
smart contract in order to use the OoO system, which override or extend the underlying
<code v-pre>ConsumerBase</code> functions.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>You can view the functions implemented by <code v-pre>ConsumerBase.sol</code> in the <RouterLink to="/ooo/api/lib/ConsumerBase.html">Data Consumer smart contract
API documentation</RouterLink>. There are some additional helper functions which
can be wrapped in functions in your own smart contract.</p>
</div>
<p>First, import the <code v-pre>ConsumerBase.sol</code> smart contract. After the <code v-pre>pragma</code> definition, add:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-router/contracts/lib/ConsumerBase.sol"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, edit the contract definition, so that it extends <code v-pre>ConsumerBase.sol</code>:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">MyDataConsumer</span> <span class="token keyword">is</span> ConsumerBase <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finally, modify the <code v-pre>constructor</code> function to call the <code v-pre>ConsumerBase.sol</code>'s constructor,
passing the contract addresses for <code v-pre>Router</code> and <code v-pre>xFUND</code>:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _router<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">ConsumerBase</span><span class="token punctuation">(</span>_router<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        price <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The full <code v-pre>MyDataConsumer.sol</code> contract code should now look like this:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-router/contracts/lib/ConsumerBase.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">MyDataConsumer</span> <span class="token keyword">is</span> ConsumerBase <span class="token punctuation">{</span>

    <span class="token builtin">uint256</span> <span class="token keyword">public</span> price<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _router<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">ConsumerBase</span><span class="token punctuation">(</span>_router<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        price <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-define-the-required-recievedata-smart-contract-function" tabindex="-1"><a class="header-anchor" href="#_3-define-the-required-recievedata-smart-contract-function" aria-hidden="true">#</a> 3. Define the required <code v-pre>recieveData</code> smart contract function</h2>
<p><code v-pre>recieveData</code> will be called by the Data Provider (indirectly - it is actually proxied
via the <code v-pre>Router</code> smart contract) in order to fulfil a data request and send data to
our smart contract. It should override the abstract <code v-pre>recieveData</code> function defined
in the <code v-pre>ConsumerBase.sol</code> base smart contract, and must have the following parameters:</p>
<p><code v-pre>uint256 _price</code> - the price data the provider is sending<br>
<code v-pre>bytes32 _requestId</code> - the ID of the request being fulfilled. This is passed
in case your contract needs to do some further processing with the request ID.</p>
<p>Add the following function definition to your <code v-pre>MyDataConsumer.sol</code> contract:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _price<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _requestId<span class="token punctuation">)</span>
    <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
        price <span class="token operator">=</span> _price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can optionally also add an event to the function, for example:</p>
<p>Define a new event in the contract:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">MyDataConsumer</span> <span class="token keyword">is</span> ConsumerBase <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">event</span> <span class="token function">GotSomeData</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and emit within the <code v-pre>recieveData</code> function:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">recieveData</span><span class="token punctuation">(</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">emit</span> <span class="token function">GotSomeData</span><span class="token punctuation">(</span>_requestId<span class="token punctuation">,</span> _price<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-define-a-function-to-initialise-a-data-request" tabindex="-1"><a class="header-anchor" href="#_4-define-a-function-to-initialise-a-data-request" aria-hidden="true">#</a> 4. Define a function to initialise a data request</h2>
<p>Next, you'll need a function to request data. This needs to call the <code v-pre>ConsumerBase</code>'s
<code v-pre>_requestData</code> function, which will forward the request to the <code v-pre>Router</code>:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token builtin">address</span> _provider<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _fee<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_requestData</span><span class="token punctuation">(</span>_provider<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-add-a-function-to-allow-router-to-transfer-fees" tabindex="-1"><a class="header-anchor" href="#_5-add-a-function-to-allow-router-to-transfer-fees" aria-hidden="true">#</a> 5. Add a function to allow <code v-pre>Router</code> to transfer fees</h2>
<p>Finally, you'll need a function that calls <code v-pre>ConsumerBase</code>'s <code v-pre>_increaseRouterAllowance</code> function.
This function will increase the <code v-pre>Router</code>s xFUND allowance, allowing it to pay data request fees on
behalf of your smart contract:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">increaseRouterAllowance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">_increaseRouterAllowance</span><span class="token punctuation">(</span>_amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Note</p>
<p>This function should be protected by a library such as OpenZeppelin's <code v-pre>Ownable</code>, and have the
<code v-pre>onlyOwner</code> modifier applied such that only your contract's owner can all the function!</p>
</div>
<p>The final <code v-pre>MyDataConsumer.sol</code> code should now look something like this:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.6.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-router/contracts/lib/ConsumerBase.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">MyDataConsumer</span> <span class="token keyword">is</span> ConsumerBase <span class="token punctuation">{</span>

    <span class="token builtin">uint256</span> <span class="token keyword">public</span> price<span class="token punctuation">;</span>

    <span class="token keyword">event</span> <span class="token function">GotSomeData</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _router<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">ConsumerBase</span><span class="token punctuation">(</span>_router<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        price <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// Optionally protect with a modifier to limit who can call</span>
    <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token builtin">address</span> _provider<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _fee<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _data<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_requestData</span><span class="token punctuation">(</span>_provider<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// Todo - protect with a modifier to limit who can call!</span>
    <span class="token keyword">function</span> <span class="token function">increaseRouterAllowance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">_increaseRouterAllowance</span><span class="token punctuation">(</span>_amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ConsumerBase ensures only the Router can call this</span>
    <span class="token keyword">function</span> <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _price<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _requestId<span class="token punctuation">)</span>
    <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
        price <span class="token operator">=</span> _price<span class="token punctuation">;</span>
        <span class="token comment">// optionally emit an event to the logs</span>
        <span class="token keyword">emit</span> <span class="token function">GotSomeData</span><span class="token punctuation">(</span>_requestId<span class="token punctuation">,</span> _price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Finally, compile your contract:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx truffle compile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-set-up-the-deployment-env-and-truffle-config-js" tabindex="-1"><a class="header-anchor" href="#_6-set-up-the-deployment-env-and-truffle-config-js" aria-hidden="true">#</a> 6. Set up the deployment .env and truffle-config.js</h2>
<p>Ensure that you have:</p>
<ol>
<li>an <a href="https://infura.io/" target="_blank" rel="noopener noreferrer">Infura<ExternalLinkIcon/></a> account and API key</li>
<li>a test wallet private key and address with <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">Test ETH on Rinkeby<ExternalLinkIcon/></a> testnet</li>
</ol>
<h3 id="_6-1-env" tabindex="-1"><a class="header-anchor" href="#_6-1-env" aria-hidden="true">#</a> 6.1 .env</h3>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>See <RouterLink to="/ooo/contracts.html">Contract Addresses</RouterLink> for the latest <strong>Rinkeby</strong> contract address
required for the <code v-pre>ROUTER_ADDRESS</code> and <code v-pre>XFUND_ADDRESS</code> variables.</p>
</div>
<p>Create a <code v-pre>.env</code> file in the root of your project with the following and set each value
accordingly:</p>
<div class="language-dotenv ext-dotenv line-numbers-mode"><pre v-pre class="language-dotenv"><code># Private key for wallet used to deploy. This will be the contract owner
# Most functions in ConsumerBase.sol can only be called by the owner
ETH_PKEY=
# Infura API key - used for deployment
INFURA_PROJECT_ID=
# Contract address of the xFUND Router
ROUTER_ADDRESS=
# Contract address of xFUND
XFUND_ADDRESS=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-truffle-config-js" tabindex="-1"><a class="header-anchor" href="#_6-2-truffle-config-js" aria-hidden="true">#</a> 6.2 truffle-config.js</h3>
<p>Edit the <code v-pre>truffle-config.js</code> file in the root of your project with the following, set up
for Rinkeby testnet:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"dotenv"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HDWalletProvider <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@truffle/hdwallet-provider'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">ETH_PKEY</span><span class="token punctuation">,</span>
  <span class="token constant">INFURA_PROJECT_ID</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">networks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">develop</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8545</span><span class="token punctuation">,</span>
      <span class="token literal-property property">network_id</span><span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rinkeby</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">provider</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token keyword">new</span> <span class="token class-name">HDWalletProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">privateKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">ETH_PKEY</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">providerOrUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://rinkeby.infura.io/v3/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">INFURA_PROJECT_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">network_id</span><span class="token operator">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gas</span><span class="token operator">:</span> <span class="token number">10000000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gasPrice</span><span class="token operator">:</span> <span class="token number">100000000000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipDryRun</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">compilers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">solc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">"0.6.12"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">optimizer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">runs</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-set-up-the-truffle-migrations-scripts" tabindex="-1"><a class="header-anchor" href="#_7-set-up-the-truffle-migrations-scripts" aria-hidden="true">#</a> 7. Set up the Truffle migrations scripts</h2>
<p>create the following Truffle migration script in <code v-pre>migrations/2_deploy.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"dotenv"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MyDataConsumer <span class="token operator">=</span> artifacts<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"MyDataConsumer"</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">ROUTER_ADDRESS</span><span class="token punctuation">,</span> <span class="token constant">XFUND_ADDRESS</span> <span class="token punctuation">}</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deployer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>MyDataConsumer<span class="token punctuation">,</span> <span class="token constant">ROUTER_ADDRESS</span><span class="token punctuation">,</span> <span class="token constant">XFUND_ADDRESS</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will deploy your contract with the required parameters.</p>
<h2 id="_8-deploy-your-contract" tabindex="-1"><a class="header-anchor" href="#_8-deploy-your-contract" aria-hidden="true">#</a> 8. Deploy your contract</h2>
<p>Finally, deploy your contract with the following command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx truffle migrate --network<span class="token operator">=</span>rinkeby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That's it! You're now ready to initialise and interact with your OoO enabled smart contract.</p>
<p>On to <RouterLink to="/ooo/guide/interaction.html">interaction</RouterLink>.</p>
</div></template>
