# Single Node DevNet

The `und` binary can be used to generate a quick and simple single-node `DevNet`

#### Contents

[[toc]]

## Getting `und`

Either clone the repo and build/install `und`:

```bash
git clone https://github.com/unification-com/mainchain
cd mainchain
git checkout [latest release tag]
make install
```

Or download the latest release from 
[https://github.com/unification-com/mainchain/releases/latest](https://github.com/unification-com/mainchain/releases/latest)

## Initialise the chain

We'll use the chain ID `FUND-DevNet`, and home directory `$HOME/.und_mainchain_DevNet`

1. Initialise `und`

```bash
und init devnet_validator --home $HOME/.und_mainchain_DevNet --chain-id FUND-DevNet
```

2. Set some client config defaults

```bash
und config chain-id FUND-DevNet --home $HOME/.und_mainchain_DevNet
und config keyring-backend test --home $HOME/.und_mainchain_DevNet
```

3. Modify the default denominations in `genesis.json`

This is required because the Cosmos SDK default denomination is `stake`, and we need it to be `nund`

```bash
sed -i "s/stake/nund/g" $HOME/.und_mainchain_DevNet/config/genesis.json
```

4. Enable REST and swagger (optional)

This will allow REST access on [http://localhost:1317](http://localhost:1317) and Swagger 
via [http://localhost:1317/swagger/](http://localhost:1317/swagger/)

```bash
sed -i "s/enable = false/enable = true/g" $HOME/.und_mainchain_DevNet/config/app.toml
sed -i "s/swagger = false/swagger = true/g" $HOME/.und_mainchain_DevNet/config/app.toml
```

## Create some test accounts & keys

We'll create four accounts - one for the validator, and three test accounts

```bash
und keys add validator --home $HOME/.und_mainchain_DevNet
und keys add t0 --home $HOME/.und_mainchain_DevNet
und keys add t1 --home $HOME/.und_mainchain_DevNet
und keys add t2 --home $HOME/.und_mainchain_DevNet
```

## Add the accounts to genesis - in this order

Next, we need to add the wallet addresses to `genesis.json` along with some `nund`

```bash
und add-genesis-account t0 1000000000000nund --home $HOME/.und_mainchain_DevNet --keyring-backend test
und add-genesis-account validator 1000000000000nund --home $HOME/.und_mainchain_DevNet --keyring-backend test
und add-genesis-account t1 1000000000000nund --home $HOME/.und_mainchain_DevNet --keyring-backend test
und add-genesis-account t2 1000000000000nund --home $HOME/.und_mainchain_DevNet --keyring-backend test
```

## Generate validator gentx

Add the validator to `genesis.json`

```bash
und gentx validator 1000000nund --home $HOME/.und_mainchain_DevNet --chain-id FUND-DevNet
und collect-gentxs --home $HOME/.und_mainchain_DevNet
```

## Start the daemon

Finall, start DevNet

```bash
und start --home $HOME/.und_mainchain_DevNet
```

## Automated Script

Here's a handy `bash` script that can be configured and run. Simply save it as `und_testnet.sh` and run
with `bash und_testnet.sh`

```bash
#!/bin/bash

################################################################
# A script for quickly spinning up a local single-node devnet  #
################################################################

# DevNet configuration
UND_VERS="1.7.0" # Change to latest release - https://github.com/unification-com/mainchain/releases/latest
TEST_PATH="/tmp/und_devnet"
CHAIN_ID_PREFIX="FUND-DevNet"

# Generate unique Chian ID suffix
CHAIN_ID_SUFFIX=$(cat /proc/sys/kernel/random/uuid | sed 's/[-]//g' | head -c 5; echo;)

CHAIN_ID="${CHAIN_ID_PREFIX}-${CHAIN_ID_SUFFIX}"

# Internal VARS
DATA_DIR="${TEST_PATH}/.und_mainchain"
UND_BIN="${TEST_PATH}/und"

function version_lt() { test "$(echo "$@" | tr " " "\n" | sort -rV | head -n 1)" != "$1"; }

if version_lt $UND_VERS "1.6.3"; then
  echo "versions < 1.6.3 not supported"
  exit 0
fi

# check for previous tests
if [ -d "$TEST_PATH" ]; then
  echo "Found previous test configuration in ${TEST_PATH}."
  echo "Either delete ${TEST_PATH} and rerun this script"
  echo "or start the chain again using:"
  echo ""
  echo "  ${UND_BIN} start --home ${DATA_DIR}"
  echo ""
  exit 0
fi

mkdir -p "${TEST_PATH}"

cd "${TEST_PATH}"

# download und
if [ ! -f "$UND_BIN" ]; then
  wget "https://github.com/unification-com/mainchain/releases/download/v${UND_VERS}/und_v${UND_VERS}_linux_x86_64.tar.gz"
  tar -zxvf "und_v${UND_VERS}_linux_x86_64.tar.gz"
fi

# init chain
"${UND_BIN}" init devnet-validator --home "${DATA_DIR}" --chain-id="${CHAIN_ID}"
"${UND_BIN}" config chain-id "${CHAIN_ID}" --home "${DATA_DIR}"
"${UND_BIN}" config keyring-backend test --home "${DATA_DIR}"

# change default denoms from stake to nund in genesis
sed -i "s/stake/nund/g" "${DATA_DIR}/config/genesis.json"

# enable REST & swagger
sed -i "s/enable = false/enable = true/g" "${DATA_DIR}/config/app.toml"
sed -i "s/swagger = false/swagger = true/g" "${DATA_DIR}/config/app.toml"

# add test keys to keychain
# add a validator
"${UND_BIN}" --home ${DATA_DIR} keys add validator
# add a test key for account 0. If v < 1.6.x, do not use account 0 in testing.
"${UND_BIN}" --home ${DATA_DIR} keys add t0
# add a test key
"${UND_BIN}" --home ${DATA_DIR} keys add t1
"${UND_BIN}" --home ${DATA_DIR} keys add t2

# add accounts to genesis - in this order
"${UND_BIN}" add-genesis-account t0 1000000000000nund --home "${DATA_DIR}" --keyring-backend test
"${UND_BIN}" add-genesis-account validator 1000000000000nund --home "${DATA_DIR}" --keyring-backend test
"${UND_BIN}" add-genesis-account t1 1000000000000nund --home "${DATA_DIR}" --keyring-backend test
"${UND_BIN}" add-genesis-account t2 1000000000000nund --home "${DATA_DIR}" --keyring-backend test

# validator gentx
"${UND_BIN}" gentx validator 1000000nund --home ${DATA_DIR} --chain-id="${CHAIN_ID}"
"${UND_BIN}" collect-gentxs --home "${DATA_DIR}"

echo ""
echo "---------------------"
echo "Your DevNet is ready!"
echo "---------------------"
echo ""
echo "Chain ID: ${CHAIN_ID}"
echo ""
echo "Run the chain with:"
echo ""
echo "${UND_BIN} start --home ${DATA_DIR}"
echo ""

```
