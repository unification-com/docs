# Installing the Mainchain Software

This documentation outlines how to install the Unification Mainchain `und` software as a client, in
order to interact with any of the Mainchain networks to query data/send transactions.

::: tip
If you intend to run a node and/or become a validator, follow the guide below:

- [Install und, Cosmovisor and optionally Sync using statesync](./cosmovisor/install_statesync_cosmovisor.md)
:::

#### Contents

[[toc]]

## Installing the latest release binaries

!!!include(mainchain/partials/install-und-binary.md)!!!

## Building from Source

The Mainchain binaries can also be built from source.

### Prerequisites

!!!include(mainchain/partials/prerequisites.md)!!!

### Install Go

**Go 1.16+** is required to build the Mainchain binaries

Install `go` by following the [official docs](https://golang.org/doc/install).
Once Go is installed, set your `$PATH` environment variable:

```bash
$ mkdir -p $HOME/go/bin
$ echo "export PATH=$PATH:$(go env GOPATH)/bin" >> ~/.bash_profile
$ source ~/.bash_profile
```

### Build and install the binaries

::: warning IMPORTANT
unless you are contributing to Mainchain development, it is recommended you checkout and build from the latest release 
tag and **not** the `master` branch if you intend to connect to a live, public network (e.g. TestNet/MainNet).
:::

Download the **latest** tagged Mainchain release from
[https://github.com/unification-com/mainchain/releases](https://github.com/unification-com/mainchain/releases)

The **`[latest-release-tag]`** required for the command below can also be obtained by running:

```bash
curl --silent "https://api.github.com/repos/unification-com/mainchain/releases/latest" | grep -Po '"tag_name": "\K.*?(?=")'
```

```bash
$ git clone -b [latest-release-tag] https://github.com/unification-com/mainchain
$ cd mainchain
$ make install
```

This will install the two binaries `und` and `und` into your `$HOME/go/bin`

### Verify the installation

Run the following commands:

```bash
$ und version --long
```

If they have installed correctly, you should see output similar to the following:

```bash
name: UndMainchain
server_name: und
version: 1.5.1
commit: 8bbd2b3dabebf8186c19b452f5331071f79e48f1
build_tags: netgo
go: go version go1.16.2 linux/amd64
build_deps:
- github.com/99designs/keyring@v1.1.6 => github.com/cosmos/keyring@v1.1.7-0.20210622111912-ef00f8ac3d76
- github.com/ChainSafe/go-schnorrkel@v0.0.0-20200405005733-88cbf1b4c40d
- ... SNIP ...
cosmos_sdk_version: v0.42.11
```

### Development

The included Mainchain [DevNet](local-devnet.md) network can be used for development and testing of new features and 
bug fixes locally. To build the binaries for testing without installing, run:

```bash
make build
```

This will output the binaries to the `./build` directory located in the repository root.

See the [DevNet](../networks/devnet/local-devnet-docker.md) docs for more information about running **DevNet**.

## CLI Help

Both the `und` and `und` commands can have the `--help` flag passed
to output details on what commands are available, and flags enabled for that
command:

```bash
und --help
```

Likewise, the `--help` flag can be passed to subcommands, for example:

```bash
und query wrkchain --help
```

#### Next

Running [Devnet](../networks/devnet/local-devnet-docker.md), joining [a network](../networks/join-network.md)
