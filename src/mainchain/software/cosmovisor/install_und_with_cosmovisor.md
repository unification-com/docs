# Installing und & Using Cosmovisor

:::tip Note
This guide is for fresh full node installations. For existing nodes migrating to `cosmovisor`, please
see the [Migrations](../../migrations/README.md) documentation.
:::

Installing and configuring `cosmovisor` makes managing and maintaining `und` updates & upgrades much simpler.

This guide will cover installing and configuring `und` to run with Cosmovisor, and a full sync from genesis allowing you
to run a full node.

#### Contents

[[toc]]

## 1. Download the genesis version of und, initialise & configure

First, download the `und` version for `genesis`:

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

The latest version of `cosmovisor` is `v1.5.0`

### 2.1 Set up cosmovisor directory structure

Create the directory structure for the `und` binaries and updates

#### 2.1.1 `und` v1.5.1: `genesis`:

<InstallUnd version="1.5.1" plan=""></InstallUnd>

Check the version output is `1.5.1`.

#### 2.1.2 `und` v1.6.x: `1-init_ibc` update

::: warning Important
Upgrade plan names for `und` v1.6.x:  
**MainNet**: `1-init_ibc`  
**TestNet**: `1-ibc`

The upgrade plan name determines the directory path that `und` v1.6.x will be installed in!
:::

Install the `1-init_ibc` update:

:::: tabs :options="{ useUrlFragment: false }"

::: tab MainNet
### MainNet

<InstallUnd version="1.6.3" plan="1-init_ibc"></InstallUnd>
:::

::: tab TestNet
### TestNet

<InstallUnd version="1.6.3" plan="1-ibc"></InstallUnd>
:::

::::

Check the version output is `1.6.3`.

#### 2.1.3 `und` v1.7.x: `2-grog` update

Install the `2-grog` update:

<InstallUnd version="1.7.0" plan="2-grog"></InstallUnd>

Check the version output is `1.7.0`.

#### 2.1.4 `und` v1.8.x: `3-keyleth` update

Install the `3-keyleth` update:

<InstallUnd version="1.8.2" plan="3-keyleth"></InstallUnd>

Check the version output is `1.8.2`.

#### 2.1.5 `und` v1.9.x: `4-percival` update

Install the `4-percival` update:

<InstallUnd version="1.9.0" plan="4-percival"></InstallUnd>

Check the version output is `1.9.0`.

#### 2.1.6 `und` v1.10.x: `5-pike` update

Install the `5-pike` update:

<InstallUnd version="1.10.1" plan="5-pike"></InstallUnd>

Check the version output is `1.10.1`.

### 2.2 Create cosmovisor environment file

Create an environment variable file which will load into the `systemd` service, modifying `/FULL/PATH/TO/` as
required:

!!!include(mainchain/partials/cosmovisor/cosmovisor_env.md)!!!

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
Restart=on-failure
RestartSec=10s
LimitNOFILE=4096 
 
[Install] 
WantedBy=default.target
EOF
```

Reload `systemd`:

```bash
sudo systemctl daemon-reload
```

## 4. Start the systemd service

Start the `und` as a background service:

```bash
sudo systemctl start und
sudo journalctl -u und -f
```

## 5. Become a Validator

Should you wish, and once your node is fully synced, you can [become a validator](../../networks/become-validator)
