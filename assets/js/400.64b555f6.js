(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{682:function(e,t,a){"use strict";a.r(t);var r=a(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ooo-data-api-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ooo-data-api-guide"}},[e._v("#")]),e._v(" OoO Data API Guide")]),e._v(" "),t("p",[e._v("This guide covers the supported data offered by the Finchains OoO API, which is available\nas a data request via the xFUND Router network.")]),e._v(" "),t("h2",{attrs:{id:"data-providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-providers"}},[e._v("#")]),e._v(" Data Providers")]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/ooo/providers.html"}},[e._v("Providers")]),e._v(" for a list of Oracles providing data for both Mainnet and Rinkeby,\nalong with their associated fees and wallet addresses.")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("OoO data providers may wait for 2 - 3 or more block confirmations before processing a request. Depending\non network congestion and gas prices, it may therefore take up to a minute or more for data to be sent to your\nsmart contract from the time your request Tx was received by the provider oracle.")])]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v('Data is acquired via the OoO API using dot-separated strings to define the desired data - for example\n"Average BTC/USD Price over 24 hours, with outliers removed" would be requested using\n'),t("code",[e._v("BTC.USD.PR.AVI.24H")]),e._v(".")]),e._v(" "),t("p",[e._v("The hex-encoded string is supplied along with the Provider address (as defined above,\ndepending on Ethereum network) and the "),t("code",[e._v("xFUND")]),e._v(" fee as parameters to your smart contract,\nusing the "),t("RouterLink",{attrs:{to:"/ooo/guide/implementation.html#_3-1-requestdata"}},[e._v("requestdata")]),e._v(" function you defined.")],1),e._v(" "),t("p",[e._v("The Finchains OoO Data Provider picks up this request, and supplies the data via the\n"),t("RouterLink",{attrs:{to:"/ooo/guide/implementation.html#_3-2-recievedata"}},[e._v("recievedata")]),e._v(" function you defined.")],1),e._v(" "),t("h2",{attrs:{id:"request-string-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-string-format"}},[e._v("#")]),e._v(" Request String Format")]),e._v(" "),t("p",[e._v("The request format follows "),t("code",[e._v("BASE.TARGET.TYPE.SUBTYPE[.SUPP1][.SUPP2][.SUPP3]")])]),e._v(" "),t("p",[t("code",[e._v("BASE")]),e._v(", "),t("code",[e._v("TARGET")]),e._v(", and "),t("code",[e._v("TYPE")]),e._v(" are all required parameters. "),t("code",[e._v("SUBTYPE")]),e._v(" is required for type "),t("code",[e._v("PR")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The data request string should be converted to a "),t("code",[e._v("Bytes32")]),e._v(" (Hex) value before submitting it to\nyour smart contract's request function, for example:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" endpoint "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" web3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("asciiToHex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ETH.USDC.AD.30"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" endpoint "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" web3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("asciiToHex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"BTC.USD.PR.AVI"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v(" etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),t("h3",{attrs:{id:"base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[e._v("#")]),e._v(" BASE")]),e._v(" "),t("p",[e._v("The three or four-letter code for the base currency for which the price will be returned,\ne.g. "),t("code",[e._v("BTC")]),e._v(" (Bitcoin), "),t("code",[e._v("ETH")]),e._v(" (Ether) etc.")]),e._v(" "),t("h3",{attrs:{id:"target"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[e._v("#")]),e._v(" TARGET")]),e._v(" "),t("p",[e._v("The three or four-letter code for the target currency in which to return the\nprice, e.g. "),t("code",[e._v("GBP")]),e._v(", "),t("code",[e._v("USD")])]),e._v(" "),t("p",[e._v("A full list of supported currency "),t("code",[e._v("BASE")]),e._v("/"),t("code",[e._v("TARGET")]),e._v(" pairs is available from\nthe "),t("a",{attrs:{href:"https://crypto.finchains.io/api/pairs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finchains API"),t("OutboundLink")],1),e._v(". Supported pairs specific\nto each exchange are linked below.")]),e._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" TYPE")]),e._v(" "),t("p",[e._v("The code for the data point being requested, for example "),t("code",[e._v("PR")]),e._v(" etc.\nThe currently implemented types are as follows:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("PR")])]),e._v(" "),t("li",[t("code",[e._v("AD")])])]),e._v(" "),t("h3",{attrs:{id:"type-pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-pr"}},[e._v("#")]),e._v(" TYPE: "),t("code",[e._v("PR")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("PR")]),e._v(" request type uses Finchains to query price data. Finchains has a limited number of supported pairs. For a wider\nrange of pairs, use the "),t("code",[e._v("AD")]),e._v(" endpoint, which queries a larger data set of DEXs.")])]),e._v(" "),t("p",[e._v("Price, calculated using all available exchange data for the selected pair. See "),t("code",[e._v("SUBTYPE")]),e._v("s for supported\nquery endpoints.")]),e._v(" "),t("h3",{attrs:{id:"type-ad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-ad"}},[e._v("#")]),e._v(" TYPE: "),t("code",[e._v("AD")])]),e._v(" "),t("p",[e._v("Adhoc data requests for pairs listed on supported DEXs instead of Finchains. The "),t("code",[e._v("SUBTYPE")]),e._v(" is not required for the\n"),t("code",[e._v("AD")]),e._v(" endpoint "),t("code",[e._v("TYPE")]),e._v(". The slot can however be used to specify the  historical timespan for which to query prices.")]),e._v(" "),t("p",[e._v("By default, the Chauvenet Criterion is used to remove outliers if the returned results contain enough data to do so.")]),e._v(" "),t("p",[e._v("The OoO provider will "),t("strong",[e._v("attempt")]),e._v(" to query supported DEXs' subgraphs to determine whether the "),t("code",[e._v("BASE")]),e._v(" and "),t("code",[e._v("TARGET")]),e._v(" symbols\nare known to the DEX, and also whether the DEX has a liquidity pool representing the pair. If a pair exists,\nand is supported by OoO it will attempt to retrieve the latest price from each DEX before calculating the mean price\nfrom all data found.")]),e._v(" "),t("p",[e._v("The currently supported DEXs are:")]),e._v(" "),t("ul",[t("li",[e._v("Uniswap v2 (Ethereum mainnet)")]),e._v(" "),t("li",[e._v("Uniswap v3 (Ethereum mainnet)")]),e._v(" "),t("li",[e._v("Shibaswap (Ethereum mainnet)")]),e._v(" "),t("li",[e._v("Sushiswap (Ethereum mainnet)")]),e._v(" "),t("li",[e._v("Quickswap (Polygon PoS)")]),e._v(" "),t("li",[e._v("Pancakeawap v3 (BSC Chain)")]),e._v(" "),t("li",[e._v("Honeyswap (Gnosis Chain)")])]),e._v(" "),t("p",[e._v("A list of currently supported pairs can be found in the Github repository used by the OoO application to update itself:\n"),t("a",{attrs:{href:"https://github.com/unification-com/ooo-adhoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/unification-com/ooo-adhoc"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),t("p",[t("code",[e._v("BASE")]),e._v(" and "),t("code",[e._v("TARGET")]),e._v(" are "),t("strong",[e._v("CaSe SeNsItIvE")]),e._v(" for adhoc queries! "),t("code",[e._v("XFUND")]),e._v(" is "),t("strong",[e._v("not")]),e._v(" the same as "),t("code",[e._v("xFUND")]),e._v(".\n"),t("strong",[e._v("Always check your request endpoints, and that at least one DEX supports the pair before sending a data request!")])])]),e._v(" "),t("p",[e._v("The default timespan is 0 minutes. Any integer from 0 to 60 may be used in "),t("code",[e._v("SUBTYPE")]),e._v(", with a "),t("code",[e._v("0")]),e._v(" telling the oracle to\nonly fetch the latest prices. A non-zero value tells the oracle to fetch prices for the past "),t("code",[e._v("nn")]),e._v(" minutes.")]),e._v(" "),t("p",[t("strong",[e._v("Example")])]),e._v(" "),t("p",[e._v("We know that "),t("code",[e._v("xFUND/WETH")]),e._v(" pair is listed on Uniswap v2 and Shibaswap. We'd like to know the average price for the last\n30 minutes, so we can use the query endpoint:")]),e._v(" "),t("p",[t("code",[e._v("xFUND.WETH.AD.30")])]),e._v(" "),t("p",[e._v("The OoO provider will pick up the request, and since it is an "),t("code",[e._v("AD")]),e._v(" endpoint "),t("code",[e._v("TYPE")]),e._v(", will query the prices in known\nDEXs for the last 30 minutes. If a DEX supports the pair, it will query the latest price from all supported\nDEXs, and calculate the mean price from all results removing outliers using the Chauvenet Criterion.")]),e._v(" "),t("h3",{attrs:{id:"subtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subtype"}},[e._v("#")]),e._v(" SUBTYPE")]),e._v(" "),t("p",[e._v("Used with "),t("code",[e._v("TYPE")]),e._v(" endpoint "),t("code",[e._v("PR")]),e._v(".")]),e._v(" "),t("p",[e._v("The data sub-type, for example "),t("code",[e._v("AVG")]),e._v(" (mean), "),t("code",[e._v("AVI")]),e._v(" (mean with outliers\nremoved). Some "),t("code",[e._v("TYPE")]),e._v("s, "),t("em",[e._v("require")]),e._v(" additional "),t("code",[e._v("SUPPN")]),e._v(" data in the query. Some may have "),t("em",[e._v("optional")]),e._v(" data defined in "),t("code",[e._v("SUPPN")]),e._v(".")]),e._v(" "),t("p",[e._v("The currently implemented types are as follows:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#subtype-avg"}},[e._v("AVG")]),e._v(": Mean price calculated from all available exchange Oracles")]),e._v(" "),t("li",[t("a",{attrs:{href:"#subtype-avi"}},[e._v("AVI")]),e._v(": Mean price using "),t("a",{attrs:{href:"http://www.mathwords.com/o/outlier.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Median and Interquartile Deviation Method"),t("OutboundLink")],1),e._v(" to remove outliers")]),e._v(" "),t("li",[t("a",{attrs:{href:"#subtype-avp"}},[e._v("AVP")]),e._v(": Mean price with outliers removed using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Peirce%27s_criterion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peirce's criterion"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"#subtype-avc"}},[e._v("AVC")]),e._v(": Mean price with outliers removed using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Chauvenet%27s_criterion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chauvenet's criterion"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"subtype-avg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subtype-avg"}},[e._v("#")]),e._v(" SUBTYPE: "),t("code",[e._v("AVG")])]),e._v(" "),t("p",[t("strong",[e._v("Supported "),t("code",[e._v("TYPE")]),e._v("s")]),e._v(": "),t("code",[e._v("PR")])]),e._v(" "),t("p",[e._v("Average (Mean) price, calculated from all available exchange data for a given time\nperiod.")]),e._v(" "),t("p",[e._v("The default timespan is 1 Hour. The following supported timespans can be supplied\nin "),t("code",[e._v("SUPP1")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("5M")]),e._v(": 5 Minutes")]),e._v(" "),t("li",[t("code",[e._v("10M")]),e._v(": 10 Minutes")]),e._v(" "),t("li",[t("code",[e._v("30M")]),e._v(": 30 Minutes")]),e._v(" "),t("li",[t("code",[e._v("1H")]),e._v(": 1 Hour")]),e._v(" "),t("li",[t("code",[e._v("2H")]),e._v(": 2 Hours")]),e._v(" "),t("li",[t("code",[e._v("6H")]),e._v(": 6 Hours")]),e._v(" "),t("li",[t("code",[e._v("12H")]),e._v(": 12 Hours")]),e._v(" "),t("li",[t("code",[e._v("24H")]),e._v(": 24 Hours")]),e._v(" "),t("li",[t("code",[e._v("48H")]),e._v(": 48 Hours")])]),e._v(" "),t("p",[t("strong",[e._v("Examples")])]),e._v(" "),t("p",[t("code",[e._v("BTC.USD.PR.AGV")]),e._v(" - Mean BTC/USD price from all available exchanges, using data from the last hour"),t("br"),e._v(" "),t("code",[e._v("BTC.USD.PR.AGV.30M")]),e._v(" - as above, but data from the last 30 minutes")]),e._v(" "),t("h4",{attrs:{id:"subtype-avi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subtype-avi"}},[e._v("#")]),e._v(" SUBTYPE: "),t("code",[e._v("AVI")])]),e._v(" "),t("p",[t("strong",[e._v("Supported "),t("code",[e._v("TYPE")]),e._v("s")]),e._v(": "),t("code",[e._v("PR")])]),e._v(" "),t("p",[e._v("Average (Mean) price, calculated from all available exchange data for a given time\nperiod, with outliers (very high or very low values) removed form the calculation")]),e._v(" "),t("p",[e._v("The default timespan is 1 Hour. The following supported timespans can be supplied\nin "),t("code",[e._v("SUPP1")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("5M")]),e._v(": 5 Minutes")]),e._v(" "),t("li",[t("code",[e._v("10M")]),e._v(": 10 Minutes")]),e._v(" "),t("li",[t("code",[e._v("30M")]),e._v(": 30 Minutes")]),e._v(" "),t("li",[t("code",[e._v("1H")]),e._v(": 1 Hour")]),e._v(" "),t("li",[t("code",[e._v("2H")]),e._v(": 2 Hours")]),e._v(" "),t("li",[t("code",[e._v("6H")]),e._v(": 6 Hours")]),e._v(" "),t("li",[t("code",[e._v("12H")]),e._v(": 12 Hours")]),e._v(" "),t("li",[t("code",[e._v("24H")]),e._v(": 24 Hours")]),e._v(" "),t("li",[t("code",[e._v("48H")]),e._v(": 48 Hours")])]),e._v(" "),t("p",[t("code",[e._v("BTC.USD.PR.AVI")]),e._v(" - Mean BTC/USD price with outliers removed, using data from the last hour"),t("br"),e._v(" "),t("code",[e._v("BTC.USD.PR.AVI.30M")]),e._v(" - as above, but data from the last 30 minutes")]),e._v(" "),t("h4",{attrs:{id:"subtype-avp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subtype-avp"}},[e._v("#")]),e._v(" SUBTYPE: "),t("code",[e._v("AVP")])]),e._v(" "),t("p",[t("strong",[e._v("Supported "),t("code",[e._v("TYPE")]),e._v("s")]),e._v(": "),t("code",[e._v("PR")])]),e._v(" "),t("p",[e._v("Mean price with outliers removed using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Peirce%27s_criterion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peirce's criterion"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The default timespan is 1 Hour. The following supported timespans can be supplied\nin "),t("code",[e._v("SUPP1")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("5M")]),e._v(": 5 Minutes")]),e._v(" "),t("li",[t("code",[e._v("10M")]),e._v(": 10 Minutes")]),e._v(" "),t("li",[t("code",[e._v("30M")]),e._v(": 30 Minutes")]),e._v(" "),t("li",[t("code",[e._v("1H")]),e._v(": 1 Hour")]),e._v(" "),t("li",[t("code",[e._v("2H")]),e._v(": 2 Hours")]),e._v(" "),t("li",[t("code",[e._v("6H")]),e._v(": 6 Hours")]),e._v(" "),t("li",[t("code",[e._v("12H")]),e._v(": 12 Hours")]),e._v(" "),t("li",[t("code",[e._v("24H")]),e._v(": 24 Hours")]),e._v(" "),t("li",[t("code",[e._v("48H")]),e._v(": 48 Hours")])]),e._v(" "),t("p",[t("code",[e._v("BTC.USD.PR.AVP")]),e._v(" - Mean BTC/USD price with outliers removed, using data from the last hour"),t("br"),e._v(" "),t("code",[e._v("BTC.USD.PR.AVP.30M")]),e._v(" - as above, but data from the last 30 minutes")]),e._v(" "),t("h4",{attrs:{id:"subtype-avc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subtype-avc"}},[e._v("#")]),e._v(" SUBTYPE: "),t("code",[e._v("AVC")])]),e._v(" "),t("p",[t("strong",[e._v("Supported "),t("code",[e._v("TYPE")]),e._v("s")]),e._v(": "),t("code",[e._v("PR")])]),e._v(" "),t("p",[e._v("Mean price with outliers removed using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Chauvenet%27s_criterion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chauvenet's criterion"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The default timespan is 1 Hour. The following supported timespans can be supplied\nin "),t("code",[e._v("SUPP1")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("5M")]),e._v(": 5 Minutes")]),e._v(" "),t("li",[t("code",[e._v("10M")]),e._v(": 10 Minutes")]),e._v(" "),t("li",[t("code",[e._v("30M")]),e._v(": 30 Minutes")]),e._v(" "),t("li",[t("code",[e._v("1H")]),e._v(": 1 Hour")]),e._v(" "),t("li",[t("code",[e._v("2H")]),e._v(": 2 Hours")]),e._v(" "),t("li",[t("code",[e._v("6H")]),e._v(": 6 Hours")]),e._v(" "),t("li",[t("code",[e._v("12H")]),e._v(": 12 Hours")]),e._v(" "),t("li",[t("code",[e._v("24H")]),e._v(": 24 Hours")]),e._v(" "),t("li",[t("code",[e._v("48H")]),e._v(": 48 Hours")])]),e._v(" "),t("p",[e._v("The default value for "),t("code",[e._v("dMax")]),e._v(" (max standard deviations) is 3. A custom threshold can be\nsupplied as an integer value in "),t("code",[e._v("SUPP2")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),t("p",[e._v("If a custom "),t("code",[e._v("dMax")]),e._v(" value is required, then "),t("strong",[e._v("timespan must also be set in "),t("code",[e._v("SUPP1")])])])]),e._v(" "),t("p",[t("code",[e._v("BTC.USD.PR.AVC")]),e._v(" - Mean BTC/USD price with outliers removed, using data from the last hour"),t("br"),e._v(" "),t("code",[e._v("BTC.USD.PR.AVC.30M")]),e._v(" - as above, but data from the last 30 minutes"),t("br"),e._v(" "),t("code",[e._v("BTC.USD.PR.AVC.24H.2")]),e._v(" - as above, but data from the last 24 hours, with "),t("code",[e._v("dMax")]),e._v(" of 2")]),e._v(" "),t("h3",{attrs:{id:"supp1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supp1"}},[e._v("#")]),e._v(" SUPP1")]),e._v(" "),t("p",[e._v("Any supplementary request data, e.g. GDX (coinbase) etc. required for "),t("code",[e._v("TYPE.SUBTYPE")]),e._v(" queries such as "),t("code",[e._v("EX.LAT")]),e._v(",\nor timespan values for "),t("code",[e._v("AVG")]),e._v(" and "),t("code",[e._v("AVI")]),e._v(" calculations etc.")]),e._v(" "),t("p",[e._v("These are outlined in the respective "),t("code",[e._v("TYPE")]),e._v(" or "),t("code",[e._v("SUBTYPE")]),e._v(" definitions above where appropriate.")]),e._v(" "),t("h3",{attrs:{id:"supp2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supp2"}},[e._v("#")]),e._v(" SUPP2")]),e._v(" "),t("p",[e._v("Any supplementary request data "),t("em",[e._v("in addition")]),e._v(" to "),t("code",[e._v("SUPP1")]),e._v(", e.g. "),t("code",[e._v("GDX")]),e._v(" (coinbase) etc. required\nfor comparisons on "),t("code",[e._v("TYPE")]),e._v("s.")]),e._v(" "),t("p",[e._v("These are outlined in the respective "),t("code",[e._v("TYPE")]),e._v(" or "),t("code",[e._v("SUBTYPE")]),e._v(" definitions above where appropriate.")]),e._v(" "),t("h3",{attrs:{id:"supp3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supp3"}},[e._v("#")]),e._v(" SUPP3")]),e._v(" "),t("p",[e._v("Any supplementary request data "),t("em",[e._v("in addition")]),e._v(" to "),t("code",[e._v("SUPP1")]),e._v(" and "),t("code",[e._v("SUPP2")]),e._v(".")]),e._v(" "),t("p",[e._v("These are outlined in the respective "),t("code",[e._v("TYPE")]),e._v(" or "),t("code",[e._v("SUBTYPE")]),e._v(" definitions above where appropriate.")]),e._v(" "),t("h2",{attrs:{id:"return-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-data"}},[e._v("#")]),e._v(" Return data")]),e._v(" "),t("p",[e._v("All price data is supplied by the Oracle as "),t("code",[e._v("actualPrice * (10 ^ 18)")]),e._v(" to standardise\ndecimal removal, and allow integer calculations in smart contracts.")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Based on the currently implemented API functionality, some examples are as follows:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("BTC.GBP.PR.AVG")]),e._v(": average BTC/GBP price, calculated from all supported exchanges over\nthe last hour.")]),e._v(" "),t("li",[t("code",[e._v("ETH.USD.PR.AVI")]),e._v(": average ETH/USD price, calculated from all supported exchanges\nover the last hour, removing outliers (extremely high/low values) from the calculation.")]),e._v(" "),t("li",[t("code",[e._v("ETH.USD.PR.AVI.24H")]),e._v(": average ETH/USD price, calculated from all supported exchanges\nover the last 24 hours, removing outliers (extremely high/low values) from the calculation.")]),e._v(" "),t("li",[t("code",[e._v("COOL.WETH.AD")]),e._v(": adhoc request for COOL/WETH pair. Will query DEXs for current price and return the mean price.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);