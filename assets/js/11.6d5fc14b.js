(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{290:function(s,n,a){"use strict";a.r(n);var t={props:{version:{required:!0},plan:{required:!0}},data(){return{dlDir:"1.5.1"===this.version?this.version:"v"+this.version,installDir:"1.5.1"===this.version?"genesis/bin":`upgrades/${this.plan}/bin`}}},i=a(14),e=Object(i.a)(t,(function(){var s=this,n=s._self._c;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{staticClass:"language-bash"},[n("code",[n("span",{staticClass:"token function"},[s._v("mkdir")]),s._v(" "),n("span",{staticClass:"token parameter variable"},[s._v("-p")]),s._v(" "),n("span",{staticClass:"token environment constant"},[s._v("$HOME")]),s._v("/tmp "),n("span",{staticClass:"token operator"},[s._v("&&")]),s._v(" "),n("span",{staticClass:"token builtin class-name"},[s._v("cd")]),s._v(" "),n("span",{staticClass:"token environment constant"},[s._v("$HOME")]),s._v("/tmp\n"),n("span",{staticClass:"token function"},[s._v("wget")]),s._v(" https://github.com/unification-com/mainchain/releases/download/"+s._s(s.dlDir)+"/und_v"+s._s(s.version)+"_linux_x86_64.tar.gz\n"),n("span",{staticClass:"token function"},[s._v("tar")]),s._v(" "),n("span",{staticClass:"token parameter variable"},[s._v("-zxvf")]),s._v(" und_v"+s._s(s.version)+"_linux_x86_64.tar.gz\n"),n("span",{staticClass:"token function"},[s._v("mkdir")]),s._v(" "),n("span",{staticClass:"token parameter variable"},[s._v("-p")]),s._v(" "),n("span",{staticClass:"token environment constant"},[s._v("$HOME")]),s._v("/.und_mainchain/cosmovisor/"+s._s(s.installDir)+"\n"),n("span",{staticClass:"token function"},[s._v("mv")]),s._v(" und "),n("span",{staticClass:"token environment constant"},[s._v("$HOME")]),s._v("/.und_mainchain/cosmovisor/"+s._s(s.installDir)+"\n"),n("span",{staticClass:"token environment constant"},[s._v("$HOME")]),s._v("/.und_mainchain/cosmovisor/"+s._s(s.installDir)+"/und version "),n("span",{staticClass:"token parameter variable"},[s._v("--log_level")]),n("span",{staticClass:"token operator"},[s._v("=")]),n("span",{staticClass:"token string"},[s._v('""')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);