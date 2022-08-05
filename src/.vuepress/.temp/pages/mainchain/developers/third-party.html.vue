<template><div><h1 id="third-party-tool-development" tabindex="-1"><a class="header-anchor" href="#third-party-tool-development" aria-hidden="true">#</a> Third Party Tool Development</h1>
<p>This page contains information that may be useful for developers of third party tools, such as wallets and block explorers</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#hd-wallet-path">HD Wallet Path</router-link></li><li><router-link to="#public-rest-endpoints">Public REST Endpoints</router-link></li><li><router-link to="#public-tendermint-rpc-endpoints">Public Tendermint RPC Endpoints</router-link></li></ul></nav>
<h2 id="hd-wallet-path" tabindex="-1"><a class="header-anchor" href="#hd-wallet-path" aria-hidden="true">#</a> HD Wallet Path</h2>
<p>The BIP-0044 Path for our HD Wallets is as follows:</p>
<p><code v-pre>44'/5555'/0'/0</code></p>
<p><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank" rel="noopener noreferrer">SLIP-0044<ExternalLinkIcon/></a> Coin ID is <code v-pre>5555</code></p>
<h2 id="public-rest-endpoints" tabindex="-1"><a class="header-anchor" href="#public-rest-endpoints" aria-hidden="true">#</a> Public REST Endpoints</h2>
<p>The REST endpoints for API interaction (for example block explorers, wallets etc.), served by
<RouterLink to="/mainchain/software/light-client-rpc.html">light-clients</RouterLink> can be found in
<a href="https://github.com/unification-com/mainchain/blob/master/client/docs/swagger-ui/swagger.yaml" target="_blank" rel="noopener noreferrer">swagger.yaml<ExternalLinkIcon/></a></p>
<p>Live examples can be found at <a href="https://rest.unification.io/swagger/" target="_blank" rel="noopener noreferrer">https://rest.unification.io/swagger/<ExternalLinkIcon/></a>.</p>
<h2 id="public-tendermint-rpc-endpoints" tabindex="-1"><a class="header-anchor" href="#public-tendermint-rpc-endpoints" aria-hidden="true">#</a> Public Tendermint RPC Endpoints</h2>
<p>The Tendermint RPC endpoints, served by full-nodes can be found at <a href="http://rpc1.unification.io" target="_blank" rel="noopener noreferrer">http://rpc1.unification.io<ExternalLinkIcon/></a>.</p>
<p>The RPC specification is the same as <a href="https://docs.tendermint.com/master/rpc/" target="_blank" rel="noopener noreferrer">Tendermint<ExternalLinkIcon/></a>.</p>
</div></template>
