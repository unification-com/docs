<template><div><h1 id="ooo-data-api-guide" tabindex="-1"><a class="header-anchor" href="#ooo-data-api-guide" aria-hidden="true">#</a> OoO Data API Guide</h1>
<p>This guide covers the supported data offered by the Finchains OoO API, which is available
as a data request via the xFUND Router network.</p>
<h2 id="data-providers" tabindex="-1"><a class="header-anchor" href="#data-providers" aria-hidden="true">#</a> Data Providers</h2>
<p>See <RouterLink to="/ooo/providers.html">Providers</RouterLink> for a list of Oracles providing data for both Mainnet and Rinkeby,
along with their associated fees and wallet addresses.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>OoO data providers may wait for 2 - 3 or more block confirmations before processing a request. Depending
on network congestion and gas prices, it may therefore take up to a minute or more for data to be sent to your
smart contract from the time your request Tx was received by the provider oracle.</p>
</div>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Data is acquired via the OoO API using dot-separated strings to define the desired data - for example
&quot;Average BTC/USD Price over 24 hours, with outliers removed&quot; would be requested using
<code v-pre>BTC.USD.PR.AVI.24H</code>.</p>
<p>The hex-encoded string is supplied along with the Provider address (as defined above,
depending on Ethereum network) and the <code v-pre>xFUND</code> fee as parameters to your smart contract,
using the <RouterLink to="/ooo/guide/implementation.html#_3-1-requestdata">requestdata</RouterLink> function you defined.</p>
<p>The Finchains OoO Data Provider picks up this request, and supplies the data via the
<RouterLink to="/ooo/guide/implementation.html#_3-2-recievedata">recievedata</RouterLink> function you defined.</p>
<h2 id="request-string-format" tabindex="-1"><a class="header-anchor" href="#request-string-format" aria-hidden="true">#</a> Request String Format</h2>
<p>The request format follows <code v-pre>BASE.TARGET.TYPE.SUBTYPE[.SUPP1][.SUPP2][.SUPP3]</code></p>
<p><code v-pre>BASE</code>, <code v-pre>TARGET</code>, and <code v-pre>TYPE</code> are all required parameters. <code v-pre>SUBTYPE</code> is required for type <code v-pre>PR</code></p>
<div class="custom-container tip"><p class="custom-container-title">NOTE</p>
<p>The data request string should be converted to a <code v-pre>Bytes32</code> (Hex) value before submitting it to
your smart contract's request function, for example:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> endpoint <span class="token operator">=</span> web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">asciiToHex</span><span class="token punctuation">(</span><span class="token string">"BTC.USD.PR.AVI"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h3 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> BASE</h3>
<p>The three or four-letter code for the base currency for which the price will be returned,
e.g. <code v-pre>BTC</code> (Bitcoin), <code v-pre>ETH</code> (Ether) etc.</p>
<h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> TARGET</h3>
<p>The three or four-letter code for the target currency in which to return the
price, e.g. <code v-pre>GBP</code>, <code v-pre>USD</code></p>
<p>A full list of supported currency <code v-pre>BASE</code>/<code v-pre>TARGET</code> pairs is available from
the <a href="https://crypto.finchains.io/api/pairs" target="_blank" rel="noopener noreferrer">Finchains API<ExternalLinkIcon/></a>. Supported pairs specific
to each exchange are linked below.</p>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> TYPE</h3>
<p>The code for the data point being requested, for example <code v-pre>PR</code> etc.
The currently implemented types are as follows:</p>
<ul>
<li><code v-pre>PR</code></li>
<li><code v-pre>AD</code></li>
</ul>
<h3 id="type-pr" tabindex="-1"><a class="header-anchor" href="#type-pr" aria-hidden="true">#</a> TYPE: <code v-pre>PR</code></h3>
<p>Price, calculated using all available exchange data for the selected pair. See <code v-pre>SUBTYPE</code>s for supported
query endpoints.</p>
<h3 id="type-ad" tabindex="-1"><a class="header-anchor" href="#type-ad" aria-hidden="true">#</a> TYPE: <code v-pre>AD</code></h3>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>This <code v-pre>TYPE</code> endpoint is currently in <strong>beta</strong> testing and as such is currently only processed by
the Rinkeby testnet OoO provider</p>
</div>
<p>Adhoc data requests for pairs not yet supported by Finchains. There are currently no <code v-pre>SUBTYPE</code>s for <code v-pre>AD</code>
endpoint <code v-pre>TYPE</code>s.</p>
<p>The OoO provider will <strong>attempt</strong> to query supported DEXs' subgraphs to determine whether the <code v-pre>BASE</code> and <code v-pre>TARGET</code> symbols
are known to the DEX, and also whether the DEX has a liquidity pool representing the pair. If a pair exists, it will
attempt to retrieve the latest price from each DEX before calculating the mean price from all data found.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>If a DEX is aware of more than one token contract address for a given token symbol, the contract address with the
highest transaction count will be used for the query.</p>
</div>
<p>The currently supported DEXs are:</p>
<ul>
<li>Uniswap v2</li>
<li>Uniswap v3</li>
<li>Shibaswap</li>
<li>Sushiswap</li>
<li>Quickswap</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT</p>
<p><code v-pre>BASE</code> and <code v-pre>TARGET</code> are <strong>CaSe SeNsItIvE</strong> for adhoc queries! <code v-pre>XFUND</code> is <strong>not</strong> the same as <code v-pre>xFUND</code>.
<strong>Always check your request endpoints, and that at least one DEX supports the pair before sending a data request!</strong></p>
</div>
<p><strong>Example</strong></p>
<p>The token <code v-pre>JAZZHANDS</code> is not yet tracked by Finchains, but we'd like to acquire the <code v-pre>WETH</code> price for <code v-pre>JAZZHANDS</code>. We know that
<code v-pre>JAZZHANDS/WETH</code> pair is listed on Uniswap v2 and Shibaswap, so we can use the query endpoint:</p>
<p><code v-pre>JAZZHANDS.WETH.AD</code></p>
<p>The OoO provider will pick up the request, and since it is an <code v-pre>AD</code> endpoint <code v-pre>TYPE</code>, will try to find the token contract
addresses for <code v-pre>JAZZHANDS</code> and <code v-pre>WETH</code> instead of querying Finchains' API. From these, it will attempt to discover the
pair contract addresses for the respective DEXs. If a DEX supports the pair, it will query the latest price from all supported
DEXes, and calculate the mean price from all results.</p>
<h3 id="subtype" tabindex="-1"><a class="header-anchor" href="#subtype" aria-hidden="true">#</a> SUBTYPE</h3>
<p>Used with <code v-pre>TYPE</code> endpoint <code v-pre>PR</code>.</p>
<p>The data sub-type, for example <code v-pre>AVG</code> (mean), <code v-pre>AVI</code> (mean with outliers
removed). Some <code v-pre>TYPE</code>s, <em>require</em> additional <code v-pre>SUPPN</code> data in the query. Some may have <em>optional</em> data defined in <code v-pre>SUPPN</code>.</p>
<p>The currently implemented types are as follows:</p>
<ul>
<li><a href="#subtype-avg">AVG</a>: Mean price calculated from all available exchange Oracles</li>
<li><a href="#subtype-avi">AVI</a>: Mean price using <a href="http://www.mathwords.com/o/outlier.htm" target="_blank" rel="noopener noreferrer">Median and Interquartile Deviation Method<ExternalLinkIcon/></a> to remove outliers</li>
<li><a href="#subtype-avp">AVP</a>: Mean price with outliers removed using <a href="https://en.wikipedia.org/wiki/Peirce%27s_criterion" target="_blank" rel="noopener noreferrer">Peirce's criterion<ExternalLinkIcon/></a></li>
<li><a href="#subtype-avc">AVC</a>: Mean price with outliers removed using <a href="https://en.wikipedia.org/wiki/Chauvenet%27s_criterion" target="_blank" rel="noopener noreferrer">Chauvenet's criterion<ExternalLinkIcon/></a></li>
</ul>
<h4 id="subtype-avg" tabindex="-1"><a class="header-anchor" href="#subtype-avg" aria-hidden="true">#</a> SUBTYPE: <code v-pre>AVG</code></h4>
<p><strong>Supported <code v-pre>TYPE</code>s</strong>: <code v-pre>PR</code></p>
<p>Average (Mean) price, calculated from all available exchange data for a given time
period.</p>
<p>The default timespan is 1 Hour. The following supported timespans can be supplied
in <code v-pre>SUPP1</code>:</p>
<ul>
<li><code v-pre>5M</code>: 5 Minutes</li>
<li><code v-pre>10M</code>: 10 Minutes</li>
<li><code v-pre>30M</code>: 30 Minutes</li>
<li><code v-pre>1H</code>: 1 Hour</li>
<li><code v-pre>2H</code>: 2 Hours</li>
<li><code v-pre>6H</code>: 6 Hours</li>
<li><code v-pre>12H</code>: 12 Hours</li>
<li><code v-pre>24H</code>: 24 Hours</li>
<li><code v-pre>48H</code>: 48 Hours</li>
</ul>
<p><strong>Examples</strong></p>
<p><code v-pre>BTC.USD.PR.AGV</code> - Mean BTC/USD price from all available exchanges, using data from the last hour<br>
<code v-pre>BTC.USD.PR.AGV.30M</code> - as above, but data from the last 30 minutes</p>
<h4 id="subtype-avi" tabindex="-1"><a class="header-anchor" href="#subtype-avi" aria-hidden="true">#</a> SUBTYPE: <code v-pre>AVI</code></h4>
<p><strong>Supported <code v-pre>TYPE</code>s</strong>: <code v-pre>PR</code></p>
<p>Average (Mean) price, calculated from all available exchange data for a given time
period, with outliers (very high or very low values) removed form the calculation</p>
<p>The default timespan is 1 Hour. The following supported timespans can be supplied
in <code v-pre>SUPP1</code>:</p>
<ul>
<li><code v-pre>5M</code>: 5 Minutes</li>
<li><code v-pre>10M</code>: 10 Minutes</li>
<li><code v-pre>30M</code>: 30 Minutes</li>
<li><code v-pre>1H</code>: 1 Hour</li>
<li><code v-pre>2H</code>: 2 Hours</li>
<li><code v-pre>6H</code>: 6 Hours</li>
<li><code v-pre>12H</code>: 12 Hours</li>
<li><code v-pre>24H</code>: 24 Hours</li>
<li><code v-pre>48H</code>: 48 Hours</li>
</ul>
<p><code v-pre>BTC.USD.PR.AVI</code> - Mean BTC/USD price with outliers removed, using data from the last hour<br>
<code v-pre>BTC.USD.PR.AVI.30M</code> - as above, but data from the last 30 minutes</p>
<h4 id="subtype-avp" tabindex="-1"><a class="header-anchor" href="#subtype-avp" aria-hidden="true">#</a> SUBTYPE: <code v-pre>AVP</code></h4>
<p><strong>Supported <code v-pre>TYPE</code>s</strong>: <code v-pre>PR</code></p>
<p>Mean price with outliers removed using <a href="https://en.wikipedia.org/wiki/Peirce%27s_criterion" target="_blank" rel="noopener noreferrer">Peirce's criterion<ExternalLinkIcon/></a></p>
<p>The default timespan is 1 Hour. The following supported timespans can be supplied
in <code v-pre>SUPP1</code>:</p>
<ul>
<li><code v-pre>5M</code>: 5 Minutes</li>
<li><code v-pre>10M</code>: 10 Minutes</li>
<li><code v-pre>30M</code>: 30 Minutes</li>
<li><code v-pre>1H</code>: 1 Hour</li>
<li><code v-pre>2H</code>: 2 Hours</li>
<li><code v-pre>6H</code>: 6 Hours</li>
<li><code v-pre>12H</code>: 12 Hours</li>
<li><code v-pre>24H</code>: 24 Hours</li>
<li><code v-pre>48H</code>: 48 Hours</li>
</ul>
<p><code v-pre>BTC.USD.PR.AVP</code> - Mean BTC/USD price with outliers removed, using data from the last hour<br>
<code v-pre>BTC.USD.PR.AVP.30M</code> - as above, but data from the last 30 minutes</p>
<h4 id="subtype-avc" tabindex="-1"><a class="header-anchor" href="#subtype-avc" aria-hidden="true">#</a> SUBTYPE: <code v-pre>AVC</code></h4>
<p><strong>Supported <code v-pre>TYPE</code>s</strong>: <code v-pre>PR</code></p>
<p>Mean price with outliers removed using <a href="https://en.wikipedia.org/wiki/Chauvenet%27s_criterion" target="_blank" rel="noopener noreferrer">Chauvenet's criterion<ExternalLinkIcon/></a></p>
<p>The default timespan is 1 Hour. The following supported timespans can be supplied
in <code v-pre>SUPP1</code>:</p>
<ul>
<li><code v-pre>5M</code>: 5 Minutes</li>
<li><code v-pre>10M</code>: 10 Minutes</li>
<li><code v-pre>30M</code>: 30 Minutes</li>
<li><code v-pre>1H</code>: 1 Hour</li>
<li><code v-pre>2H</code>: 2 Hours</li>
<li><code v-pre>6H</code>: 6 Hours</li>
<li><code v-pre>12H</code>: 12 Hours</li>
<li><code v-pre>24H</code>: 24 Hours</li>
<li><code v-pre>48H</code>: 48 Hours</li>
</ul>
<p>The default value for <code v-pre>dMax</code> (max standard deviations) is 3. A custom threshold can be
supplied as an integer value in <code v-pre>SUPP2</code>.</p>
<div class="custom-container danger"><p class="custom-container-title">Important</p>
<p>If a custom <code v-pre>dMax</code> value is required, then <strong>timespan must also be set in <code v-pre>SUPP1</code></strong></p>
</div>
<p><code v-pre>BTC.USD.PR.AVC</code> - Mean BTC/USD price with outliers removed, using data from the last hour<br>
<code v-pre>BTC.USD.PR.AVC.30M</code> - as above, but data from the last 30 minutes<br>
<code v-pre>BTC.USD.PR.AVC.24H.2</code> - as above, but data from the last 24 hours, with <code v-pre>dMax</code> of 2</p>
<h3 id="supp1" tabindex="-1"><a class="header-anchor" href="#supp1" aria-hidden="true">#</a> SUPP1</h3>
<p>Any supplementary request data, e.g. GDX (coinbase) etc. required for <code v-pre>TYPE.SUBTYPE</code> queries such as <code v-pre>EX.LAT</code>,
or timespan values for <code v-pre>AVG</code> and <code v-pre>AVI</code> calculations etc.</p>
<p>These are outlined in the respective <code v-pre>TYPE</code> or <code v-pre>SUBTYPE</code> definitions above where appropriate.</p>
<h3 id="supp2" tabindex="-1"><a class="header-anchor" href="#supp2" aria-hidden="true">#</a> SUPP2</h3>
<p>Any supplementary request data <em>in addition</em> to <code v-pre>SUPP1</code>, e.g. <code v-pre>GDX</code> (coinbase) etc. required
for comparisons on <code v-pre>TYPE</code>s.</p>
<p>These are outlined in the respective <code v-pre>TYPE</code> or <code v-pre>SUBTYPE</code> definitions above where appropriate.</p>
<h3 id="supp3" tabindex="-1"><a class="header-anchor" href="#supp3" aria-hidden="true">#</a> SUPP3</h3>
<p>Any supplementary request data <em>in addition</em> to <code v-pre>SUPP1</code> and <code v-pre>SUPP2</code>.</p>
<p>These are outlined in the respective <code v-pre>TYPE</code> or <code v-pre>SUBTYPE</code> definitions above where appropriate.</p>
<h2 id="return-data" tabindex="-1"><a class="header-anchor" href="#return-data" aria-hidden="true">#</a> Return data</h2>
<p>All price data is supplied by the Oracle as <code v-pre>actualPrice * (10 ^ 18)</code> to standardise
decimal removal, and allow integer calculations in smart contracts.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<p>Based on the currently implemented API functionality, some examples are as follows:</p>
<ul>
<li><code v-pre>BTC.GBP.PR.AVG</code>: average BTC/GBP price, calculated from all supported exchanges over
the last hour.</li>
<li><code v-pre>ETH.USD.PR.AVI</code>: average ETH/USD price, calculated from all supported exchanges
over the last hour, removing outliers (extremely high/low values) from the calculation.</li>
<li><code v-pre>ETH.USD.PR.AVI.24H</code>: average ETH/USD price, calculated from all supported exchanges
over the last 24 hours, removing outliers (extremely high/low values) from the calculation.</li>
<li><code v-pre>COOL.WETH.AD</code>: adhoc request for COOL/WETH pair. Will query DEXs for current price and return the mean price.</li>
</ul>
</div></template>
