## und query beacon beacons-filtered

Query for all BEACONS

### Synopsis

Query details about all BEACONS on a network, with optional filters for owner and moniker.

```
und query beacon beacons-filtered [flags]
```

### Examples

```
$ und query beacon beacons-filtered --owner und1x8pl6wzqf9atkm77ymc5vn5dnpl5xytmn200xy
```

### Options

```
      --grpc-addr string                    the gRPC endpoint to use for this chain
      --grpc-insecure                       allow gRPC over insecure channels, if not the server must use TLS
      --height int                          Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help                                help for beacons-filtered
      --moniker string                      
      --no-indent                           Do not indent JSON output
      --node string                         &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string                       Output format (text|json) (default "text")
      --owner account address or key name   
      --page-count-total                    
      --page-key binary                     
      --page-limit uint                     
      --page-offset uint                    
      --page-reverse                        
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query beacon](und_query_beacon.md)	 - Querying commands for the beacon module

###### Auto generated by spf13/cobra on 6-May-2025
