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

```bash
und start --home=/path/to/.und_mainchain
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