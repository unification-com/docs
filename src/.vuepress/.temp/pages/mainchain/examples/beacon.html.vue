<template><div><h1 id="beacon-example" tabindex="-1"><a class="header-anchor" href="#beacon-example" aria-hidden="true">#</a> BEACON Example</h1>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul></ul></nav>
<p>Register:
und tx beacon register --moniker=beacon1 --name=&quot;Beacon 1&quot; --from wrktest</p>
<p>then run:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query tx [TX HASH]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>this will return the generated Beacon ID integer</p>
<p>Query metadata</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query beacon beacon 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Record Timestamp hash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx beacon record 1 --hash=d04b98f48e8 --subtime=$(date +%s) --from wrktest --gas=auto --gas-adjustment=1.15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Query a Timestamp</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und query beacon timestamp 1 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
