## und rosetta

spin up a rosetta server

```
und rosetta [flags]
```

### Options

```
      --addr string         the address rosetta will bind to (default ":8080")
      --blockchain string   the blockchain type (default "app")
      --grpc string         the app gRPC endpoint (default "localhost:9090")
  -h, --help                help for rosetta
      --network string      the network name (default "network")
      --offline             run rosetta only with construction API
      --retries int         the number of retries that will be done before quitting (default 5)
      --tendermint string   the tendermint rpc endpoint, without tcp:// (default "localhost:26657")
```

### SEE ALSO

* [und](und.md)	 - Unification Mainchain App

###### Auto generated by spf13/cobra on 22-Jul-2022
