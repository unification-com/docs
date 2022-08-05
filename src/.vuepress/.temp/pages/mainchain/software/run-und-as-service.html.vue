<template><div><h1 id="running-und-as-a-background-service" tabindex="-1"><a class="header-anchor" href="#running-und-as-a-background-service" aria-hidden="true">#</a> Running <code v-pre>und</code> as a background service</h1>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul></ul></nav>
<p>If you intend to run your node as a Validator on any of the public networks, then you will most likely need to
permanently run <code v-pre>und</code> as a background service (as opposed to manually running <code v-pre>und start</code> and leaving a
terminal window/SSH session open).</p>
<p>This can easily be done using <code v-pre>systemctl</code>, and setting up an appropriate service configuration.</p>
<p>The following is a generic *nix guide, and may need adapting for your particular distribution.</p>
<p>Any text editor can be used to create the service configuration file, for example <code v-pre>nano</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/und.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>At a minimum, the service configuration should contain the following, replacing <code v-pre>USERNAME</code> and <code v-pre>FULL_PATH_TO</code>
with your own values:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
Description=Unification Mainchain Validator Node

[Service]
User=USERNAME
Group=USERNAME
WorkingDirectory=/home/USERNAME
ExecStart=/usr/local/bin/und start --home /FULL_PATH_TO/.und_mainchain
LimitNOFILE=4096

[Install]
WantedBy=default.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is entirely possible to create a more sophisticated service definition should you desire.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p><strong>Also see</strong>: <RouterLink to="/mainchain/migrations/cosmovisor.html">Using Cosmovisor with und: Quick Start</RouterLink> for details on running <code v-pre>und</code> with
<code v-pre>cosmovisor</code>.</p>
</div>
<p>Next, inform <code v-pre>systemctl</code> of the new service:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The service can now be started:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and stopped:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in the background.</p>
<p>Finally, you can monitor the log output for the service by running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> journalctl -u und --follow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
