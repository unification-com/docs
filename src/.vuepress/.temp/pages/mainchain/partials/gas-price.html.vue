<template><div><p>It is good practice to set the minimum-gas-prices value in <code v-pre>$HOME/.und_mainchain/config/app.toml</code>, in order to protect
your full node from spam transactions. This should be set as a decimal value in <code v-pre>nund</code>, and the recommended value is
currently <code v-pre>25.0nund</code>. This means your node will ignore any Txs with a gas price below this value. To do so, open
up <code v-pre>$HOME/.und_mainchain/config/app.toml</code> in a text editor, and set <code v-pre>minimum-gas-prices</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> <span class="token environment constant">$HOME</span>/.und_mainchain/config/app.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Change:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To, for example:</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">"25.0nund"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hit <kbd>Ctrl</kbd>+<kbd>X</kbd> followed by <code v-pre>y</code> and then return to save the file and exit nano.</p>
</div></template>
