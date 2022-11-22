# IBC Transfer to Gravity Bridge via CLI

This guide will cover the commands required to send FUND from Unification over IBC to the ERC20 wFUND contract on
Ethereum mainnet, and back again. The guide assumes any wallets the reader has (Unification, Gravity Bridge and 
Ethereum) are sufficiently funded to cover any gas fees on the respective chains in addition to the FUND being 
transferred.

::: warning Note
This guide is for advanced users. If you are not comfortable using CLI, please refer to the [Web Portal](web-portal.md)
guide.

**Disclaimer: you are responsible for the safety and security of your mnemonics, private keys and crypto assets! 
Please keep your mnemonics and keys safe, and only send small amounts until you are comfortable and 
confident with the process!**
:::

## IBC Overview

### Unification

- **Chain ID**: `FUND-MainNet-2`
- **Channel**: `channel-2`
- **Denom**: `nund`

### Gravity Bridge

- **Chain ID**: `gravity-bridge-3`
- **Channel**: `channel-98`
- **Denom**: `ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519`

### Ethereum

- **Chain ID**: `1`
- **wFUND Contract**: [`0xe9b076b476d8865cdf79d1cf7df420ee397a7f75`](https://etherscan.io/token/0xe9b076b476d8865cdf79d1cf7df420ee397a7f75)

## Software Requirements

The required binaries for your operating system are as follows:

1. The latest `und` binary. See [Installing the Mainchain Software](../../software/installation.md) or 
download directly from [`und` Releases](https://github.com/unification-com/mainchain/releases/latest) on GitHub
2. The latest `gravity` and `gbt` binaries. See 
[Gravity Bridge Releases](https://github.com/Gravity-Bridge/Gravity-Bridge/releases/latest) on GitHub

Each binary can be installed into, for example `/usr/local/bin`. The remainder of this guide assumes the binaries are
included somewhere in your `$PATH`

## Create/Recover wallets

Three wallet addresses are required - one for each network. The same mnemonic can be used for all three, or a unique
one can be created for each. This guide will create new keys for both `und` and `gravity`, and use the same mnemonic.

For Unification and Gravity Bridge, the wallets will need creating/importing into the respective `und` and `gravity`
keystores.

For Ethereum, only the private key hex is required, and only for the `eth-to-cosmos` command towards the end of the 
guide. This can be exported from, for example, MetaMask. It is assumed the reader already has an Ethereum wallet with 
sufficient Ether.

### `und`

First, create a new wallet in the `und` keystore:

```bash
und keys add fund_ibc_wallet
```

Safely make a note of the Mnemonic and wallet address, and ensure the wallet has some FUND transferred into it

::: tip Note
Instead of creating a new wallet, you can use an existing mnemonic - just add the `--recover` to the `und` command 
above and follow the prompts.
:::

### `gravity`

The `gravity` command is the same, but we'll pass the `--recover` flag in order to use the mnemonic output in the 
previous step:

```bash
gravity keys add grav_ibc_wallet --recover
```

Similarly, make a note of the wallet address.

::: tip Note
Although IBC Transactions are _currently_ free on Gravity Bridge, ensure the wallet has some GRAV available 
in the event that this changes in the future.
:::

## Send FUND from Unification to Gravity Bridge

As an example, we'll send 200 FUND. The official channel to send FUND via IBC to Gravity Bridge is `channel-2`. Change
`<YOUR_gravity_WALLET_ADDRESS>` to the bech32 `gravity` prefixed address from the previous `gravity keys add...` command. 

```bash
und tx ibc-transfer transfer transfer channel-2 <YOUR_gravity_WALLET_ADDRESS> 200000000000nund \
  --from fund_ibc_wallet \
  --gas auto \
  --gas-adjustment 1.2 \
  --gas-prices 25.0nund \
  --chain-id "FUND-MainNet-2" \
  --node "https://rpc1.unification.io:443"
```

Within a few blocks, you should see the IBC FUND in your `gravity` wallet - 

```bash
gravity query bank balances <YOUR_gravity_WALLET_ADDRESS> \
  --node https://gravitychain.io:26657 \
  --chain-id gravity-bridge-3
```

will output something like:

```yaml
balances:
- amount: "200000000000"
  denom: ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519
- amount: "1000000"
  denom: ugraviton
pagination:
  next_key: null
  total: "0"
```

`ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519` is the `nund` IBC denomination on Gravity Bridge.

## Send IBC FUND from Gravity Bridge to wFUND ERC-20

Once you have confirmed that the IBC FUND is in your Gravity Bridge wallet, you should be able to send some across the
bridge to the wFUND ERC-20 on Ethereum.

In this example, we'll send 100 FUND, and set the Bridge Fees to 20 FUND. This should hopefully be sent in a batch by
the Gravity Bridge relayers in a few hours (although it could take less or more time, depending on the number of pending
bridge transactions).

We'll be using the `gravity` binary to do so, replacing `<0xYOUR_ETH_WALLET>` with the Ethereum wallet address in which
you wish to receive the wFUND:

```bash
gravity tx gravity send-to-eth <0xYOUR_ETH_WALLET> \
  100000000000ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519 \
  2000000000ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519 \
  --node https://gravitychain.io:26657 \
  --fees 0ugraviton \
  --chain-id gravity-bridge-3 \
  --from grav_ibc_wallet
```

::: tip Note
The second value, `2000000000ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519` is the "bridge fee".
This is how much FUND you are willing to pay a relayer to bridge for you - because relaying on Ethereum costs the 
relayer Eth in gas fees. Higher bridge fees should - _in theory_ - result in faster transfers. Lower fees will mean your
transfer may need to wait to be included by a relayer into a profitable batch, and as a result will take longer.
:::

Once sent, you will be able to query the status of your bridge transfer:

```bash
gravity query gravity pending-send-to-eth <YOUR_gravity_WALLET_ADDRESS> \
  --node https://gravitychain.io:26657 \
  --chain-id gravity-bridge-3
```

This will output something like:

```yaml
transfers_in_batches: []
unbatched_transfers:
- dest_address: <0xYOUR_ETH_WALLET>
  erc20_fee:
    amount: "20000000000"
    contract: 0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75
  erc20_token:
    amount: "100000000000"
    contract: 0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75
  id: "1234"
  sender: <YOUR_gravity_WALLET_ADDRESS>
```

If your transaction is in the `unbatched_transfers` array, it is waiting for a relayer to add it to a batch.  
If your transaction is in the `transfers_in_batches`, it has been batched and is waiting for a relayer to send it to
the ERC-20.

After some time, you should see 100 FUND in your Ethereum wallet.

### Cancelling an ERC-20 Bridge Transaction

If your transaction remains in `unbatched_transfers` for a long time, you can cancel the transaction and try again with
a different bridge fee.

Make a note of the `id` value form the output of the previous command - in this case it's `1234`. Then run the 
following, replacing `<THE_ID>` with the ID of the transaction you would like to cancel:

```bash
gravity tx gravity cancel-send-to-eth <THE_ID> \
  --node https://gravitychain.io:26657 \
  --fees 0ugraviton \
  --chain-id gravity-bridge-3 \
  --from grav_ibc_wallet
```

Your IBC FUND will be returned to your `gravity` wallet, and the bridge transfer to ERC-20 cancelled.

::: warning Note
Only transactions in `unbatched_transfers` can be cancelled.
:::

## Send from wFUND ERC-20 to Gravity Bridge

Sending from the ERC-20 to Gravity Bridge requires the `gbt` binary. In this example, we'll send 50 wFUND back to
Gravity Bridge chain from the ERC-20 contract. Replacing `<0xETH_PRIVATE_KEY>` accordingly, run:

```bash
gbt client eth-to-cosmos \
  --ethereum-key <0xETH_PRIVATE_KEY> \
  --gravity-contract-address "0xa4108aA1Ec4967F8b52220a4f7e94A8201F2D906" \
  --token-contract-address "0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75" \
  --amount 10 \
  --destination <YOUR_gravity_WALLET_ADDRESS> \
  --ethereum-rpc https://eth.althea.net
```

- `--ethereum-key` should be the private key for the Ethereum wallet currently containing the 100 wFUND.
- `--gravity-contract-address` is the current address of `Gravity.sol`. This is `0xa4108aA1Ec4967F8b52220a4f7e94A8201F2D906`
at the time of writing
- `--token-contract-address` is the ERC-20 contract address of wFUND, `0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75`.
- `--destination` is the bech32 `gravity` prefixed wallet address you are sending to on Gravity Bridge.

::: tip
You may want to wipe the last command from your command line history (for example `$HOME/bash_history`) to prevent
your Ethereum private key from being stored in history, for example:

```bash
history -d -2--1
```

will delete the last two commands from your CLI history (including the `history -d -2--1` just run)
:::

The `gbt client eth-to-cosmos` command will output several lines - one of which will be the Ethereum Tx hash, which you 
can use to monitor process with for example Etherscan. For example:

```log
[2022-11-21T10:24:25Z INFO  gbt::client::eth_to_cosmos] Sending 10000000000 / 0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75 to Cosmos from 0x... to gravity...
[2022-11-21T10:24:27Z INFO  ethereum_gravity::send_to_cosmos] sending to on cosmos gravity...
[2022-11-21T10:24:38Z INFO  gbt::client::eth_to_cosmos] Send to Cosmos txid: 0x...
[2022-11-21T10:24:38Z INFO  gbt::client::eth_to_cosmos] Your tokens should show up in the account gravity... on the destination chain within 5 minutes
```

The FUND should appear back in your `gravity` wallet after **96** Ethereum block confirmations. At the time of writing, 
this is approximately 25 minutes.

## Send from Gravity Bridge to Unification

Finally, we'll use the `gravity` binary to send 50 FUND back to Unification, replacing `<YOUR_und_WALLET_ADDRESS>` with
your `und` wallet address from the first steps:

```bash
gravity tx ibc-transfer transfer transfer channel-98 <YOUR_und_WALLET_ADDRESS> \
  50000000000ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519 \
  --from grav_ibc_wallet \
  --gas auto \
  --gas-adjustment 1.2 \
  --gas-prices 0ugraviton \
  --node https://gravitychain.io:26657 \
  --chain-id gravity-bridge-3
```

After a few blocks, you should see the FUND back in your Unification wallet:

```bash
und query bank balances <YOUR_und_WALLET_ADDRESS> \
  --chain-id "FUND-MainNet-2" \
  --node "https://rpc1.unification.io:443"
```
