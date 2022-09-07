# Install und, Cosmovisor and optionally Sync using statesync

:::tip Note
This guide is for fresh node installations. For existing nodes migrating to `cosmovisor`, please
see the [Migrations](../../migrations/README.md) documentation.
:::

Combining `cosmovisor` and `statesync`, it is possible to sync the chain in a short amount of time. Additionally, 
installing and configuring `cosmovisor` will make future updates much simpler.

This guide will cover both a full sync from genesis, and also configuring `statesync`.

## 1. Download the genesis version of und, initialise & configure

Fist, download the `und` version for `genesis`:

!!!include(mainchain/partials/cosmovisor/download_und_v1.5.1.md)!!!

Initialise the node

```bash
./und init [NODE_MONIKER]
```

**Download `genesis.json`**

!!!include(mainchain/partials/download-genesis.md)!!!

**Get the seed nodes**

!!!include(mainchain/partials/seed-nodes.md)!!!

**Set `gas-prices`**

!!!include(mainchain/partials/gas-price.md)!!!

## 2. Install & Configure Cosmovisor

Next, install `cosmovisor`

!!!include(mainchain/partials/cosmovisor/install_cosmovisor.md)!!!

### 2.1 Set up cosmovisor directory structure

Create the directory structure for the `und` binaries and updates

#### `und` v1.5.1 -> `genesis`:

!!!include(mainchain/partials/cosmovisor/install_und_v1.5.1.md)!!!

#### `und` v1.6.1 -> `1-ibc` update

!!!include(mainchain/partials/cosmovisor/install_und_v1.6.x.md)!!!

::: tip Note
Skip to section **2.2 Create cosmovisor environment file** below if you intend to run a full
sync from genesis!
:::

Create the `upgrade-info.json` file for `1-ibc`:

**TestNet `1-ibc`**

```bash
echo '{"name":"1-ibc","time":"0001-01-01T00:00:00Z","height":2410500}' | tee $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/upgrade-info.json
```

**MainNet `1-ibc`**

Coming Soon

### 2.2 Create cosmovisor environment file

Create an environment variable file which will load into the `systemd` service, modifying `/FULL/PATH/TO/` as
required:

```bash
tee $HOME/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV > /dev/null <<EOF
DAEMON_NAME=und
DAEMON_HOME=/FULL/PATH/TO/.und_mainchain
DAEMON_RESTART_AFTER_UPGRADE=true
DAEMON_RESTART_DELAY=5s
EOF
```

### 2.3 Point Cosmovisor to the latest und

::: tip Note
Skip to section **3. Set up the systemd service** below if you intend to run a full
sync from genesis!
:::

Next, `cosmovisor`'s `current` link needs to point to the latest version of `und`, e.g.:

```bash
cd $HOME/.und_mainchain/cosmovisor
rm current
```

**TestNet**

```bash
ln -s $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc ./current
```

**MainNet**

```bash
ln -s $HOME/.und_mainchain/cosmovisor/genesis ./current
```

## 3. Set up the systemd service

Create a `systemd` service file, replacing `USERNAME` as required:

```bash
sudo tee /etc/systemd/system/und.service > /dev/null <<EOF
[Unit] 
Description=Unification Mainchain Node 
 
[Service] 
User=USERNAME 
Group=USERNAME 
WorkingDirectory=/home/USERNAME 
EnvironmentFile=/home/USERNAME/.und_mainchain/cosmovisor/UND_COSMOVISOR_ENV
ExecStart=/usr/local/bin/cosmovisor run start
LimitNOFILE=4096 
 
[Install] 
WantedBy=default.target
EOF
```

Reload `systemd`:

```bash
sudo systemctl daemon-reload
```

## 4. Configure and test statesync

::: tip Note
Skip to the section **5. Start the systemd service**  if you intend to run a full sync from genesis!
:::

!!!include(mainchain/partials/statesync.md)!!!

**Hit `ctrl+c` to stop `und`**

## 5. Start the systemd service

Start the `und` as a background service:

```bash
sudo systemctl start und
sudo journalctl -u und -f
```
