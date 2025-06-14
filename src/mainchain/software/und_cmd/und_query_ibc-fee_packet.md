## und query ibc-fee packet

Query for an unrelayed incentivized packet by port-id, channel-id and packet sequence.

### Synopsis

Query for an unrelayed incentivized packet by port-id, channel-id and packet sequence.

```
und query ibc-fee packet [port-id] [channel-id] [sequence] [flags]
```

### Examples

```
und query ibc-fee packet
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for packet
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query ibc-fee](und_query_ibc-fee.md)	 - IBC relayer incentivization query subcommands

###### Auto generated by spf13/cobra on 6-May-2025
