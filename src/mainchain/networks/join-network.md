# Run a Full Node & Join a Public Network

Once you have [installed](../software/installation.md) the required software, you can run a full node, join one of the 
public networks (TestNet or MainNet) and try out [becoming a validator](become-validator.md).

::: warning IMPORTANT
Whenever you use `und` to send Txs or query the chain ensure you pass the correct data to the  
`--chain-id` and if necessary `--node` flags so that you connect to the correct network!
:::

#### Contents

[[toc]]

## Prerequisites

Before continuing, ensure you have gone through the following docs:

1. [Installing the software](../software/installation.md)

## Initialising a New Node

Once installed, you will need to initialise your node:

```bash
und init [your_node_moniker]
```

`[your_node_moniker]` can be any identifier you like, but are limited to ASCII characters. For example:

```bash
und init MyAwesomeNode
```

Once initialised, you can edit your configuration in `$HOME/.und_mainchain/config/config.toml` and in 
`$HOME/.und_mainchain/config/app.toml`. See [configuration reference](../software/und-mainchain-config-ref.md) 
for more details on the config file.

::: tip NOTE
the default directory used by `und` is `$HOME/.und_mainchain`. This can be changed by passing the global `--home` 
flag to the `und` command, for example `und start --home $HOME/.und_mainchain_TestNet`.
:::

## Genesis

The latest genesis for each network can always be found in their respective Github repos:

#### TestNet: [https://github.com/unification-com/testnet/latest](https://github.com/unification-com/testnet/latest)
#### MainNet: [https://github.com/unification-com/mainnet/latest](https://github.com/unification-com/mainnet/latest)

### Download the latest Genesis

::: danger IMPORTANT
Please ensure you download the correct genesis for the network you would like to join! Remember to change the output 
directory in the command below if you are using something other than the default `$HOME/.und_mainchain` directory!
:::

To spin up your new node, download the latest `genesis.json` for the network you would like to join:

#### TestNet

```bash
curl https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json
```

#### MainNet

```bash
curl https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json
```

### Get the current Chain ID

::: tip
You'll need `jq` installed to run the command below. Use your package manager to install, for example 
`sudo apt install jq` on Debian based systems, and `sudo yum install jq` on CentOS/RedHat systems.
:::

The Chain ID will need to be passed to all `und` commands via the `--chain-id` flag. The current Chain ID for the 
network your node is connecting to can easily be found by running:

```bash
jq --raw-output '.chain_id' $HOME/.und_mainchain/config/genesis.json
```

This will output, for example:

```
FUND-TestNet-2
```

or

```
FUND-MainNet-2
```

which can then be passed to your `und` commands:

```bash
und query tx FCDFE69F20431B23CF16CAA68C10325EB2E1126FCDF8AD4010CCE927A0808740 --chain-id FUND-TestNet-2
```

## Seed Node Peers

::: danger IMPORTANT
Please ensure you get the correct seed node information for the network you would like to join! Remember to change the 
directory if you are using something other than the default `$HOME/.und_mainchain` directory!
:::

Your node will need to know at least one seed node in order to join the network
and begin P2P communication with other nodes in the network. The latest seed information will always be available at 
each network's respective Github repo:

#### TestNet: [https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md](https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md)

#### MainNet: [https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md](https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md)

Edit `$HOME/.und_mainchain/config/config.toml`, and set the `seeds` value with a comma separated list of one or more 
peers. **For example**, a `TestNet` seed node may look like:

```toml
seeds = "dcff5de69dcc170b28b6628a1336d420f7eb60c0@seed1-testnet.unification.io:26656"
```

::: warning IMPORTANT
always check the latest seed node in the respective network's repository - the above example may not always match the 
actual current seed node!
:::

## Minimum Gas

In order to protect your full node from spam transactions, it is good practice to set the `minimum-gas-prices` 
value in `$HOME/.und_mainchain/config/app.toml`. This should be set as a decimal value in `nund`, and the recommended value is currently `25.0nund`.

## Running your node

Now that you have `genesis`, and some seed nodes, you can run your full node. There are two methods currently for
syncing your node: full sync, and `statesync` from a snapshot.

### Full Sync

A full sync will sync the entire chain from genesis to the current block. This is simple, but may take several hours
or even days depending on the size of the chain since it replays every block. To begin a full sync, simply start 
the node:

```bash
und start
```

You should see that your node connects to some peers, and after a few seconds begins syncing with the network.

### Using `statesync`

Cosmos SDK >= 0.42, which is used by the latest `und` software, can use State Syncing  from Snapshots to quickly 
sync your node from a safe checkpoint. This potentially reduces the sync time to no more than an hour or so, and in 
most cases mere minutes.

Setting this up requires a few more steps

1. Run the following command to get the latest block hash and height. For **TestNet**:

```bash
curl -s https://rest-testnet.unification.io/blocks/latest | jq '.|[.block_id.hash,.block.header.height]'
```

For **MainNet**:

```bash
curl -s https://rest.unification.io/blocks/latest | jq '.|[.block_id.hash,.block.header.height]'
```

Example output:

```json
[
  "820275B5EE63EDA2923886A01C0B1196A7CE1D96A89FA0D774942999C6698AAC",
  "1052423"
]
```

2. Using the output from the above command, configure `[statesync]` section in `.und_mainchain/config.toml`:

```toml
enable = true
rpc_servers = "TWO_RPC_NODES"
trust_height = 1052423
trust_hash = "820275B5EE63EDA2923886A01C0B1196A7CE1D96A89FA0D774942999C6698AAC"
trust_period = "168h0m0s"
discovery_time = "30s"
temp_dir = ""
chunk_request_timeout = "60s"
chunk_fetchers = "4"
```

The `rpc_servers` requires two RPC nodes for verification.

For **TestNet**, replace `TWO_RPC_NODES` with:

`sync1-testnet.unification.io:26657,sync2-testnet.unification.io:26657`

For **MainNet**:

`sync1.unification.io:26657,sync2.unification.io:26657`

e.g.:

```toml
rpc_servers = "sync1.unification.io:26657,sync2.unification.io:26657"
```

Or any RPC servers of your choice for the target network.

3. Start your node

Run the node as usual:

```bash
und start
```

you should start seeing the following:

```bash
11:53AM INF Discovered new snapshot format=1 hash="V0���&�U1�J0�yP4A%�/���GŽ@\x05�<�j" height=1051600 module=statesync
```

After a few seconds (or at most, minutes), you should see your node start downloading the blocks:

```bash
11:56AM INF received proposal module=consensus proposal={"Type":32,"block_id":{"hash":"632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E","parts":{"hash":"E8246C504B9BC14275874A90C95E6AA035678302AD3BF9269B6F253B04C038BE","total":1}},"height":1052494,"pol_round":-1,"round":0,"signature":"HYJz0rV7o6bNm7za82sj1Az1rV25qVkLh9Y4s0K95nf86uVq+YmuDIf3LtIP7pDfFEYErxNVyeSplPGh7IVHDQ==","timestamp":"2022-05-19T10:56:03.273030584Z"}
11:56AM INF received complete proposal block hash=632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E height=1052494 module=consensus
11:56AM INF finalizing commit of block hash=632E122ADDF385954FB8598FEE7D89EB09D7E93746FB36D2F12DECFEB7F07D9E height=1052494 module=consensus num_txs=0 root=7EC77102840743503BD71FD89F60FD0B912DD0DE27575408B6AD67990CE4A6B8
11:56AM INF executed block height=1052494 module=state num_invalid_txs=0 num_valid_txs=0
11:56AM INF commit synced commit=436F6D6D697449447B5B3234312031333020323235203834203837203234372031303220323820323435203234382032372032303920313432203133372031303620353920343520323220323020313737203135342032303320323338203136352030203231322034392031383620313638203433203839203233395D3A3130304634457D
11:56AM INF committed state app_hash=F182E15457F7661CF5F81BD18E896A3B2D1614B19ACBEEA500D431BAA82B59EF height=1052494 module=state num_txs=0
11:56AM INF indexed block height=1052494 module=txindex
```

### Checkin the node's status

Running:

```bash
und status
```

in a separate terminal should output show that the node is running and connected to your chosen network.

By default, any transactions you send via the `und` command will be
sent via your local node (which was started using the `und start` command, and whose RPC is on `tcp://localhost:26656` 
and only open to `localhost`).

::: tip
You can use the `--node` flag with the `und` command to have it send to a different node instead. Default client values 
for `und` can also be set in `$HOME/.und_mainchain/config/client.toml`
:::

## Block Explorer

Our public block explorers can be found at:

#### TestNet: [https://explorer-testnet.unification.io](https://explorer-testnet.unification.io)

#### MainNet: [https://explorer.unification.io](https://explorer.unification.io)

## TestNet Faucet

Our public TestNet has a faucet which can be used to obtain Test FUND for
use **exclusively on the TestNet network**. You will need an [account](accounts-wallets.md) and its associated address 
in order to be able to claim Test FUND.

See [https://faucet-testnet.unification.io](https://faucet-testnet.unification.io)

#### Next

Creating and importing [accounts and wallets](accounts-wallets.md), [sending transactions](examples/transactions.md) 
and [becoming a Validator](become-validator.md)
