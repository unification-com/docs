<template><div><h2 id="und-tx-gov-submit-proposal" tabindex="-1"><a class="header-anchor" href="#und-tx-gov-submit-proposal" aria-hidden="true">#</a> und tx gov submit-proposal</h2>
<p>Submit a proposal along with an initial deposit</p>
<h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h3>
<p>Submit a proposal along with an initial deposit.
Proposal title, description, type and deposit can be given directly or through a proposal JSON file.</p>
<p>Example:
$ und tx gov submit-proposal --proposal=&quot;path/to/proposal.json&quot; --from mykey</p>
<p>Where proposal.json contains:</p>
<p>{
&quot;title&quot;: &quot;Test Proposal&quot;,
&quot;description&quot;: &quot;My awesome proposal&quot;,
&quot;type&quot;: &quot;Text&quot;,
&quot;deposit&quot;: &quot;10test&quot;
}</p>
<p>Which is equivalent to:</p>
<p>$ und tx gov submit-proposal --title=&quot;Test Proposal&quot; --description=&quot;My awesome proposal&quot; --type=&quot;Text&quot; --deposit=&quot;10test&quot; --from mykey</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx gov submit-proposal [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  -a, --account-number uint      The account number of the signing account (offline mode only)
  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")
      --deposit string           The proposal deposit
      --description string       The proposal description
      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fee-account string       Fee account pays fees for the transaction instead of deducting from the signer
      --fees string              Fees to pay along with transaction; eg: 10uatom
      --from string              Name or address of private key with which to sign
      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
  -h, --help                     help for submit-proposal
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                   Use a connected Ledger device
      --node string              &amp;#9001;host&amp;#9002;:&amp;#9001;port&amp;#9002; to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --note string              Note to add a description to the transaction (previously --memo)
      --offline                  Offline mode (does not allow any online functionality
  -o, --output string            Output format (text|json) (default "json")
      --proposal string          Proposal file path (if this path is given, other proposal flags are ignored)
  -s, --sequence uint            The sequence number of the signing account (offline mode only)
      --sign-mode string         Choose sign mode (direct|amino-json), this is an advanced feature
      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height
      --title string             The proposal title
      --type string              The proposal Type
  -y, --yes                      Skip tx broadcasting prompt confirmation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-inherited-from-parent-commands" tabindex="-1"><a class="header-anchor" href="#options-inherited-from-parent-commands" aria-hidden="true">#</a> Options inherited from parent commands</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      --chain-id string   The network chain ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> SEE ALSO</h3>
<ul>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov.html">und tx gov</RouterLink>	 - Governance transactions subcommands</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_cancel-software-upgrade.html">und tx gov submit-proposal cancel-software-upgrade</RouterLink>	 - Cancel the current software upgrade proposal</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_community-pool-spend.html">und tx gov submit-proposal community-pool-spend</RouterLink>	 - Submit a community pool spend proposal</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_ibc-upgrade.html">und tx gov submit-proposal ibc-upgrade</RouterLink>	 - Submit an IBC upgrade proposal</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_param-change.html">und tx gov submit-proposal param-change</RouterLink>	 - Submit a parameter change proposal</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_software-upgrade.html">und tx gov submit-proposal software-upgrade</RouterLink>	 - Submit a software upgrade proposal</li>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_gov_submit-proposal_update-client.html">und tx gov submit-proposal update-client</RouterLink>	 - Submit an update IBC client proposal</li>
</ul>
<h6 id="auto-generated-by-spf13-cobra-on-22-jul-2022" tabindex="-1"><a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-22-jul-2022" aria-hidden="true">#</a> Auto generated by spf13/cobra on 22-Jul-2022</h6>
</div></template>
