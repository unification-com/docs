(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{354:function(a,s,n){"use strict";n.r(s);var t=n(14),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"running-und-as-a-background-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-und-as-a-background-service"}},[a._v("#")]),a._v(" Running "),s("code",[a._v("und")]),a._v(" as a background service")]),a._v(" "),s("p",[a._v("If you intend to run your node as a Validator on any of the public networks, then you will most likely need to\npermanently run "),s("code",[a._v("und")]),a._v(" as a background service (as opposed to manually running "),s("code",[a._v("und start")]),a._v(" and leaving a\nterminal window/SSH session open).")]),a._v(" "),s("p",[a._v("This can easily be done using "),s("code",[a._v("systemctl")]),a._v(", and setting up an appropriate service configuration.")]),a._v(" "),s("p",[a._v("The following is a generic *nix guide, and may need adapting for your particular distribution.")]),a._v(" "),s("p",[a._v("Any text editor can be used to create the service configuration file, for example "),s("code",[a._v("nano")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/systemd/system/und.service\n")])])]),s("p",[a._v("At a minimum, the service configuration should contain the following, replacing "),s("code",[a._v("USERNAME")]),a._v(" and "),s("code",[a._v("FULL_PATH_TO")]),a._v("\nwith your own values:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[Unit]\nDescription=Unification Mainchain Validator Node\n\n[Service]\nUser=USERNAME\nGroup=USERNAME\nWorkingDirectory=/home/USERNAME\nExecStart=/usr/local/bin/und start --home /FULL_PATH_TO/.und_mainchain\nRestart=on-failure\nRestartSec=10s\nLimitNOFILE=4096\n\n[Install]\nWantedBy=default.target\n")])])]),s("p",[a._v("It is entirely possible to create a more sophisticated service definition should you desire.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[s("strong",[a._v("Also see")]),a._v(": "),s("RouterLink",{attrs:{to:"/mainchain/migrations/cosmovisor.html"}},[a._v("Using Cosmovisor with und: Quick Start")]),a._v(" for details on running "),s("code",[a._v("und")]),a._v(" with\n"),s("code",[a._v("cosmovisor")]),a._v(".")],1)]),a._v(" "),s("p",[a._v("Next, inform "),s("code",[a._v("systemctl")]),a._v(" of the new service:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl daemon-reload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" und\n")])])]),s("p",[a._v("The service can now be started:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start und\n")])])]),s("p",[a._v("and stopped:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl stop und\n")])])]),s("p",[a._v("in the background.")]),a._v(" "),s("p",[a._v("Finally, you can monitor the log output for the service by running:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" journalctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" und "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--follow")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);