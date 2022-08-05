<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>Unlike previous upgrades, future upgrades of the FUND Mainchain should not require the full halt/export state/migrate
genesis process. As of Cosmos SDK v0.45.x, network upgrades and state changes can occur in-place. This makes
upgrading much simpler for node operators, as it means that they can set up an upgrade well in advance.</p>
<p>Future upgrades will occur via the <code v-pre>x/upgrade</code> module, which will require a Governance proposal to pass. Once passed,
the <code v-pre>und</code> software will automatically halt at the proposed height and wait for the upgraded binary containing the
required upgrade information.</p>
<p>Whilst it is possible to undertake the upgrade process manually, it can be time consuming. The recommended process for
managing the <code v-pre>und</code> binary and upgrades is to implement <code v-pre>cosmovisor</code>.</p>
<p>The initial process of migrating to using <code v-pre>cosmovisr</code> for handling <code v-pre>und</code> takes a little additional configuration, but
once in place, upgrades are much easier for operators to implement.</p>
<p>The following guides are available, covering migrating to <code v-pre>cosmovisr</code>, and configuring the current upgrades:</p>
<ol>
<li><RouterLink to="/mainchain/migrations/cosmovisor.html">Using Cosmovisor with und: Quick Start</RouterLink> - how to set up <code v-pre>cosmovisor</code> to run <code v-pre>und</code> and handle upgrades</li>
<li><RouterLink to="/mainchain/migrations/1-ibc_upgrade.html">1-ibc Upgrade</RouterLink> - configuring <code v-pre>cosmovisor</code> for the <code v-pre>1-ibc</code> upgrade</li>
</ol>
</div></template>
