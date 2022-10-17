# Fully sync MainNet from Legacy to Current

It is entirely possible - should you wish - to set up and fully sync a `MainNet` node from the original 
`FUND-Mainchain-MainNet-v1` genesis, right up to the current block.

This guide will cover the necessary steps for those who prefer to do so.

::: danger WARNING
To fully sync the chain from `FUND-Mainchain-MainNet-v1` will take several days and require a significant amount of
disk space! Ensure you have at least 300Gb disk space available to allow for syncs, and upwards of 500Gb if backups 
are required.
:::

There are several steps required, some of which will require manual intervention:

1. Initialise the node using `und` v1.4.8 & Synchronise from `FUND-Mainchain-MainNet-v1` genesis to block 11,039,060
2. Export and migrate the state from block 11,039,060 to the `FUND-MainNet-2` genesis using `und` v1.4.9
3. Set up and initialise Cosmovisor, and the current `und` binaries (v1.5.x, v1.6.x etc.)
4. Sync from `FUND-MainNet-2` genesis to the current block

## 1. Initialise & sync `FUND-Mainchain-MainNet-v1`

`FUND-Mainchain-MainNet-v1` ran for just over 2 years, and resulted in 11,039,060 blocks. The first step is to 
initialise your node using `und` v1.4.8, and synchronise it from genesis to block 11,039,060. In addition to the
Legacy RPC, REST and Explorers, the Unification Foundation maintains a Legacy node dedicated to P2P to allow for this.

### Install dependencies

Update, e.g.

```bash
sudo apt update -y
```

!!!include(mainchain/partials/prerequisites.md)!!!

### Download `und` v1.4.8

Download and install `und` v1.4.8:

```bash
cd $HOME
mkdir -p legacy/v1.4.8 && cd legacy/v1.4.8
wget https://github.com/unification-com/mainchain/releases/download/1.4.8/und_v1.4.8_linux_x86_64.tar.gz
tar -zxvf und_v1.4.8_linux_x86_64.tar.gz
```

### Initialise your node

Next, initialise the node and its configuration files:

```bash
$HOME/legacy/v1.4.8/und init my-node
```

Modify `my-node` accordingly, to a suitable moniker for your node.

### Download and check `FUND-Mainchain-MainNet-v1` genesis

We'll need the `FUND-Mainchain-MainNet-v1` genesis file to start with:

```bash 
curl https://raw.githubusercontent.com/unification-com/mainnet/master/legacy/0.38/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json
```

and check the Chain ID is `FUND-Mainchain-MainNet-v1`:

```bash
jq --raw-output '.chain_id' $HOME/.und_mainchain/config/genesis.json
```

### Configure P2P connection

There are no seed nodes for `FUND-Mainchain-MainNet-v1`. Instead, we'll set the Foundation's Legacy P2P node
as a persistent peer. Open `$HOME/.und_mainchain/config/config.toml` with a text editor, for example `nano`:

```bash
nano $HOME/.und_mainchain/config/config.toml
```

In the `[p2p]` section, set `persistent_peers` as follows, and save:

```bash
persistent_peers = "6e9fe5b2aed55bc322d8a90a8a011b45c70c076d@legacy-fund-mainnet-v1-p2p.unification.io:26656"
```

### Configure Application settings

Next, the `app.toml` needs some configuring:

```bash
nano $HOME/.und_mainchain/config/app.toml
```

Find and set the following values:

```toml
minimum-gas-prices = "0.25nund"
halt-height = 11039060
pruning = "everything"
```

### Configure `und` to run as a `systemd` service

To allow `und` to run as a background service, it's recommended to create and maintain a `systemd` service. Create the
service file:

```bash
sudo nano /etc/systemd/system/und.service
```

Containing the following minimal configuration:

```bash
[Unit]
Description=Unification Mainchain Validator Node

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu
ExecStart=/home/ubuntu/legacy/v1.4.8/und start
Restart=on-failure
RestartSec=10s
LimitNOFILE=4096

[Install]
WantedBy=default.target
```

Modify as required, taking particular notice to the `User`, `Group`, `WorkingDirectory` and `ExecStart` values.

Finally, install the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable und
```

and run it:

```bash
sudo systemctl start und
```

You can now monitor the sync progress with:

```bash
sudo journalctl -u und -f
```

Once it reaches block 11,039,060, the node will stop and exit.

## 2. Export and Migrate `FUND-Mainchain-MainNet-v1` to `FUND-MainNet-2`

:::danger IMPORTANT
Do not proceed with the following steps until your node has fully synced up to block 11,039,060. Doing so will result in
an incorrect `FUND-MainNet-2` genesis export!

Fully syncing the legacy chain will take several days, if not weeks to complete!
:::

Once `FUND-Mainchain-MainNet-v1` has been fully synced, it will be possible to run the first upgrade. This upgrade was
originally run on Wednesday 8th June 2022 at 11:00:00 GMT+0000, and the exact steps run by validators will be 
implemented here.

Stop the `systemd` service:

```bash
sudo systemctl stop und
```

### Optionally backup the `.und_mainchain` directory

Backups are always a good idea. Use `rsync`, or `tar` to backup, for example:

```bash
rsync -av $HOME/.und_mainchain/ $HOME/und_mainchain_BAK/
```

Or

```bash
cd $HOME/.und_mainchain
tar -cpzf $HOME/und_mainchain.backup.tar.gz *
```

The backup may consume 90Gb - 150Gb disk space, but can be deleted after a successful upgrade/migration.

### Download `und` v1.4.9

`und` v1.4.9 was used to export the `FUND-Mainchain-MainNet-v1` chain state to a new genesis.

```bash
cd $HOME
mkdir -p legacy/v1.4.9 && cd legacy/v1.4.9
wget https://github.com/unification-com/mainchain/releases/download/1.4.9/und_v1.4.9_linux_x86_64.tar.gz
tar -zxvf und_v1.4.9_linux_x86_64.tar.gz
```

### Export the `FUND-Mainchain-MainNet-v1` chain state

Export the current chain state to the new genesis. Effectively, all accounts,
wallets, balances and all other chain data at block 11,039,060 were exported to a new genesis block, such that the
entire chain state at block 11,039,060 becomes the new block 0 for `FUND-MainNet-2`.

You must use `und` v1.4.9 to execute this:

```bash
$HOME/legacy/v1.4.9/und export --for-zero-height --home=$HOME/.und_mainchain > $HOME/v038_exported_state.json
```

### Download `und` v1.5.1

`und` v1.5.1 was used to migrate the exported `FUND-Mainchain-MainNet-v1` chain state to the `FUND-MainNet-2` genesis,
and to run the new chain up to block 2,002,620.

```bash
cd $HOME
mkdir -p upgrade/v1.5.1 && cd upgrade/v1.5.1
wget https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz
tar -zxvf und_v1.5.1_linux_x86_64.tar.gz
```

### Migrate `FUND-Mainchain-MainNet-v1` to `FUND-MainNet-2`

Next, we need to migrate the exported `FUND-Mainchain-MainNet-v1` chain state data to the new `FUND-MainNet-2` genesis,
using `und` v1.5.1:

```bash
$HOME/upgrade/v1.5.1/und migrate $HOME/v038_exported_state.json --chain-id=FUND-MainNet-2 --genesis-time="2022-06-08T14:00:00Z" --log_level="" > $HOME/new_v042_genesis.json
```

Validate the migrated genesis:

```bash
$HOME/upgrade/v1.5.1/und validate-genesis --log_level="" $HOME/new_v042_genesis.json
```

Generate a checksum - it should result in `aca9b55183c0689e38d5b75ec63064aa84df838808833736c70b12c93adf323f`:

```bash
jq -S -c -M '' $HOME/new_v042_genesis.json | sha256sum
```

Reset the chain data for your node:

```bash
$HOME/upgrade/v1.5.1/und unsafe-reset-all --log_level="" --home=$HOME/.und_mainchain
```

Copy the new genesis file to replace the old version in `$HOME/.und_mainchain/config`:

```bash
cp $HOME/new_v042_genesis.json $HOME/.und_mainchain/config/genesis.json
```

Download the new Cosmos SDK v0.42 formatted `app.toml` and replace your old version in `$HOME/.und_mainchain/config`:

```bash
curl https://raw.githubusercontent.com/unification-com/mainnet/master/latest/042_app.toml > $HOME/.und_mainchain/config/app.toml
```

Modify as required:

```bash
nano $HOME/.und_mainchain/config/app.toml
```

To aid the network, it's worth setting some values in the `[state-sync]` section in `app.toml`, for example:

```toml
snapshot-interval = 500
snapshot-keep-recent = 4
```

Finally, change the `log_level` in `$HOME/.und_mainchain/config/config.toml`, as the variable format has changed in 
Cosmos SDK 0.42.x:

```bash
nano $HOME/.und_mainchain/config/config.toml
```

and set:

```toml
log_level = "info"
```

## 3. Configure and Migrate to Cosmovisor

Now that the fundamentals are in place, we can migrate the running and management of the `und` daemon to Cosmovisor, 
and continue syncing the chain until it's up-to-date.

### Install Cosmovisor

First, install `cosmovisor`

!!!include(mainchain/partials/cosmovisor/install_cosmovisor.md)!!!

### Set up cosmovisor directory structure

Next, we need to set up some directories and `und` binaries for Cosmovisor to work with:

#### `und` v1.5.1 -> `genesis`:

```bash
mkdir -p $HOME/.und_mainchain/cosmovisor/genesis/bin
mv $HOME/upgrade/v1.5.1/und $HOME/.und_mainchain/cosmovisor/genesis/bin
```

#### `und` v1.6.x -> `1-init_ibc` update

```bash
mkdir -p $HOME/upgrade/v1.6.3 && cd $HOME/upgrade/v1.6.3
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz
tar -zxvf und_v1.6.3_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/1-init_ibc/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/1-init_ibc/bin
```

### Create cosmovisor environment file

Create an environment variable file which will load into the `systemd` service, modifying `/FULL/PATH/TO/` as
required:

!!!include(mainchain/partials/cosmovisor/cosmovisor_env.md)!!!

### Edit systemd service file

Open the `und.service` file in a text editor

```bash
sudo nano /etc/systemd/system/und.service
```

Add the `EnvironmentFile` directive to the `[Service]` section using the full, absolute path to `UND_COSMOVISOR_ENV`, 
for example:

```bash
EnvironmentFile=/home/ubuntu/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV
```

Edit the `ExecStart` directive, replacing `/path/to/und start` with `/usr/local/bin/cosmovisor run`, for example:

change:

```bash
ExecStart=/home/ubuntu/legacy/v1.4.8/und start
```

to:

```bash
ExecStart=/usr/local/bin/cosmovisor run start
```

Your service file should now look something along the lines of:

```bash
[Unit]
Description=Unification Mainchain Validator Node

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu
EnvironmentFile=/home/ubuntu/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV
ExecStart=/usr/local/bin/cosmovisor run start
Restart=on-failure
RestartSec=10s
LimitNOFILE=4096

[Install]
WantedBy=default.target
```

## 4. Reload the daemon and sync!

Finally, we can reload the `systemd` service file changes:

```bash
sudo systemctl daemon-reload
```

then restart the `und` service:

```bash
sudo systemctl start und
```

Finally, monitor progress with:

```bash
sudo journalctl -u und -f
```

Cosmovisor will automatically handle any upgrades (for example, v1.5.1 -> v1.6.x).

**Note:** your node may still take several more days to fully sync!
