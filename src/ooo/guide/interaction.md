# OoO Contract Initialisation and Data Request Guide

This guide will walk you through the steps required to initialise your contract (add
Tokens and increase the Router's allowance), and also make a data request.

::: warning Note
ensure you have gone though the [implementation](implementation.md) guide
and deployed your smart contract before continuing with this guide.
:::

Run the `truffle` development console, and connect to the Sepolia testnet:

```bash
npx truffle console --network=sepolia
```

::: tip Note
See [Provider Addresses](../providers.md) for the latest Sepolia OoO data
provider address, used for the `provider` variable below
:::


Within the `truffle` console, load the contract instances, and accounts
ready for interaction

```bash 
truffle(sepolia)> let accounts = await web3.eth.getAccounts()
truffle(sepolia)> let consumerOwner = accounts[0]
truffle(sepolia)> let provider = "0x611661f4B5D82079E924AcE2A6D113fAbd214b14"
truffle(sepolia)> let myDataConsumer = await MyDataConsumer.deployed()
```

## 1. Contract Initialisation

The following steps need only be done periodically, to ensure all parties have
the correct amount of tokens and gas to pay for data.

Go to [xFUNDMOCK](https://sepolia.etherscan.io/address/0xb07C72acF3D7A5E9dA28C56af6F93862f8cc8196#writeContract)
on Etherscan, and connect MetaMask **with the account used to deploy the `MyDataConsumer`
smart contract**, then run the `gimme()` function. This is a faucet function, and will
supply your wallet with 10 `xFUNDMOCK` tokens. You may do this once per hour.

Get the deployed address for your `MyDataConsumer` smart contract:

```bash 
truffle(sepolia)> myDataConsumer.address
```

Next, using either Etherscan, or MetaMask, transfer 5 `xFUNDMOCK` tokens to your
`MyDataConsumer` contract address.

Finally, we need to allow the `Router` smart contract to pay fees on the `MyDataConsumer`
contract's behalf:

```bash 
truffle(sepolia)> myDataConsumer.increaseRouterAllowance("115792089237316195423570985008687907853269984665640564039457584007913129639935", {from: consumerOwner})
```

## 2. Data Request

Now that the `MyDataConsumer` smart contract has been initialised, we can request data to 
be sent to the smart contract. You may need to top up Consumer contract's
tokens every so often.

First, check the current `price` in your `MyDataConsumer` contract. Run:

```bash
truffle(sepolia)> let priceBefore = await myDataConsumer.price()
truffle(sepolia)> priceBefore.toString()
```

The result should be 0.

Next, request some data from the provider. Run:

```bash
truffle(sepolia)> let endpoint = web3.utils.asciiToHex("WETH.USDC")
truffle(sepolia)> myDataConsumer.getData(provider, 100000000, endpoint, {from: consumerOwner})
```

The first command encodes the data endpoint (the pair we want to price) into a bytes32
value. Here we are requesting the latest mean `WETH/USDC` price, calculated across the
supported DEXs that list the pair. See the [OoO Data API Guide](ooo_api.md) for the full
request format, including the optional lookback window.

A full list of supported pairs, DEXs and networks is available from the
[dex-pair-verify catalogue](https://ooo-dex.unification.io).

It may take a block or two for the request to be fully processed - the provider will listen for
the request, then submit a Tx with the data to the `Router`, which will forward it to
your smart contract.

After 30 seconds or so, run:

```bash
truffle(sepolia)> let priceAfter = await myDataConsumer.price()
truffle(sepolia)> priceAfter.toString()
```

If the price is still 0, simply run the following a couple more times:

```bash
truffle(sepolia)> priceAfter = await myDataConsumer.price()
truffle(sepolia)> priceAfter.toString()
```

The price should now be a non-zero value.

:::tip Note
By default, the OoO sends all price data converted to `actualPrice * (10 ** 18)` in
order to remove any decimals. 

To convert to the actual decimal price, you can for example:

```bash
truffle(sepolia)> let actualPrice = web3.utils.fromWei(priceAfter)
truffle(sepolia)> actualPrice.toString()
```
:::

Next - see what data can be requested via the [OoO Data API](ooo_api.md).
