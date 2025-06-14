## und query distribution community-pool

Query the amount of coins in the community pool

```
und query distribution community-pool [flags]
```

### Examples

```
$ und query distribution community-pool
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for community-pool
      --no-indent          Do not indent JSON output
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query distribution](und_query_distribution.md)	 - Querying commands for the distribution module

###### Auto generated by spf13/cobra on 6-May-2025
