<template><div><h2 id="und-tx-wrkchain-record" tabindex="-1"><a class="header-anchor" href="#und-tx-wrkchain-record" aria-hidden="true">#</a> und tx wrkchain record</h2>
<p>record a WRKChain's block hashes</p>
<h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h3>
<p>Record a new WRKChain block's hash(es)'
Example:
$ und tx wrkchain record 1 --wc_height=24 --block_hash=&quot;d04b98f48e8&quot; --parent_hash=&quot;f8bcc15c6ae&quot; --hash1=&quot;5ac050801cd6&quot; --hash2=&quot;dcfd428fb5f9e&quot; --hash3=&quot;65c4e16e7807340fa&quot; --from mykey
$ und tx wrkchain record 1 --wc_height=25 --block_hash=&quot;d04b98f48e8&quot; --from mykey
$ und tx wrkchain record 1 --wc_height=26 --block_hash=&quot;d04b98f48e8&quot; --parent_hash=&quot;f8bcc15c6ae&quot; --from mykey</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx wrkchain record [wrkchain_id] [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  -a, --account-number uint      The account number of the signing account (offline mode only)
      --block_hash string        WRKChain block's header (main) hash
  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fee-account string       Fee account pays fees for the transaction instead of deducting from the signer
      --fees string              Fees to pay along with transaction; eg: 10uatom
      --from string              Name or address of private key with which to sign
      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
      --hash1 string             (optional) Additional WRKChain hash - e.g. State Merkle Root
      --hash2 string             (optional) Additional WRKChain hash - e.g. Tx Merkle Root
      --hash3 string             (optional) Additional WRKChain hash
  -h, --help                     help for record
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                   Use a connected Ledger device
      --node string              &amp;#9001;host&amp;#9002;:&amp;#9001;port&amp;#9002; to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --note string              Note to add a description to the transaction (previously --memo)
      --offline                  Offline mode (does not allow any online functionality
  -o, --output string            Output format (text|json) (default "json")
      --parent_hash string       (optional) WRKChain block's parent hash
  -s, --sequence uint            The sequence number of the signing account (offline mode only)
      --sign-mode string         Choose sign mode (direct|amino-json), this is an advanced feature
      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height
      --wc_height uint           WRKChain block's height/block number
  -y, --yes                      Skip tx broadcasting prompt confirmation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-inherited-from-parent-commands" tabindex="-1"><a class="header-anchor" href="#options-inherited-from-parent-commands" aria-hidden="true">#</a> Options inherited from parent commands</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      --chain-id string   The network chain ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> SEE ALSO</h3>
<ul>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_wrkchain.html">und tx wrkchain</RouterLink>	 - WRKChain transaction subcommands</li>
</ul>
<h6 id="auto-generated-by-spf13-cobra-on-22-jul-2022" tabindex="-1"><a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-22-jul-2022" aria-hidden="true">#</a> Auto generated by spf13/cobra on 22-Jul-2022</h6>
</div></template>
