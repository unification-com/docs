<template><div><h1 id="app-toml-reference" tabindex="-1"><a class="header-anchor" href="#app-toml-reference" aria-hidden="true">#</a> <code v-pre>app.toml</code> Reference</h1>
<p>The <code v-pre>$HOME/.und_mainchain/config/app.toml</code> file contains all the configuration options for the <code v-pre>und</code> server binary. Below is a reference for the file.</p>
<h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h4>
<nav class="table-of-contents"><ul><li><router-link to="#main-base-config-options">Main base config options</router-link><ul><li><router-link to="#minimum-gas-prices">minimum-gas-prices</router-link></li><li><router-link to="#pruning">pruning</router-link></li><li><router-link to="#halt-height">halt-height</router-link></li><li><router-link to="#halt-time">halt-time</router-link></li><li><router-link to="#min-retain-blocks">min-retain-blocks</router-link></li><li><router-link to="#inter-block-cache">inter-block-cache</router-link></li><li><router-link to="#index-events">index-events</router-link></li></ul></li><li><router-link to="#telemetry">telemetry</router-link><ul><li><router-link to="#telemetry-service-name">telemetry.service-name</router-link></li><li><router-link to="#telemetry-enabled">telemetry.enabled</router-link></li><li><router-link to="#telemetry-enable-hostname">telemetry.enable-hostname</router-link></li><li><router-link to="#telemetry-enable-hostname-label">telemetry.enable-hostname-label</router-link></li><li><router-link to="#telemetry-enable-service-label">telemetry.enable-service-label</router-link></li><li><router-link to="#telemetry-prometheus-retention-time">telemetry.prometheus-retention-time</router-link></li><li><router-link to="#telemetry-global-labels">telemetry.global-labels</router-link></li></ul></li><li><router-link to="#api">api</router-link><ul><li><router-link to="#api-enable">api.enable</router-link></li><li><router-link to="#api-swagger">api.swagger</router-link></li><li><router-link to="#api-address">api.address</router-link></li><li><router-link to="#api-max-open-connections">api.max-open-connections</router-link></li><li><router-link to="#api-rpc-read-timeout">api.rpc-read-timeout</router-link></li><li><router-link to="#api-rpc-write-timeout">api.rpc-write-timeout</router-link></li><li><router-link to="#api-rpc-max-body-bytes">api.rpc-max-body-bytes</router-link></li><li><router-link to="#api-enabled-unsafe-cors">api.enabled-unsafe-cors</router-link></li></ul></li><li><router-link to="#grpc">grpc</router-link><ul><li><router-link to="#grpc-enable">grpc.enable</router-link></li><li><router-link to="#grpc-address">grpc.address</router-link></li></ul></li><li><router-link to="#state-sync">state-sync</router-link><ul><li><router-link to="#state-sync-snapshot-interval">state-sync.snapshot-interval</router-link></li><li><router-link to="#state-sync-snapshot-keep-recent">state-sync.snapshot-keep-recent</router-link></li></ul></li></ul></nav>
<h2 id="main-base-config-options" tabindex="-1"><a class="header-anchor" href="#main-base-config-options" aria-hidden="true">#</a> Main base config options</h2>
<h3 id="minimum-gas-prices" tabindex="-1"><a class="header-anchor" href="#minimum-gas-prices" aria-hidden="true">#</a> minimum-gas-prices</h3>
<p>The minimum gas prices a validator is willing to accept for processing a
transaction. A transaction's fees must meet the minimum of any denomination
specified in this config (e.g. 25.0nund).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">minimum-gas-prices</span> <span class="token punctuation">=</span> <span class="token string">"25.0nund"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pruning" tabindex="-1"><a class="header-anchor" href="#pruning" aria-hidden="true">#</a> pruning</h3>
<p>default: the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals
nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)
everything: all saved states will be deleted, storing only the current state; pruning at 10 block intervals
custom: allow pruning options to be manually specified through 'pruning-keep-recent', 'pruning-keep-every', and 'pruning-interval'</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">pruning</span> <span class="token punctuation">=</span> <span class="token string">"default"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="pruning-keep-recent" tabindex="-1"><a class="header-anchor" href="#pruning-keep-recent" aria-hidden="true">#</a> pruning-keep-recent</h4>
<h4 id="pruning-keep-every" tabindex="-1"><a class="header-anchor" href="#pruning-keep-every" aria-hidden="true">#</a> pruning-keep-every</h4>
<h4 id="pruning-interval" tabindex="-1"><a class="header-anchor" href="#pruning-interval" aria-hidden="true">#</a> pruning-interval</h4>
<p>These are applied if and only if the pruning strategy is custom.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">pruning-keep-recent</span> <span class="token punctuation">=</span> <span class="token string">"200"</span>
<span class="token key property">pruning-keep-every</span> <span class="token punctuation">=</span> <span class="token string">"1000"</span>
<span class="token key property">pruning-interval</span> <span class="token punctuation">=</span> <span class="token string">"100"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="halt-height" tabindex="-1"><a class="header-anchor" href="#halt-height" aria-hidden="true">#</a> halt-height</h3>
<p>HaltHeight contains a non-zero block height at which a node will gracefully
halt and shutdown that can be used to assist upgrades and testing.</p>
<p>Note: Commitment of state will be attempted on the corresponding block.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">halt-height</span> <span class="token punctuation">=</span> <span class="token number">123456789</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="halt-time" tabindex="-1"><a class="header-anchor" href="#halt-time" aria-hidden="true">#</a> halt-time</h3>
<p>HaltTime contains a non-zero minimum block time (in Unix seconds) at which
a node will gracefully halt and shutdown that can be used to assist upgrades
and testing.</p>
<p>Note: Commitment of state will be attempted on the corresponding block.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">halt-time</span> <span class="token punctuation">=</span> <span class="token number">1654686000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="min-retain-blocks" tabindex="-1"><a class="header-anchor" href="#min-retain-blocks" aria-hidden="true">#</a> min-retain-blocks</h3>
<p>MinRetainBlocks defines the minimum block height offset from the current
block being committed, such that all blocks past this offset are pruned
from Tendermint. It is used as part of the process of determining the
ResponseCommit.RetainHeight value during ABCI Commit. A value of 0 indicates
that no blocks should be pruned.</p>
<p>This configuration value is only responsible for pruning Tendermint blocks.
It has no bearing on application state pruning which is determined by the
&quot;pruning-*&quot; configurations.</p>
<p>Note: Tendermint block pruning is dependant on this parameter in conunction
with the unbonding (safety threshold) period, state pruning and state sync
snapshot parameters to determine the correct minimum value of
ResponseCommit.RetainHeight.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">min-retain-blocks</span> <span class="token punctuation">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="inter-block-cache" tabindex="-1"><a class="header-anchor" href="#inter-block-cache" aria-hidden="true">#</a> inter-block-cache</h3>
<p>InterBlockCache enables inter-block caching.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">inter-block-cache</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="index-events" tabindex="-1"><a class="header-anchor" href="#index-events" aria-hidden="true">#</a> index-events</h3>
<p>IndexEvents defines the set of events in the form {eventType}.{attributeKey},
which informs Tendermint what to index. If empty, all events will be indexed.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">index-events</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"message.sender"</span><span class="token punctuation">,</span> <span class="token string">"message.recipient"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="telemetry" tabindex="-1"><a class="header-anchor" href="#telemetry" aria-hidden="true">#</a> telemetry</h2>
<p>Configuration options in the <code v-pre>[telemetry]</code> section of the <code v-pre>app.toml</code> file.</p>
<h3 id="telemetry-service-name" tabindex="-1"><a class="header-anchor" href="#telemetry-service-name" aria-hidden="true">#</a> telemetry.service-name</h3>
<p>Prefixed with keys to separate services.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">service-name</span> <span class="token punctuation">=</span> <span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-enabled" tabindex="-1"><a class="header-anchor" href="#telemetry-enabled" aria-hidden="true">#</a> telemetry.enabled</h3>
<p>Enabled enables the application telemetry functionality. When enabled,
an in-memory sink is also enabled by default. Operators may also enabled
other sinks such as Prometheus.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-enable-hostname" tabindex="-1"><a class="header-anchor" href="#telemetry-enable-hostname" aria-hidden="true">#</a> telemetry.enable-hostname</h3>
<p>Enable prefixing gauge values with hostname.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable-hostname</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-enable-hostname-label" tabindex="-1"><a class="header-anchor" href="#telemetry-enable-hostname-label" aria-hidden="true">#</a> telemetry.enable-hostname-label</h3>
<p>Enable adding hostname to labels.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable-hostname-label</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-enable-service-label" tabindex="-1"><a class="header-anchor" href="#telemetry-enable-service-label" aria-hidden="true">#</a> telemetry.enable-service-label</h3>
<p>Enable adding service to labels.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable-service-label</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-prometheus-retention-time" tabindex="-1"><a class="header-anchor" href="#telemetry-prometheus-retention-time" aria-hidden="true">#</a> telemetry.prometheus-retention-time</h3>
<p>PrometheusRetentionTime, when positive, enables a Prometheus metrics sink.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">prometheus-retention-time</span> <span class="token punctuation">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="telemetry-global-labels" tabindex="-1"><a class="header-anchor" href="#telemetry-global-labels" aria-hidden="true">#</a> telemetry.global-labels</h3>
<p>GlobalLabels defines a global set of name/value label tuples applied to all
metrics emitted using the wrapper functions defined in telemetry package.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">global-labels</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"chain_id"</span><span class="token punctuation">,</span> <span class="token string">"FUND-MainNet-2"</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2>
<p>Configuration options in the <code v-pre>[api]</code> section of the <code v-pre>app.toml</code> file.</p>
<h3 id="api-enable" tabindex="-1"><a class="header-anchor" href="#api-enable" aria-hidden="true">#</a> api.enable</h3>
<p>Enable defines if the API server should be enabled.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-swagger" tabindex="-1"><a class="header-anchor" href="#api-swagger" aria-hidden="true">#</a> api.swagger</h3>
<p>Swagger defines if swagger documentation should automatically be registered.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">swagger</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-address" tabindex="-1"><a class="header-anchor" href="#api-address" aria-hidden="true">#</a> api.address</h3>
<p>Address defines the API server to listen on.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">address</span> <span class="token punctuation">=</span> <span class="token string">"tcp://0.0.0.0:1317"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-max-open-connections" tabindex="-1"><a class="header-anchor" href="#api-max-open-connections" aria-hidden="true">#</a> api.max-open-connections</h3>
<p>MaxOpenConnections defines the number of maximum open connections.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">max-open-connections</span> <span class="token punctuation">=</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-rpc-read-timeout" tabindex="-1"><a class="header-anchor" href="#api-rpc-read-timeout" aria-hidden="true">#</a> api.rpc-read-timeout</h3>
<p>RPCReadTimeout defines the Tendermint RPC read timeout (in seconds).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">rpc-read-timeout</span> <span class="token punctuation">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-rpc-write-timeout" tabindex="-1"><a class="header-anchor" href="#api-rpc-write-timeout" aria-hidden="true">#</a> api.rpc-write-timeout</h3>
<p>RPCWriteTimeout defines the Tendermint RPC write timeout (in seconds).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">rpc-write-timeout</span> <span class="token punctuation">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-rpc-max-body-bytes" tabindex="-1"><a class="header-anchor" href="#api-rpc-max-body-bytes" aria-hidden="true">#</a> api.rpc-max-body-bytes</h3>
<p>RPCMaxBodyBytes defines the Tendermint maximum response body (in bytes).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">rpc-max-body-bytes</span> <span class="token punctuation">=</span> <span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-enabled-unsafe-cors" tabindex="-1"><a class="header-anchor" href="#api-enabled-unsafe-cors" aria-hidden="true">#</a> api.enabled-unsafe-cors</h3>
<p>EnableUnsafeCORS defines if CORS should be enabled (unsafe - use it at your own risk).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enabled-unsafe-cors</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> grpc</h2>
<p>Configuration options in the <code v-pre>[grpc]</code> section of the <code v-pre>app.toml</code> file.</p>
<h3 id="grpc-enable" tabindex="-1"><a class="header-anchor" href="#grpc-enable" aria-hidden="true">#</a> grpc.enable</h3>
<p>Enable defines if the gRPC server should be enabled.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="grpc-address" tabindex="-1"><a class="header-anchor" href="#grpc-address" aria-hidden="true">#</a> grpc.address</h3>
<p>Address defines the gRPC server address to bind to.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">address</span> <span class="token punctuation">=</span> <span class="token string">"0.0.0.0:9090"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="state-sync" tabindex="-1"><a class="header-anchor" href="#state-sync" aria-hidden="true">#</a> state-sync</h2>
<p>Configuration options in the <code v-pre>[state-sync]</code> section of the <code v-pre>app.toml</code> file.</p>
<p>State sync snapshots allow other nodes to rapidly join the network without replaying historical
blocks, instead downloading and applying a snapshot of the application state at a given height.</p>
<h3 id="state-sync-snapshot-interval" tabindex="-1"><a class="header-anchor" href="#state-sync-snapshot-interval" aria-hidden="true">#</a> state-sync.snapshot-interval</h3>
<p>snapshot-interval specifies the block interval at which local state sync snapshots are
taken (0 to disable). Must be a multiple of pruning-keep-every.</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">snapshot-interval</span> <span class="token punctuation">=</span> <span class="token number">500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="state-sync-snapshot-keep-recent" tabindex="-1"><a class="header-anchor" href="#state-sync-snapshot-keep-recent" aria-hidden="true">#</a> state-sync.snapshot-keep-recent</h3>
<p>snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).</p>
<p>Example</p>
<div class="language-toml ext-toml line-numbers-mode"><pre v-pre class="language-toml"><code><span class="token key property">snapshot-keep-recent</span> <span class="token punctuation">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
