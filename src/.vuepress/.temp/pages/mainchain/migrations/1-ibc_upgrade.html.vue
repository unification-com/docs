<template><div><h1 id="network-upgrade-1-ibc" tabindex="-1"><a class="header-anchor" href="#network-upgrade-1-ibc" aria-hidden="true">#</a> Network Upgrade: 1-ibc</h1>
<div class="custom-container danger"><p class="custom-container-title">IMPORTANT: CURRENTLY TestNet ONLY</p>
<p>The upgrade is currently planned for TestNet</p>
<p>The MainNet upgrade will be announced after a successful TestNet upgrade.</p>
</div>
<p>There are two possible methods for upgrading:</p>
<ol>
<li>Automatically, using Cosmovisor (recommended)</li>
<li>Manually</li>
</ol>
<h2 id="automatically-upgrade-from-und-v1-5-x-to-v1-6-x-using-cosmovisor" tabindex="-1"><a class="header-anchor" href="#automatically-upgrade-from-und-v1-5-x-to-v1-6-x-using-cosmovisor" aria-hidden="true">#</a> Automatically upgrade from und v1.5.x to v1.6.x using Cosmovisor</h2>
<p><strong>IMPORTANT:</strong> This guide assumes the reader has implemented the required changes outlined in
<RouterLink to="/mainchain/migrations/cosmovisor.html">Using Cosmovisor with und: Quick Start</RouterLink> and migrated their services before using this guide.</p>
<h3 id="configuring-cosmovisor" tabindex="-1"><a class="header-anchor" href="#configuring-cosmovisor" aria-hidden="true">#</a> Configuring Cosmovisor</h3>
<p>The following can be implemented well in advance of the actual upgrade occurring, which will allow
for a completely automated upgrade.</p>
<p><strong>IMPORTANT</strong> During the upgrade, <code v-pre>cosmovisor</code> will automatically do a full backup of the <code v-pre>.und_mainchain/data</code>
directory. Ensure your host has adequate disk space to accommodate the backup. This may add significant time
to the upgrade process, and as such, the process may take up to 30 minutes before the node comes back online.</p>
<ol>
<li>Create the Cosmovisor <code v-pre>1-ibc</code> upgrade directory</li>
</ol>
<p>This will be dependent on how you configured <code v-pre>cosmovisor</code>, and your actual <code v-pre>.und_mainchain</code> path</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/upgrades/1-ibc/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Download the latest <code v-pre>und</code> v1.6.x and add to Cosmovisor's <code v-pre>upgrades/1-ibc/bin</code> directory</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/tmp/1-ibc <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/tmp/1-ibc
<span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/v1.6.1/und_v1.6.1_linux_x86_64.tar.gz
<span class="token function">tar</span> -zxvf und_v1.6.1_linux_x86_64.tar.gz
<span class="token function">mv</span> und <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/upgrades/1-ibc/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The directory structure for <code v-pre>$HOME/.und_mainchain/cosmovisor</code> should now look as follows:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── current -> /path/to/.und_mainchain/cosmovisor/genesis
├── genesis
│   └── bin
│       └── und
├── UND_COSMOVISOR_ENV
└── upgrades
    └── 1-ibc
        └── bin
            └── und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Check the version is 1.6.1</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/upgrades/1-ibc/bin/und version --log_level <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That's it! Once the upgrade height specified in the governance proposal is reached, Cosmovisor and the <code v-pre>upgrade</code>
module will handle the rest automatically.</p>
<h3 id="cosmovisor-upgrade-process-overview" tabindex="-1"><a class="header-anchor" href="#cosmovisor-upgrade-process-overview" aria-hidden="true">#</a> Cosmovisor Upgrade process overview</h3>
<p>Briefly, at the upgrade height, Cosmovisor will automatically:</p>
<ol>
<li>Stop the <code v-pre>und</code> v1.5.x binary</li>
<li>Backup <code v-pre>.und_mainchain/data</code> to <code v-pre>.und_mainchain/data-backup-YYYY-M-DD</code></li>
<li>Reconfigure itself to use <code v-pre>und</code> v1.6.x</li>
<li>Restart <code v-pre>und</code> using the new version</li>
</ol>
<h2 id="manual-upgrade-not-recommended" tabindex="-1"><a class="header-anchor" href="#manual-upgrade-not-recommended" aria-hidden="true">#</a> Manual upgrade (not recommended)</h2>
<p>The alternative to implementing Cosmovisor is to manually upgrade the binary. Once the upgrade height specified in the
governance proposal is reached, the <code v-pre>upgrade</code> module will automatically halt the node via a <code v-pre>panic</code>. The node operator
will then need to:</p>
<ol>
<li>Stop the <code v-pre>und</code> v1.5.x binary, via <code v-pre>systemd</code> or their chosen method</li>
<li>Backup the <code v-pre>und_mainchain/data</code> directory</li>
<li>Download and install the latest <code v-pre>und</code> v1.6.x, replacing the old v1.5.x binary (for example in <code v-pre>/usr/local/bin</code>)</li>
<li>Restart the <code v-pre>und</code> binary, via <code v-pre>systemd</code> or their chosen method.</li>
</ol>
<p>Since the process involves manual intervention, monitoring and execution, the process may take longer.</p>
</div></template>
