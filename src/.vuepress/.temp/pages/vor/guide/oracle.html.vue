<template><div><h1 id="vor-running-an-oracle" tabindex="-1"><a class="header-anchor" href="#vor-running-an-oracle" aria-hidden="true">#</a> VOR Running an Oracle</h1>
<p>The VOR Oracle software monitors the <code v-pre>VORCoordinator</code> smart contract for
emitted events, and acts on those events to generate random numbers and the
required proof, before sending the data back to <code v-pre>VORCoordinator</code>.</p>
<p>Running a VOR Provider Oracle is quick and easy, and this guide will run
you through getting set up as a VOR Provider.</p>
<p>The software is comprised of two applications:</p>
<ol>
<li><code v-pre>oracle</code> - the server application</li>
<li><code v-pre>oraclecli</code> - the CLI tool for <code v-pre>oracle</code> server administration</li>
</ol>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>This guide uses Linux as the platform for running a VOR Oracle. The software
has been tested on Ubuntu and CentOS distros. It assumes your system has some
basic applications installed such as <code v-pre>git</code>, <code v-pre>curl</code>, <code v-pre>nano</code> and <code v-pre>make</code> etc.</p>
<p>Depending on your database backend of choice, you will also need either
<strong>SQLite</strong> or <strong>PostgreSQL</strong> installing on your host.</p>
<p><strong>Note:</strong> SQLite recommended mainly for dev/testing</p>
<h2 id="download-pre-build-binaries" tabindex="-1"><a class="header-anchor" href="#download-pre-build-binaries" aria-hidden="true">#</a> Download pre-build binaries</h2>
<p>The latest pre-built (linux) release can be downloaded from
<a href="https://github.com/unification-com/xfund-vor/releases" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/xfund-vor/releases<ExternalLinkIcon/></a></p>
<p>A SHA256 <code v-pre>checksum.txt</code> is supplied with the archive. Download it to
the same location as the archive, and check:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ sha256sum --check checksum.txt 
vor-oracle_linux_v0.1.1.tar.gz: OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compile-from-source" tabindex="-1"><a class="header-anchor" href="#compile-from-source" aria-hidden="true">#</a> Compile from source</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>You will require <strong>Golang</strong> to compile from source - the latest version can be
installed by following the <a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">official instructions<ExternalLinkIcon/></a>.</p>
</div>
<p>Clone the repo:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone -b <span class="token punctuation">[</span>latest-release-tag<span class="token punctuation">]</span> https://github.com/unification-com/xfund-vor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>E.g.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone -b v0.1.0 https://github.com/unification-com/xfund-vor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The <code v-pre>[latest-release-tag]</code> can be found at
<a href="https://github.com/unification-com/xfund-vor/releases" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/xfund-vor/releases<ExternalLinkIcon/></a></p>
</div>
<p>Then compile the binaries using the <code v-pre>make install</code> target:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> xfund-vor
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This will install the <code v-pre>oracle</code> and <code v-pre>oraclecli</code> binaries in your <code v-pre>$GOPATH/bin</code></p>
<p>Alternatively, run the <code v-pre>build</code> target:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> xfund-vor/oracle
<span class="token function">make</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>which will compile the binaries to <code v-pre>xfund-vor/oracle/build</code> and
<code v-pre>xfund-vor/oracle-cli/build</code></p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>The <code v-pre>oracle</code> requires a <code v-pre>config.json</code> file, which will contain all the
information it needs to run. By default it will look for <code v-pre>config.json</code> in
the same directory as the <code v-pre>oracle</code> binary, but the location can be set
at runtime with the <code v-pre>-c</code> flag.</p>
<p>Create your <code v-pre>config.json</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token environment constant">$HOME</span>/vor
<span class="token function">nano</span> <span class="token environment constant">$HOME</span>/vor/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"contract_address"</span><span class="token operator">:</span> <span class="token string">"0x00....."</span><span class="token punctuation">,</span>
  <span class="token property">"blockhash_store_address"</span><span class="token operator">:</span> <span class="token string">"0x123..."</span><span class="token punctuation">,</span>
  <span class="token property">"eth_http_host"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:8545"</span><span class="token punctuation">,</span>
  <span class="token property">"eth_ws_host"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:8545"</span><span class="token punctuation">,</span>
  <span class="token property">"network_id"</span><span class="token operator">:</span> <span class="token number">696969</span><span class="token punctuation">,</span>
  <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">8446</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"first_block"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"keystorage"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"file"</span><span class="token operator">:</span> <span class="token string">"/home/username/vor/keystore.json"</span><span class="token punctuation">,</span>
    <span class="token property">"account"</span><span class="token operator">:</span> <span class="token string">"oracle"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"gas_limit"</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span>
  <span class="token property">"max_gas_price"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token property">"wait_confirmations"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"database"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dialect"</span><span class="token operator">:</span> <span class="token string">"sqlite"</span><span class="token punctuation">,</span>
    <span class="token property">"storage"</span><span class="token operator">:</span> <span class="token string">"/home/username/vor/oracle.db"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The config options are as follows:</p>
<ul>
<li><code v-pre>contract_address</code> - the address of the <code v-pre>VORCoordinator</code> smart contract. See
<a href="https://vor.unification.io/contracts.html" target="_blank" rel="noopener noreferrer">contracts<ExternalLinkIcon/></a>.</li>
<li><code v-pre>blockhash_store_address</code> - the address of the <code v-pre>BlockHashStore</code> smart contract. See
<a href="https://vor.unification.io/contracts.html" target="_blank" rel="noopener noreferrer">contracts<ExternalLinkIcon/></a>.</li>
<li><code v-pre>eth_http_host</code> - HTTP(S) host for your Eth provider. E.g. Infura</li>
<li><code v-pre>eth_ws_host</code> - WS(S) host for your Eth provider. E.g. Infura</li>
<li><code v-pre>network_id</code> - Eth network ID, e.g. 1 = mainnet, 4 = Rinkeby etc.</li>
<li><code v-pre>serve.host</code> - host to serve the <code v-pre>oracle</code> on. This is used by the <code v-pre>oracle-cli</code>
tool, and should not be publicly exposed. Default <code v-pre>0.0.0.0</code></li>
<li><code v-pre>serve.port</code> - port to serve the <code v-pre>oracle</code> on. This is used by the <code v-pre>oracle-cli</code>
tool, and should not be publicly exposed. Default <code v-pre>8445</code></li>
<li><code v-pre>first_block</code> - default first block to scan the contract from. Should be
a value near to the block your oracle will do it's first run from. Only used
when the oracle first connects. Default <code v-pre>1</code></li>
<li><code v-pre>keystorage.file</code> - path to the <code v-pre>keystore</code> which will contain your encrypted
private key and other runtime info. It will be created on the oracle's first
run if one does not exist. Default <code v-pre>./keystore.json</code></li>
<li><code v-pre>keystore.account</code> - account name used to identify the private key. Set on
first run.</li>
<li><code v-pre>gas_limit</code> - gas units limit for fulfilling a request. Default <code v-pre>500000</code></li>
<li><code v-pre>max_gas_price</code> - max gas price in gwei you are willing to pay to fulfil a request.
Gas price is estimated with each fulfillment Tx, but will be capped at this value. Default <code v-pre>150</code></li>
<li><code v-pre>wait_confirmations</code> - number of block confirmations to wait before fulfilling a request. Default <code v-pre>10</code></li>
<li><code v-pre>database.dialect</code> - <code v-pre>postgres</code> or <code v-pre>sqlite</code>. Default <code v-pre>sqlite</code></li>
<li><code v-pre>database.storage</code> - (<code v-pre>sqlite</code> only) - path to the DB file. It will be created on the oracle's first
run if one does not exist. Default <code v-pre>./oracle.db</code></li>
<li><code v-pre>database.host</code> - (<code v-pre>postgres</code> only) - DB host IP/name</li>
<li><code v-pre>database.port</code> - (<code v-pre>postgres</code> only) - DB Port</li>
<li><code v-pre>database.user</code> - (<code v-pre>postgres</code> only) - DB username</li>
<li><code v-pre>database.password</code> - (<code v-pre>postgres</code> only) - DB password</li>
<li><code v-pre>database.database</code> - (<code v-pre>postgres</code> only) - DB name</li>
</ul>
<h2 id="first-run" tabindex="-1"><a class="header-anchor" href="#first-run" aria-hidden="true">#</a> First run</h2>
<p>The first time <code v-pre>oracle</code> is run, it will prompt for some input to further
configure the environment.</p>
<p>Start the <code v-pre>oracle</code>, assuming <code v-pre>config.json</code> has been saved to
<code v-pre>$HOME/vor/config.json</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/path/to/oracle start -c <span class="token environment constant">$HOME</span>/vor/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will be asked for:</p>
<ol>
<li>Username - this will be used as the account name in <code v-pre>keystore.json</code>,
and should be entered as the value for <code v-pre>keystore.account</code> in <code v-pre>config.json</code></li>
<li>Fee - your initial xFUND fee, for example 100000000 will be 0.1 xFUND</li>
<li>Add existing key/Create a new key - you can either import an existing
Eth private key, or have the <code v-pre>oracle</code> create a new one for you.</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you elect to have the <code v-pre>oracle</code> generate a new private key for you, you
will need to manually register your key with <code v-pre>VORCOOrdinator</code>.</p>
</div>
<p>You need to ensure the wallet address has sufficient Eth to
send the <code v-pre>registerProvingKey</code> transaction to <code v-pre>VORCOOrdinator</code>. If you
opted for importing an existing key, this process is automatically run
for you, and your key will be registered on the <code v-pre>oracle</code>'s first run.</p>
<p>Once complete, you should see something along the lines of:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># some info about your config and key...</span>

Your daemon api key:   rkf<span class="token punctuation">..</span><span class="token punctuation">..</span>.

Use this key to login via cli/HTTP <span class="token punctuation">(</span>command: oracle-cli settings<span class="token punctuation">)</span>
KEEP THIS KEYS SAFE<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>It is important to key the <strong>daemon api key</strong> safe, as this is used to start
the oracle, and access its api via the <code v-pre>oraclecli</code>. The <code v-pre>oracle</code> also uses
it to encrypt/decrypt your <code v-pre>keystore</code>.</p>
<p>It is also advisable to backup the <code v-pre>keystore.json</code> file.</p>
</div>
<p>Finally, it will ask you to enter the <strong>api key</strong> previously output in order to start running
the <code v-pre>oracle</code>.</p>
<p>The <code v-pre>oracle</code> can be stopped with CTRL+C, or the safer api method:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/path/to/oraclecli stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which will signal the <code v-pre>oracle</code> to stop via its API.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>oraclecli</code> has its own configuration file, which will be covered later
in this guide.</p>
</div>
<h2 id="running-the-oracle" tabindex="-1"><a class="header-anchor" href="#running-the-oracle" aria-hidden="true">#</a> Running the Oracle</h2>
<p>Once configured, the <code v-pre>oracle</code> can be run using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/path/to/oracle start -c <span class="token environment constant">$HOME</span>/vor/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will prompt for the <strong>api key</strong> which was output for oyu during the first run.</p>
<p>Optionally, the key can be passed to the <code v-pre>oracle</code> using the <code v-pre>-k</code> flag. It can be
passed as either the key itself in plaintext (not recommended outside of testing), or
as a filepath to a file containing the password.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/path/to/oracle start -c <span class="token environment constant">$HOME</span>/vor/config.json -k /path/to/password/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which is useful if running the <code v-pre>oracle</code> as a service using <code v-pre>systemd</code>.</p>
<h3 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h3>
<p><code v-pre>-v</code>: Output <code v-pre>oracle</code> version info and exit:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oracle -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-k</code>: Pass the keystore decryption key as a filepath or plaintext key:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oracle start -k /path/to/password/file
oracle start -k fg1acljv8int8g5hutc3cr2kk24lpg2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>-c</code>: Pass the filepath to <code v-pre>config.json</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oracle start -c /home/user/vor/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="running-the-oracle-as-a-service" tabindex="-1"><a class="header-anchor" href="#running-the-oracle-as-a-service" aria-hidden="true">#</a> Running the oracle as a service</h3>
<p>It is recommended to run the <code v-pre>oracle</code> as a background service, for example using
<code v-pre>systemd</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/vor_oracle.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
Description=VOR Provider Oracle

[Service]
User=USERNAME
Group=USERNAME
WorkingDirectory=/home/USERNAME
ExecStart=/home/USERNAME/go/bin/oracle start -c /path/to/config.json -k /path/to/decrypt/pass

[Install]
WantedBy=default.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl start vor_oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oraclecli" tabindex="-1"><a class="header-anchor" href="#oraclecli" aria-hidden="true">#</a> oraclecli</h2>
<p>The <code v-pre>oraclecli</code> acts as a client to run administrative tasks on the <code v-pre>oracle</code> daemon.
It allows an <code v-pre>oracle</code> operator to change their fees, withdraw earned fees from
<code v-pre>VORCoordinator</code>, stop the <code v-pre>oracle</code>, and query your fees and withdrawable xFUND.</p>
<h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> help</h3>
<p>Outputs a list of commands</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> settings</h3>
<p>The <code v-pre>settings</code> command allows you to set the configuration options for the CLI.
Configuration is stored in <code v-pre>$HOME/.oracle-cli_settings.json</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can configure the host &amp; port the CLI will use to communicate with a running <code v-pre>oracle</code>
and should equate to the values used in your <code v-pre>oracle</code>'s <code v-pre>config.json</code></p>
<p>You can also set the <strong>api key</strong> which the CLI will need to authenticate when
communicating with the <code v-pre>oracle</code>. This is the same as you use to start the <code v-pre>oracle</code></p>
<h3 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> about</h3>
<p>Outputs data about your <code v-pre>oracle</code>, such as your <code v-pre>keyHash</code>, wallet address, IP/PORT etc.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli about
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="changefee" tabindex="-1"><a class="header-anchor" href="#changefee" aria-hidden="true">#</a> changefee</h3>
<p>Allows you to change the base fee for fulfilling requests. The base fee is used
for all consumers for whom you have not set a granular fee.</p>
<p>Fee should be <code v-pre>amount * 10^9</code>, for example, if you want a fee of 0.2 xFUND,
enter 200000000.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli changefee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="changegranularfee" tabindex="-1"><a class="header-anchor" href="#changegranularfee" aria-hidden="true">#</a> changegranularfee</h3>
<p>Allows you to change the fee for fulfilling requests at a granular level for
a particular consumer contract address. This allows you to set fees dependent on the
Tx cost for fulfilling requests, and thus higher fees for more expensive consumer contracts.</p>
<p>Fee should be <code v-pre>amount * 10^9</code>, for example, if you want a fee of 0.2 xFUND,
enter 200000000.</p>
<p>You will additionally be prompted for the contract address you are
applying the granular fee to.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli changegranularfee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="queryfees" tabindex="-1"><a class="header-anchor" href="#queryfees" aria-hidden="true">#</a> queryfees</h3>
<p>Query the fees you have currently set. Optionally pass a consumer contract address
to query fees at a granular level. If you have not set a granular fee for the input
contract address, or do not input a contract address, the base fee will be returned.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli queryfees
oraclecli queryfees 0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queryrequests" tabindex="-1"><a class="header-anchor" href="#queryrequests" aria-hidden="true">#</a> queryrequests</h3>
<p>Query all randomness requests in the database, that match optional filters. Returns
a JSON object.</p>
<p>Status filters:
The <code v-pre>--status</code> | <code v-pre>-s</code> flag accepts the following:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-1 = no filter, return all results (default)
0  = unknown status
1  = request initialised
2  = fulfill tx sent
3  = failed to fulfil
4  = fulfillment succeeded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Examples:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli queryrequests --page<span class="token operator">=</span><span class="token number">2</span> --limit<span class="token operator">=</span><span class="token number">20</span>
oraclecli queryrequests --status<span class="token operator">=</span><span class="token number">3</span>
oraclecli queryrequests --order<span class="token operator">=</span>asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="querywithdrawable" tabindex="-1"><a class="header-anchor" href="#querywithdrawable" aria-hidden="true">#</a> querywithdrawable</h3>
<p>Query the amount of fees you have accumulated, and are currently held by the
<code v-pre>VORCoordinator</code>. You can withdraw these at any time.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli querywithdrawable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="register" tabindex="-1"><a class="header-anchor" href="#register" aria-hidden="true">#</a> register</h3>
<p>Register a new proving key with <code v-pre>VORCoordinator</code>. You will need to run this, for example
if you change key, or have generated a new key on the <code v-pre>oracle</code>'s first run.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop</h3>
<p>Stops the <code v-pre>oracle</code> daemon.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="withdraw" tabindex="-1"><a class="header-anchor" href="#withdraw" aria-hidden="true">#</a> withdraw</h3>
<p>Withdraw any accumulated tokens held by the <code v-pre>VORCoordinator</code> to the selected
recipient address. The recipient can be your Oracle's wallet address, or any other
beneficiary you choose.</p>
<p>Withdrawal amount should be <code v-pre>amount * 10^9</code>, for example, if you wish to withdraw
2 xFUND, enter 2000000000. The amount must not exceed the value output by the
<code v-pre>querywithdrawable</code> command.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli withdraw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3>
<p>Output <code v-pre>oraclecli</code>'s version information</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="analytics" tabindex="-1"><a class="header-anchor" href="#analytics" aria-hidden="true">#</a> analytics</h3>
<p>Run some basic analytics to return gas, gas price, costs and fee statistics.
Pass the number of successful requests you want to analyse, for example 100
to analyse the last 100 successful fulfillments.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli analytics <span class="token number">100</span>
oraclecli analytics <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="analytics-sim" tabindex="-1"><a class="header-anchor" href="#analytics-sim" aria-hidden="true">#</a> analytics sim</h3>
<p>Pass simulation values for gas price and fees using the <code v-pre>--if-gas</code> and <code v-pre>--if-fees</code>
flags respectively. These will be applied to the analytics results in place of
the real values to see what costs/fees would be like with these simulated values.</p>
<p>use the <code v-pre>[num_to_analyse]</code> arg to limit the number of requests to analyse.</p>
<p>The <code v-pre>--consumer</code> flag can be used to filter a single consumer contract, which can help
set granular fees for individual consumers.</p>
<p>Example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli analytics sim <span class="token number">1000</span> -g <span class="token number">150</span> -f <span class="token number">0.05</span>
oraclecli analytics sim <span class="token number">200</span> --if-gas<span class="token operator">=</span><span class="token number">150</span> --if-fees<span class="token operator">=</span><span class="token number">0.1</span>
oraclecli analytics sim <span class="token number">200</span> --if-gas<span class="token operator">=</span><span class="token number">100</span> --if-fees<span class="token operator">=</span><span class="token number">0.05</span> --consumer<span class="token operator">=</span>0x232AbC<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="analytics-consumers" tabindex="-1"><a class="header-anchor" href="#analytics-consumers" aria-hidden="true">#</a> analytics consumers</h3>
<p>Run some analytics to return gas, gas price, costs and fee statistics
for all contracts served. Results are grouped by each consumer contract.</p>
<p>Optional [consumer_address] can be passed to filter by that address</p>
<p>Example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oraclecli analytics consumers
oraclecli analytics consumers 0x1234AbcD<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
