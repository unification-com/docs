# Network Upgrade: 8-vaxildan

:::info
**MainNet** upgraded to `8-vaxildan` in block **24,172,000** on Wednesday 28 October 2026 at 15:24 UTC,
following governance proposal 32.

**Use `und` v1.13.4** for this upgrade.

**TestNet** upgraded to `8-vaxildan` in block **25,638,900** on 11 August 2026, and has been running
v1.13.4 since 20 August 2026.
:::

:::tip Note
This guide is for operators already running a node, and only for **before** the
upgrade's target block height.

For new nodes or upgrades **after** the upgrade's target block height, please see the
[Install und with Cosmovisor](../software/cosmovisor/install_und_with_cosmovisor.md)
documentation.
:::

## About this upgrade

`8-vaxildan` updates the Cosmos SDK to
[v0.54.4](https://github.com/cosmos/cosmos-sdk/releases/tag/v0.54.4), IBC to
[v11.2.0](https://github.com/cosmos/ibc-go/releases/tag/v11.2.0) and CometBFT to
[v0.39.4](https://github.com/cometbft/cometbft/releases/tag/v0.39.4).

Cosmos SDK v0.54.4 is an upstream **security release** and is **state-breaking**, so a coordinated
network upgrade is required.

Alongside the dependency updates, `8-vaxildan` includes:

- **Multi-denomination Payment Streams.** A sender and receiver pair may now run several concurrent
  streams in different denominations, each with its own deposit, flow rate and claim schedule. Existing
  streams are migrated automatically and require no action.
- **Payment Streams moved to a standalone module**,
  [x-stream](https://github.com/unification-com/x-stream), consumed by `und` as an external dependency.
  This is wire-preserving — existing streams are unaffected.
- **BEACON timestamp `metadata`** — an optional, 256-byte descriptor on each timestamp — plus a new
  `BeaconTimestampsByHash` query for looking a stamped hash up directly. The hash index is
  **forward-only**: existing BEACON records are not rewritten or backfilled.
- **`x/group` and `x/circuit` modules removed** (both verified empty on TestNet and MainNet).
- **CLI commands migrated to autocli.** Backwards-compatible flag aliases and shims are in place for the
  custom module commands — see the release notes if you script against `und tx`.

:::tip Note for node operators
There are **no configuration file changes** required for this upgrade. `app.toml`, `config.toml` and
`client.toml` carry over as they are.
:::

There are two possible methods for upgrading:

1. Automatically, using Cosmovisor (recommended)
2. Manually

## Automatically upgrade from und v1.12.x to v1.13.x using Cosmovisor

**IMPORTANT:** This guide assumes the reader has implemented the required changes outlined in
[Using Cosmovisor with und: Quick Start](cosmovisor.md) and migrated their services before using this guide.

### Configuring Cosmovisor

The following can be implemented well in advance of the actual upgrade occurring, which will allow
for a completely automated upgrade.

**IMPORTANT** During the upgrade, `cosmovisor` will automatically do a full backup of the `.und_mainchain/data`
directory. Ensure your host has adequate disk space to accommodate the backup. This may add significant time
to the upgrade process, and as such, the process may take up to 30 minutes before the node comes back online.

:::tip Skipping the Cosmovisor backup
If you keep your own backups, you can skip Cosmovisor's by setting `UNSAFE_SKIP_BACKUP=true` in
Cosmovisor's environment, so that your node comes back online quickly. Blocks resume once validators
holding more than two thirds of the voting power are back online, so a quick restart from every validator
keeps the halt short.
:::

:::tip Note
the following commands assume the `und` home directory is the default location `$HOME/.und_mainchain`.
Modify directory locations as applicable.
:::

#### 1. Create the Cosmovisor upgrade plan directory

This will be dependent on how you configured `cosmovisor`, and your actual `.und_mainchain` path:

```bash
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/8-vaxildan/bin
```

#### 2. Download the latest `und` v1.13.x and add to Cosmovisor's `upgrades` directory

<InstallUnd version="1.13.4" plan="8-vaxildan"></InstallUnd>

Check the version output is `1.13.4`!

The directory structure for `$HOME/.und_mainchain/cosmovisor` should now look as follows:

::: tabs

== MainNet
#### MainNet

**Note:** 1st upgrade path name is `1-init_ibc`
<CosmovisorDirTree network="mainnet" plan="8-vaxildan" upgraded=false></CosmovisorDirTree>

== TestNet
#### TestNet

**Note:** 1st upgrade path name is `1-ibc`
<CosmovisorDirTree network="testnet" plan="8-vaxildan" upgraded=true></CosmovisorDirTree>

:::

That's it! When the upgrade height specified in the governance proposal is reached, Cosmovisor and the `upgrade`
module will handle the rest automatically.

### Cosmovisor Upgrade process overview

Briefly, at the upgrade height, Cosmovisor will automatically:

1. Stop the `und` v1.12.x binary
2. Backup `.und_mainchain/data` to `.und_mainchain/data-backup-YYYY-M-DD`__*__
3. Reconfigure itself to use `und` v1.13.x
4. Restart `und` using the new version

__*Ensure the host has enough space to back up!__

## Manual upgrade (not recommended)

The alternative to implementing Cosmovisor is to manually upgrade the binary. Once the upgrade height specified in the
governance proposal is reached, the `upgrade` module will automatically halt the node via a `panic`. The node operator
will then need to:

1. Stop the `und` v1.12.x binary, via `systemd` or their chosen method
2. Backup the `und_mainchain/data` directory
3. Download and install the latest `und` v1.13.x, replacing the old v1.12.x binary (for example in `/usr/local/bin`)
4. Restart the `und` binary, via `systemd` or their chosen method.

Since the process involves manual intervention, monitoring and execution, the process may take longer.

## After the upgrade

Once the node is back up, verify it is running the new binary and that the upgrade was applied:

```bash
und version --log_level=""

und query upgrade applied 8-vaxildan
```
