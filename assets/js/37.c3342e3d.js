(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{317:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction-to-delegators-and-staking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-delegators-and-staking"}},[e._v("#")]),e._v(" Introduction to Delegators and Staking")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Many users may want to participate in the running of Unification Mainchain without running a full node and becoming a\nvalidator operator. Delegators can stake their FUND to a validator in order to participate.")]),e._v(" "),t("p",[e._v("The current pool of 96 Validator nodes is selected based on not only the self-delegated FUND staked by the Validator\noperator(s), but additionally the total FUND delegated to it by other users.")]),e._v(" "),t("p",[e._v("Delegators play an important role in the staking process, and indeed the running of the network itself, by acting as\na further safeguard against any potential misbehaviour of validators. If delegators feel that a validator is not\nbehaving in the best interests of the network, they can simply move their staked FUND away from them. If the\nvalidator's total stake falls below the top 96 validator stakes, they will be removed from the active validator pool.")]),e._v(" "),t("p",[e._v("Additionally, Delegators can (and should) take part in network governance by voting on proposals.")]),e._v(" "),t("p",[e._v("Delegating comes with both "),t("a",{attrs:{href:"#risks"}},[e._v("risks")]),e._v(" and "),t("a",{attrs:{href:"#rewards"}},[e._v("rewards")]),e._v(". Delegators share a percentage of the FUND earned\nby their chosen validator(s) from processing transactions, and singing/producing blocks. The amount earned proportional\nthe amount staked. Risks come from losing a small amount of staked FUND should the validator misbehave - this includes\nprolonged periods of downtime, and more importantly, double-signing blocks.")]),e._v(" "),t("h2",{attrs:{id:"the-delegation-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-delegation-process"}},[e._v("#")]),e._v(" The Delegation process")]),e._v(" "),t("h3",{attrs:{id:"selecting-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selecting-a-validator"}},[e._v("#")]),e._v(" Selecting a Validator")]),e._v(" "),t("p",[e._v("Information regarding validators can be obtained from a number of sources, including block explorers, or the "),t("code",[e._v("und")]),e._v("\nquery "),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_query_staking_validators.html"}},[e._v("validators")]),e._v(" and query\n"),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_query_staking_validator.html"}},[e._v("validator")]),e._v(" commands. There are several pieces of information a\nValidator should provide in order to help you make a decision:")],1),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Moniker")]),e._v(" - a short identifier/name for the Validator")]),e._v(" "),t("li",[t("strong",[e._v("Description")]),e._v(" - a brief description of the validator")]),e._v(" "),t("li",[t("strong",[e._v("Website")]),e._v(" - a link to their Website")]),e._v(" "),t("li",[t("strong",[e._v("Security Contact")]),e._v(" - an email address of the person(s) responsible for maintaining the node and its security")]),e._v(" "),t("li",[t("strong",[e._v("Commission Rate")]),e._v(" - the percentage commission the validator charges delegators, and is deducted from the delegator's rewards")]),e._v(" "),t("li",[t("strong",[e._v("Maximum Commission")]),e._v(" - the maximum percentage a validator can ever charge. This value is set by the validator when registering to become a validator and can never be changed. You may want to be wary, for example, of validators with very high maximum commission rates.")]),e._v(" "),t("li",[t("strong",[e._v("Maximum Rate Change")]),e._v(" - the maximum daily percentage a validator can increase their commission rate.")]),e._v(" "),t("li",[t("strong",[e._v("Minimum self-delegation")]),e._v(" - the minimum "),t("code",[e._v("nund")]),e._v(" a validator can self-delegate. If their self-delegation drops below this amount (for example, they manually unbond, or through slashing due to bad behaviour), all delegations are automatically unbonded. This ensures validators behave in the best interest of the network. Higher numbers are better.")])]),e._v(" "),t("h3",{attrs:{id:"delegating-your-fund"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegating-your-fund"}},[e._v("#")]),e._v(" Delegating your FUND")]),e._v(" "),t("p",[e._v('The process is simple - a user sends a special delegation transaction, which tells the network to "bond" the chosen\namount of UND to the selected validator. This can be done via the '),t("code",[e._v("und")]),e._v(" "),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_tx_staking_delegate.html"}},[e._v("delegate")]),e._v(" command, or via\nthe "),t("a",{attrs:{href:"https://chrome.google.com/webstore/detail/mkjjflkhdddfjhonakofipfojoepfndk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Wallet"),t("OutboundLink")],1),e._v(" Chrome extension.")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),t("p",[e._v("When delegating FUND to a validator, ownership of the FUND being staked is "),t("strong",[e._v("NEVER")]),e._v(" actually transferred anywhere.\nYou will "),t("strong",[e._v("ALWAYS")]),e._v(' retain 100% ownership and full control of that FUND, since it is simply "flagged" in your wallet\nas being bonded to a Validator. The validator has absolutely '),t("strong",[e._v("ZERO")]),e._v(" control over your FUND.")])]),e._v(" "),t("p",[t("strong",[e._v("Example using "),t("code",[e._v("und")])])]),e._v(" "),t("p",[e._v("You have done some research, and found a validator candidate to delegate 1000 FUND to. You need a wallet with\nsufficient FUND, and the Validator's Operator Address. This is different to a standard "),t("code",[e._v("und")]),e._v(" address and begins\nwith "),t("code",[e._v("undvaloper")]),e._v(", for example "),t("code",[e._v("undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps")]),e._v(".")]),e._v(" "),t("p",[e._v("Assuming you have "),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_keys_add.html"}},[e._v("imported/added")]),e._v(" your wallet key into "),t("code",[e._v("und")]),e._v("'s keychain,\nyou would run:")],1),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("und tx staking delegate undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps 1000000000000nund "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--gas")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("auto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --gas-adjustment"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --gas-prices"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(".0nund "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--node")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("full-node-ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":26656 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("chain_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--from")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("my_account\n")])])]),t("p",[e._v("replacing "),t("code",[e._v("[full-node-ip]")]),e._v(" and "),t("code",[e._v("[chain_id]")]),e._v(" with the relevant IP and chain ID respectively.")]),e._v(" "),t("h2",{attrs:{id:"delegator-s-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegator-s-roles"}},[e._v("#")]),e._v(" Delegator's Roles")]),e._v(" "),t("p",[e._v("Delegators may participate in several functions regarding the running of the network, including:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Exercising due diligence when selecting a validator to delegate to")]),e._v(": an important fist step, before delegating\nFUND is to ensure that the chosen validator has a history of good behaviour. There are several tools available,\nfrom block explorers to the "),t("code",[e._v("und")]),e._v(" command line tools for querying a validator.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Monitore the validator's behaviour after delegation")]),e._v(": this includes ensuring the validator maintains high uptimes\n(does not frequently miss blocks), does not double-sign blocks, and participates in governance.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Participate in network governance")]),e._v(': Delegators can and should participate in governance by voting on proposals.\nSimilarly to rewards, "voting power" is proportional to the amount staked. By default, delegators who do not vote\ninherit their validator\'s voting decision, but can override this by voting themselves.')])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Unbonding from misbehaving validators to hold them accountable")]),e._v(": Delegators who feel that their selected validator\nis not behaving in the best interests of the network should remove their stake from that validator to reduce their\nchances of being included in the active validator pool. This can be done in one of two ways: unbonding, which simply\nremoves the delegator's stake from the validator; or re-delegating - switching the delegated stake from one validator\nto another. Unbonding has a cool-down period of 3 weeks to process, but re-delegation is instant.")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Initial re-delegation from one validator to another is instant. However, once redelegated, the redelegated FUND will\nenter a cooldown period.")])]),e._v(" "),t("h2",{attrs:{id:"rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rewards"}},[e._v("#")]),e._v(" Rewards")]),e._v(" "),t("p",[e._v("Every transaction sent to the network has a fee paid. Some Tx fees, such as submitting WRKChain hashes are fixed at\n1 FUND per Tx, and others are more flexible depending on how much as user is willing to pay. With each block,\nthe fees are distributed among the active validators and their delegators as rewards. Rewards paid are proportional\nto the amount staked.")]),e._v(" "),t("p",[e._v("You can monitor and withdraw your rewards as often as you like with either the\n"),t("code",[e._v("und")]),e._v(" "),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_query_distribution_rewards.html"}},[e._v("rewards")]),e._v(" query and\n"),t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_tx_distribution_withdraw-rewards.html"}},[e._v("withdraw-rewards")]),e._v(" Tx,\nor via the "),t("a",{attrs:{href:"https://chrome.google.com/webstore/detail/mkjjflkhdddfjhonakofipfojoepfndk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Wallet"),t("OutboundLink")],1),e._v(" Chrome extension.")],1),e._v(" "),t("p",[t("strong",[e._v("Example using "),t("code",[e._v("und")])])]),e._v(" "),t("p",[e._v("Using the same Validator operator address as above, any outstanding rewards due can be queried using:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("und query distribution rewards "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("my_delegator_address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--node")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("full-node-ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":26656 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("chain_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[e._v("and withdraw any rewards to your account using:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("und tx distribution withdraw-rewards undvaloper16twxa6lyj7uhp56tukrcfz2p6q93mrxgt60mps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--gas")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("auto "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --gas-adjustment"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --gas-prices"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(".0nund "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--node")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("full-node-ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":26656 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("chain_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--from")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("my_account\n")])])]),t("p",[e._v("once again replacing "),t("code",[e._v("[full-node-ip]")]),e._v(" and "),t("code",[e._v("[chain_id]")]),e._v(" with the relevant IP and chain ID respectively.")]),e._v(" "),t("h2",{attrs:{id:"risks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),t("p",[e._v("Delegators that stake to a validator who continuously misbehave run the risk of having their stake slashed\n(as does the validator themselves) by a small percentage. Misbehaving includes double signing blocks, and prolonged\nperiods of node downtime. This makes it all the more important to pay attention to a validator's behaviour history\n(e.g. if they have been slashed before) before selecting a validator to delegate to.")]),e._v(" "),t("p",[e._v("Slashing pays a role in further incentivising validators to perform well, and helps ensure their delegators hold\nthem accountable.")])])}),[],!1,null,null,null);t.default=s.exports}}]);