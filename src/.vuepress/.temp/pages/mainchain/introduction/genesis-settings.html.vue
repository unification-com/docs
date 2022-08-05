<template><div><h1 id="genesis-settings-parameters" tabindex="-1"><a class="header-anchor" href="#genesis-settings-parameters" aria-hidden="true">#</a> Genesis Settings &amp; Parameters</h1>
<p>This document gives a brief explanation of each of the main parameters found in a network's <code v-pre>genesis.json</code>.
Some parameters have been omitted for brevity.</p>
<p>With the exception of Chain Params, the following parameters are changeable on-chain via governance.</p>
<nav class="table-of-contents"><ul><li><router-link to="#chain-params">Chain Params</router-link></li><li><router-link to="#auth-params">Auth Params</router-link></li><li><router-link to="#beacon-params">Beacon Params</router-link></li><li><router-link to="#distribution-params">Distribution Params</router-link></li><li><router-link to="#enterprise-params">Enterprise Params</router-link></li><li><router-link to="#governance-params">Governance Params</router-link></li><li><router-link to="#slashing-params">Slashing Params</router-link></li><li><router-link to="#staking-params">Staking Params</router-link></li><li><router-link to="#wrkchain-params">WRKChain Params</router-link></li></ul></nav>
<h2 id="chain-params" tabindex="-1"><a class="header-anchor" href="#chain-params" aria-hidden="true">#</a> Chain Params</h2>
<ul>
<li><code v-pre>.genesis_time</code><br>
Genesis block timestamp. E.g. 2022-06-08T14:00:00Z</li>
<li><code v-pre>.chain_id</code><br>
ID of the current chain, E.g. <code v-pre>FUND-MainNet-2</code></li>
</ul>
<h2 id="auth-params" tabindex="-1"><a class="header-anchor" href="#auth-params" aria-hidden="true">#</a> Auth Params</h2>
<p>Auth parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.auth.params.max_memo_characters</code><br>
The maximum number of characters allowed in a Tx memo, e.g. 256</li>
<li><code v-pre>.app_state.auth.params.tx_sig_limit</code><br>
The maximum number of permitted signatures on a <code v-pre>multisig</code> Tx. E.g. 7</li>
<li><code v-pre>.app_state.auth.params.tx_size_cost_per_byte</code><br>
The gas cost per byte for a Tx. E.g. 10</li>
</ul>
<h2 id="beacon-params" tabindex="-1"><a class="header-anchor" href="#beacon-params" aria-hidden="true">#</a> Beacon Params</h2>
<p>Beacon parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.beacon.params.denom</code><br>
Denomination used for BEACON fees. E.g. <code v-pre>nund</code></li>
<li><code v-pre>.app_state.beacon.params.fee_record</code><br>
Fee for recording BEACON timestamps, in <code v-pre>params.denom</code>, E.g. 1000000000</li>
<li><code v-pre>.app_state.beacon.params.fee_register</code><br>
One time fee for registering a BEACON with the network, in <code v-pre>params.denom</code>. E.g. 1000000000000</li>
</ul>
<h2 id="distribution-params" tabindex="-1"><a class="header-anchor" href="#distribution-params" aria-hidden="true">#</a> Distribution Params</h2>
<p>Distribution parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.distribution.params.base_proposer_reward</code><br>
Additional % of fees etc. given to the block proposer as a bonus. E.g. 0.010000000000000000</li>
<li><code v-pre>.app_state.distribution.params.bonus_proposer_reward</code><br>
Additional % of fees etc. given to the block proposer, based on voting metrics calculated with each block. E.g. 0.040000000000000000</li>
<li><code v-pre>.app_state.distribution.params.community_tax</code><br>
A fixed % of fees sent to the community pool each block. The spending of community pool coins can be decided via governance. E.g. 0.020000000000000000</li>
</ul>
<h2 id="enterprise-params" tabindex="-1"><a class="header-anchor" href="#enterprise-params" aria-hidden="true">#</a> Enterprise Params</h2>
<p>Enterprise parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.enterprise.params.decision_time_limit</code><br>
The time (in seconds) after which a raised Enterprise Purchase Order will automatically be rejected if no decision has been made. E.g. 259200</li>
<li><code v-pre>.app_state.enterprise.params.denom</code><br>
Denomination in which Enterprise FUND will be issued. E.g. nund</li>
<li><code v-pre>.app_state.enterprise.params.ent_signers</code><br>
Comma separated list of wallet addresses authorised to accept/reject Enterprise FUND Purchase Orders.</li>
<li><code v-pre>.app_state.enterprise.params.min_Accepts</code><br>
Minimum number of <code v-pre>params.ent_signers</code> required to make a decision on a Purchase Order.</li>
</ul>
<h2 id="governance-params" tabindex="-1"><a class="header-anchor" href="#governance-params" aria-hidden="true">#</a> Governance Params</h2>
<p>Governance parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.gov.deposit_params.max_deposit_period</code><br>
Time in ns in which deposits are required to be made for a proposal. E.g. 1209600000000000
<code v-pre>.app_state.gov.deposit_params.min_deposit</code><br>
Minumum deposit required in order for a proposal to be valid, and enter the voting period. E.g. 1000000000000nund</li>
<li><code v-pre>.app_state.gov.tally_params.quorum</code><br>
Minimum percentage of total stake needed to vote for a result to be considered valid. E.g. 0.400000000000000000</li>
<li><code v-pre>.app_state.gov.tally_params.threshold</code><br>
Minimum proportion of Yes votes for proposal to pass. E.g. 0.500000000000000000</li>
<li><code v-pre>.app_state.gov.tally_params.veto</code><br>
Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. E.g. 0.334000000000000000</li>
<li><code v-pre>.app_state.gov.voting_params.voting_period </code>
Length of the voting period in ns. E.g. 1209600000000000</li>
</ul>
<h2 id="slashing-params" tabindex="-1"><a class="header-anchor" href="#slashing-params" aria-hidden="true">#</a> Slashing Params</h2>
<p>Slashing parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.slashing.params.downtime_jail_duration</code><br>
Cooldown period in ns, after being jailed for downtime that a node cannot unjail. E.g. 600000000000</li>
<li><code v-pre>.app_state.slashing.params.min_signed_per_window</code><br>
min % of SignedBlocksWindow that must be signed in order to keep EV in pool of active EVs. Below this = jailed. E.g. 0.050000000000000000</li>
<li><code v-pre>.app_state.slashing.params.signed_blocks_window</code><br>
number of blocks to monitor for missed/double sign etc. E.g. 10000</li>
<li><code v-pre>.app_state.slashing.params.slash_fraction_double_sign</code><br>
% of stake to slash for double signing. E.g. 0.050000000000000000</li>
<li><code v-pre>.app_state.slashing.params.slash_fraction_downtime</code><br>
% of stakes to slash for downtime
. E.g. 0.000100000000000000</li>
</ul>
<h2 id="staking-params" tabindex="-1"><a class="header-anchor" href="#staking-params" aria-hidden="true">#</a> Staking Params</h2>
<p>Staking parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.staking.params.bond_denom</code><br>
Staking denomination. E.g. nund</li>
<li><code v-pre>.app_state.staking.params.historical_entries</code><br>
The n most recent historical entries are persisted. E.g. 3</li>
<li><code v-pre>.app_state.staking.params.max_entries</code><br>
max simultaneous entries for either unbonding delegation or redelegation (per pair/trio). E.g. 7</li>
<li><code v-pre>.app_state.staking.params.max_validators</code><br>
Maximum number of active validators in the current pool. E.g. 96</li>
<li><code v-pre>.app_state.staking.params.unbonding_time</code><br>
duration in ns unbonding takes to complete. E.g. 1814400000000000</li>
</ul>
<h2 id="wrkchain-params" tabindex="-1"><a class="header-anchor" href="#wrkchain-params" aria-hidden="true">#</a> WRKChain Params</h2>
<p>WRKChain parameters are changeable via governance</p>
<ul>
<li><code v-pre>.app_state.wrkchain.params.denom</code><br>
Denomination used for WRKChain fees. E.g. <code v-pre>nund</code></li>
<li><code v-pre>.app_state.wrkchain.params.fee_record</code><br>
Fee for recording WRKChain hashes, in <code v-pre>params.denom</code>, E.g. 1000000000</li>
<li><code v-pre>.app_state.wrkchain.params.fee_register</code><br>
One time fee for registering a WRKChain with the network, in <code v-pre>params.denom</code>. E.g. 1000000000000</li>
</ul>
</div></template>
