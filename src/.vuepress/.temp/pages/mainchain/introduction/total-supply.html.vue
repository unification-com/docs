<template><div><h1 id="total-supply" tabindex="-1"><a class="header-anchor" href="#total-supply" aria-hidden="true">#</a> Total Supply</h1>
<p>The command</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query supply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">amount</span><span class="token punctuation">:</span> <span class="token string">"120486680721900000"</span>
  <span class="token key atrule">denom</span><span class="token punctuation">:</span> nund
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The equivalent REST query is at the enpoint <code v-pre>/mainchain/enterprise/v1/supply</code> - for example:</p>
<ul>
<li>TestNet public REST server <a href="https://rest-testnet.unification.io/mainchain/enterprise/v1/supply" target="_blank" rel="noopener noreferrer">https://rest-testnet.unification.io/mainchain/enterprise/v1/supply<ExternalLinkIcon/></a></li>
<li>MainNet public REST server <a href="https://rest.unification.io/mainchain/enterprise/v1/supply" target="_blank" rel="noopener noreferrer">https://rest.unification.io/mainchain/enterprise/v1/supply<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT!!!</p>
<p>the <code v-pre>/mainchain/enterprise/v1/supply</code> endpoint <strong>MUST</strong> be used instead of <code v-pre>/cosmos/bank/v1beta1/supply</code> to get true
total supply available for general use, i.e. with locked eFUND removed from total</p>
</div>
<p>The command</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query enterprise ent-supply --chain-id<span class="token operator">=</span>CHAIN_ID --node<span class="token operator">=</span>PROTOCOL://NODE_IP:PORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will return the complete supply information.</p>
<p>The equivalent REST query is at the enpoint <code v-pre>/mainchain/enterprise/v1/ent_supply</code> - for example:</p>
<ul>
<li>TestNet public REST server <a href="https://rest-testnet.unification.io/mainchain/enterprise/v1/ent_supply" target="_blank" rel="noopener noreferrer">https://rest-testnet.unification.io/mainchain/enterprise/v1/ent_supply<ExternalLinkIcon/></a></li>
<li>MainNet public REST server <a href="https://rest.unification.io/mainchain/enterprise/v1/ent_supply" target="_blank" rel="noopener noreferrer">https://rest.unification.io/mainchain/enterprise/v1/ent_supply<ExternalLinkIcon/></a></li>
</ul>
<p>Three quantity values are returned, all representing <code v-pre>nund</code>:</p>
<ol>
<li><strong>amount</strong>: Liquid FUND in active circulation, and the actual circulating total supply which is available and can be used for FUND transfers, staking, Tx fees etc. It is the <strong>locked</strong> amount subtracted from <strong>total</strong>. <em>This is the important value when processing any calculations dependent on FUND circulation/total supply of FUND etc.</em></li>
<li><strong>locked</strong>: Total FUND locked through Enterprise purchases. This FUND is only available specifically to pay WRKChain / BEACON fees and <strong>cannot</strong> be used for transfers, staking/delegation or any other transactions. <em>Locked FUND only enters the active circulation supply once it has been used to pay for WRKChain / BEACON fees. Until then, it is considered &quot;dormant&quot;, and <strong>not</strong> part of the circulating total supply</em></li>
<li><strong>total</strong>: The total amount of FUND currently known on the chain, including any Enterprise <strong>locked</strong> FUND. This is for informational purposes only and should not be used for any &quot;circulating/total supply&quot; calculations.</li>
</ol>
<p>The <strong>amount</strong> value is the important value regarding total supply <em>currently in active circulation</em>, and is the information that should be used to represent any &quot;total supply/circulation&quot; values for example in block explorers, wallets, exchanges etc.</p>
<p>Consider the following <code v-pre>und query enterprise ent-supply</code> result:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">supply</span><span class="token punctuation">:</span>
  <span class="token key atrule">amount</span><span class="token punctuation">:</span> <span class="token string">"120010263000000000"</span>
  <span class="token key atrule">denom</span><span class="token punctuation">:</span> nund
  <span class="token key atrule">locked</span><span class="token punctuation">:</span> <span class="token string">"89737000000000"</span>
  <span class="token key atrule">total</span><span class="token punctuation">:</span> <span class="token string">"120100000000000000"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, the equivalent REST query result:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"supply"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"120010263000000000"</span><span class="token punctuation">,</span>
    <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token string">"89737000000000"</span><span class="token punctuation">,</span>
    <span class="token property">"total"</span><span class="token operator">:</span> <span class="token string">"120100000000000000"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, the active circulating supply - usable for transfers and standard transactions etc. - is
currently 120,010,263 FUND. 89,737 FUND is currently locked, and can only be used for paying for WRKChain/BEACON
fees - it is &quot;dormant&quot; and <em>cannot be used for any other purpose until it has been used to pay for WRKChain/BEACON
fees, and therefore <strong>does not count towards total circulating supply</strong></em>. Finally, the total amount of FUND known
on the chain including locked is 120,100,000 FUND, and is the equivalent of 120,010,263 + 89,737.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The REST endpoint <code v-pre>/mainchain/enterprise/v1/supply/nund</code> will return only the appropriate <strong>amount</strong> value, for
example on <strong>TestNet</strong>, <a href="https://rest-testnet.unification.io//mainchain/enterprise/v1/supply/nund" target="_blank" rel="noopener noreferrer">https://rest-testnet.unification.io/mainchain/enterprise/v1/supply/nund<ExternalLinkIcon/></a>
would just return</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"denom"</span><span class="token operator">:</span> <span class="token string">"nund"</span><span class="token punctuation">,</span>
    <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token string">"120486721721900000"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="converting-to-fund" tabindex="-1"><a class="header-anchor" href="#converting-to-fund" aria-hidden="true">#</a> Converting to FUND</h2>
<p>In much the same way that Ethereum uses <code v-pre>wei</code> and Cosmos uses <code v-pre>uatom</code> as the smallest on-chain denomination,
all results for Unification Mainchain return the native on-chain coin denomination values in <code v-pre>nund</code>.
<strong>1,000,000,000 nund == 1 FUND</strong>. As such, simply dividing the result by 1000000000 will yield the FUND value.</p>
<p>See <RouterLink to="/mainchain/introduction/denomination.html">denomination</RouterLink> for further information.</p>
<p>See <RouterLink to="/mainchain/software/und_cmd/und_query_supply.html">und-query-supply</RouterLink> for more details on command flags and parameters.</p>
</div></template>
