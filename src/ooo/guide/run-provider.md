# Running an OoO Data Provider

This guide covers installing, configuring and running [`go-ooo`](https://github.com/unification-com/xfund-router/tree/main/go-ooo)
— the Go implementation of the OoO Provider application. A provider oracle listens for on-chain
data requests on the xFUND Router, prices the requested pair from decentralised-exchange (DEX)
liquidity, fulfils the request on-chain, and earns an `xFUND` fee for doing so.

::: tip Who runs a provider?
The Unification Foundation runs the default providers listed in [Provider Addresses](../providers.md),
so **consumers do not need to run anything** — they simply send requests to a registered provider.
This guide is for anyone who wants to operate **their own** provider oracle.
:::

## How a provider works

1. A consumer contract sends a data request to the [Router](../contracts.md), paying the
   provider's `xFUND` fee.
2. `go-ooo` detects the request event on-chain.
3. It resolves the requested `BASE.TARGET` pair against the supported DEXs and computes a
   robust, liquidity-weighted mean price (see the [OoO Data API guide](ooo_api.md)).
4. It fulfils the request by calling back into the Router, which forwards the price to the
   consumer contract.
5. The fee accrues in the Router and can be withdrawn at any time.

The set of priceable DEXs and pairs is driven by the
[dex-pair-verify](https://ooo-dex.unification.io) catalogue, which `go-ooo` polls periodically
(the "DEX export"). You can use the Foundation's public catalogue or run your own.

## Prerequisites

- **Go 1.18+** to build from source.
- A **wallet** (private key) with **native gas** on each chain you intend to serve. You do
  **not** need to hold `xFUND` to run a provider — you earn it; you only need native currency
  (ETH, MATIC, BONE, QOM, …) to pay gas for fulfilment transactions.
- **RPC endpoints** for each chain. An HTTP endpoint is required (it carries calls, `eth_getLogs`
  event detection and transaction sends); a WebSocket endpoint is optional and used only for
  low-latency event subscriptions, with HTTP-only (poll mode) fully supported. A **paid or
  dedicated RPC is strongly recommended** — see [A note on RPC endpoints](#a-note-on-rpc-endpoints).
- A **[The Graph](https://thegraph.com) Network API key** — **effectively required.** DEX pricing
  reads the DEX subgraphs over The Graph's decentralised network, and without a key **no
  subgraph-backed source is priceable**, leaving the oracle with almost nothing to serve. See
  [The Graph API key](#the-graph-api-key).
- A **database** — SQLite by default (zero-config), or PostgreSQL for production.
- Optionally, access to a **dex-pair-verify export API**. The default is Unification's public
  catalogue; you can point at your own instance instead.

## 1. Install

You can either **download a pre-built release binary** (quickest, no toolchain needed) or
**build from source**.

### Option A — download a release binary

Pre-built binaries for Linux, macOS and Windows (x86_64) are attached to each
[GitHub release](https://github.com/unification-com/xfund-router/releases). Download the archive for
your platform, verify it against the release's `checksums.txt`, extract it, and put `go-ooo` on your
`PATH`:

```bash
# example: Linux x86_64 — replace VERSION with the latest release (e.g. 0.6.0)
curl -LO https://github.com/unification-com/xfund-router/releases/download/vVERSION/go-ooo_vVERSION_linux_x86_64.tar.gz
tar -xzf go-ooo_vVERSION_linux_x86_64.tar.gz
sudo mv go-ooo /usr/local/bin/
```

::: tip Apple Silicon / ARM
The release archives are x86_64 only. On an ARM host (Apple Silicon, ARM Linux), build from source
instead.
:::

### Option B — build from source

Requires **Go 1.18+**. `go-ooo` lives in the `go-ooo/` subdirectory of the
[`xfund-router`](https://github.com/unification-com/xfund-router) repository:

```bash
git clone https://github.com/unification-com/xfund-router.git
cd xfund-router/go-ooo

# install the binary to $GOPATH/bin
make install

# ...or build it into ./build/go-ooo
make build
```

Either way, confirm it runs:

```bash
go-ooo version
```

## 2. Initialise

`init` writes a default configuration and creates your keystore. `<network>` is one of
`dev`, `sepolia`, `mainnet`, `polygon`, `shibarium`, `puppynet` or `qom`:

```bash
go-ooo init mainnet
```

By default everything is stored under `$HOME/.go-ooo`. Use `--home` to choose another location
(useful for running separate instances):

```bash
go-ooo init sepolia --home $HOME/.go-ooo_sepolia
```

During initialisation you will be asked whether to **generate a new key** or **import an existing
private key**, and to set a **keystore passphrase**. The passphrase is required both to start the
oracle (to decrypt the key) and to run admin commands.

::: warning Keep the passphrase safe
Without the passphrase you cannot run the oracle or recover the key. Back up the keystore file
(`$HOME/.go-ooo/keystore.json`) and remember your passphrase. For unattended operation you can
save the passphrase to a file (e.g. `$HOME/.go-ooo/pass.txt`) and pass it with `--pass` — keep
that file readable only by the service account.
:::

This produces `$HOME/.go-ooo/config.toml`, an SQLite database, and `keystore.json`. The home
directory is created `0700`, and the config and keystore `0600`, because they can hold secrets.

## 3. Configure

Open `config.toml` and fill in the values for your environment. The most important sections:

### `[chain]` (or `[[chains]]`)

The chain to serve. Run **one** network with a single `[chain]` block, or **several** from one
process with a `[[chains]]` array (see [Multiple networks](#multiple-networks-from-one-process)).

| Key | Description |
|---|---|
| `contract_address` | The Router contract address (pre-filled from the network defaults). |
| `network_id` | The chain's network id (e.g. `1` for Ethereum mainnet). |
| `eth_http_host` | **Required.** RPC HTTP endpoint — carries calls, event detection and tx sends. |
| `eth_ws_host` | Optional WebSocket endpoint for low-latency event subscriptions. Leave blank for HTTP poll mode. |
| `event_scan_batch_blocks` | Max block range per `eth_getLogs` scan (default `2000`). Lower it for RPCs that throttle wide ranges. |
| `first_block` | Block to start scanning for jobs from — generally the block you registered as a provider. |
| `gas_limit` | Gas limit for fulfilment transactions. |
| `max_gas_price` | Maximum gas price you will pay to fulfil a request. |
| `eip1559` | Send EIP-1559 (type-2) dynamic-fee transactions; safe to leave `true` (falls back to legacy pricing on pre-London chains). |

::: warning Set `max_gas_price` to suit the chain
A `max_gas_price` set below the chain's live gas price means your fulfilments never get included.
Some chains quote gas very differently — QoM's live gas price, for example, sits at around
`18000000000` gwei — so check the target chain and set this at or above its going rate.
:::

### A note on RPC endpoints

The oracle polls `eth_getLogs` continuously to detect requests, and sends every fulfilment through
the same HTTP endpoint, so **a paid or dedicated RPC is strongly recommended for production.** Free
public endpoints routinely throttle (HTTP 429), cap the block range per `eth_getLogs` call, or return
malformed responses under load — any of which stalls request detection and fulfilment.

- Use a **paid tier** (Infura, Alchemy, dRPC, …) or the chain's **own official node** for
  `eth_http_host` — this is the endpoint that must be reliable.
- A WebSocket endpoint (`eth_ws_host`) only speeds up event detection; HTTP poll mode works fine
  without one, so if your provider throttles WSS, leave it blank.
- If you fall a long way behind on a rate-limited endpoint, advance the scan cursor at start with
  `--first-block`, and lower `event_scan_batch_blocks` for RPCs that reject wide ranges.

### `[database]`

`dialect` is `sqlite` (default) or `postgres`. SQLite needs only `storage` (a file path);
PostgreSQL needs `host`, `port`, `database`, `user` and `password`.

### `[jobs]` and `[jobs.dex_export]`

`check_duration` (seconds between request polls), `wait_confirmations` (blocks to wait before
fulfilling) and `max_job_age` (seconds before a request is abandoned) live in `[jobs]`.

`[jobs.dex_export]` points `go-ooo` at the dex-pair-verify catalogue of priceable DEXs and pairs.
`base_url` defaults to the Foundation's public catalogue
(`https://ooo-dex.unification.io/api/ooo/v1`); on the real networks the provider authenticates
with its on-chain-registered wallet. Point it at your own instance, or leave it **empty** to skip
the sync and price from whatever catalogue is already persisted in the database.

### `[keystorage]`, `[serve]`, `[prometheus]`

`[keystorage]` holds the keystore `account` and `file` (set by `init`). `[serve]` is the host/port
of the local admin HTTP API used by the admin and query commands. `[prometheus]` is the port that
serves metrics.

### `[subchain]`

`[subchain]` holds per-chain RPCs the DEX modules use to look up the latest block number when
querying subgraphs. The same "use a reliable endpoint" advice as above applies.

### The Graph API key

DEX pricing reads each supported DEX's subgraph over [The Graph](https://thegraph.com)'s
decentralised network — a **paid, key-gated** service. Set your key in
`[api_keys].graph_network_key`.

::: danger The Graph key is effectively required
Without a valid `graph_network_key`, **no subgraph-backed DEX source is priceable** — which is
almost every source — so the oracle has nothing to serve and requests go unfulfilled. Treat it as a
hard requirement for any real deployment. The only exceptions are non-EVM sources such as
Cosmos/Osmosis, which do not use The Graph.
:::

::: tip The full annotated config
Every field is documented inline in the generated `config.toml`. The template is also in the
[go-ooo README](https://github.com/unification-com/xfund-router/tree/main/go-ooo#readme).
:::

## 4. Register the provider key

If you initialised with your own key (i.e. not the pre-registered `dev` test key), you must
register your wallet as a provider on-chain. First ensure the wallet holds **native gas** on the
target chain, then set your global fee:

```bash
go-ooo admin register 1000000 --pass /path/to/pass.txt
```

The fee is expressed in `xFUND`'s smallest unit (`xFUND` has 9 decimals), so `1000000` is
`0.001 xFUND`, `41500000` is `0.0415 xFUND`, and so on.

If you run several chains, target one with `--chain <name|network_id>`.

## 5. Start the oracle

```bash
go-ooo start --pass /path/to/pass.txt
```

Without `--pass` you are prompted for the passphrase interactively. `--home` selects a non-default
config location. Starting the service brings up the admin HTTP API (`[serve]`) and the Prometheus
metrics endpoint (`[prometheus]`), and begins detecting and fulfilling requests.

```bash
# non-default home + saved passphrase
go-ooo start --home $HOME/.go-ooo_sepolia --pass $HOME/.go-ooo_sepolia/pass.txt

# skip a stale event-scan gap by advancing the cursor (one-shot)
go-ooo start --first-block 15114000 --chain sepolia
```

## Day-to-day operations

The admin and query commands talk to the **running** daemon over its `[serve]` HTTP API,
authenticated with the admin bearer token (see [Admin token](#admin-token)). All of them accept
`--chain <name|network_id>` (or `--chain all`) when several networks are configured.

| Command | Purpose |
|---|---|
| `go-ooo query fees` | Show your current global fee. |
| `go-ooo query withdrawable` | Show the `xFUND` available to withdraw. |
| `go-ooo admin setFee <fee>` | Change your global fee. |
| `go-ooo admin setGranularFee <fee> <consumer>` | Set a per-consumer fee. |
| `go-ooo admin withdraw <amount> <recipient>` | Withdraw accrued fees to an address. |
| `go-ooo admin dex-sources sync` | Force an immediate refresh of the DEX catalogue. |
| `go-ooo analytics` / `go-ooo analytics suggestFee` | Request-history analytics and a suggested break-even fee. |

Fee and amount values use the same 9-decimal `xFUND` base unit as `register`.

### Admin token

The admin HTTP API is protected by a bearer token that is independent of your keystore passphrase.
Create or rotate it with:

```bash
go-ooo keystore set-admin-token
```

Only the token's hash is stored (in a `0600` sidecar next to the keystore); the raw token is printed
once. Restart `go-ooo` for a new token to take effect.

## Multiple networks from one process

One `go-ooo` process can serve several chains, sharing a single keystore/provider key, database and
pricing engine while running an independent worker per chain. Initialise the first network normally,
then append each additional one with `--add`:

```bash
go-ooo init mainnet
go-ooo init polygon --add
go-ooo init shibarium --add
```

Each `--add` appends a `[[chains]]` entry (converting the initial `[chain]` block). Fill in each new
chain's RPC URLs, then target individual chains on the admin, query and start commands with
`--chain`. Network ids must be distinct.

## Upgrading go-ooo

When you upgrade the binary, the config schema or keystore format may have moved on:

- **Config** — bring an existing `config.toml` up to the current schema without re-running `init`
  (which refuses to overwrite an existing config):

  ```bash
  go-ooo config migrate            # add --dry-run to preview
  ```

  Your values are preserved, renamed settings are carried across, new sections are added with their
  defaults, and the previous file is backed up to `config.toml.bak`.

- **Keystore** — older releases used a legacy keystore format. Re-encrypt it to the standard
  go-ethereum v3 (scrypt) format under a new passphrase:

  ```bash
  go-ooo keystore migrate
  ```

  This verifies the new keystore decrypts to the same key and address before removing the old file,
  and issues a fresh admin token (the legacy format's token is retired with the old file).

## Testing against the dev environment

For a throwaway end-to-end setup, the
[Docker developer environment](https://github.com/unification-com/xfund-router/tree/main/docker)
runs a local `anvil` chain with the Router pre-deployed and account `#3` pre-registered as a
provider. Initialise `go-ooo` with the `dev` network and import the test key printed in that
environment's documentation to try the full request → fulfilment loop locally.

## See also

- [OoO Data API guide](ooo_api.md) — the request format providers serve.
- [Contract Addresses](../contracts.md) and [Provider Addresses](../providers.md).
- [go-ooo README](https://github.com/unification-com/xfund-router/tree/main/go-ooo#readme) — the
  developer-facing reference, including the `testapp` price-query and operator-report harness.
