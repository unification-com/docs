(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{351:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installing-und-using-cosmovisor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-und-using-cosmovisor"}},[t._v("#")]),t._v(" Installing und & Using Cosmovisor")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This guide is for fresh full node installations. For existing nodes migrating to "),e("code",[t._v("cosmovisor")]),t._v(", please\nsee the "),e("RouterLink",{attrs:{to:"/mainchain/migrations/"}},[t._v("Migrations")]),t._v(" documentation.")],1)]),t._v(" "),e("p",[t._v("Installing and configuring "),e("code",[t._v("cosmovisor")]),t._v(" makes managing and maintaining "),e("code",[t._v("und")]),t._v(" updates & upgrades much simpler.")]),t._v(" "),e("p",[t._v("This guide will cover installing and configuring "),e("code",[t._v("und")]),t._v(" to run with Cosmovisor, and a full sync from genesis allowing you\nto run a full node.")]),t._v(" "),e("h4",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-download-the-genesis-version-of-und-initialise-configure"}},[t._v("1. Download the genesis version of und, initialise & configure")])]),e("li",[e("a",{attrs:{href:"#_2-install-configure-cosmovisor"}},[t._v("2. Install & Configure Cosmovisor")]),e("ul",[e("li",[e("a",{attrs:{href:"#_2-1-set-up-cosmovisor-directory-structure"}},[t._v("2.1 Set up cosmovisor directory structure")])]),e("li",[e("a",{attrs:{href:"#mainnet"}},[t._v("MainNet")])]),e("li",[e("a",{attrs:{href:"#testnet"}},[t._v("TestNet")])]),e("li",[e("a",{attrs:{href:"#_2-2-create-cosmovisor-environment-file"}},[t._v("2.2 Create cosmovisor environment file")])])])]),e("li",[e("a",{attrs:{href:"#_3-set-up-the-systemd-service"}},[t._v("3. Set up the systemd service")])]),e("li",[e("a",{attrs:{href:"#_4-start-the-systemd-service"}},[t._v("4. Start the systemd service")])]),e("li",[e("a",{attrs:{href:"#_5-become-a-validator"}},[t._v("5. Become a Validator")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-download-the-genesis-version-of-und-initialise-configure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-the-genesis-version-of-und-initialise-configure"}},[t._v("#")]),t._v(" 1. Download the genesis version of und, initialise & configure")]),t._v(" "),e("p",[t._v("First, download the "),e("code",[t._v("und")]),t._v(" version for "),e("code",[t._v("genesis")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" und_v1.5.1_linux_x86_64.tar.gz\n")])])]),e("p",[t._v("Initialise the node")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./und init "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NODE_MONIKER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Download "),e("code",[t._v("genesis.json")])])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),e("p",[t._v("Please ensure you download the correct genesis for the network you would like to join! Remember to change the output\ndirectory in the command below if you are using something other than the default "),e("code",[t._v("$HOME/.und_mainchain")]),t._v(" directory!")])]),t._v(" "),e("p",[t._v("To spin up your new node, download the latest "),e("code",[t._v("genesis.json")]),t._v(" for the network you would like to join:")]),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"MainNet"}},[e("h4",{attrs:{id:"mainnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[t._v("#")]),t._v(" MainNet")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.und_mainchain/config/genesis.json\n")])])])]),t._v(" "),e("tab",{attrs:{name:"TestNet"}},[e("h4",{attrs:{id:"testnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[t._v("#")]),t._v(" TestNet")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.und_mainchain/config/genesis.json\n")])])])])],1),t._v(" "),e("p",[e("strong",[t._v("Get the seed nodes")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),e("p",[t._v("Please ensure you get the correct seed node information for the network you would like to join! Remember to change the\ndirectory if you are using something other than the default "),e("code",[t._v("$HOME/.und_mainchain")]),t._v(" directory!\nFor this guide, we are using "),e("code",[t._v("/mnt/disks/data/.und_mainchain")]),t._v(" for the node's home directory.")])]),t._v(" "),e("p",[t._v("Your node will need to know at least one seed node in order to join the network\nand begin P2P communication with other nodes in the network. The latest seed information will always be available at\neach network's respective Github repo:")]),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"MainNet"}},[e("h4",{attrs:{id:"mainnet-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mainnet-2"}},[t._v("#")]),t._v(" MainNet")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md"),e("OutboundLink")],1)])]),t._v(" "),e("tab",{attrs:{name:"TestNet"}},[e("h4",{attrs:{id:"testnet-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testnet-2"}},[t._v("#")]),t._v(" TestNet")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md"),e("OutboundLink")],1)])])],1),t._v(" "),e("p",[t._v("Go to the repo for the network you are connecting to and copy one or more of the seed nodes (you only need\nthe "),e("code",[t._v("id@address:port")]),t._v(")")]),t._v(" "),e("p",[t._v("Edit your node configuration file using nano:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /path/to/.und_mainchain/config/config.toml\n")])])]),e("p",[t._v("Hit "),e("kbd",[t._v("Ctrl")]),t._v("+"),e("kbd",[t._v("W")]),t._v(", type "),e("code",[t._v("[p2p]")]),t._v(" (including the square brackets) and hit return - this will take you to\nthe "),e("code",[t._v("[p2p]")]),t._v(" section of the config file, which begins with:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("##### peer to peer configuration options #####\n[p2p]\n")])])]),e("p",[t._v("Find the "),e("code",[t._v('seeds = ""')]),t._v(" variable about 12 lines below, and add the seed node information between the double quotes (comma\nseparated, no spaces if more than one). For example:")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("seeds")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_id@ip:port"')]),t._v("\n")])])]),e("p",[e("strong",[t._v("Set "),e("code",[t._v("gas-prices")])])]),t._v(" "),e("p",[t._v("It is good practice to set the minimum-gas-prices value in "),e("code",[t._v("$HOME/.und_mainchain/config/app.toml")]),t._v(", in order to protect\nyour full node from spam transactions. This should be set as a decimal value in "),e("code",[t._v("nund")]),t._v(", and the recommended value is\ncurrently "),e("code",[t._v("25.0nund")]),t._v(". This means your node will ignore any Txs with a gas price below this value. To do so, open\nup "),e("code",[t._v("$HOME/.und_mainchain/config/app.toml")]),t._v(" in a text editor, and set "),e("code",[t._v("minimum-gas-prices")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.und_mainchain/config/app.toml\n")])])]),e("p",[t._v("Change:")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("minimum-gas-prices")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),e("p",[t._v("To, for example:")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("minimum-gas-prices")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25.0nund"')]),t._v("\n")])])]),e("p",[t._v("Hit "),e("kbd",[t._v("Ctrl")]),t._v("+"),e("kbd",[t._v("X")]),t._v(" followed by "),e("code",[t._v("y")]),t._v(" and then return to save the file and exit nano.")]),t._v(" "),e("h2",{attrs:{id:"_2-install-configure-cosmovisor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-configure-cosmovisor"}},[t._v("#")]),t._v(" 2. Install & Configure Cosmovisor")]),t._v(" "),e("p",[t._v("Next, install "),e("code",[t._v("cosmovisor")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.5.0/cosmovisor-v1.5.0-linux-amd64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" cosmovisor-v1.5.0-linux-amd64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" cosmovisor /usr/local/bin/cosmovisor\n")])])]),e("p",[t._v("The latest version of "),e("code",[t._v("cosmovisor")]),t._v(" is "),e("code",[t._v("v1.5.0")])]),t._v(" "),e("h3",{attrs:{id:"_2-1-set-up-cosmovisor-directory-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-set-up-cosmovisor-directory-structure"}},[t._v("#")]),t._v(" 2.1 Set up cosmovisor directory structure")]),t._v(" "),e("p",[t._v("Create the directory structure for the "),e("code",[t._v("und")]),t._v(" binaries and updates")]),t._v(" "),e("h4",{attrs:{id:"_2-1-1-und-v1-5-1-genesis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-und-v1-5-1-genesis"}},[t._v("#")]),t._v(" 2.1.1 "),e("code",[t._v("und")]),t._v(" v1.5.1: "),e("code",[t._v("genesis")]),t._v(":")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.5.1",plan:""}}),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.5.1")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"_2-1-2-und-v1-6-x-1-init-ibc-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-und-v1-6-x-1-init-ibc-update"}},[t._v("#")]),t._v(" 2.1.2 "),e("code",[t._v("und")]),t._v(" v1.6.x: "),e("code",[t._v("1-init_ibc")]),t._v(" update")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),e("p",[t._v("Upgrade plan names for "),e("code",[t._v("und")]),t._v(" v1.6.x:"),e("br"),t._v(" "),e("strong",[t._v("MainNet")]),t._v(": "),e("code",[t._v("1-init_ibc")]),e("br"),t._v(" "),e("strong",[t._v("TestNet")]),t._v(": "),e("code",[t._v("1-ibc")])]),t._v(" "),e("p",[t._v("The upgrade plan name determines the directory path that "),e("code",[t._v("und")]),t._v(" v1.6.x will be installed in!")])]),t._v(" "),e("p",[t._v("Install the "),e("code",[t._v("1-init_ibc")]),t._v(" update:")]),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"MainNet"}},[e("h3",{attrs:{id:"mainnet-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mainnet-3"}},[t._v("#")]),t._v(" MainNet")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.6.3",plan:"1-init_ibc"}})],1),t._v(" "),e("tab",{attrs:{name:"TestNet"}},[e("h3",{attrs:{id:"testnet-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testnet-3"}},[t._v("#")]),t._v(" TestNet")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.6.3",plan:"1-ibc"}})],1)],1),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.6.3")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"_2-1-3-und-v1-7-x-2-grog-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-und-v1-7-x-2-grog-update"}},[t._v("#")]),t._v(" 2.1.3 "),e("code",[t._v("und")]),t._v(" v1.7.x: "),e("code",[t._v("2-grog")]),t._v(" update")]),t._v(" "),e("p",[t._v("Install the "),e("code",[t._v("2-grog")]),t._v(" update:")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.7.0",plan:"2-grog"}}),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.7.0")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"_2-1-4-und-v1-8-x-3-keyleth-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-und-v1-8-x-3-keyleth-update"}},[t._v("#")]),t._v(" 2.1.4 "),e("code",[t._v("und")]),t._v(" v1.8.x: "),e("code",[t._v("3-keyleth")]),t._v(" update")]),t._v(" "),e("p",[t._v("Install the "),e("code",[t._v("3-keyleth")]),t._v(" update:")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.8.2",plan:"3-keyleth"}}),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.8.2")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"_2-1-5-und-v1-9-x-4-percival-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-und-v1-9-x-4-percival-update"}},[t._v("#")]),t._v(" 2.1.5 "),e("code",[t._v("und")]),t._v(" v1.9.x: "),e("code",[t._v("4-percival")]),t._v(" update")]),t._v(" "),e("p",[t._v("Install the "),e("code",[t._v("4-percival")]),t._v(" update:")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.9.0",plan:"4-percival"}}),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.9.0")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"_2-1-6-und-v1-10-x-5-pike-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-und-v1-10-x-5-pike-update"}},[t._v("#")]),t._v(" 2.1.6 "),e("code",[t._v("und")]),t._v(" v1.10.x: "),e("code",[t._v("5-pike")]),t._v(" update")]),t._v(" "),e("p",[t._v("Install the "),e("code",[t._v("5-pike")]),t._v(" update:")]),t._v(" "),e("InstallUnd",{attrs:{version:"1.10.1",plan:"5-pike"}}),t._v(" "),e("p",[t._v("Check the version output is "),e("code",[t._v("1.10.1")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_2-2-create-cosmovisor-environment-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-create-cosmovisor-environment-file"}},[t._v("#")]),t._v(" 2.2 Create cosmovisor environment file")]),t._v(" "),e("p",[t._v("Create an environment variable file which will load into the "),e("code",[t._v("systemd")]),t._v(" service, modifying "),e("code",[t._v("/FULL/PATH/TO/")]),t._v(" as\nrequired:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\nDAEMON_NAME=und\nDAEMON_HOME=/FULL/PATH/TO/.und_mainchain\nDAEMON_RESTART_AFTER_UPGRADE=true\nDAEMON_RESTART_DELAY=5s\nEOF")]),t._v("\n")])])]),e("h2",{attrs:{id:"_3-set-up-the-systemd-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-up-the-systemd-service"}},[t._v("#")]),t._v(" 3. Set up the systemd service")]),t._v(" "),e("p",[t._v("Create a "),e("code",[t._v("systemd")]),t._v(" service file, replacing "),e("code",[t._v("USERNAME")]),t._v(" as required:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/systemd/system/und.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\n[Unit] \nDescription=Unification Mainchain Node \n \n[Service] \nUser=USERNAME \nGroup=USERNAME \nWorkingDirectory=/home/USERNAME \nEnvironmentFile=/home/USERNAME/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV\nExecStart=/usr/local/bin/cosmovisor run start\nRestart=on-failure\nRestartSec=10s\nLimitNOFILE=4096 \n \n[Install] \nWantedBy=default.target\nEOF")]),t._v("\n")])])]),e("p",[t._v("Reload "),e("code",[t._v("systemd")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n")])])]),e("h2",{attrs:{id:"_4-start-the-systemd-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-start-the-systemd-service"}},[t._v("#")]),t._v(" 4. Start the systemd service")]),t._v(" "),e("p",[t._v("Start the "),e("code",[t._v("und")]),t._v(" as a background service:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start und\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" und "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n")])])]),e("h2",{attrs:{id:"_5-become-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-become-a-validator"}},[t._v("#")]),t._v(" 5. Become a Validator")]),t._v(" "),e("p",[t._v("Should you wish, and once your node is fully synced, you can "),e("a",{attrs:{href:"../../networks/become-validator"}},[t._v("become a validator")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);