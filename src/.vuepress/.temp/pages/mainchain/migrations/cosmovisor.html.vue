<template><div><h1 id="using-cosmovisor-with-und-quick-start" tabindex="-1"><a class="header-anchor" href="#using-cosmovisor-with-und-quick-start" aria-hidden="true">#</a> Using Cosmovisor with und: Quick Start</h1>
<p><code v-pre>cosmovisor</code> can be used for all node types (sentries, RPCs, seeds etc.), not just validator nodes.</p>
<p>See <a href="https://docs.cosmos.network/v0.44/run-node/cosmovisor.html" target="_blank" rel="noopener noreferrer">Cosmos SDK's Cosmovidor Docs<ExternalLinkIcon/></a> for full documentation.</p>
<p>This is a quick-start guide specifically for getting <code v-pre>und</code> up and running using <code v-pre>cosmovisor</code>. It is
recommended that node operators fully read and understand the official documentation above before proceeding.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The above documentation states that <code v-pre>go get github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor</code> should be run
to install <code v-pre>cosmovisor</code>. However, this is not currently possible due to <a href="https://github.com/cosmos/cosmos-sdk/issues/11305" target="_blank" rel="noopener noreferrer">issue 11305<ExternalLinkIcon/></a>.
As such, this guide directly downloads the <code v-pre>cosmovisor</code> binary from the Cosmos SDK repo. If you prefer to install via <code v-pre>go</code>,
you will need to install <code v-pre>go</code> v1.18, <code v-pre>make</code>, <code v-pre>git</code>, and standard build tools such as <code v-pre>g++</code>, and build <code v-pre>cosmovisor</code> v1.2.0 from source,
ignoring step 1 below.</p>
</div>
<p>This guide assumes the <code v-pre>und</code> binary is running with <code v-pre>systemd</code> and that the user logging in via SSH is a <code v-pre>sudoer</code>. It also
assumes that the <code v-pre>.und_mainchain</code> home directory is the default <code v-pre>$HOME/.und_mainchain</code>.</p>
<h2 id="_1-download-install-cosmovisor" tabindex="-1"><a class="header-anchor" href="#_1-download-install-cosmovisor" aria-hidden="true">#</a> 1. Download &amp; install cosmovisor</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token environment constant">$HOME</span>/tmp <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/tmp
<span class="token function">wget</span> https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.2.0/cosmovisor-v1.2.0-linux-amd64.tar.gz
<span class="token function">tar</span> -zxvf cosmovisor-v1.2.0-linux-amd64.tar.gz
<span class="token function">sudo</span> <span class="token function">mv</span> cosmovisor /usr/local/bin/cosmovisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>: Installing using <code v-pre>go install</code> as per the official guide will install <code v-pre>cosmovisor</code> in <code v-pre>$GOPATH/bin</code> (usually
<code v-pre>$HOME/go/bin</code>) not <code v-pre>/usr/local/bin</code>.</p>
<h2 id="_2-set-up-cosmovisor-dirs" tabindex="-1"><a class="header-anchor" href="#_2-set-up-cosmovisor-dirs" aria-hidden="true">#</a> 2. Set up cosmovisor dirs</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/genesis/bin
<span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/tmp
<span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz
<span class="token function">tar</span> -zxvf und_v1.5.1_linux_x86_64.tar.gz
<span class="token function">mv</span> und <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/genesis/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check the version:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/genesis/bin/und version --log_level<span class="token operator">=</span><span class="token string">""</span>
<span class="token number">1.5</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a <code v-pre>UND_COSMOVISOR_ENV</code> env file for <code v-pre>systemd</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DAEMON_NAME</span><span class="token operator">=</span>und
<span class="token assign-left variable">DAEMON_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/.und_mainchain
<span class="token assign-left variable">DAEMON_RESTART_AFTER_UPGRADE</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Optionally add a value for <code v-pre>DAEMON_RESTART_DELAY</code> (must be in seconds, e.g. <code v-pre>5s</code>)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DAEMON_RESTART_DELAY</span><span class="token operator">=</span>5s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>See <a href="https://github.com/cosmos/cosmos-sdk/blob/main/cosmovisor/README.md#command-line-arguments-and-environment-variables" target="_blank" rel="noopener noreferrer">https://github.com/cosmos/cosmos-sdk/blob/main/cosmovisor/README.md#command-line-arguments-and-environment-variables<ExternalLinkIcon/></a>
for other environment variables.</p>
<h2 id="_3-edit-systemd-service-file" tabindex="-1"><a class="header-anchor" href="#_3-edit-systemd-service-file" aria-hidden="true">#</a> 3. Edit systemd service file</h2>
<p>Stop the service</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemcl stop und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Open the service file in a text editor</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/und.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add the <code v-pre>EnvironmentFile</code> directive to the <code v-pre>[Service]</code> section, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/full/path/to/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Edit the <code v-pre>ExecStart</code> directive, replacing <code v-pre>/usr/local/bin/und</code> with <code v-pre>/usr/local/bin/cosmovisor run</code>, for example:</p>
<p>change</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/und start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/cosmovisor run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you have installed via <code v-pre>go install</code> or built/installed from source, the path might be
something like <code v-pre>/home/centos/go/bin/cosmovisor</code></p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Any flags for <code v-pre>und</code> can be passed the same as previously, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/cosmovisor run start --home /path/to/my/.und_mainchain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h2 id="_4-restart-the-und-service" tabindex="-1"><a class="header-anchor" href="#_4-restart-the-und-service" aria-hidden="true">#</a> 4. restart the und service</h2>
<p>Reload <code v-pre>systemd</code> and start the <code v-pre>und</code> service</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl start und
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Check:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> journalctl -u und -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The logs should be prefixed with <code v-pre>cosmovisor[PID]</code></p>
</div></template>
