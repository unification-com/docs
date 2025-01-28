(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{377:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"und-keys-add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#und-keys-add"}},[e._v("#")]),e._v(" und keys add")]),e._v(" "),t("p",[e._v("Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file")]),e._v(" "),t("h3",{attrs:{id:"synopsis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),t("p",[e._v("Derive a new private key and encrypt to disk.\nOptionally specify a BIP39 mnemonic, a BIP39 passphrase to further secure the mnemonic,\nand a bip32 HD path to derive a specific account. The key will be stored under the given name\nand encrypted with the given password. The only input that is required is the encryption password.")]),e._v(" "),t("p",[e._v("If run with -i, it will prompt the user for BIP44 path, BIP39 mnemonic, and passphrase.\nThe flag --recover allows one to recover a key from a seed passphrase.\nIf run with --dry-run, a key would be generated (or recovered) but not stored to the\nlocal keystore.\nUse the --pubkey flag to add arbitrary public keys to the keystore for constructing\nmultisig transactions.")]),e._v(" "),t("p",[e._v("You can create and store a multisig key by passing the list of key names stored in a keyring\nand the minimum number of signatures required through --multisig-threshold. The keys are\nsorted by address, unless the flag --nosort is set.\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('keys add mymultisig --multisig "keyname1,keyname2,keyname3" --multisig-threshold 2\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und keys add &lt;name&gt; [flags]\n")])])]),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --account uint32           Account number for HD derivation (less than equal 2147483647)\n      --coin-type uint32         coin type number for HD derivation (default 5555)\n      --dry-run                  Perform action, but don't add key to local keystore\n      --hd-path string           Manual HD Path derivation (overrides BIP44 config)\n  -h, --help                     help for add\n      --index uint32             Address index number for HD derivation (less than equal 2147483647)\n  -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic\n      --key-type string          Key signing algorithm to generate keys for (default \"secp256k1\")\n      --ledger                   Store a local reference to a private key on a Ledger device\n      --multisig strings         List of key names stored in keyring to construct a public legacy multisig key\n      --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)\n      --no-backup                Don't print out seed phrase (if others are watching the terminal)\n      --nosort                   Keys passed to --multisig are taken in the order they're supplied\n      --pubkey string            Parse a public key in JSON format and saves key info to &lt;name&gt; file.\n      --recover                  Provide seed phrase to recover existing key instead of creating\n")])])]),t("h3",{attrs:{id:"options-inherited-from-parent-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options-inherited-from-parent-commands"}},[e._v("#")]),e._v(" Options inherited from parent commands")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      --home string              The application home directory (default "/home/hodge/.und_mainchain")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n')])])]),t("h3",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" SEE ALSO")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/mainchain/software/und_cmd/und_keys.html"}},[e._v("und keys")]),e._v("\t - Manage your application's keys")],1)]),e._v(" "),t("h6",{attrs:{id:"auto-generated-by-spf13-cobra-on-1-aug-2024"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-by-spf13-cobra-on-1-aug-2024"}},[e._v("#")]),e._v(" Auto generated by spf13/cobra on 1-Aug-2024")])])}),[],!1,null,null,null);t.default=s.exports}}]);