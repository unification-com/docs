::: danger IMPORTANT
Please ensure you download the correct genesis for the network you would like to join! Remember to change the output
directory in the command below if you are using something other than the default `$HOME/.und_mainchain` directory!
:::

To spin up your new node, download the latest `genesis.json` for the network you would like to join:

#### TestNet

```bash
curl https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json
```

#### MainNet

```bash
curl https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json
```
