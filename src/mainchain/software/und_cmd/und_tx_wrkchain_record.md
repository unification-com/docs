## und tx wrkchain record

record a WRKChain's block hashes

### Synopsis

Record a new WRKChain block's hash(es)'
Example:
$ und tx wrkchain record 1 --wc_height=24 --block_hash="d04b98f48e8" --parent_hash="f8bcc15c6ae" --hash1="5ac050801cd6" --hash2="dcfd428fb5f9e" --hash3="65c4e16e7807340fa" --from mykey
$ und tx wrkchain record 1 --wc_height=25 --block_hash="d04b98f48e8" --from mykey
$ und tx wrkchain record 1 --wc_height=26 --block_hash="d04b98f48e8" --parent_hash="f8bcc15c6ae" --from mykey

```
und tx wrkchain record [wrkchain_id] [flags]
```

### Options

```
  -a, --account-number uint      The account number of the signing account (offline mode only)
      --aux                      Generate aux signer data instead of sending a tx
      --block_hash string        WRKChain block's header (main) hash
  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")
      --chain-id string          The network chain ID
      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it (when enabled, the local Keybase is not accessible)
      --fee-granter string       Fee granter grants fees for the transaction
      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer
      --fees string              Fees to pay along with transaction; eg: 10uatom
      --from string              Name or address of private key with which to sign
      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn't always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)
      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)
      --hash1 string             (optional) Additional WRKChain hash - e.g. State Merkle Root
      --hash2 string             (optional) Additional WRKChain hash - e.g. Tx Merkle Root
      --hash3 string             (optional) Additional WRKChain hash
  -h, --help                     help for record
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                   Use a connected Ledger device
      --node string              &lt;host&gt;:&lt;port&gt; to CometBFT rpc interface for this chain (default "tcp://localhost:26657")
      --note string              Note to add a description to the transaction (previously --memo)
      --offline                  Offline mode (does not allow any online functionality)
  -o, --output string            Output format (text|json) (default "json")
      --parent_hash string       (optional) WRKChain block's parent hash
  -s, --sequence uint            The sequence number of the signing account (offline mode only)
      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature
      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height
      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn't enable the TipDecorator
      --wc_height uint           WRKChain block's height/block number
  -y, --yes                      Skip tx broadcasting prompt confirmation
```

### SEE ALSO

* [und tx wrkchain](und_tx_wrkchain.md)	 - WRKChain transaction subcommands

###### Auto generated by spf13/cobra on 6-May-2025
