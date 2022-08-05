<template><div><h1 id="config-toml-reference" tabindex="-1"><a class="header-anchor" href="#config-toml-reference" aria-hidden="true">#</a> <code v-pre>config.toml</code> Reference</h1>
<p>The <code v-pre>$HOME/.und_mainchain/config/config.toml</code> file contains all the configuration options for the <code v-pre>und</code> server binary. Below is a reference for the file.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Any path below can be absolute (e.g. &quot;<code v-pre>/var/myawesomeapp/data</code>&quot;) or
relative to the home directory (e.g. &quot;<code v-pre>data</code>&quot;). The home directory is
&quot;<code v-pre>$HOME/.und_mainchain</code>&quot; by default, but could be changed via or <code v-pre>--home</code> und flag.</p>
</div>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#main-base-config-options">Main base config options</router-link><ul><li><router-link to="#proxy-app">proxy_app</router-link></li><li><router-link to="#moniker">moniker</router-link></li><li><router-link to="#fast-sync">fast_sync</router-link></li><li><router-link to="#db-backend">db_backend</router-link></li><li><router-link to="#db-dir">db_dir</router-link></li><li><router-link to="#log-level">log_level</router-link></li><li><router-link to="#log-format">log_format</router-link></li><li><router-link to="#genesis-file">genesis_file</router-link></li><li><router-link to="#priv-validator-key-file">priv_validator_key_file</router-link></li><li><router-link to="#priv-validator-state-file">priv_validator_state_file</router-link></li><li><router-link to="#priv-validator-laddr">priv_validator_laddr</router-link></li><li><router-link to="#node-key-file">node_key_file</router-link></li><li><router-link to="#abci">abci</router-link></li><li><router-link to="#filter-peers">filter_peers</router-link></li></ul></li><li><router-link to="#rpc">rpc</router-link><ul><li><router-link to="#rpc-laddr">rpc.laddr</router-link></li><li><router-link to="#rpc-cors-allowed-origins">rpc.cors_allowed_origins</router-link></li><li><router-link to="#rpc-cors-allowed-methods">rpc.cors_allowed_methods</router-link></li><li><router-link to="#rpc-cors-allowed-headers">rpc.cors_allowed_headers</router-link></li><li><router-link to="#rpc-grpc-laddr">rpc.grpc_laddr</router-link></li><li><router-link to="#rpc-grpc-max-open-connections">rpc.grpc_max_open_connections</router-link></li><li><router-link to="#rpc-unsafe">rpc.unsafe</router-link></li><li><router-link to="#rpc-max-open-connections">rpc.max_open_connections</router-link></li><li><router-link to="#rpc-max-subscription-clients">rpc.max_subscription_clients</router-link></li><li><router-link to="#rpc-max-subscriptions-per-client">rpc.max_subscriptions_per_client</router-link></li><li><router-link to="#rpc-timeout-broadcast-tx-commit">rpc.timeout_broadcast_tx_commit</router-link></li><li><router-link to="#rpc-max-body-bytes">rpc.max_body_bytes</router-link></li><li><router-link to="#rpc-max-header-bytes">rpc.max_header_bytes</router-link></li><li><router-link to="#rpc-tls-cert-file">rpc.tls_cert_file</router-link></li><li><router-link to="#rpc-tls-key-file">rpc.tls_key_file</router-link></li><li><router-link to="#rpc-pprof-laddr">rpc.pprof_laddr</router-link></li></ul></li><li><router-link to="#p2p">p2p</router-link><ul><li><router-link to="#p2p-laddr">p2p.laddr</router-link></li><li><router-link to="#p2p-external-address">p2p.external_address</router-link></li><li><router-link to="#p2p-seeds">p2p.seeds</router-link></li><li><router-link to="#p2p-persistent-peers">p2p.persistent_peers</router-link></li><li><router-link to="#p2p-upnp">p2p.upnp</router-link></li><li><router-link to="#p2p-addr-book-file">p2p.addr_book_file</router-link></li><li><router-link to="#p2p-addr-book-strict">p2p.addr_book_strict</router-link></li><li><router-link to="#p2p-max-num-inbound-peers">p2p.max_num_inbound_peers</router-link></li><li><router-link to="#p2p-max-num-outbound-peers">p2p.max_num_outbound_peers</router-link></li><li><router-link to="#p2p-unconditional-peer-ids">p2p.unconditional_peer_ids</router-link></li><li><router-link to="#p2p-persistent-peers-max-dial-period">p2p.persistent_peers_max_dial_period</router-link></li><li><router-link to="#p2p-flush-throttle-timeout">p2p.flush_throttle_timeout</router-link></li><li><router-link to="#p2p-max-packet-msg-payload-size">p2p.max_packet_msg_payload_size</router-link></li><li><router-link to="#p2p-send-rate">p2p.send_rate</router-link></li><li><router-link to="#p2p-recv-rate">p2p.recv_rate</router-link></li><li><router-link to="#p2p-pex">p2p.pex</router-link></li><li><router-link to="#p2p-seed-mode">p2p.seed_mode</router-link></li><li><router-link to="#p2p-private-peer-ids">p2p.private_peer_ids</router-link></li><li><router-link to="#p2p-allow-duplicate-ip">p2p.allow_duplicate_ip</router-link></li><li><router-link to="#p2p-handshake-timeout">p2p.handshake_timeout</router-link></li><li><router-link to="#p2p-dial-timeout">p2p.dial_timeout</router-link></li></ul></li><li><router-link to="#mempool">mempool</router-link><ul><li><router-link to="#mempool-recheck">mempool.recheck</router-link></li><li><router-link to="#mempool-broadcast">mempool.broadcast</router-link></li><li><router-link to="#mempool-wal-dir">mempool.wal_dir</router-link></li><li><router-link to="#mempool-size">mempool.size</router-link></li><li><router-link to="#mempool-max-txs-bytes">mempool.max_txs_bytes</router-link></li><li><router-link to="#mempool-cache-size">mempool.cache_size</router-link></li><li><router-link to="#mempool-keep-invalid-txs-in-cache">mempool.keep-invalid-txs-in-cache</router-link></li><li><router-link to="#mempool-max-tx-bytes">mempool.max_tx_bytes</router-link></li><li><router-link to="#mempool-max-batch-bytes">mempool.max_batch_bytes</router-link></li></ul></li><li><router-link to="#statesync">statesync</router-link><ul><li><router-link to="#statesync-enable">statesync.enable</router-link></li><li><router-link to="#statesync-rpc-servers">statesync.rpc_servers</router-link></li><li><router-link to="#statesync-trust-height">statesync.trust_height</router-link></li><li><router-link to="#statesync-trust-hash">statesync.trust_hash</router-link></li><li><router-link to="#statesync-trust-period">statesync.trust_period</router-link></li><li><router-link to="#statesync-discovery-time">statesync.discovery_time</router-link></li><li><router-link to="#statesync-temp-dir">statesync.temp_dir</router-link></li><li><router-link to="#statesync-chunk-request-timeout">statesync.chunk_request_timeout</router-link></li><li><router-link to="#statesync-chunk-fetchers">statesync.chunk_fetchers</router-link></li></ul></li><li><router-link to="#fastsync">fastsync</router-link><ul><li><router-link to="#fastsync-version">fastsync.version</router-link></li></ul></li><li><router-link to="#consensus">consensus</router-link><ul><li><router-link to="#consensus-wal-file">consensus.wal_file</router-link></li><li><router-link to="#consensus-timeout-propose">consensus.timeout_propose</router-link></li><li><router-link to="#consensus-timeout-propose-delta">consensus.timeout_propose_delta</router-link></li><li><router-link to="#consensus-timeout-prevote">consensus.timeout_prevote</router-link></li><li><router-link to="#consensus-timeout-prevote-delta">consensus.timeout_prevote_delta</router-link></li><li><router-link to="#consensus-timeout-precommit">consensus.timeout_precommit</router-link></li><li><router-link to="#consensus-timeout-precommit-delta">consensus.timeout_precommit_delta</router-link></li><li><router-link to="#consensus-timeout-commit">consensus.timeout_commit</router-link></li><li><router-link to="#consensus-double-sign-check-height">consensus.double_sign_check_height</router-link></li><li><router-link to="#consensus-skip-timeout-commit">consensus.skip_timeout_commit</router-link></li><li><router-link to="#consensus-create-empty-blocks">consensus.create_empty_blocks</router-link></li><li><router-link to="#consensus-create-empty-blocks-interval">consensus.create_empty_blocks_interval</router-link></li><li><router-link to="#consensus-peer-gossip-sleep-duration">consensus.peer_gossip_sleep_duration</router-link></li><li><router-link to="#consensus-peer-query-maj23-sleep-duration">consensus.peer_query_maj23_sleep_duration</router-link></li></ul></li><li><router-link to="#tx-index">tx_index</router-link><ul><li><router-link to="#tx-index-indexer">tx_index.indexer</router-link></li></ul></li><li><router-link to="#instrumentation">instrumentation</router-link><ul><li><router-link to="#instrumentation-prometheus">instrumentation.prometheus</router-link></li><li><router-link to="#instrumentation-prometheus-listen-addr">instrumentation.prometheus_listen_addr</router-link></li><li><router-link to="#instrumentation-max-open-connections">instrumentation.max_open_connections</router-link></li><li><router-link to="#instrumentation-namespace">instrumentation.namespace</router-link></li></ul></li></ul></nav>
<h2 id="main-base-config-options" tabindex="-1"><a class="header-anchor" href="#main-base-config-options" aria-hidden="true">#</a> Main base config options</h2>
<h3 id="proxy-app" tabindex="-1"><a class="header-anchor" href="#proxy-app" aria-hidden="true">#</a> proxy_app</h3>
<p>TCP or UNIX socket address of the ABCI application,
or the name of an ABCI application compiled in with the Tendermint binary</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">proxy_app</span> <span class="token punctuation">=</span> <span class="token string">"tcp://127.0.0.1:26658"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="moniker" tabindex="-1"><a class="header-anchor" href="#moniker" aria-hidden="true">#</a> moniker</h3>
<p>A custom human readable name for this node</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">moniker</span> <span class="token punctuation">=</span> <span class="token string">"node-moniker"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="fast-sync" tabindex="-1"><a class="header-anchor" href="#fast-sync" aria-hidden="true">#</a> fast_sync</h3>
<p>If this node is many blocks behind the tip of the chain, FastSync
allows them to catchup quickly by downloading blocks in parallel
and verifying their commits</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">fast_sync</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="db-backend" tabindex="-1"><a class="header-anchor" href="#db-backend" aria-hidden="true">#</a> db_backend</h3>
<p>Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb</p>
<ul>
<li>goleveldb (github.com/syndtr/goleveldb - most popular implementation)
<ul>
<li>pure go</li>
<li>stable</li>
</ul>
</li>
<li>cleveldb (uses levigo wrapper)
<ul>
<li>fast</li>
<li>requires gcc</li>
<li>use cleveldb build tag (go build -tags cleveldb)</li>
</ul>
</li>
<li>boltdb (uses etcd's fork of bolt - github.com/etcd-io/bbolt)
<ul>
<li>EXPERIMENTAL</li>
<li>may be faster is some use-cases (random reads - indexer)</li>
<li>use boltdb build tag (go build -tags boltdb)</li>
</ul>
</li>
<li>rocksdb (uses github.com/tecbot/gorocksdb)
<ul>
<li>EXPERIMENTAL</li>
<li>requires gcc</li>
<li>use rocksdb build tag (go build -tags rocksdb)</li>
</ul>
</li>
<li>badgerdb (uses github.com/dgraph-io/badger)
<ul>
<li>EXPERIMENTAL</li>
<li>use badgerdb build tag (go build -tags badgerdb)</li>
</ul>
</li>
</ul>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">db_backend</span> <span class="token punctuation">=</span> <span class="token string">"goleveldb"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="db-dir" tabindex="-1"><a class="header-anchor" href="#db-dir" aria-hidden="true">#</a> db_dir</h3>
<p>Database directory</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">db_dir</span> <span class="token punctuation">=</span> <span class="token string">"data"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="log-level" tabindex="-1"><a class="header-anchor" href="#log-level" aria-hidden="true">#</a> log_level</h3>
<p>Output level for logging, including package level options</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">log_level</span> <span class="token punctuation">=</span> <span class="token string">"info"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="log-format" tabindex="-1"><a class="header-anchor" href="#log-format" aria-hidden="true">#</a> log_format</h3>
<p>Output format: 'plain' (colored text) or 'json'</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">log_format</span> <span class="token punctuation">=</span> <span class="token string">"plain"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="genesis-file" tabindex="-1"><a class="header-anchor" href="#genesis-file" aria-hidden="true">#</a> genesis_file</h3>
<p>Path to the JSON file containing the initial validator set and other meta data</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">genesis_file</span> <span class="token punctuation">=</span> <span class="token string">"config/genesis.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="priv-validator-key-file" tabindex="-1"><a class="header-anchor" href="#priv-validator-key-file" aria-hidden="true">#</a> priv_validator_key_file</h3>
<p>Path to the JSON file containing the private key to use as a validator in the consensus protocol</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">priv_validator_key_file</span> <span class="token punctuation">=</span> <span class="token string">"config/priv_validator_key.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="priv-validator-state-file" tabindex="-1"><a class="header-anchor" href="#priv-validator-state-file" aria-hidden="true">#</a> priv_validator_state_file</h3>
<p>Path to the JSON file containing the last sign state of a validator</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">priv_validator_state_file</span> <span class="token punctuation">=</span> <span class="token string">"data/priv_validator_state.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="priv-validator-laddr" tabindex="-1"><a class="header-anchor" href="#priv-validator-laddr" aria-hidden="true">#</a> priv_validator_laddr</h3>
<p>TCP or UNIX socket address for Tendermint to listen on for
connections from an external PrivValidator process</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">priv_validator_laddr</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="node-key-file" tabindex="-1"><a class="header-anchor" href="#node-key-file" aria-hidden="true">#</a> node_key_file</h3>
<p>Path to the JSON file containing the private key to use for node authentication in the p2p protocol</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">node_key_file</span> <span class="token punctuation">=</span> <span class="token string">"config/node_key.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="abci" tabindex="-1"><a class="header-anchor" href="#abci" aria-hidden="true">#</a> abci</h3>
<p>Mechanism to connect to the ABCI application: <code v-pre>socket</code> | <code v-pre>grpc</code></p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">abci</span> <span class="token punctuation">=</span> <span class="token string">"socket"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="filter-peers" tabindex="-1"><a class="header-anchor" href="#filter-peers" aria-hidden="true">#</a> filter_peers</h3>
<p>If true, query the ABCI app on connecting to a new peer
so the app can decide if we should keep the connection or not</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">filter_peers</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> rpc</h2>
<p>RPC Server Configuration Options found in <code v-pre>[rpc]</code></p>
<h3 id="rpc-laddr" tabindex="-1"><a class="header-anchor" href="#rpc-laddr" aria-hidden="true">#</a> rpc.laddr</h3>
<p>TCP or UNIX socket address for the RPC server to listen on</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">laddr</span> <span class="token punctuation">=</span> <span class="token string">"tcp://127.0.0.1:26657"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-cors-allowed-origins" tabindex="-1"><a class="header-anchor" href="#rpc-cors-allowed-origins" aria-hidden="true">#</a> rpc.cors_allowed_origins</h3>
<p>A list of origins a cross-domain request can be executed from
Default value '[]' disables cors support
Use '[&quot;*&quot;]' to allow any origin</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">cors_allowed_origins</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-cors-allowed-methods" tabindex="-1"><a class="header-anchor" href="#rpc-cors-allowed-methods" aria-hidden="true">#</a> rpc.cors_allowed_methods</h3>
<p>A list of methods the client is allowed to use with cross-domain requests</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">cors_allowed_methods</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"HEAD"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-cors-allowed-headers" tabindex="-1"><a class="header-anchor" href="#rpc-cors-allowed-headers" aria-hidden="true">#</a> rpc.cors_allowed_headers</h3>
<p>A list of non simple headers the client is allowed to use with cross-domain requests</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">cors_allowed_headers</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"Origin"</span><span class="token punctuation">,</span> <span class="token string">"Accept"</span><span class="token punctuation">,</span> <span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"X-Requested-With"</span><span class="token punctuation">,</span> <span class="token string">"X-Server-Time"</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-grpc-laddr" tabindex="-1"><a class="header-anchor" href="#rpc-grpc-laddr" aria-hidden="true">#</a> rpc.grpc_laddr</h3>
<p>TCP or UNIX socket address for the gRPC server to listen on
NOTE: This server only supports /broadcast_tx_commit</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">grpc_laddr</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-grpc-max-open-connections" tabindex="-1"><a class="header-anchor" href="#rpc-grpc-max-open-connections" aria-hidden="true">#</a> rpc.grpc_max_open_connections</h3>
<p>Maximum number of simultaneous connections.
Does not include RPC (HTTP&amp;WebSocket) connections. See max_open_connections
If you want to accept a larger number than the default, make sure
you increase your OS limits.
0 - unlimited.
Should be &lt; {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
1024 - 40 - 10 - 50 = 924 = ~900</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">grpc_max_open_connections</span> <span class="token punctuation">=</span> <span class="token number">900</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-unsafe" tabindex="-1"><a class="header-anchor" href="#rpc-unsafe" aria-hidden="true">#</a> rpc.unsafe</h3>
<p>Activate unsafe RPC commands like /dial_seeds and /unsafe_flush_mempool</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">unsafe</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-max-open-connections" tabindex="-1"><a class="header-anchor" href="#rpc-max-open-connections" aria-hidden="true">#</a> rpc.max_open_connections</h3>
<p>Maximum number of simultaneous connections (including WebSocket).
Does not include gRPC connections. See grpc_max_open_connections
If you want to accept a larger number than the default, make sure
you increase your OS limits.
0 - unlimited.
Should be &lt; {ulimit -Sn} - {MaxNumInboundPeers} - {MaxNumOutboundPeers} - {N of wal, db and other open files}
1024 - 40 - 10 - 50 = 924 = ~900</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_open_connections</span> <span class="token punctuation">=</span> <span class="token number">900</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-max-subscription-clients" tabindex="-1"><a class="header-anchor" href="#rpc-max-subscription-clients" aria-hidden="true">#</a> rpc.max_subscription_clients</h3>
<p>Maximum number of unique clientIDs that can /subscribe
If you're using /broadcast_tx_commit, set to the estimated maximum number
of broadcast_tx_commit calls per block.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_subscription_clients</span> <span class="token punctuation">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-max-subscriptions-per-client" tabindex="-1"><a class="header-anchor" href="#rpc-max-subscriptions-per-client" aria-hidden="true">#</a> rpc.max_subscriptions_per_client</h3>
<p>Maximum number of unique queries a given client can /subscribe to
If you're using GRPC (or Local RPC client) and /broadcast_tx_commit, set to
the estimated # maximum number of broadcast_tx_commit calls per block.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_subscriptions_per_client</span> <span class="token punctuation">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-timeout-broadcast-tx-commit" tabindex="-1"><a class="header-anchor" href="#rpc-timeout-broadcast-tx-commit" aria-hidden="true">#</a> rpc.timeout_broadcast_tx_commit</h3>
<p>How long to wait for a tx to be committed during /broadcast_tx_commit.
WARNING: Using a value larger than 10s will result in increasing the
global HTTP write timeout, which applies to all connections and endpoints.
See https://github.com/tendermint/tendermint/issues/3435</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_broadcast_tx_commit</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-max-body-bytes" tabindex="-1"><a class="header-anchor" href="#rpc-max-body-bytes" aria-hidden="true">#</a> rpc.max_body_bytes</h3>
<p>Maximum size of request body, in bytes</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_body_bytes</span> <span class="token punctuation">=</span> <span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-max-header-bytes" tabindex="-1"><a class="header-anchor" href="#rpc-max-header-bytes" aria-hidden="true">#</a> rpc.max_header_bytes</h3>
<p>Maximum size of request header, in bytes</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_header_bytes</span> <span class="token punctuation">=</span> <span class="token number">1048576</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-tls-cert-file" tabindex="-1"><a class="header-anchor" href="#rpc-tls-cert-file" aria-hidden="true">#</a> rpc.tls_cert_file</h3>
<p>The path to a file containing certificate that is used to create the HTTPS server.
Might be either absolute path or path related to Tendermint's config directory.
If the certificate is signed by a certificate authority,
the certFile should be the concatenation of the server's certificate, any intermediates,
and the CA's certificate.
NOTE: both tls_cert_file and tls_key_file must be present for Tendermint to create HTTPS server.
Otherwise, HTTP server is run.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">tls_cert_file</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-tls-key-file" tabindex="-1"><a class="header-anchor" href="#rpc-tls-key-file" aria-hidden="true">#</a> rpc.tls_key_file</h3>
<p>The path to a file containing matching private key that is used to create the HTTPS server.
Might be either absolute path or path related to Tendermint's config directory.
NOTE: both tls-cert-file and tls-key-file must be present for Tendermint to create HTTPS server.
Otherwise, HTTP server is run.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">tls_key_file</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rpc-pprof-laddr" tabindex="-1"><a class="header-anchor" href="#rpc-pprof-laddr" aria-hidden="true">#</a> rpc.pprof_laddr</h3>
<p>pprof listen address (https://golang.org/pkg/net/http/pprof)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">pprof_laddr</span> <span class="token punctuation">=</span> <span class="token string">"localhost:6060"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="p2p" tabindex="-1"><a class="header-anchor" href="#p2p" aria-hidden="true">#</a> p2p</h2>
<p>P2P Configuration Options in <code v-pre>[p2p]</code> section</p>
<h3 id="p2p-laddr" tabindex="-1"><a class="header-anchor" href="#p2p-laddr" aria-hidden="true">#</a> p2p.laddr</h3>
<p>Address to listen for incoming connections</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">laddr</span> <span class="token punctuation">=</span> <span class="token string">"tcp://0.0.0.0:26656"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-external-address" tabindex="-1"><a class="header-anchor" href="#p2p-external-address" aria-hidden="true">#</a> p2p.external_address</h3>
<p>Address to advertise to peers for them to dial
If empty, will use the same port as the laddr,
and will introspect on the listener or use UPnP
to figure out the address. ip and port are required
example: 159.89.10.97:26656</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">external_address</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-seeds" tabindex="-1"><a class="header-anchor" href="#p2p-seeds" aria-hidden="true">#</a> p2p.seeds</h3>
<p>Comma separated list of seed nodes to connect to</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">seeds</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-persistent-peers" tabindex="-1"><a class="header-anchor" href="#p2p-persistent-peers" aria-hidden="true">#</a> p2p.persistent_peers</h3>
<p>Comma separated list of nodes to keep persistent connections to</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">persistent_peers</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-upnp" tabindex="-1"><a class="header-anchor" href="#p2p-upnp" aria-hidden="true">#</a> p2p.upnp</h3>
<p>UPNP port forwarding</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">upnp</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-addr-book-file" tabindex="-1"><a class="header-anchor" href="#p2p-addr-book-file" aria-hidden="true">#</a> p2p.addr_book_file</h3>
<p>Path to address book</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">addr_book_file</span> <span class="token punctuation">=</span> <span class="token string">"config/addrbook.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-addr-book-strict" tabindex="-1"><a class="header-anchor" href="#p2p-addr-book-strict" aria-hidden="true">#</a> p2p.addr_book_strict</h3>
<p>Set true for strict address routability rules
Set false for private or local networks</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">addr_book_strict</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-max-num-inbound-peers" tabindex="-1"><a class="header-anchor" href="#p2p-max-num-inbound-peers" aria-hidden="true">#</a> p2p.max_num_inbound_peers</h3>
<p>Maximum number of inbound peers</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_num_inbound_peers</span> <span class="token punctuation">=</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-max-num-outbound-peers" tabindex="-1"><a class="header-anchor" href="#p2p-max-num-outbound-peers" aria-hidden="true">#</a> p2p.max_num_outbound_peers</h3>
<p>Maximum number of outbound peers to connect to, excluding persistent peers</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_num_outbound_peers</span> <span class="token punctuation">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-unconditional-peer-ids" tabindex="-1"><a class="header-anchor" href="#p2p-unconditional-peer-ids" aria-hidden="true">#</a> p2p.unconditional_peer_ids</h3>
<p>List of node IDs, to which a connection will be (re)established ignoring any existing limits</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">unconditional_peer_ids</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-persistent-peers-max-dial-period" tabindex="-1"><a class="header-anchor" href="#p2p-persistent-peers-max-dial-period" aria-hidden="true">#</a> p2p.persistent_peers_max_dial_period</h3>
<p>Maximum pause when redialing a persistent peer (if zero, exponential backoff is used)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">persistent_peers_max_dial_period</span> <span class="token punctuation">=</span> <span class="token string">"0s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-flush-throttle-timeout" tabindex="-1"><a class="header-anchor" href="#p2p-flush-throttle-timeout" aria-hidden="true">#</a> p2p.flush_throttle_timeout</h3>
<p>Time to wait before flushing messages out on the connection</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">flush_throttle_timeout</span> <span class="token punctuation">=</span> <span class="token string">"100ms"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-max-packet-msg-payload-size" tabindex="-1"><a class="header-anchor" href="#p2p-max-packet-msg-payload-size" aria-hidden="true">#</a> p2p.max_packet_msg_payload_size</h3>
<p>Maximum size of a message packet payload, in bytes</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_packet_msg_payload_size</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-send-rate" tabindex="-1"><a class="header-anchor" href="#p2p-send-rate" aria-hidden="true">#</a> p2p.send_rate</h3>
<p>Rate at which packets can be sent, in bytes/second</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">send_rate</span> <span class="token punctuation">=</span> <span class="token number">5120000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-recv-rate" tabindex="-1"><a class="header-anchor" href="#p2p-recv-rate" aria-hidden="true">#</a> p2p.recv_rate</h3>
<p>Rate at which packets can be received, in bytes/second</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">recv_rate</span> <span class="token punctuation">=</span> <span class="token number">5120000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-pex" tabindex="-1"><a class="header-anchor" href="#p2p-pex" aria-hidden="true">#</a> p2p.pex</h3>
<p>Set true to enable the peer-exchange reactor</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">pex</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-seed-mode" tabindex="-1"><a class="header-anchor" href="#p2p-seed-mode" aria-hidden="true">#</a> p2p.seed_mode</h3>
<p>Seed mode, in which node constantly crawls the network and looks for
peers. If another node asks it for addresses, it responds and disconnects.</p>
<p>Does not work if the peer-exchange reactor is disabled.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">seed_mode</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-private-peer-ids" tabindex="-1"><a class="header-anchor" href="#p2p-private-peer-ids" aria-hidden="true">#</a> p2p.private_peer_ids</h3>
<p>Comma separated list of peer IDs to keep private (will not be gossiped to other peers)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">private_peer_ids</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-allow-duplicate-ip" tabindex="-1"><a class="header-anchor" href="#p2p-allow-duplicate-ip" aria-hidden="true">#</a> p2p.allow_duplicate_ip</h3>
<p>Toggle to disable guard against peers connecting from the same ip.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">allow_duplicate_ip</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="p2p-handshake-timeout" tabindex="-1"><a class="header-anchor" href="#p2p-handshake-timeout" aria-hidden="true">#</a> p2p.handshake_timeout</h3>
<h3 id="p2p-dial-timeout" tabindex="-1"><a class="header-anchor" href="#p2p-dial-timeout" aria-hidden="true">#</a> p2p.dial_timeout</h3>
<p>Peer connection configuration.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">handshake_timeout</span> <span class="token punctuation">=</span> <span class="token string">"20s"</span>
<span class="token key property">dial_timeout</span> <span class="token punctuation">=</span> <span class="token string">"3s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mempool" tabindex="-1"><a class="header-anchor" href="#mempool" aria-hidden="true">#</a> mempool</h2>
<p>Mempool Configuration Option <code v-pre>[mempool]</code> section</p>
<h3 id="mempool-recheck" tabindex="-1"><a class="header-anchor" href="#mempool-recheck" aria-hidden="true">#</a> mempool.recheck</h3>
<h3 id="mempool-broadcast" tabindex="-1"><a class="header-anchor" href="#mempool-broadcast" aria-hidden="true">#</a> mempool.broadcast</h3>
<h3 id="mempool-wal-dir" tabindex="-1"><a class="header-anchor" href="#mempool-wal-dir" aria-hidden="true">#</a> mempool.wal_dir</h3>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">recheck</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">broadcast</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">wal_dir</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mempool-size" tabindex="-1"><a class="header-anchor" href="#mempool-size" aria-hidden="true">#</a> mempool.size</h3>
<p>Maximum number of transactions in the mempool</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">size</span> <span class="token punctuation">=</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mempool-max-txs-bytes" tabindex="-1"><a class="header-anchor" href="#mempool-max-txs-bytes" aria-hidden="true">#</a> mempool.max_txs_bytes</h3>
<p>Limit the total size of all txs in the mempool.
This only accounts for raw transactions (e.g. given 1MB transactions and
max_txs_bytes=5MB, mempool will only accept 5 transactions).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_txs_bytes</span> <span class="token punctuation">=</span> <span class="token number">1073741824</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mempool-cache-size" tabindex="-1"><a class="header-anchor" href="#mempool-cache-size" aria-hidden="true">#</a> mempool.cache_size</h3>
<p>Size of the cache (used to filter transactions we saw earlier) in transactions</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">cache_size</span> <span class="token punctuation">=</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mempool-keep-invalid-txs-in-cache" tabindex="-1"><a class="header-anchor" href="#mempool-keep-invalid-txs-in-cache" aria-hidden="true">#</a> mempool.keep-invalid-txs-in-cache</h3>
<p>Do not remove invalid transactions from the cache (default: false)
Set to true if it's not possible for any invalid transaction to become valid
again in the future.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">keep-invalid-txs-in-cache</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mempool-max-tx-bytes" tabindex="-1"><a class="header-anchor" href="#mempool-max-tx-bytes" aria-hidden="true">#</a> mempool.max_tx_bytes</h3>
<p>Maximum size of a single transaction.
NOTE: the max size of a tx transmitted over the network is {max_tx_bytes}.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_tx_bytes</span> <span class="token punctuation">=</span> <span class="token number">1048576</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mempool-max-batch-bytes" tabindex="-1"><a class="header-anchor" href="#mempool-max-batch-bytes" aria-hidden="true">#</a> mempool.max_batch_bytes</h3>
<p>Maximum size of a batch of transactions to send to a peer
Including space needed by encoding (one varint per transaction).
XXX: Unused due to https://github.com/tendermint/tendermint/issues/5796</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_batch_bytes</span> <span class="token punctuation">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="statesync" tabindex="-1"><a class="header-anchor" href="#statesync" aria-hidden="true">#</a> statesync</h2>
<p>State Sync Configuration Options <code v-pre>[statesync]</code></p>
<p>State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine
snapshot from peers instead of fetching and replaying historical blocks. Requires some peers in
the network to take and serve state machine snapshots. State sync is not attempted if the node
has any local state (LastBlockHeight &gt; 0). The node will have a truncated block history,
starting from the height of the snapshot.</p>
<h3 id="statesync-enable" tabindex="-1"><a class="header-anchor" href="#statesync-enable" aria-hidden="true">#</a> statesync.enable</h3>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="statesync-rpc-servers" tabindex="-1"><a class="header-anchor" href="#statesync-rpc-servers" aria-hidden="true">#</a> statesync.rpc_servers</h3>
<h3 id="statesync-trust-height" tabindex="-1"><a class="header-anchor" href="#statesync-trust-height" aria-hidden="true">#</a> statesync.trust_height</h3>
<h3 id="statesync-trust-hash" tabindex="-1"><a class="header-anchor" href="#statesync-trust-hash" aria-hidden="true">#</a> statesync.trust_hash</h3>
<h3 id="statesync-trust-period" tabindex="-1"><a class="header-anchor" href="#statesync-trust-period" aria-hidden="true">#</a> statesync.trust_period</h3>
<p>RPC servers (comma-separated) for light client verification of the synced state machine and
retrieval of state data for node bootstrapping. Also needs a trusted height and corresponding
header hash obtained from a trusted source, and a period during which validators can be trusted.</p>
<p>For Cosmos SDK-based chains, trust_period should usually be about 2/3 of the unbonding time (~2
weeks) during which they can be financially punished (slashed) for misbehavior.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">rpc_servers</span> <span class="token punctuation">=</span> <span class="token string">""</span>
<span class="token key property">trust_height</span> <span class="token punctuation">=</span> <span class="token number">0</span>
<span class="token key property">trust_hash</span> <span class="token punctuation">=</span> <span class="token string">""</span>
<span class="token key property">trust_period</span> <span class="token punctuation">=</span> <span class="token string">"168h0m0s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="statesync-discovery-time" tabindex="-1"><a class="header-anchor" href="#statesync-discovery-time" aria-hidden="true">#</a> statesync.discovery_time</h3>
<p>Time to spend discovering snapshots before initiating a restore.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">discovery_time</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="statesync-temp-dir" tabindex="-1"><a class="header-anchor" href="#statesync-temp-dir" aria-hidden="true">#</a> statesync.temp_dir</h3>
<p>Temporary directory for state sync snapshot chunks, defaults to the OS tempdir (typically /tmp).
Will create a new, randomly named directory within, and remove it when done.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">temp_dir</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="statesync-chunk-request-timeout" tabindex="-1"><a class="header-anchor" href="#statesync-chunk-request-timeout" aria-hidden="true">#</a> statesync.chunk_request_timeout</h3>
<p>The timeout duration before re-requesting a chunk, possibly from a different
peer (default: 1 minute).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">chunk_request_timeout</span> <span class="token punctuation">=</span> <span class="token string">"30s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="statesync-chunk-fetchers" tabindex="-1"><a class="header-anchor" href="#statesync-chunk-fetchers" aria-hidden="true">#</a> statesync.chunk_fetchers</h3>
<p>The number of concurrent chunk fetchers to run (default: 1).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">chunk_fetchers</span> <span class="token punctuation">=</span> <span class="token string">"4"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fastsync" tabindex="-1"><a class="header-anchor" href="#fastsync" aria-hidden="true">#</a> fastsync</h2>
<p>Fast Sync Configuration Connections in '[fastsync]'</p>
<h3 id="fastsync-version" tabindex="-1"><a class="header-anchor" href="#fastsync-version" aria-hidden="true">#</a> fastsync.version</h3>
<p>Fast Sync version to use:</p>
<ol>
<li>&quot;v0&quot; (default) - the legacy fast sync implementation</li>
<li>&quot;v1&quot; - refactor of v0 version for better testability</li>
<li>&quot;v2&quot; - complete redesign of v0, optimized for testability &amp; readability</li>
</ol>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">"v0"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="consensus" tabindex="-1"><a class="header-anchor" href="#consensus" aria-hidden="true">#</a> consensus</h2>
<p>Consensus Configuration Options in <code v-pre>[consensus]</code></p>
<h3 id="consensus-wal-file" tabindex="-1"><a class="header-anchor" href="#consensus-wal-file" aria-hidden="true">#</a> consensus.wal_file</h3>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">wal_file</span> <span class="token punctuation">=</span> <span class="token string">"data/cs.wal/wal"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-propose" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-propose" aria-hidden="true">#</a> consensus.timeout_propose</h3>
<p>How long we wait for a proposal block before prevoting nil</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_propose</span> <span class="token punctuation">=</span> <span class="token string">"3s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-propose-delta" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-propose-delta" aria-hidden="true">#</a> consensus.timeout_propose_delta</h3>
<p>How much timeout_propose increases with each round</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_propose_delta</span> <span class="token punctuation">=</span> <span class="token string">"500ms"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-prevote" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-prevote" aria-hidden="true">#</a> consensus.timeout_prevote</h3>
<p>How long we wait after receiving +2/3 prevotes for “anything” (ie. not a single block or nil)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_prevote</span> <span class="token punctuation">=</span> <span class="token string">"1s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-prevote-delta" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-prevote-delta" aria-hidden="true">#</a> consensus.timeout_prevote_delta</h3>
<p>How much the timeout_prevote increases with each round</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_prevote_delta</span> <span class="token punctuation">=</span> <span class="token string">"500ms"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-precommit" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-precommit" aria-hidden="true">#</a> consensus.timeout_precommit</h3>
<p>How long we wait after receiving +2/3 precommits for “anything” (ie. not a single block or nil)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_precommit</span> <span class="token punctuation">=</span> <span class="token string">"1s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-precommit-delta" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-precommit-delta" aria-hidden="true">#</a> consensus.timeout_precommit_delta</h3>
<p>How much the timeout_precommit increases with each round</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_precommit_delta</span> <span class="token punctuation">=</span> <span class="token string">"500ms"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-timeout-commit" tabindex="-1"><a class="header-anchor" href="#consensus-timeout-commit" aria-hidden="true">#</a> consensus.timeout_commit</h3>
<p>How long we wait after committing a block, before starting on the new
height (this gives us a chance to receive some more precommits, even
though we already have +2/3).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">timeout_commit</span> <span class="token punctuation">=</span> <span class="token string">"5s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-double-sign-check-height" tabindex="-1"><a class="header-anchor" href="#consensus-double-sign-check-height" aria-hidden="true">#</a> consensus.double_sign_check_height</h3>
<p>How many blocks to look back to check existence of the node's consensus votes before joining consensus
When non-zero, the node will panic upon restart
if the same consensus key was used to sign {double_sign_check_height} last blocks.
So, validators should stop the state machine, wait for some blocks, and then restart the state machine to avoid panic.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">double_sign_check_height</span> <span class="token punctuation">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-skip-timeout-commit" tabindex="-1"><a class="header-anchor" href="#consensus-skip-timeout-commit" aria-hidden="true">#</a> consensus.skip_timeout_commit</h3>
<p>Make progress as soon as we have all the precommits (as if TimeoutCommit = 0)</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">skip_timeout_commit</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="consensus-create-empty-blocks" tabindex="-1"><a class="header-anchor" href="#consensus-create-empty-blocks" aria-hidden="true">#</a> consensus.create_empty_blocks</h3>
<h3 id="consensus-create-empty-blocks-interval" tabindex="-1"><a class="header-anchor" href="#consensus-create-empty-blocks-interval" aria-hidden="true">#</a> consensus.create_empty_blocks_interval</h3>
<p>EmptyBlocks mode and possible interval between empty blocks</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">create_empty_blocks</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">create_empty_blocks_interval</span> <span class="token punctuation">=</span> <span class="token string">"0s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="consensus-peer-gossip-sleep-duration" tabindex="-1"><a class="header-anchor" href="#consensus-peer-gossip-sleep-duration" aria-hidden="true">#</a> consensus.peer_gossip_sleep_duration</h3>
<h3 id="consensus-peer-query-maj23-sleep-duration" tabindex="-1"><a class="header-anchor" href="#consensus-peer-query-maj23-sleep-duration" aria-hidden="true">#</a> consensus.peer_query_maj23_sleep_duration</h3>
<p>Reactor sleep duration parameters</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">peer_gossip_sleep_duration</span> <span class="token punctuation">=</span> <span class="token string">"100ms"</span>
<span class="token key property">peer_query_maj23_sleep_duration</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tx-index" tabindex="-1"><a class="header-anchor" href="#tx-index" aria-hidden="true">#</a> tx_index</h2>
<p>Transaction Indexer Configuration Options in <code v-pre>[tx_index]</code></p>
<h3 id="tx-index-indexer" tabindex="-1"><a class="header-anchor" href="#tx-index-indexer" aria-hidden="true">#</a> tx_index.indexer</h3>
<p>What indexer to use for transactions</p>
<p>The application will set which txs to index. In some cases a node operator will be able
to decide which txs to index based on configuration set in the application.</p>
<p>Options:</p>
<ol>
<li>&quot;null&quot;</li>
<li>&quot;kv&quot; (default) - the simplest possible indexer, backed by key-value storage (defaults to levelDB; see DBBackend).
<ul>
<li>When &quot;kv&quot; is chosen &quot;tx.height&quot; and &quot;tx.hash&quot; will always be indexed.</li>
</ul>
</li>
</ol>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">indexer</span> <span class="token punctuation">=</span> <span class="token string">"kv"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="instrumentation" tabindex="-1"><a class="header-anchor" href="#instrumentation" aria-hidden="true">#</a> instrumentation</h2>
<p>Instrumentation Configuration Options in <code v-pre>[instrumentation]</code></p>
<h3 id="instrumentation-prometheus" tabindex="-1"><a class="header-anchor" href="#instrumentation-prometheus" aria-hidden="true">#</a> instrumentation.prometheus</h3>
<p>When true, Prometheus metrics are served under /metrics on
PrometheusListenAddr.
Check out the documentation for the list of available metrics.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">prometheus</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="instrumentation-prometheus-listen-addr" tabindex="-1"><a class="header-anchor" href="#instrumentation-prometheus-listen-addr" aria-hidden="true">#</a> instrumentation.prometheus_listen_addr</h3>
<p>Address to listen for Prometheus collector(s) connections</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">prometheus_listen_addr</span> <span class="token punctuation">=</span> <span class="token string">":26660"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="instrumentation-max-open-connections" tabindex="-1"><a class="header-anchor" href="#instrumentation-max-open-connections" aria-hidden="true">#</a> instrumentation.max_open_connections</h3>
<p>Maximum number of simultaneous connections.
If you want to accept a larger number than the default, make sure
you increase your OS limits.
0 - unlimited.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max_open_connections</span> <span class="token punctuation">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="instrumentation-namespace" tabindex="-1"><a class="header-anchor" href="#instrumentation-namespace" aria-hidden="true">#</a> instrumentation.namespace</h3>
<p>Instrumentation namespace</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"tendermint"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
