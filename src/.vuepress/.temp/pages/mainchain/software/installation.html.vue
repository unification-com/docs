<template><div><h1 id="installing-the-mainchain-software" tabindex="-1"><a class="header-anchor" href="#installing-the-mainchain-software" aria-hidden="true">#</a> Installing the Mainchain Software</h1>
<p>This documentation outlines how to install the Unification Mainchain software, in
order to participate and interact with any of the Mainchain networks.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#installing-the-latest-release-binaries">Installing the latest release binaries</router-link></li><li><router-link to="#building-from-source">Building from Source</router-link><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#install-go">Install Go</router-link></li><li><router-link to="#build-and-install-the-binaries">Build and install the binaries</router-link></li><li><router-link to="#verify-the-installation">Verify the installation</router-link></li><li><router-link to="#development">Development</router-link></li></ul></li><li><router-link to="#cli-help">CLI Help</router-link></li></ul></nav>
<h2 id="installing-the-latest-release-binaries" tabindex="-1"><a class="header-anchor" href="#installing-the-latest-release-binaries" aria-hidden="true">#</a> Installing the latest release binaries</h2>
<p>The latest pre-compiled binaries are available for download from
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
<h2 id="building-from-source" tabindex="-1"><a class="header-anchor" href="#building-from-source" aria-hidden="true">#</a> Building from Source</h2>
<p>The Mainchain binaries can also be built from source.</p>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>
<p><code v-pre>git</code>, <code v-pre>curl</code> and <code v-pre>make</code> are required to build the binaries. <code v-pre>jq</code> is also useful for quickly looking up
values in <code v-pre>genesis.json</code></p>
<p>These can all be installed via your package manager:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token function">curl</span> <span class="token function">make</span> jq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">git</span> <span class="token function">curl</span> <span class="token function">make</span> jq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="install-go" tabindex="-1"><a class="header-anchor" href="#install-go" aria-hidden="true">#</a> Install Go</h3>
<p><strong>Go 1.16+</strong> is required to build the Mainchain binaries</p>
<p>Install <code v-pre>go</code> by following the <a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">official docs<ExternalLinkIcon/></a>.
Once Go is installed, set your <code v-pre>$PATH</code> environment variable:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/go/bin
$ <span class="token builtin class-name">echo</span> <span class="token string">"export PATH=<span class="token environment constant">$PATH</span>:<span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOPATH<span class="token variable">)</span></span>/bin"</span> <span class="token operator">>></span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build-and-install-the-binaries" tabindex="-1"><a class="header-anchor" href="#build-and-install-the-binaries" aria-hidden="true">#</a> Build and install the binaries</h3>
<div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p>
<p>unless you are contributing to Mainchain development, it is recommended you checkout and build from the latest release
tag and <strong>not</strong> the <code v-pre>master</code> branch if you intend to connect to a live, public network (e.g. TestNet/MainNet).</p>
</div>
<p>Download the <strong>latest</strong> tagged Mainchain release from
<a href="https://github.com/unification-com/mainchain/releases" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/mainchain/releases<ExternalLinkIcon/></a></p>
<p>The <strong><code v-pre>[latest-release-tag]</code></strong> required for the command below can also be obtained by running:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> --silent <span class="token string">"https://api.github.com/repos/unification-com/mainchain/releases/latest"</span> <span class="token operator">|</span> <span class="token function">grep</span> -Po <span class="token string">'"tag_name": "\K.*?(?=")'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone -b <span class="token punctuation">[</span>latest-release-tag<span class="token punctuation">]</span> https://github.com/unification-com/mainchain
$ <span class="token builtin class-name">cd</span> mainchain
$ <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will install the two binaries <code v-pre>und</code> and <code v-pre>und</code> into your <code v-pre>$HOME/go/bin</code></p>
<h3 id="verify-the-installation" tabindex="-1"><a class="header-anchor" href="#verify-the-installation" aria-hidden="true">#</a> Verify the installation</h3>
<p>Run the following commands:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ und version --long
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If they have installed correctly, you should see output similar to the following:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>name: UndMainchain
server_name: und
version: <span class="token number">1.5</span>.1
commit: 8bbd2b3dabebf8186c19b452f5331071f79e48f1
build_tags: netgo
go: go version go1.16.2 linux/amd64
build_deps:
- github.com/99designs/keyring@v1.1.6 <span class="token operator">=</span><span class="token operator">></span> github.com/cosmos/keyring@v1.1.7-0.20210622111912-ef00f8ac3d76
- github.com/ChainSafe/go-schnorrkel@v0.0.0-20200405005733-88cbf1b4c40d
- <span class="token punctuation">..</span>. SNIP <span class="token punctuation">..</span>.
cosmos_sdk_version: v0.42.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h3>
<p>The included Mainchain <RouterLink to="/mainchain/software/local-devnet.html">DevNet</RouterLink> network can be used for development and testing of new features and
bug fixes locally. To build the binaries for testing without installing, run:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will output the binaries to the <code v-pre>./build</code> directory located in the repository root.</p>
<p>See the <RouterLink to="/mainchain/networks/devnet/local-devnet-docker.html">DevNet</RouterLink> docs for more information about running <strong>DevNet</strong>.</p>
<h2 id="cli-help" tabindex="-1"><a class="header-anchor" href="#cli-help" aria-hidden="true">#</a> CLI Help</h2>
<p>Both the <code v-pre>und</code> and <code v-pre>und</code> commands can have the <code v-pre>--help</code> flag passed
to output details on what commands are available, and flags enabled for that
command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Likewise, the <code v-pre>--help</code> flag can be passed to subcommands, for example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>und query wrkchain --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> Next</h4>
<p>Running <RouterLink to="/mainchain/networks/devnet/local-devnet-docker.html">Devnet</RouterLink>, joining <RouterLink to="/mainchain/networks/join-network.html">a network</RouterLink></p>
</div></template>
