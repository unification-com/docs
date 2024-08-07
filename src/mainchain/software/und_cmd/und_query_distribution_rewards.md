## und query distribution rewards

Query all distribution delegator rewards or rewards from a particular validator

### Synopsis

Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.

Example:
$ und query distribution rewards und1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p
$ und query distribution rewards und1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p undvaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj

```
und query distribution rewards [delegator-addr] [validator-addr] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for rewards
      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query distribution](und_query_distribution.md)	 - Querying commands for the distribution module

###### Auto generated by spf13/cobra on 1-Aug-2024
