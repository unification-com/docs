# Unification Mainchain Documentation

Welcome to the documentation for Unification's Mainchain. These docs
cover how to build and install the `und` application, how to run a node on MainNet, TestNet and DevNet, and how 
to interact with the Mainchain network.

## 1. About Mainchain

- [What is Mainchain?](introduction/about-mainchain)
- [Native Coin Denomination: nund](introduction/denomination)
- [Total Supply Queries and Conversions](introduction/total-supply)
- [Fees and Gas](introduction/fees-and-gas)
- [Introduction to Genesis Params](introduction/genesis-settings)
- [FAQs](introduction/faqs)

## 2. Software

### 2.1 Client

- [Installation](software/installation)
- [Accounts and Wallets](software/accounts-wallets)

### 2.2. Server

- [Run a full node & join a Network](software/cosmovisor/install_statesync_cosmovisor)
- [Run `und` as a daemon](software/run-und-as-service)
- [Migrating to Cosmovisor](migrations/cosmovisor)
- [Running a Light Client/REST server](software/light-client-rpc)

### 2.3 Full Command & Config File References

- [`und` - the und command reference](und_cmd/und)
- [`.und_mainchain/config/config.toml` Reference](software/und-mainchain-config-ref)
- [`.und_mainchain/config/app.toml` Reference](software/und-mainchain-app-config-ref)
- [`.und_mainchain/config/client.toml` Reference](software/und-mainchain-client-config-ref)

## 3. Migrations & Upgrades

- [Introduction](migrations)
- [Using Cosmovisor: Quick start](migrations/cosmovisor)
- [Network Upgrade: 1-init_ibc](migrations/1-init_ibc_upgrade)
- [Network Upgrade: 2-grog](migrations/2-grog_upgrade)

## 4. Mainchain Networks

- [FUND Network Overview](networks/overview)
- [Non-Validator Participation](networks/participation)

## 5. Validators

- [Introduction to Validators](introduction/validators)
- [Becoming a Validator](networks/become-validator)

## 6. Delegators

- [Introduction to Delegators and Staking](introduction/delegators)

## 7. IBC Transfers

- [Introduction to guides](ibc)
- [Generic IBC Transfers](ibc/generic)
- Gravity Bridge
  - [CLI](ibc/gravity-bridge/cli)
  - [Web Portal](ibc/gravity-bridge/web-portal)
- [Osmosis](ibc/osmosis)

## 8. Tx & Query Examples

- [Sending Simple Transactions](examples/transactions)
- [Example WRKChain Transactions and Queries](examples/wrkchain)
- [Example BEACON Transactions and Queries](examples/beacon)
- [Example Enterprise FUND Transactions and Queries](examples/enterprise-fund)
- [WRKChain: Finchains](examples/finchain)

## 9. Guides

- [Fully sync MainNet from Legacy to Current](guides/legacy-to-current)

### 9.1 Cloud Installation

- [AWS 101: Introduction to installing `und` on AWS EC2 instances](guides/cloud/install-aws)
- [Google Cloud 101: Introduction to installing `und` on Google Cloud VMs](guides/cloud/install-gc)

## 10. Developers

- [Third Party Tool Development](developers/third-party)
- 
### 10.1 Private DevNet

- [3-node Docker DevNet](networks/devnet/local-devnet-docker)
- [Single Node DevNet](networks/devnet/single-node-devnet)

### Disclaimer

Please note that this software is still in development. In these early days, we can expect to have issues, updates, and
bugs. The existing `und` CLI tool requires advanced technical skills and may involve risks which are
outside of the control of the Unification Foundation and/or the Unification dev team. Any use of this open
source [Apache 2.0 licensed](https://github.com/unification-com/mainchain/blob/master/LICENSE) software is done at your
own risk and on a "AS IS" basis, without warranties or conditions of any kind, and any and all liability of the
Unification Foundation and/or the Unification dev team for damages arising in connection to the software is excluded.
Please exercise extreme caution!
