<template><div><h1 id="what-is-mainchain" tabindex="-1"><a class="header-anchor" href="#what-is-mainchain" aria-hidden="true">#</a> What is Mainchain?</h1>
<p>Mainchain is the backbone of the Unification Network. It is a Cosmos SDK based chain, and is where WrkChains and
BEACONs submit their hashes, and FUND transactions take place.</p>
<blockquote>
<p>Mainchain is a public proof-of-stake chain. The core coin used for staking,
rewards, and network fees is FUND. The on-chain denomination is <code v-pre>nund</code>
(Nano Unification Denomination) which is 10^-9 FUND.</p>
</blockquote>
<h2 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> Networks</h2>
<p>There are currently two live public Mainchain networks, and one private development network:</p>
<h4 id="mainnet" tabindex="-1"><a class="header-anchor" href="#mainnet" aria-hidden="true">#</a> MainNet</h4>
<p>Launched on 14/05/2020, <a href="https://github.com/unification-com/mainnet" target="_blank" rel="noopener noreferrer">FUND-Mainchain-MainNet<ExternalLinkIcon/></a> is the live public
Unification <strong>Main Network</strong>.</p>
<h4 id="testnet" tabindex="-1"><a class="header-anchor" href="#testnet" aria-hidden="true">#</a> Testnet</h4>
<p>Launched in Q4 2019, <a href="https://github.com/unification-com/testnet" target="_blank" rel="noopener noreferrer">FUND-Mainchain-TestNet<ExternalLinkIcon/></a> serves as the official
Unification public <strong>Test network</strong>, where developers can test WRKChains/BEACONs or third party application such
as wallets and block explorers before deploying on MainNet. It also serves as a test platform for Mainchain developers
to test updates and new features to the Mainchain code in a live environment.</p>
<h4 id="devnet" tabindex="-1"><a class="header-anchor" href="#devnet" aria-hidden="true">#</a> DevNet</h4>
<p>Additionally, the <a href="https://github.com/unification-com/mainchain" target="_blank" rel="noopener noreferrer">Mainchain repository<ExternalLinkIcon/></a> comes with a full private
<RouterLink to="/mainchain/introduction/local-devnet.html">DevNet</RouterLink> - a completely self-contained network for development and testing Mainchain features.</p>
<h2 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h2>
<p>The Mainchain suite comes with a unified binary: <code v-pre>und</code> (&quot;<code v-pre>Un</code>ification <code v-pre>D</code>aemon&quot;). This binary is used for running the server-side daemon (e.g.
for Validator nodes, seeds, sentries, RPCs etc.), and as a client to interact with the network (e.g. for sending queries
and generating and broadcasting transactions).</p>
<p>Mainchain has been built with the following core Cosmos SDK modules:</p>
<ul>
<li><code v-pre>x/auth</code>: Accounts and signatures.</li>
<li><code v-pre>x/bank</code>: Token transfers.</li>
<li><code v-pre>x/staking</code>: Staking logic.</li>
<li><code v-pre>x/distribution</code>: Fee distribution logic.</li>
<li><code v-pre>x/slashing</code>: Slashing logic.</li>
<li><code v-pre>x/gov</code>: on-chain governance logic.</li>
<li><code v-pre>x/supply</code>: FUND Coin supply logic</li>
<li><code v-pre>x/params</code>: Handles module-level parameters, which can be modified via governance.</li>
<li><code v-pre>x/crisis</code>: Handles potential network errors during the early days of deployment</li>
<li><code v-pre>x/upgrade</code>: Handles processing software upgrades and associated state migrations</li>
</ul>
<p>Unification have also developed the following modules for Mainchain:</p>
<ul>
<li><code v-pre>x/beacon</code>: BEACON hash timestamp submission logic</li>
<li><code v-pre>x/enterprise</code>: Handles purchasing, locking and unlocking of Enterprise FUND</li>
<li><code v-pre>x/wrkchain</code>: WRKChain block hash submission handling</li>
</ul>
</div></template>
