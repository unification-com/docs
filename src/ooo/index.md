# OoO Introduction

This documentation covers the xFUND Router network and its OoO (Oracle of Oracles) data
functionality.

It includes guides covering how to integrate the `Consumer` smart contract library (required for
interacting with the xFUND Router network) into your own smart contract, how to request and receive
data in your smart contract from the OoO API, and how to run your own provider oracle.

#### Contract & Provider addresses

1. [Contract Addresses](./contracts.md).
2. [Provider Addresses](./providers.md).

#### Guides

1. [Quickstart](./guide/quickstart.md) - a quick introduction to getting set up
2. [Implementation Guide](./guide/index.md) - a complete guide to integration and interaction
3. [OoO Data API Guide](./guide/ooo_api.md) - a guide to requesting data from the OoO API
4. [Running an OoO Data Provider](./guide/run-provider.md) - install, configure and operate your
   own provider oracle

#### Contract Docs

API documentation covering the functions and events within each of the three main
smart contracts used by the xFUND Router network.

1. [Router.sol](./api/Router.md) - the contract which controls data request and fulfilment
   routing between Consumers and Providers. This contract also handles fee payment and gas
   refunds. Deployed and maintained by the Unification Foundation
2. [ConsumerBase.sol](./api/lib/ConsumerBase.md) - the Consumer smart contract developers will need
   to import into their own smart contract in order to interact with the system. Contains the
   proxy functions required to utilise the `ConsumerLib.sol` library smart contract, which
   must be linked to the this contract during deployment
