(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{597:function(e,t,n){"use strict";n.r(t);var a=n(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"und-tx-feegrant-grant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#und-tx-feegrant-grant"}},[e._v("#")]),e._v(" und tx feegrant grant")]),e._v(" "),t("p",[e._v("Grant Fee allowance to an address")]),e._v(" "),t("h3",{attrs:{id:"synopsis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),t("p",[e._v("Grant authorization to pay fees from your address. Note, the'--from' flag is\nignored as it is implied from [granter].")]),e._v(" "),t("p",[e._v('Examples:\nund tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z or\nund tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --period 3600 --period-limit 10stake --expiration 2022-01-30T15:04:05Z or\nund tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z\n--allowed-messages "/cosmos.gov.v1beta1.MsgSubmitProposal,/cosmos.gov.v1beta1.MsgVote"')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und tx feegrant grant [granter_key_or_address] [grantee] [flags]\n")])])]),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  -a, --account-number uint        The account number of the signing account (offline mode only)\n      --allowed-messages strings   Set of allowed messages for fee allowance\n      --aux                        Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string      Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string            The network chain ID\n      --dry-run                    ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration string          The RFC 3339 timestamp after which the grant expires for the user\n      --fee-granter string         Fee granter grants fees for the transaction\n      --fee-payer string           Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                Fees to pay along with transaction; eg: 10uatom\n      --from string                Name or address of private key with which to sign\n      --gas string                 gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float       adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string          Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only              Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                       help for grant\n      --keyring-backend string     Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string         The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                     Use a connected Ledger device\n      --node string                &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                Note to add a description to the transaction (previously --memo)\n      --offline                    Offline mode (does not allow any online functionality)\n  -o, --output string              Output format (text|json) (default "json")\n      --period int                 period specifies the time duration(in seconds) in which period_limit coins can be spent before that allowance is reset (ex: 3600)\n      --period-limit string        period limit specifies the maximum number of coins that can be spent in the period\n  -s, --sequence uint              The sequence number of the signing account (offline mode only)\n      --sign-mode string           Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --spend-limit string         Spend limit specifies the max limit can be used, if not mentioned there is no limit\n      --timeout-height uint        Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                 Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                        Skip tx broadcasting prompt confirmation\n')])])]),t("h3",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" SEE ALSO")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_tx_feegrant.html"}},[e._v("und tx feegrant")]),e._v("\t - Feegrant transactions subcommands")],1)]),e._v(" "),t("h6",{attrs:{id:"auto-generated-by-spf13-cobra-on-1-aug-2024"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-by-spf13-cobra-on-1-aug-2024"}},[e._v("#")]),e._v(" Auto generated by spf13/cobra on 1-Aug-2024")])])}),[],!1,null,null,null);t.default=s.exports}}]);