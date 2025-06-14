## und query ibc connection path

Query stored client connection paths

### Synopsis

Query stored client connection paths

```
und query ibc connection path [client-id] [flags]
```

### Examples

```
und query  ibc connection path [client-id]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for path
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --prove              show proofs for the query results (default true)
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query ibc connection](und_query_ibc_connection.md)	 - IBC connection query subcommands

###### Auto generated by spf13/cobra on 6-May-2025
