<template><div><h1 id="enterprise-fund-example" tabindex="-1"><a class="header-anchor" href="#enterprise-fund-example" aria-hidden="true">#</a> Enterprise FUND Example</h1>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul></ul></nav>
<p>Raise purchase order:</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Enterprise Purchase Orders are raised using <code v-pre>nund</code></p>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx enterprise purchase 1002000000000nund --from wrktest --gas=auto --gas-adjustment=1.15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>List purchase orders:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query enterprise get-all-pos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>get specific purchase order:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query enterprise get 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Query total locked enterprise FUND</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query enterprise total-locked
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Query locked enterprise FUND for an account</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query enterprise locked [address]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
