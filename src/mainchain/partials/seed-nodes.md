::: danger IMPORTANT
Please ensure you get the correct seed node information for the network you would like to join! Remember to change the
directory if you are using something other than the default `$HOME/.und_mainchain` directory!
For this guide, we are using `/mnt/disks/data/.und_mainchain` for the node's home directory.
:::

Your node will need to know at least one seed node in order to join the network
and begin P2P communication with other nodes in the network. The latest seed information will always be available at
each network's respective Github repo:

#### TestNet: [https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md](https://github.com/unification-com/testnet/blob/master/latest/seed_nodes.md)

#### MainNet: [https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md](https://github.com/unification-com/mainnet/blob/master/latest/seed_nodes.md)

Go to the repo for the network you are connecting to and copy one or more of the seed nodes (you only need
the `id@address:port`)

Edit your node configuration file using nano:

```bash
nano /path/to/.und_mainchain/config/config.toml
```

Hit <kbd>Ctrl</kbd>+<kbd>W</kbd>, type `[p2p]` (including the square brackets) and hit return - this will take you to
the `[p2p]` section of the config file, which begins with:

```
##### peer to peer configuration options #####
[p2p]
```

Find the `seeds = ""` variable about 12 lines below, and add the seed node information between the double quotes (comma
separated, no spaces if more than one). For example:

```toml
seeds = "node_id@ip:port"
```
