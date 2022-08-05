<template><div><p>The latest pre-compiled binaries are available for download from
<a href="https://github.com/unification-com/mainchain/releases" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain/releases<ExternalLinkIcon/></a>.</p>
<ul>
<li>The <code v-pre>und</code> binary has been compiled for Linux, OSX and Windows.</li>
</ul>
<p>Download the latest version:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz
<span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/1.5.1/checksums.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Once downloaded, you can verify the SHA256 checksum against those listed in the release's <code v-pre>checksums.txt</code>, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ openssl dgst -sha256 und_v1.5.1_linux_x86_64.tar.gz
SHA256<span class="token punctuation">(</span>und_v1.5.1_linux_x86_64.tar.gz<span class="token punctuation">)</span><span class="token operator">=</span> <span class="token punctuation">..</span>.12324abcd<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Extract them and copy the binaries to a suitable location - preferably a location in your <code v-pre>$PATH</code> environment variable,
for example <code v-pre>/usr/local/bin</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> -zxvf und_v1.5.1_linux_x86_64.tar.gz
<span class="token function">sudo</span> <span class="token function">mv</span> und /usr/local/bin/und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Once installed, verify:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">which</span> und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>should output:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/usr/local/bin/und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und version --log_level<span class="token operator">=</span><span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output should match the latest release version tag.</p>
</div></template>
