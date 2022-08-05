<template><div><h2 id="und-tx-gov-submit-proposal-ibc-upgrade" tabindex="-1"><a class="header-anchor" href="#und-tx-gov-submit-proposal-ibc-upgrade" aria-hidden="true">#</a> und tx gov submit-proposal ibc-upgrade</h2>
<p>Submit an IBC upgrade proposal</p>
<h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h3>
<p>Submit an IBC client breaking upgrade proposal along with an initial deposit.
The client state specified is the upgraded client state representing the upgraded chain
Example Upgraded Client State JSON:
{
&quot;@type&quot;:&quot;/ibc.lightclients.tendermint.v1.ClientState&quot;,
&quot;chain_id&quot;:&quot;testchain1&quot;,
&quot;unbonding_period&quot;:&quot;1814400s&quot;,
&quot;latest_height&quot;:{&quot;revision_number&quot;:&quot;0&quot;,&quot;revision_height&quot;:&quot;2&quot;},
&quot;proof_specs&quot;:[{&quot;leaf_spec&quot;:{&quot;hash&quot;:&quot;SHA256&quot;,&quot;prehash_key&quot;:&quot;NO_HASH&quot;,&quot;prehash_value&quot;:&quot;SHA256&quot;,&quot;length&quot;:&quot;VAR_PROTO&quot;,&quot;prefix&quot;:&quot;AA==&quot;},&quot;inner_spec&quot;:{&quot;child_order&quot;:[0,1],&quot;child_size&quot;:33,&quot;min_prefix_length&quot;:4,&quot;max_prefix_length&quot;:12,&quot;empty_child&quot;:null,&quot;hash&quot;:&quot;SHA256&quot;},&quot;max_depth&quot;:0,&quot;min_depth&quot;:0},{&quot;leaf_spec&quot;:{&quot;hash&quot;:&quot;SHA256&quot;,&quot;prehash_key&quot;:&quot;NO_HASH&quot;,&quot;prehash_value&quot;:&quot;SHA256&quot;,&quot;length&quot;:&quot;VAR_PROTO&quot;,&quot;prefix&quot;:&quot;AA==&quot;},&quot;inner_spec&quot;:{&quot;child_order&quot;:[0,1],&quot;child_size&quot;:32,&quot;min_prefix_length&quot;:1,&quot;max_prefix_length&quot;:1,&quot;empty_child&quot;:null,&quot;hash&quot;:&quot;SHA256&quot;},&quot;max_depth&quot;:0,&quot;min_depth&quot;:0}],
&quot;upgrade_path&quot;:[&quot;upgrade&quot;,&quot;upgradedIBCState&quot;],
}</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx gov submit-proposal ibc-upgrade [name] [height] [path/to/upgraded_client_state.json] [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  -a, --account-number uint      The account number of the signing account (offline mode only)
  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")
      --deposit string           deposit of proposal
      --description string       description of proposal
      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fee-account string       Fee account pays fees for the transaction instead of deducting from the signer
      --fees string              Fees to pay along with transaction; eg: 10uatom
      --from string              Name or address of private key with which to sign
      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
  -h, --help                     help for ibc-upgrade
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                   Use a connected Ledger device
      --node string              &amp;#9001;host&amp;#9002;:&amp;#9001;port&amp;#9002; to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --note string              Note to add a description to the transaction (previously --memo)
      --offline                  Offline mode (does not allow any online functionality
  -o, --output string            Output format (text|json) (default "json")
  -s, --sequence uint            The sequence number of the signing account (offline mode only)
      --sign-mode string         Choose sign mode (direct|amino-json), this is an advanced feature
      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height
      --title string             title of proposal
  -y, --yes                      Skip tx broadcasting prompt confirmation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-inherited-from-parent-commands" tabindex="-1"><a class="header-anchor" href="#options-inherited-from-parent-commands" aria-hidden="true">#</a> Options inherited from parent commands</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      --chain-id string   The network chain ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> SEE ALSO</h3>
<ul>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal.html">und tx gov submit-proposal</RouterLink>	 - Submit a proposal along with an initial deposit</li>
</ul>
<h6 id="auto-generated-by-spf13-cobra-on-22-jul-2022" tabindex="-1"><a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-22-jul-2022" aria-hidden="true">#</a> Auto generated by spf13/cobra on 22-Jul-2022</h6>
</div></template>
