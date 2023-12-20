# UNoDE Alpha Testing

::: tip
If you are interested in taking part in the Beta test, please see our
[Intake Form](https://docs.google.com/forms/d/e/1FAIpQLSfSnNu6nKrEOEfJlCEYAEMhcPMgUMVDVjHOFKN8uMPbqW8rZQ/viewform)
:::

Documentation for UNoDE Alpha Testers.

## Getting Test tokens

For the Alpha test, we are processing subscriptions on **Sepolia** testnet, so there is no expense to alpha
testers for taking part. You will need:

1. Sepolia ETH
2. Test FUND (on Sepolia)

### Sepolia ETH

Sepolia ETH can be obtained from [https://sepoliafaucet.com/](https://sepoliafaucet.com/)

### Test FUND

You'll also need some test FUND to pay for the subscriptions. On Sepolia network, this can be obtained from the
test FUND ERC-20 smart contract found at [https://sepolia.etherscan.io/address/0xAfE70A1985ebDefbDCaeedba045d66091C38E1B1](https://sepolia.etherscan.io/address/0xAfE70A1985ebDefbDCaeedba045d66091C38E1B1)

Test FUND can be minted directly on Etherscan:

1. Click the "Contract" tab, followed by "Write Contract"
2. Click the "Connect to Web3" button and follow the instructions for your wallet
3. Click the "Mint" function, followed by the "Write" button.

This will mint 100 test FUND to your wallet, and can be done once every 24 hours.

## Creating an account

UNoDE accounts are anonymous and private. They are only linked to the wallet you use for subscription payment, and no
identifiable data is stored as part of your account.

If necessary, ensure your wallet (e.g. MetaMask) is currently connected to the Sepolia test network.

1. Open the Alpha link you were given
2. Enter the password you were given
3. Click the "Connect Wallet" button and follow the instructions - you will be 
   asked to sign a one-time message each time you log in to verify your wallet/account.

Your account has been created, and you can proceed to setting up a subscription

Each time you log in, you will just need to connect your wallet and sign the one-time message. Your account will be
retrieved - no need for account registration or signing in with a username and password.

## Create a subscription stream

Navigate to "Subscriptions" in your UNoDE portal.

1. Click on one of the subscription options. These are just "starter" suggestions - you will be able to modify 
   your subscription at any time once the stream has been initialied and set up.
2. Follow the instructions in the Subscription modal. You will be asked to wrap some FUND into FUNDx 
   (Superfluid Supertoken), approve token spending, and finally create the subscription.

Once your subscription is set up, you can modify it at any time via the Superfluid UI.

## Create a project

Once you have an active subscription, you can create a new project. Projects are associated with the underlying 
networks, for example you can create a project which connects to the Unification network.

Once a project has been created, you will have access to an API key (and the respective URLs for connecting to 
the network's RPC, REST and Websocket interfaces).

You can use these URLs in any project (dApps, Web3, Unification's Web Wallet, the `und` CLI tool's `--node` flag etc.) 
as you would any Infura/Alchemy/Unification RPC link.
