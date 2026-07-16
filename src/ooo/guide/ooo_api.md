# OoO Data API Guide

This guide covers the data available via the OoO API, requested through the xFUND Router
network. The going-forward API queries decentralised-exchange (DEX) liquidity pools for a
pair's price. The legacy Finchains price API (request type `PR`) has been **removed**; `PR`
requests are now redirected to the DEX path (see [Legacy Finchains API](#legacy-finchains-api-pr)).

## Data Providers

See [Providers](../providers.md) for the Oracles providing data on each supported network, along
with their associated fees and wallet addresses. To run your own provider oracle, see
[Running an OoO Data Provider](run-provider.md).

::: tip Note
OoO data providers may wait for 2 - 3 or more block confirmations before processing a request. Depending
on network congestion and gas prices, it may therefore take up to a minute or more for data to be sent to your 
smart contract from the time your request Tx was received by the provider oracle.
:::

## Introduction

Data is acquired via the OoO API using dot-separated strings to define the pair to price - for
example the mean `WETH/USDC` price over the last 30 minutes is requested using `WETH.USDC.30`.

The hex-encoded string is supplied along with the Provider address (as defined above,
depending on the network) and the `xFUND` fee as parameters to your smart contract,
using the [requestdata](implementation.md#_3-1-requestdata) function you defined.

The OoO Data Provider picks up this request, and supplies the data via the
[recievedata](implementation.md#_3-2-recievedata) function you defined.

## Request String Format

The canonical, going-forward request format is:

`BASE.TARGET[.MINUTES]`

`BASE` and `TARGET` are required. `MINUTES` is an optional AdHoc lookback window (an integer
from `0` to `60`). Every request of this form is a DEX price query - see
[DEX price queries](#dex-price-queries) below.

::: tip NOTE
The data request string should be converted to a `Bytes32` (Hex) value before submitting it to
your smart contract's request function, for example:

```javascript
const endpoint = web3.utils.asciiToHex("WETH.USDC")
const endpoint = web3.utils.asciiToHex("WETH.USDC.30")
... etc.
```
:::

::: warning DEPRECATED
The legacy explicit-type forms `BASE.TARGET.AD[.MINUTES]` (DEX/AdHoc) and
`BASE.TARGET.PR.SUBTYPE[...]` ([Finchains](#legacy-finchains-api-pr)) are still accepted but
**deprecated**. New consumers should use the suffix-less form above; the `AD`/`PR` parsing will
be removed once live usage drops to zero. Any trailing fields a DEX query cannot honour (such as
a leftover Finchains `SUBTYPE`) are ignored, and the price is still returned from the DEX mean.
:::

### BASE

The symbol for the base currency for which the price will be returned, e.g. `WETH`, `xFUND`,
`ETH` etc.

### TARGET

The symbol for the target currency in which to return the price, e.g. `USDC`, `WETH`, `USD`.

For DEX queries the supported pairs are those listed by the supported DEXs - see
[DEX price queries](#dex-price-queries) below.

## DEX price queries

Every canonical request (`BASE.TARGET[.MINUTES]`) is served as a DEX price query. The provider
__attempts__ to query the supported DEXs' subgraphs to determine whether the `BASE` and `TARGET`
symbols are known to the DEX, and whether the DEX has a liquidity pool representing the pair. For
every DEX that lists the pair it retrieves the latest price, then calculates the mean across all
results, removing outliers with the Chauvenet criterion where there is enough data to do so.

The supported DEXs and pairs are curated and published by the
[dex-pair-verify](https://ooo-dex.unification.io) catalogue, which the provider oracle syncs from.
They span the major EVM DEX families across several chains — including Uniswap (v2/v3/v4),
Sushiswap, Shibaswap, Quickswap, Pancakeswap and Honeyswap — as well as non-EVM sources such as
Osmosis on Cosmos. The catalogue is curated and grows over time, so treat the live browser as the
source of truth rather than any fixed list here.

**Browse the currently supported pairs, DEXs and networks at
[https://ooo-dex.unification.io](https://ooo-dex.unification.io).**

::: danger IMPORTANT
`BASE` and `TARGET` are **CaSe SeNsItIvE**! `XFUND` is __not__ the same as `xFUND`.
**Always check your request endpoints, and that at least one DEX supports the pair before sending a data request!**
:::

### `MINUTES`

The optional third field sets the lookback window, as an integer from `0` to `60`. The default
is `0`, which tells the oracle to fetch only the latest prices. A non-zero value tells the oracle
to fetch prices over the past `nn` minutes and average them.

**Example**

We know the `xFUND/WETH` pair is listed on Uniswap v2 and Shibaswap, and we'd like the mean price
over the last 30 minutes:

`xFUND.WETH.30`

The provider picks up the request, queries the supported DEXs that list the pair for the last 30
minutes of prices, and returns the mean (outliers removed with the Chauvenet criterion).

::: tip Legacy `.AD`
The explicit `BASE.TARGET.AD[.MINUTES]` form (e.g. `xFUND.WETH.AD.30`) is the deprecated alias of
the canonical form and is still accepted. Prefer the suffix-less form for new integrations.
:::

## Legacy Finchains API (`PR`)

::: danger REMOVED
The Finchains price API (request type `PR`) has been **removed** - Finchains is no longer queried.

For backward compatibility, the provider **lossily redirects** a legacy `BASE.TARGET.PR.SUBTYPE[...]`
request to the DEX price path on `BASE.TARGET` alone: the Finchains qualifiers (`SUBTYPE`, time
window, per-exchange filter) are **silently dropped** and the price is served as the
[DEX mean](#dex-price-queries). If `BASE.TARGET` is not available on any supported DEX, the request
returns a clear error and is **not** fulfilled.

**Migrate to the suffix-less form** `BASE.TARGET[.MINUTES]`. The `PR` parsing itself will be removed
once live usage drops to zero. Note that DEX prices come from on-chain liquidity pools, not the
former centralised-exchange aggregation, so a redirected price may differ from the old Finchains value.
:::

## Return data

All price data is supplied by the Oracle as `actualPrice * (10 ^ 18)` to standardise 
decimal removal, and allow integer calculations in smart contracts.

## Examples

Canonical (going-forward) requests:

- `WETH.USDC`: latest mean WETH/USDC price from all supported DEXs.
- `WETH.USDC.30`: mean WETH/USDC price over the last 30 minutes.
- `COOL.WETH`: latest mean COOL/WETH price from all supported DEXs.

Legacy (deprecated) forms:

- `COOL.WETH.AD`: explicit AdHoc alias of `COOL.WETH`.
- `BTC.GBP.PR.AVG`: a legacy Finchains-shape request - redirected to the DEX path on `BTC.GBP`
  (qualifiers dropped), or an error if that pair is on no supported DEX.
- `ETH.USD.PR.AVI.24H`: likewise redirected to the DEX path on `ETH.USD` (qualifiers dropped).
