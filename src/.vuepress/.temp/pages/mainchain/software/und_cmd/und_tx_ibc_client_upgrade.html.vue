<template><div><h2 id="und-tx-ibc-client-upgrade" tabindex="-1"><a class="header-anchor" href="#und-tx-ibc-client-upgrade" aria-hidden="true">#</a> und tx ibc client upgrade</h2>
<p>upgrade an IBC client</p>
<h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h3>
<p>upgrade the IBC client associated with the provided client identifier while providing proof committed by the counterparty chain to the new client and consensus states
- ClientState JSON example: {&quot;@type&quot;:&quot;/ibc.lightclients.solomachine.v1.ClientState&quot;,&quot;sequence&quot;:&quot;1&quot;,&quot;frozen_sequence&quot;:&quot;0&quot;,&quot;consensus_state&quot;:{&quot;public_key&quot;:{&quot;@type&quot;:&quot;/cosmos.crypto.secp256k1.PubKey&quot;,&quot;key&quot;:&quot;AtK50+5pJOoaa04qqAqrnyAqsYrwrR/INnA6UPIaYZlp&quot;},&quot;diversifier&quot;:&quot;testing&quot;,&quot;timestamp&quot;:&quot;10&quot;},&quot;allow_update_after_proposal&quot;:false}
- ConsensusState JSON example: {&quot;@type&quot;:&quot;/ibc.lightclients.solomachine.v1.ConsensusState&quot;,&quot;public_key&quot;:{&quot;@type&quot;:&quot;/cosmos.crypto.secp256k1.PubKey&quot;,&quot;key&quot;:&quot;AtK50+5pJOoaa04qqAqrnyAqsYrwrR/INnA6UPIaYZlp&quot;},&quot;diversifier&quot;:&quot;testing&quot;,&quot;timestamp&quot;:&quot;10&quot;}</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx ibc client upgrade [client-identifier] [path/to/client_state.json] [path/to/consensus_state.json] [upgrade-client-proof] [upgrade-consensus-state-proof] [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>und tx ibc client upgrade [client-identifier] [path/to/client_state.json] [path/to/consensus_state.json] [client-state-proof] [consensus-state-proof] --from node0 --home ../node0/&amp;#9001;app&amp;#9002;cli --chain-id $CID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  -a, --account-number uint      The account number of the signing account (offline mode only)
  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fee-account string       Fee account pays fees for the transaction instead of deducting from the signer
      --fees string              Fees to pay along with transaction; eg: 10uatom
      --from string              Name or address of private key with which to sign
      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
  -h, --help                     help for upgrade
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
  -y, --yes                      Skip tx broadcasting prompt confirmation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-inherited-from-parent-commands" tabindex="-1"><a class="header-anchor" href="#options-inherited-from-parent-commands" aria-hidden="true">#</a> Options inherited from parent commands</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      --chain-id string   The network chain ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> SEE ALSO</h3>
<ul>
<li><RouterLink to="/mainchain/software/und_cmd/und_tx_ibc_client.html">und tx ibc client</RouterLink>	 - IBC client transaction subcommands</li>
</ul>
<h6 id="auto-generated-by-spf13-cobra-on-22-jul-2022" tabindex="-1"><a class="header-anchor" href="#auto-generated-by-spf13-cobra-on-22-jul-2022" aria-hidden="true">#</a> Auto generated by spf13/cobra on 22-Jul-2022</h6>
</div></template>
