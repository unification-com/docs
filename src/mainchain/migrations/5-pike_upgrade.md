# Network Upgrade: 5-pike

:::warning IMPORTANT
**TestNet** was successfully upgraded to `5-pike` in block **13,910,300**

**MainNet** was successfully upgraded to `5-pike` in block **12,210,000**
:::

:::tip Note
This guide is for operators already running a node, and only for **before** the 
upgrade's target block height.

For new nodes or upgrades **after** the upgrade's target block height, please see the
[Install und with Cosmovisor](../software/cosmovisor/install_und_with_cosmovisor.md)
documentation.
:::

There are two possible methods for upgrading:

1. Automatically, using Cosmovisor (recommended)
2. Manually

## Automatically upgrade from und v1.9.x to v1.10.x using Cosmovisor

**IMPORTANT:** This guide assumes the reader has implemented the required changes outlined in
[Using Cosmovisor with und: Quick Start](cosmovisor.md) and migrated their services before using this guide.

### Configuring Cosmovisor

The following can be implemented well in advance of the actual upgrade occurring, which will allow
for a completely automated upgrade.

**IMPORTANT** During the upgrade, `cosmovisor` will automatically do a full backup of the `.und_mainchain/data`
directory. Ensure your host has adequate disk space to accommodate the backup. This may add significant time
to the upgrade process, and as such, the process may take up to 30 minutes before the node comes back online.

#### 1. Create the Cosmovisor upgrade plan directory

This will be dependent on how you configured `cosmovisor`, and your actual `.und_mainchain` path:

```bash
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/5-pike/bin
```

#### 2. Download the latest `und` v1.10.x and add to Cosmovisor's `upgrades` directory

<InstallUnd version="1.10.1" plan="5-pike"></InstallUnd>

Check the version output is `1.10.1`!

The directory structure for `$HOME/.und_mainchain/cosmovisor` should now look as follows:

:::: tabs :options="{ useUrlFragment: false }"

::: tab MainNet
#### MainNet

**Note:** 1st upgrade path name is `1-init_ibc`
<CosmovisorDirTree network="mainnet" plan="5-pike" upgraded=false></CosmovisorDirTree>
:::

::: tab TestNet
#### TestNet

**Note:** 1st upgrade path name is `1-ibc`
<CosmovisorDirTree network="testnet" plan="5-pike" upgraded=true></CosmovisorDirTree>
:::

::::

That's it! When the upgrade height specified in the governance proposal is reached, Cosmovisor and the `upgrade`
module will handle the rest automatically.

### Cosmovisor Upgrade process overview

Briefly, at the upgrade height, Cosmovisor will automatically:

1. Stop the `und` v1.9.x binary
2. Backup `.und_mainchain/data` to `.und_mainchain/data-backup-YYYY-M-DD`__*__
3. Reconfigure itself to use `und` v1.10.x
4. Restart `und` using the new version

__*Ensure the host has enough space to back up!__

## Manual upgrade (not recommended)

The alternative to implementing Cosmovisor is to manually upgrade the binary. Once the upgrade height specified in the
governance proposal is reached, the `upgrade` module will automatically halt the node via a `panic`. The node operator
will then need to:

1. Stop the `und` v1.9.x binary, via `systemd` or their chosen method
2. Backup the `und_mainchain/data` directory
3. Download and install the latest `und` v1.10.x, replacing the old v1.9.x binary (for example in `/usr/local/bin`)
4. Restart the `und` binary, via `systemd` or their chosen method.

Since the process involves manual intervention, monitoring and execution, the process may take longer.
