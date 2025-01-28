(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{613:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"und-tx-group-create-group-with-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#und-tx-group-create-group-with-policy"}},[t._v("#")]),t._v(" und tx group create-group-with-policy")]),t._v(" "),e("p",[t._v("Create a group with policy which is an aggregation of member accounts with associated weights, an administrator account and decision policy.")]),t._v(" "),e("h3",{attrs:{id:"synopsis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" Synopsis")]),t._v(" "),e("p",[t._v("Create a group with policy which is an aggregation of member accounts with associated weights,\nan administrator account and decision policy. Note, the '--from' flag is ignored as it is implied from [admin].\nMembers accounts can be given through a members JSON file that contains an array of members.\nIf group-policy-as-admin flag is set to true, the admin of the newly created group and group policy is set with the group policy address itself.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("und tx group create-group-with-policy [admin] [group-metadata] [group-policy-metadata] [members-json-file] [decision-policy-json-file] [flags]\n")])])]),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\nund tx group create-group-with-policy [admin] [group-metadata] [group-policy-metadata] members.json policy.json\n\nwhere members.json contains:\n\n{\n\t"members": [\n\t\t{\n\t\t\t"address": "addr1",\n\t\t\t"weight": "1",\n\t\t\t"metadata": "some metadata"\n\t\t},\n\t\t{\n\t\t\t"address": "addr2",\n\t\t\t"weight": "1",\n\t\t\t"metadata": "some metadata"\n\t\t}\n\t]\n}\n\nand policy.json contains:\n\n{\n    "@type": "/cosmos.group.v1.ThresholdDecisionPolicy",\n    "threshold": "1",\n    "windows": {\n        "voting_period": "120h",\n        "min_execution_period": "0s"\n    }\n}\n\n')])])]),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n      --group-policy-as-admin    Sets admin of the newly created group and group policy with group policy address itself when true\n  -h, --help                     help for create-group-with-policy\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')])])]),e("h3",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" SEE ALSO")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_tx_group.html"}},[t._v("und tx group")]),t._v("\t - Group transaction subcommands")],1)]),t._v(" "),e("h6",{attrs:{id:"auto-generated-by-spf13-cobra-on-1-aug-2024"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-by-spf13-cobra-on-1-aug-2024"}},[t._v("#")]),t._v(" Auto generated by spf13/cobra on 1-Aug-2024")])])}),[],!1,null,null,null);e.default=s.exports}}]);