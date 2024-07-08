# Documentation

A Web3 wallet. such as one provided by MataMask is required in order to log in and use UNoDE services.

## Creating an account

UNoDE accounts are anonymous and private. They are only linked to the wallet you use for subscription payment, and no
identifiable data is stored as part of your account unless optionally supplied should you desire communication via email.

Creating an account is a simple process:

1. Visit [unode.unification.io](https://unode.unification.io)
2. Click the "Connect Wallet" button and follow the instructions - you will be
   asked to sign a one-time message each time you log in to verify your wallet/account.

Your account has been created, and you can proceed to setting up a subscription

Each time you log in, you will just need to connect your wallet and sign the one-time message. Your account will be
retrieved - no need for account registration or signing in with a username and password.

## Create a subscription stream

Navigate to "Subscriptions" in your UNoDE portal.

1. Click on one of the subscription options.
2. Follow the instructions in the Subscription modal.

**Note** - if you are subscribing using Superfluid, you will be asked to wrap some FUND into FUNDx
(Superfluid Supertoken), approve token spending, and finally create the subscription.

## Create a project

Once you have an active subscription, you can create a new project. Projects are associated with the underlying
networks, for example you can create a project which connects to the Unification network.

Once a project has been created, you will have access to an API key (and the respective URLs for connecting to
the network's RPC, REST and Websocket interfaces).

You can use these URLs in any project (dApps, Web3, Unification's Web Wallet, the `und` CLI tool's `--node` flag etc.)
as you would any Infura/Alchemy/Unification RPC link.
