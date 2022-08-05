<template><div><h1 id="introduction-to-delegators-and-staking" tabindex="-1"><a class="header-anchor" href="#introduction-to-delegators-and-staking" aria-hidden="true">#</a> Introduction to Delegators and Staking</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>Many users may want to participate in the running of Unification Mainchain without running a full node and becoming a
validator operator. Delegators can stake their FUND to a validator in order to participate.</p>
<p>The current pool of 96 Validator nodes is selected based on not only the self-delegated FUND staked by the Validator
operator(s), but additionally the total FUND delegated to it by other users.</p>
<p>Delegators play an important role in the staking process, and indeed the running of the network itself, by acting as
a further safeguard against any potential misbehaviour of validators. If delegators feel that a validator is not
behaving in the best interests of the network, they can simply move their staked FUND away from them. If the
validator's total stake falls below the top 96 validator stakes, they will be removed from the active validator pool.</p>
<p>Additionally, Delegators can (and should) take part in network governance by voting on proposals.</p>
<p>Delegating comes with both <a href="#risks">risks</a> and <a href="#rewards">rewards</a>. Delegators share a percentage of the FUND earned
by their chosen validator(s) from processing transactions, and singing/producing blocks. The amount earned proportional
the amount staked. Risks come from losing a small amount of staked FUND should the validator misbehave - this includes
prolonged periods of downtime, and more importantly, double-signing blocks.</p>
<h2 id="the-delegation-process" tabindex="-1"><a class="header-anchor" href="#the-delegation-process" aria-hidden="true">#</a> The Delegation process</h2>
<h3 id="selecting-a-validator" tabindex="-1"><a class="header-anchor" href="#selecting-a-validator" aria-hidden="true">#</a> Selecting a Validator</h3>
<p>Information regarding validators can be obtained from a number of sources, including block explorers, or the <code v-pre>und</code>
query <RouterLink to="/mainchain/software/und_cmd/und_query_staking_validators.html">validators</RouterLink> and query
<RouterLink to="/mainchain/software/und_cmd/und_query_staking_validator.html">validator</RouterLink> commands. There are several pieces of information a
Validator should provide in order to help you make a decision:</p>
<ul>
<li><strong>Moniker</strong> - a short identifier/name for the Validator</li>
<li><strong>Description</strong> - a brief description of the validator</li>
<li><strong>Website</strong> - a link to their Website</li>
<li><strong>Security Contact</strong> - an email address of the person(s) responsible for maintaining the node and its security</li>
<li><strong>Commission Rate</strong> - the percentage commission the validator charges delegators, and is deducted from the delegator's rewards</li>
<li><strong>Maximum Commission</strong> - the maximum percentage a validator can ever charge. This value is set by the validator when registering to become a validator and can never be changed. You may want to be wary, for example, of validators with very high maximum commission rates.</li>
<li><strong>Maximum Rate Change</strong> - the maximum daily percentage a validator can increase their commission rate.</li>
<li><strong>Minimum self-delegation</strong> - the minimum <code v-pre>nund</code> a validator can self-delegate. If their self-delegation drops below this amount (for example, they manually unbond, or through slashing due to bad behaviour), all delegations are automatically unbonded. This ensures validators behave in the best interest of the network. Higher numbers are better.</li>
</ul>
<h3 id="delegating-your-fund" tabindex="-1"><a class="header-anchor" href="#delegating-your-fund" aria-hidden="true">#</a> Delegating your FUND</h3>
<p>The process is simple - a user sends a special delegation transaction, which tells the network to &quot;bond&quot; the chosen
amount of UND to the selected validator. This can be done via the <code v-pre>und</code>
<RouterLink to="/mainchain/software/und_cmd/und_tx_staking_delegate.html">delegate</RouterLink> command, or via
the <a href="https://chrome.google.com/webstore/detail/mkjjflkhdddfjhonakofipfojoepfndk" target="_blank" rel="noopener noreferrer">Web Wallet<ExternalLinkIcon/></a> Chrome extension.</p>
<div class="custom-container tip"><p class="custom-container-title">IMPORTANT</p>
<p>When delegating FUND to a validator, ownership of the FUND being staked is <strong>NEVER</strong> actually transferred anywhere.
You will <strong>ALWAYS</strong> retain 100% ownership and full control of that FUND, since it is simply &quot;flagged&quot; in your wallet
as being bonded to a Validator. The validator has absolutely <strong>ZERO</strong> control over your FUND.</p>
</div>
<p><strong>Example using <code v-pre>und</code></strong></p>
<p>You have done some research, and found a validator candidate to delegate 1000 FUND to. You need a wallet with
sufficient FUND, and the Validator's Operator Address. This is different to a standard <code v-pre>und</code> address and begins
with <code v-pre>undvaloper</code>, for example <code v-pre>undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps</code>.</p>
<p>Assuming you have <RouterLink to="/mainchain/software/und_cmd/und_keys_add.html">imported/added</RouterLink> your wallet key into <code v-pre>und</code>'s keychain,
you would run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx staking delegate undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps 1000000000000nund <span class="token punctuation">\</span>
  --gas<span class="token operator">=</span>auto <span class="token punctuation">\</span>
  --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
  --gas-prices<span class="token operator">=</span><span class="token number">25</span>.0nund <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>http://<span class="token punctuation">[</span>full-node-ip<span class="token punctuation">]</span>:26656 <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span><span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span> <span class="token punctuation">\</span>
  --from<span class="token operator">=</span>my_account
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>replacing <code v-pre>[full-node-ip]</code> and <code v-pre>[chain_id]</code> with the relevant IP and chain ID respectively.</p>
<h2 id="delegator-s-roles" tabindex="-1"><a class="header-anchor" href="#delegator-s-roles" aria-hidden="true">#</a> Delegator's Roles</h2>
<p>Delegators may participate in several functions regarding the running of the network, including:</p>
<ul>
<li>
<p><strong>Exercising due diligence when selecting a validator to delegate to</strong>: an important fist step, before delegating
FUND is to ensure that the chosen validator has a history of good behaviour. There are several tools available,
from block explorers to the <code v-pre>und</code> command line tools for querying a validator.</p>
</li>
<li>
<p><strong>Monitore the validator's behaviour after delegation</strong>: this includes ensuring the validator maintains high uptimes
(does not frequently miss blocks), does not double-sign blocks, and participates in governance.</p>
</li>
<li>
<p><strong>Participate in network governance</strong>: Delegators can and should participate in governance by voting on proposals.
Similarly to rewards, &quot;voting power&quot; is proportional to the amount staked. By default, delegators who do not vote
inherit their validator's voting decision, but can override this by voting themselves.</p>
</li>
<li>
<p><strong>Unbonding from misbehaving validators to hold them accountable</strong>: Delegators who feel that their selected validator
is not behaving in the best interests of the network should remove their stake from that validator to reduce their
chances of being included in the active validator pool. This can be done in one of two ways: unbonding, which simply
removes the delegator's stake from the validator; or re-delegating - switching the delegated stake from one validator
to another. Unbonding has a cool-down period of 3 weeks to process, but re-delegation is instant.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Initial re-delegation from one validator to another is instant. However, once redelegated, the redelegated FUND will
enter a cooldown period.</p>
</div>
<h2 id="rewards" tabindex="-1"><a class="header-anchor" href="#rewards" aria-hidden="true">#</a> Rewards</h2>
<p>Every transaction sent to the network has a fee paid. Some Tx fees, such as submitting WRKChain hashes are fixed at
1 FUND per Tx, and others are more flexible depending on how much as user is willing to pay. With each block,
the fees are distributed among the active validators and their delegators as rewards. Rewards paid are proportional
to the amount staked.</p>
<p>You can monitor and withdraw your rewards as often as you like with either the
<code v-pre>und</code> <RouterLink to="/mainchain/software/und_cmd/und_query_distribution_rewards.html">rewards</RouterLink> query and
<RouterLink to="/mainchain/software/und_cmd/und_tx_distribution_withdraw-rewards.html">withdraw-rewards</RouterLink> Tx,
or via the <a href="https://chrome.google.com/webstore/detail/mkjjflkhdddfjhonakofipfojoepfndk" target="_blank" rel="noopener noreferrer">Web Wallet<ExternalLinkIcon/></a> Chrome extension.</p>
<p><strong>Example using <code v-pre>und</code></strong></p>
<p>Using the same Validator operator address as above, any outstanding rewards due can be queried using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query distribution rewards <span class="token punctuation">[</span>my_delegator_address<span class="token punctuation">]</span> undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>http://<span class="token punctuation">[</span>full-node-ip<span class="token punctuation">]</span>:26656 <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span><span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and withdraw any rewards to your account using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und tx distribution withdraw-rewards undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps <span class="token punctuation">\</span>
  --gas<span class="token operator">=</span>auto <span class="token punctuation">\</span>
  --gas-adjustment<span class="token operator">=</span><span class="token number">1.5</span> <span class="token punctuation">\</span>
  --gas-prices<span class="token operator">=</span><span class="token number">25</span>.0nund <span class="token punctuation">\</span>
  --node<span class="token operator">=</span>http://<span class="token punctuation">[</span>full-node-ip<span class="token punctuation">]</span>:26656 <span class="token punctuation">\</span>
  --chain-id<span class="token operator">=</span><span class="token punctuation">[</span>chain_id<span class="token punctuation">]</span> <span class="token punctuation">\</span>
  --from<span class="token operator">=</span>my_account
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>once again replacing <code v-pre>[full-node-ip]</code> and <code v-pre>[chain_id]</code> with the relevant IP and chain ID respectively.</p>
<h2 id="risks" tabindex="-1"><a class="header-anchor" href="#risks" aria-hidden="true">#</a> Risks</h2>
<p>Delegators that stake to a validator who continuously misbehave run the risk of having their stake slashed
(as does the validator themselves) by a small percentage. Misbehaving includes double signing blocks, and prolonged
periods of node downtime. This makes it all the more important to pay attention to a validator's behaviour history
(e.g. if they have been slashed before) before selecting a validator to delegate to.</p>
<p>Slashing pays a role in further incentivising validators to perform well, and helps ensure their delegators hold
them accountable.</p>
</div></template>
