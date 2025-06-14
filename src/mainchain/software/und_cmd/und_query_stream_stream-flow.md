## und query stream stream-flow

Query a stream's current flow for receiver/sender pair

### Synopsis

Query a stream's current flow rate for receiver/sender pair. This will be zero if the stream has expired

```
und query stream stream-flow [receiver_addr] [sender_addr] [flags]
```

### Examples

```
$ und query stream stream-flow und1eq239sgefyzm4crl85nfyvt7kw83vrna3f0eed und1chknpc8nf2tmj5582vhlvphnjyekc9ypspx5ay
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for stream-flow
      --no-indent          Do not indent JSON output
      --node string        &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query stream](und_query_stream.md)	 - Querying commands for the stream module

###### Auto generated by spf13/cobra on 6-May-2025
