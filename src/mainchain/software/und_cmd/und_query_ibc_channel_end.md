## und query ibc channel end

Query a channel end

### Synopsis

Query an IBC channel end from a port and channel identifiers

```
und query ibc channel end [port-id] [channel-id] [flags]
```

### Examples

```
und query ibc channel end [port-id] [channel-id]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for end
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --prove              show proofs for the query results (default true)
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query ibc channel](und_query_ibc_channel.md)	 - IBC channel query subcommands

###### Auto generated by spf13/cobra on 6-May-2025
