(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{330:function(e,t,a){"use strict";a.r(t);var o=a(14),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"network-upgrade-5-pike"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-upgrade-5-pike"}},[e._v("#")]),e._v(" Network Upgrade: 5-pike")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),t("p",[t("strong",[e._v("TestNet")]),e._v(" was successfully upgraded to "),t("code",[e._v("5-pike")]),e._v(" in block "),t("strong",[e._v("13,910,300")])]),e._v(" "),t("p",[t("strong",[e._v("MainNet")]),e._v(" was successfully upgraded to "),t("code",[e._v("5-pike")]),e._v(" in block "),t("strong",[e._v("12,210,000")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("This guide is for operators already running a node, and only for "),t("strong",[e._v("before")]),e._v(" the\nupgrade's target block height.")]),e._v(" "),t("p",[e._v("For new nodes or upgrades "),t("strong",[e._v("after")]),e._v(" the upgrade's target block height, please see the\n"),t("RouterLink",{attrs:{to:"/mainchain/software/cosmovisor/install_und_with_cosmovisor.html"}},[e._v("Install und with Cosmovisor")]),e._v("\ndocumentation.")],1)]),e._v(" "),t("p",[e._v("There are two possible methods for upgrading:")]),e._v(" "),t("ol",[t("li",[e._v("Automatically, using Cosmovisor (recommended)")]),e._v(" "),t("li",[e._v("Manually")])]),e._v(" "),t("h2",{attrs:{id:"automatically-upgrade-from-und-v1-9-x-to-v1-10-x-using-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatically-upgrade-from-und-v1-9-x-to-v1-10-x-using-cosmovisor"}},[e._v("#")]),e._v(" Automatically upgrade from und v1.9.x to v1.10.x using Cosmovisor")]),e._v(" "),t("p",[t("strong",[e._v("IMPORTANT:")]),e._v(" This guide assumes the reader has implemented the required changes outlined in\n"),t("RouterLink",{attrs:{to:"/mainchain/migrations/cosmovisor.html"}},[e._v("Using Cosmovisor with und: Quick Start")]),e._v(" and migrated their services before using this guide.")],1),e._v(" "),t("h3",{attrs:{id:"configuring-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cosmovisor"}},[e._v("#")]),e._v(" Configuring Cosmovisor")]),e._v(" "),t("p",[e._v("The following can be implemented well in advance of the actual upgrade occurring, which will allow\nfor a completely automated upgrade.")]),e._v(" "),t("p",[t("strong",[e._v("IMPORTANT")]),e._v(" During the upgrade, "),t("code",[e._v("cosmovisor")]),e._v(" will automatically do a full backup of the "),t("code",[e._v(".und_mainchain/data")]),e._v("\ndirectory. Ensure your host has adequate disk space to accommodate the backup. This may add significant time\nto the upgrade process, and as such, the process may take up to 30 minutes before the node comes back online.")]),e._v(" "),t("h4",{attrs:{id:"_1-create-the-cosmovisor-upgrade-plan-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-the-cosmovisor-upgrade-plan-directory"}},[e._v("#")]),e._v(" 1. Create the Cosmovisor upgrade plan directory")]),e._v(" "),t("p",[e._v("This will be dependent on how you configured "),t("code",[e._v("cosmovisor")]),e._v(", and your actual "),t("code",[e._v(".und_mainchain")]),e._v(" path:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.und_mainchain/cosmovisor/upgrades/5-pike/bin\n")])])]),t("h4",{attrs:{id:"_2-download-the-latest-und-v1-9-x-and-add-to-cosmovisor-s-upgrades-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-download-the-latest-und-v1-9-x-and-add-to-cosmovisor-s-upgrades-directory"}},[e._v("#")]),e._v(" 2. Download the latest "),t("code",[e._v("und")]),e._v(" v1.9.x and add to Cosmovisor's "),t("code",[e._v("upgrades")]),e._v(" directory")]),e._v(" "),t("InstallUnd",{attrs:{version:"1.10.1",plan:"5-pike"}}),e._v(" "),t("p",[e._v("Check the version output is "),t("code",[e._v("1.10.1")]),e._v("!")]),e._v(" "),t("p",[e._v("The directory structure for "),t("code",[e._v("$HOME/.und_mainchain/cosmovisor")]),e._v(" should now look as follows:")]),e._v(" "),t("tabs",{attrs:{options:{useUrlFragment:!1}}},[t("tab",{attrs:{name:"MainNet"}},[t("h4",{attrs:{id:"mainnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[e._v("#")]),e._v(" MainNet")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" 1st upgrade path name is "),t("code",[e._v("1-init_ibc")]),e._v(" "),t("CosmovisorDirTree",{attrs:{network:"mainnet",plan:"5-pike",upgraded:"false"}})],1)]),e._v(" "),t("tab",{attrs:{name:"TestNet"}},[t("h4",{attrs:{id:"testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[e._v("#")]),e._v(" TestNet")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" 1st upgrade path name is "),t("code",[e._v("1-ibc")]),e._v(" "),t("CosmovisorDirTree",{attrs:{network:"testnet",plan:"5-pike",upgraded:"true"}})],1)])],1),e._v(" "),t("p",[e._v("That's it! When the upgrade height specified in the governance proposal is reached, Cosmovisor and the "),t("code",[e._v("upgrade")]),e._v("\nmodule will handle the rest automatically.")]),e._v(" "),t("h3",{attrs:{id:"cosmovisor-upgrade-process-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor-upgrade-process-overview"}},[e._v("#")]),e._v(" Cosmovisor Upgrade process overview")]),e._v(" "),t("p",[e._v("Briefly, at the upgrade height, Cosmovisor will automatically:")]),e._v(" "),t("ol",[t("li",[e._v("Stop the "),t("code",[e._v("und")]),e._v(" v1.9.x binary")]),e._v(" "),t("li",[e._v("Backup "),t("code",[e._v(".und_mainchain/data")]),e._v(" to "),t("code",[e._v(".und_mainchain/data-backup-YYYY-M-DD")]),t("strong",[e._v("*")])]),e._v(" "),t("li",[e._v("Reconfigure itself to use "),t("code",[e._v("und")]),e._v(" v1.10.x")]),e._v(" "),t("li",[e._v("Restart "),t("code",[e._v("und")]),e._v(" using the new version")])]),e._v(" "),t("p",[t("strong",[e._v("*Ensure the host has enough space to back up!")])]),e._v(" "),t("h2",{attrs:{id:"manual-upgrade-not-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-upgrade-not-recommended"}},[e._v("#")]),e._v(" Manual upgrade (not recommended)")]),e._v(" "),t("p",[e._v("The alternative to implementing Cosmovisor is to manually upgrade the binary. Once the upgrade height specified in the\ngovernance proposal is reached, the "),t("code",[e._v("upgrade")]),e._v(" module will automatically halt the node via a "),t("code",[e._v("panic")]),e._v(". The node operator\nwill then need to:")]),e._v(" "),t("ol",[t("li",[e._v("Stop the "),t("code",[e._v("und")]),e._v(" v1.9.x binary, via "),t("code",[e._v("systemd")]),e._v(" or their chosen method")]),e._v(" "),t("li",[e._v("Backup the "),t("code",[e._v("und_mainchain/data")]),e._v(" directory")]),e._v(" "),t("li",[e._v("Download and install the latest "),t("code",[e._v("und")]),e._v(" v1.10.x, replacing the old v1.9.x binary (for example in "),t("code",[e._v("/usr/local/bin")]),e._v(")")]),e._v(" "),t("li",[e._v("Restart the "),t("code",[e._v("und")]),e._v(" binary, via "),t("code",[e._v("systemd")]),e._v(" or their chosen method.")])]),e._v(" "),t("p",[e._v("Since the process involves manual intervention, monitoring and execution, the process may take longer.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);