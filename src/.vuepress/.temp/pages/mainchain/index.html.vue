<template><div><h1 id="unification-mainchain-documentation" tabindex="-1"><a class="header-anchor" href="#unification-mainchain-documentation" aria-hidden="true">#</a> Unification Mainchain Documentation</h1>
<p>Welcome to the documentation for Unification's Mainchain. These docs
cover how to build and install the <code v-pre>und</code> application, how to run a node on MainNet, TestNet and DevNet, and how
to interact with the Mainchain network.</p>
<h2 id="_1-about-mainchain" tabindex="-1"><a class="header-anchor" href="#_1-about-mainchain" aria-hidden="true">#</a> 1. About Mainchain</h2>
<ul>
<li><RouterLink to="/mainchain/introduction/about-mainchain.html">What is Mainchain?</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/denomination.html">Native Coin Denomination: nund</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/total-supply.html">Total Supply Queries and Conversions</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/fees-and-gas.html">Fees and Gas</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/genesis-settings.html">Introduction to Genesis Params</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/delegators.html">Introduction to Delegators and Staking</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/validators.html">Introduction to Validators</RouterLink></li>
<li><RouterLink to="/mainchain/introduction/faqs.html">FAQs</RouterLink></li>
</ul>
<h2 id="_2-install-use-the-software" tabindex="-1"><a class="header-anchor" href="#_2-install-use-the-software" aria-hidden="true">#</a> 2. Install &amp; Use the Software</h2>
<ul>
<li><RouterLink to="/mainchain/software/installation.html">Installation</RouterLink></li>
<li><RouterLink to="/mainchain/software/accounts-wallets.html">Accounts and Wallets</RouterLink></li>
<li><RouterLink to="/mainchain/networks/join-network.html">Run a full node &amp; join a Network</RouterLink></li>
<li><RouterLink to="/mainchain/software/run-und-as-service.html">Run <code v-pre>und</code> as a daemon</RouterLink></li>
<li><RouterLink to="/mainchain/migrations/cosmovisor.html">Migrating to Cosmovisor</RouterLink></li>
</ul>
<h3 id="light-client-rest" tabindex="-1"><a class="header-anchor" href="#light-client-rest" aria-hidden="true">#</a> Light Client &amp; REST</h3>
<ul>
<li><RouterLink to="/mainchain/software/light-client-rpc.html">Running a Light Client/REST server</RouterLink></li>
</ul>
<h3 id="full-command-references" tabindex="-1"><a class="header-anchor" href="#full-command-references" aria-hidden="true">#</a> Full Command References</h3>
<ul>
<li><RouterLink to="/mainchain/und_cmd/und.html"><code v-pre>und</code> - the und server command reference</RouterLink></li>
</ul>
<h3 id="full-config-file-references" tabindex="-1"><a class="header-anchor" href="#full-config-file-references" aria-hidden="true">#</a> Full Config File References</h3>
<ul>
<li><RouterLink to="/mainchain/software/und-mainchain-config-ref.html"><code v-pre>.und_mainchain/config/config.toml</code> Reference</RouterLink></li>
<li><RouterLink to="/mainchain/software/und-mainchain-app-config-ref.html"><code v-pre>.und_mainchain/config/app.toml</code> Reference</RouterLink></li>
<li><RouterLink to="/mainchain/software/und-mainchain-client-config-ref.html"><code v-pre>.und_mainchain/config/client.toml</code> Reference</RouterLink></li>
</ul>
<h2 id="_3-mainchain-networks" tabindex="-1"><a class="header-anchor" href="#_3-mainchain-networks" aria-hidden="true">#</a> 3. Mainchain Networks</h2>
<ul>
<li><RouterLink to="/mainchain/networks/join-network.html">Join a Network</RouterLink></li>
<li><RouterLink to="/mainchain/networks/become-validator.html">Becoming a Validator</RouterLink></li>
</ul>
<h3 id="private-devnet" tabindex="-1"><a class="header-anchor" href="#private-devnet" aria-hidden="true">#</a> Private DevNet</h3>
<ul>
<li><RouterLink to="/mainchain/networks/devnet/local-devnet-docker.html">Play with DevNet</RouterLink></li>
</ul>
<h2 id="_4-guides-examples" tabindex="-1"><a class="header-anchor" href="#_4-guides-examples" aria-hidden="true">#</a> 4. Guides &amp; Examples</h2>
<h3 id="tx-query-examples" tabindex="-1"><a class="header-anchor" href="#tx-query-examples" aria-hidden="true">#</a> Tx &amp; Query Examples</h3>
<ul>
<li><RouterLink to="/mainchain/examples/transactions.html">Sending Simple Transactions</RouterLink></li>
<li><RouterLink to="/mainchain/examples/wrkchain.html">Example WRKChain Transactions and Queries</RouterLink></li>
<li><RouterLink to="/mainchain/examples/beacon.html">Example BEACON Transactions and Queries</RouterLink></li>
<li><RouterLink to="/mainchain/examples/enterprise-fund.html">Example Enterprise FUND Transactions and Queries</RouterLink></li>
<li><RouterLink to="/mainchain/examples/finchain.html">WRKChain: Finchains</RouterLink></li>
</ul>
<h3 id="in-depth-guides" tabindex="-1"><a class="header-anchor" href="#in-depth-guides" aria-hidden="true">#</a> In-depth guides</h3>
<ul>
<li><RouterLink to="/mainchain/guides/cloud/install-aws.html">AWS 101: Introduction to installing <code v-pre>und</code> on AWS EC2 instances</RouterLink></li>
<li><RouterLink to="/mainchain/guides/cloud/install-gc.html">Google Cloud 101: Introduction to installing <code v-pre>und</code> on Google Cloud VMs</RouterLink></li>
</ul>
<h2 id="_5-developer-guides" tabindex="-1"><a class="header-anchor" href="#_5-developer-guides" aria-hidden="true">#</a> 5. Developer guides</h2>
<ul>
<li><RouterLink to="/mainchain/developers/third-party.html">Third Party Tool Development</RouterLink></li>
</ul>
<h3 id="disclaimer" tabindex="-1"><a class="header-anchor" href="#disclaimer" aria-hidden="true">#</a> Disclaimer</h3>
<p>Please note that this software is still in development. In these early days, we can expect to have issues, updates, and
bugs. The existing <code v-pre>und</code> CLI tool requires advanced technical skills and may involve risks which are
outside of the control of the Unification Foundation and/or the Unification dev team. Any use of this open
source <a href="https://github.com/unification-com/mainchain/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Apache 2.0 licensed<ExternalLinkIcon/></a> software is done at your
own risk and on a &quot;AS IS&quot; basis, without warranties or conditions of any kind, and any and all liability of the
Unification Foundation and/or the Unification dev team for damages arising in connection to the software is excluded.
Please exercise extreme caution!</p>
</div></template>
