<template><div><h2 id="und-tx-feegrant-grant" tabindex="-1"><a class="header-anchor" href="#und-tx-feegrant-grant" aria-hidden="true">#</a> und tx feegrant grant</h2>
<p>Grant Fee allowance to an address</p>
<h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h3>
<p>Grant authorization to pay fees from your address. Note, the'--from' flag is
ignored as it is implied from [granter].</p>
<p>Examples:
und tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z or
und tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --period 3600 --period-limit 10stake --expiration 36000 or
und tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z
--allowed-messages &quot;/cosmos.gov.v1beta1.MsgSubmitProposal,/cosmos.gov.v1beta1.MsgVote&quot;</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx feegrant grant [granter_key_or_address] [grantee] [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  -a, --account-number uint        The account number of the signing account (offline mode only)
      --allowed-messages strings   Set of allowed messages for fee allowance
  -b, --broadcast-mode string      Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                    ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --expiration string          The RFC 3339 timestamp after which the grant expires for the user
      --fee-account string         Fee account pays fees for the transaction instead of deducting from the signer
      --fees string                Fees to pay along with transaction; eg: 10uatom
      --from string                Name or address of private key with which to sign
      --gas string                 gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float       adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string          Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only              Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
  -h, --help                       help for grant
      --keyring-backend string     Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string         The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                     Use a connected Ledger device
      --node string                &amp;#9001;host&amp;#9002;:&amp;#9001;port&amp;#9002; to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --note string                Note to add a description to the transaction (previously --memo)
      --offline                    Offline mode (does not allow any online functionality
  -o, --output string              Output format (text|json) (default "json")
      --period int                 period specifies the time duration in which period_spend_limit coins can be spent before that allowance is reset
      --period-limit string        period limit specifies the maximum number of coins that can be spent in the period
  -s, --sequence uint              The sequence number of the signing account (offline mode only)
      --sign-mode string           Choose sign mode (direct|amino-json), this is an advanced feature
      --spend-limit string         Spend limit specifies the max limit can be used, if not mentioned there is no limit
      --timeout-height uint        Set a block timeout height to prevent the tx from being committed past a certain height
  -y, --yes                        Skip tx broadcasting prompt confirmation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-inherited-from-parent-commands" tabindex="-1"><a class="header-anchor" href="#options-inherited-from-parent-commands" aria-hidden="true">#</a> Options inherited from parent commands</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      --chain-id string   The network chain ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> SEE ALSO</h3>
<ul>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_feegrant.html">und tx feegrant</RouterLink>	 - Feegrant transactions subcommands</li>
</ul>
<h6 id="auto-generated-by-spf13-cobra-on-22-jul-2022" tabindex="-1"><a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-22-jul-2022" aria-hidden="true">#</a> Auto generated by spf13/cobra on 22-Jul-2022</h6>
</div></template>
