## und query gov proposals

Query proposals with optional filters

```
und query gov proposals [flags]
```

### Examples

```
und query gov proposals --depositor cosmos1...
und query gov proposals --voter cosmos1...
und query gov proposals --proposal-status (unspecified | deposit-period | voting-period | passed | rejected | failed)
```

### Options

```
      --depositor account address or key name                                                                        
      --grpc-addr string                                                                                             the gRPC endpoint to use for this chain
      --grpc-insecure                                                                                                allow gRPC over insecure channels, if not the server must use TLS
      --height int                                                                                                   Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help                                                                                                         help for proposals
      --no-indent                                                                                                    Do not indent JSON output
      --node string                                                                                                  &lt;host&gt;:&lt;port&gt; to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string                                                                                                Output format (text|json) (default "text")
      --page-count-total                                                                                             
      --page-key binary                                                                                              
      --page-limit uint                                                                                              
      --page-offset uint                                                                                             
      --page-reverse                                                                                                 
      --proposal-status ProposalStatus (unspecified | deposit-period | voting-period | passed | rejected | failed)    (default unspecified)
      --voter account address or key name                                                                            
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
```

### SEE ALSO

* [und query gov](und_query_gov.md)	 - Querying commands for the gov module

###### Auto generated by spf13/cobra on 6-May-2025
