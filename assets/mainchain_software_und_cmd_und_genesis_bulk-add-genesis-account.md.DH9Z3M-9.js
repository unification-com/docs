import{_ as n,o as a,c as e,a6 as t}from"./chunks/framework.DtxWasON.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"mainchain/software/und_cmd/und_genesis_bulk-add-genesis-account.md","filePath":"mainchain/software/und_cmd/und_genesis_bulk-add-genesis-account.md"}'),o={name:"mainchain/software/und_cmd/und_genesis_bulk-add-genesis-account.md"};function p(i,s,l,u,c,d){return a(),e("div",null,[...s[0]||(s[0]=[t(`<h2 id="und-genesis-bulk-add-genesis-account" tabindex="-1">und genesis bulk-add-genesis-account <a class="header-anchor" href="#und-genesis-bulk-add-genesis-account" aria-label="Permalink to &quot;und genesis bulk-add-genesis-account&quot;">​</a></h2><p>Bulk add genesis accounts to genesis.json</p><h3 id="synopsis" tabindex="-1">Synopsis <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;Synopsis&quot;">​</a></h3><p>Add genesis accounts in bulk to genesis.json. The provided account must specify the account address and a list of initial coins. The list of initial tokens must contain valid denominations. Accounts may optionally be supplied with vesting parameters.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>und genesis bulk-add-genesis-account [/file/path.json] [flags]</span></span></code></pre></div><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bulk-add-genesis-account accounts.json</span></span>
<span class="line"><span>where accounts.json is:</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;address&quot;: &quot;cosmos139f7kncmglres2nf3h4hc4tade85ekfr8sulz5&quot;,</span></span>
<span class="line"><span>        &quot;coins&quot;: [</span></span>
<span class="line"><span>            { &quot;denom&quot;: &quot;umuon&quot;, &quot;amount&quot;: &quot;100000000&quot; },</span></span>
<span class="line"><span>            { &quot;denom&quot;: &quot;stake&quot;, &quot;amount&quot;: &quot;200000000&quot; }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;address&quot;: &quot;cosmos1e0jnq2sun3dzjh8p2xq95kk0expwmd7shwjpfg&quot;,</span></span>
<span class="line"><span>        &quot;coins&quot;: [</span></span>
<span class="line"><span>            { &quot;denom&quot;: &quot;umuon&quot;, &quot;amount&quot;: &quot;500000000&quot; }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;vesting_amt&quot;: [</span></span>
<span class="line"><span>            { &quot;denom&quot;: &quot;umuon&quot;, &quot;amount&quot;: &quot;400000000&quot; }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;vesting_start&quot;: 1724711478,</span></span>
<span class="line"><span>        &quot;vesting_end&quot;: 1914013878</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      --append             append the coins to an account already in the genesis.json file</span></span>
<span class="line"><span>      --grpc-addr string   the gRPC endpoint to use for this chain</span></span>
<span class="line"><span>      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS</span></span>
<span class="line"><span>      --height int         Use a specific height to query state at (this can error if the node is pruning state)</span></span>
<span class="line"><span>  -h, --help               help for bulk-add-genesis-account</span></span>
<span class="line"><span>      --home string        The application home directory (default &quot;/home/hodge/.und_mainchain&quot;)</span></span>
<span class="line"><span>      --node string        &amp;lt;host&amp;gt;:&amp;lt;port&amp;gt; to CometBFT RPC interface for this chain (default &quot;tcp://localhost:26657&quot;)</span></span>
<span class="line"><span>  -o, --output string      Output format (text|json) (default &quot;text&quot;)</span></span></code></pre></div><h3 id="see-also" tabindex="-1">SEE ALSO <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;SEE ALSO&quot;">​</a></h3><ul><li><a href="./und_genesis.html">und genesis</a> - Application&#39;s genesis-related subcommands</li></ul><h6 id="auto-generated-by-spf13-cobra-on-6-may-2025" tabindex="-1">Auto generated by spf13/cobra on 6-May-2025 <a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-6-may-2025" aria-label="Permalink to &quot;Auto generated by spf13/cobra on 6-May-2025&quot;">​</a></h6>`,12)])])}const g=n(o,[["render",p]]);export{h as __pageData,g as default};
