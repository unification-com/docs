## und query gov constitution

Query the current chain constitution

```
und query gov constitution [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for constitution
      --no-indent          Do not indent JSON output
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query gov](und_query_gov.md)	 - Querying commands for the gov module

###### Auto generated by spf13/cobra on 6-May-2025
