## und query wrkchain params

Query the current WRKChain parameters

```
und query wrkchain params [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for params
      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query wrkchain](und_query_wrkchain.md)	 - Querying commands for the wrkchain module

###### Auto generated by spf13/cobra on 1-Aug-2024
