<template><div><h1 id="ooo-introduction" tabindex="-1"><a class="header-anchor" href="#ooo-introduction" aria-hidden="true">#</a> OoO Introduction</h1>
<p>This documentation covers the both the xFUND Router and Finchains' OoO (Oracle of Oracles)
functionality.</p>
<p>There are documentation and guides covering how to integrate the <code v-pre>Consumer</code> smart contract
library (required for interacting with the xFUND Router network) into your own smart
contract and how to interact with the network in order to request and receive data
in your smart contract from the Finchains OoO API.</p>
<h4 id="contract-provider-addresses" tabindex="-1"><a class="header-anchor" href="#contract-provider-addresses" aria-hidden="true">#</a> Contract &amp; Provider addresses</h4>
<ol>
<li><RouterLink to="/ooo/contracts.html">Contract Addresses</RouterLink>.</li>
<li><RouterLink to="/ooo/providers.html">Provider Addresses</RouterLink>.</li>
</ol>
<h4 id="guides" tabindex="-1"><a class="header-anchor" href="#guides" aria-hidden="true">#</a> Guides</h4>
<ol>
<li><RouterLink to="/ooo/guide/quickstart.html">Quickstart</RouterLink> - a quick introduction to getting set up</li>
<li><RouterLink to="/ooo/guide/">Implementation Guide</RouterLink> - a complete guide to integration and interaction</li>
<li><RouterLink to="/ooo/guide/ooo_api.html">Finchains OoO Data API Guide</RouterLink> - a guide to requesting data from the Finchains
OoO API.</li>
</ol>
<h4 id="contract-docs" tabindex="-1"><a class="header-anchor" href="#contract-docs" aria-hidden="true">#</a> Contract Docs</h4>
<p>API documentation covering the functions and events within each of the three main
smart contracts used by the xFUND Router network.</p>
<ol>
<li><RouterLink to="/ooo/api/Router.html">Router.sol</RouterLink> - the contract which controls data request and fulfilment
routing between Consumers and Providers. This contract also handles fee payment and gas
refunds. Deployed and maintained by the Unification Foundation</li>
<li><RouterLink to="/ooo/api/lib/ConsumerBase.html">ConsumerBase.sol</RouterLink> - the Consumer smart contract developers will need
to import into their own smart contract in order to interact with the system. Contains the
proxy functions required to utilise the <code v-pre>ConsumerLib.sol</code> library smart contract, which
must be linked to the this contract during deployment</li>
</ol>
</div></template>
