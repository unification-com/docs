# Introduction

:::tip Note
This documentation section is for existing nodes migrating to `cosmovisor`. For new node installations please
see the [Install und with Cosmovisor](../software/cosmovisor/install_und_with_cosmovisor.md) 
documentation.
:::

Unlike previous upgrades, future upgrades of the FUND Mainchain should not require the full halt/export state/migrate
genesis process. As of Cosmos SDK v0.45.x, network upgrades and state changes can occur in-place. This makes
upgrading much simpler for node operators, as it means that they can set up an upgrade well in advance.

Future upgrades will occur via the `x/upgrade` module, which will require a Governance proposal to pass. Once passed,
the `und` software will automatically halt at the proposed height and wait for the upgraded binary containing the
required upgrade information.

Whilst it is possible to undertake the upgrade process manually, it can be time consuming. The recommended process for
managing the `und` binary and upgrades is to implement `cosmovisor`.

The initial process of migrating to using `cosmovisr` for handling `und` takes a little additional configuration, but 
once in place, upgrades are much easier for operators to implement.

The following guides are available, covering migrating to `cosmovisr`, and configuring the current upgrades:

1. [Using Cosmovisor with und: Quick Start](cosmovisor.md) - how to set up `cosmovisor` to run `und` and handle upgrades
2. [1-init_ibc Upgrade](1-init_ibc_upgrade.md) - configuring `cosmovisor` for the `1-init_ibc` upgrade
3. [2-grog Upgrade](2-grog_upgrade.md) - configuring `cosmovisor` for the `2-grog` upgrade
