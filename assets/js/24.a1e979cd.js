(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{303:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"beacon-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beacon-example"}},[e._v("#")]),e._v(" BEACON Example")]),e._v(" "),t("h4",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul")]),t("p"),e._v(" "),t("p",[e._v('Register:\nund tx beacon register --moniker=beacon1 --name="Beacon 1" --from wrktest')]),e._v(" "),t("p",[e._v("then run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und query tx [TX HASH]\n")])])]),t("p",[e._v("this will return the generated Beacon ID integer")]),e._v(" "),t("p",[e._v("Query metadata")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und query beacon beacon 1\n")])])]),t("p",[e._v("Record Timestamp hash")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und tx beacon record 1 --hash=d04b98f48e8 --subtime=$(date +%s) --from wrktest --gas=auto --gas-adjustment=1.15\n")])])]),t("p",[e._v("Query a Timestamp")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("und query beacon timestamp 1 1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);