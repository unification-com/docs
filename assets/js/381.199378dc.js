(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{663:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"und-tx-wrkchain-record"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#und-tx-wrkchain-record"}},[t._v("#")]),t._v(" und tx wrkchain record")]),t._v(" "),e("p",[t._v("record a WRKChain's block hashes")]),t._v(" "),e("h3",{attrs:{id:"synopsis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" Synopsis")]),t._v(" "),e("p",[t._v('Record a new WRKChain block\'s hash(es)\'\nExample:\n$ und tx wrkchain record 1 --wc_height=24 --block_hash="d04b98f48e8" --parent_hash="f8bcc15c6ae" --hash1="5ac050801cd6" --hash2="dcfd428fb5f9e" --hash3="65c4e16e7807340fa" --from mykey\n$ und tx wrkchain record 1 --wc_height=25 --block_hash="d04b98f48e8" --from mykey\n$ und tx wrkchain record 1 --wc_height=26 --block_hash="d04b98f48e8" --parent_hash="f8bcc15c6ae" --from mykey')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("und tx wrkchain record [wrkchain_id] [flags]\n")])])]),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n      --block_hash string        WRKChain block\'s header (main) hash\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n      --hash1 string             (optional) Additional WRKChain hash - e.g. State Merkle Root\n      --hash2 string             (optional) Additional WRKChain hash - e.g. Tx Merkle Root\n      --hash3 string             (optional) Additional WRKChain hash\n  -h, --help                     help for record\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --parent_hash string       (optional) WRKChain block\'s parent hash\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --wc_height uint           WRKChain block\'s height/block number\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')])])]),e("h3",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" SEE ALSO")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_tx_wrkchain.html"}},[t._v("und tx wrkchain")]),t._v("\t - WRKChain transaction subcommands")],1)]),t._v(" "),e("h6",{attrs:{id:"auto-generated-by-spf13-cobra-on-1-aug-2024"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-by-spf13-cobra-on-1-aug-2024"}},[t._v("#")]),t._v(" Auto generated by spf13/cobra on 1-Aug-2024")])])}),[],!1,null,null,null);e.default=s.exports}}]);