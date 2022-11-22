# IBC Transfer to Gravity Bridge via Web Portal

::: tip Note
Refer to the official Blockscape Gravity Portal
[HowTo](https://blockscape-network.medium.com/a-beginners-guide-when-and-how-to-use-the-gravity-bridge-portal-97d5745025dd)
for generic usage
:::

**Originally published on [Medium](https://medium.com/unificationfoundation/wfund-bridge-access-use-grow-evolve-54adb2aabf70)**

This guide will cover sending FUND from Unification over IBC to the ERC20 wFUND contract on
Ethereum mainnet, and back again via the Web Portal. The guide assumes any wallets the reader has (Unification, Gravity
Bridge and Ethereum) are sufficiently funded to cover any gas fees on the respective chains in addition to the FUND 
being transferred.

## Introduction

Bridging FUND to wFUND (and vice versa) will require a Unification wallet within Keplr which can be used alongside the
Unification main Web Wallet

The Keplr wallet can be downloaded through the following link: 
[https://www.keplr.app/download](https://www.keplr.app/download)

Once the Keplr wallet is installed & backed up, we can start the process through the Gravity Bridge portal (Your Keplr
Unification wallet can be recovered in the Unification Web wallet if desired)

This can be done by accessing the "Use Gravity Bridge Here" link at
[https://www.gravitybridge.net/](https://www.gravitybridge.net/)

Alternatively the link can be accessed directly from

Gravity Bridge Portal: [https://bridge.blockscape.network/](https://bridge.blockscape.network/)

It's important to note that bridging FUND to wFUND is a two-step process:

1. Unification &lt;-&gt; Gravity Bridge 
2. Gravity Bridge &lt;-&gt; Ethereum

Together, we'll review/break down each step of this process.

## FUND -&gt; ERC-20

### 1. Bridge FUND from Unification to Gravity Bridge

To start to bridge Fund from Unification to Ethereum, we will initially click on the drop-down to open the menu/connect
the Keplr wallets

![Chain Select](/assets/mainchain/ibc/web-portal/1.chain-select.png "Chain Select")

In the dropdown, select Unification:

![Chain Select](/assets/mainchain/ibc/web-portal/2.chain-select-dropdown-options.png "Chain Select")

And once selected, press "connect"

![Connect to Unification](/assets/mainchain/ibc/web-portal/3.connect-to-unification.png "Connect to Unification") 

This will prompt Keplr to add Unification to your Kepler wallet

You should see the following prompt and accept it. As previously noted, this will carry the needed parameters for a
successful transfer in future steps.

![Approve Keplr](/assets/mainchain/ibc/web-portal/4.approve-keplr-add-unification.png "Approve Keplr")

Once accepted, this action will add the Unification wallet in the bottom of the list, which you can confirm by scrolling
down

![Unification added](/assets/mainchain/ibc/web-portal/5.unification-added-1.png "Unification added")

![Unification added](/assets/mainchain/ibc/web-portal/6.unification-added-2.png "Unification added")

Congratulations! You are now ready to start the first step of the bridge!

::: tip Note
If you have an existing connection to Unification in Keplr and are having issues connecting, you can delete the
configuration from Keplr (reference the circled "unification (x)" in image above), and follow the previous steps to
re-add it.
:::

Once both networks are selected, (assuming you have transferred funds to the wallet) you can simply select the amount of
FUND and hit "Begin Transfer"

![Begin Transfer](/assets/mainchain/ibc/web-portal/7.unification-gravity-begin-transfer.png "Begin Transfer")

When executed, you will see the following prompt

![Start Transfer](/assets/mainchain/ibc/web-portal/8.unification-gravity-starting-transfer.png "Start Transfer")

The action should prompt a call in your wallet which you can approve:

![Approve Keplr](/assets/mainchain/ibc/web-portal/9.unification-keplr-approve.png "Approve Keplr")

Once accepted, you will see a confirmation message

![Transfer Started](/assets/mainchain/ibc/web-portal/10.transfer-started.png "Transfer Started")

If executed correctly, this step will be fairly quick and result in a confirmation message similar to below:

![Transfer Complete](/assets/mainchain/ibc/web-portal/11.unification-transfer-complete.png "Transfer Complete")

And the status of the transaction will show in the transaction history once the ticket is confirmed which will change to
a green check after the fully processed

![Tx History](/assets/mainchain/ibc/web-portal/12.unification-gravity-tx-history.png "Tx History")

Congratulations! You have successfully bridged your FUND to Gravity Bridge and are ready to start the second step of the
process to wFUND/Ethereum!

### 2. Bridge FUND from Gravity Bridge to Ethereum
Now that we are familiar with Gravity Bridge, the steps of this process will be rather simple/familiar.

Once ethereum is chosen as the destination, you will need to connect your metamask account to the site as normal:

![Connect MetaMask](/assets/mainchain/ibc/web-portal/13.connect-metamask.png "Connect MetaMask")

Following this step, we select Gravity Bridge as the source and Ethereum as the destination, enter the amount of FUND to
transfer and the desired bridge fee option

![Begin Gravity](/assets/mainchain/ibc/web-portal/14.gravity-ethereum-begin.png "Begin gravity")

The only additional point of consideration will be the speed of the transfers

As transfers are batched in different stages, the timing of the transfers is an estimate.

In our experience so far, standard transfer has been slightly faster than the estimate and the Instant, slightly less!

Once confirmed, you will see a notification similar to below, which you can approve

![Approve Keplr](/assets/mainchain/ibc/web-portal/15.gravity-ethereum-approve-1.png "Approve Keplr")

Once approved, another wallet call will be made to approve:

![Approve Keplr](/assets/mainchain/ibc/web-portal/16.gravity-ethereum-approve-2.png "Approve Keplr")

Followed by a confirmation of the batch

![Tx Created](/assets/mainchain/ibc/web-portal/17.batch-transaction-created.png "Tx Created")

At this point, you can add FUND to your Metamask wallet for easier access

![MetaMask Suggest Token](/assets/mainchain/ibc/web-portal/18.add-suggested-token.png "MetaMask Suggest Token")

The status of your transaction can be seen on the Gravity Bridge Transactions pages at
[https://bridge.blockscape.network/history](https://bridge.blockscape.network/history)

![Tx History](/assets/mainchain/ibc/web-portal/19.gravity-ethereum-tx-history.png "Tx History")

and once completed, the FUND will reflect in your Metamask Wallet!

![FUND in MetaMask](/assets/mainchain/ibc/web-portal/20.fund-in-metamask.png "FUND in MetaMask")

Congrats! Your FUND has officially arrived and is ready to use on Ethereum!

## ERC-20 -&gt; FUND

Bridging wFUND back to FUND will follow the reverse of the same process described above

Ethereum -&gt; Gravity Bridge -&gt; Unification

### 1. Bridge from wFUND to Gravity Bridge

Starting at the Blockspace portal, we can simply choose our wallet for Eth+ GB

![Begin](/assets/mainchain/ibc/web-portal/21-ethereum-gravity-begin.png "Begin")

To find FUND, you can search by the contract address below:

`0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75`

And confirm on etherscan at

[https://etherscan.io/token/0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75](https://etherscan.io/token/0xe9B076B476D8865cDF79D1Cf7DF420EE397a7f75)

![Select FUND](/assets/mainchain/ibc/web-portal/22.select-fund-token.png "Select FUND")

Once FUND is selected, You will need to give permission to access FUND through the following two prompts

![Approve](/assets/mainchain/ibc/web-portal/23.approve-fund-1.png "Approve")
![Approve](/assets/mainchain/ibc/web-portal/24.approve-fund-2.png "Approve")

With the approval processed, you will be able to start the transfer

![Approve Complete](/assets/mainchain/ibc/web-portal/25.fund-approve-complete.png "Approve Complete")
![Permission Given](/assets/mainchain/ibc/web-portal/26.permission-given.png "Permission Given")
![Check Approve](/assets/mainchain/ibc/web-portal/27.check-approval.png "Check Approve")

Finally you will approve the transaction in your Metamask wallet:

![Confirm MetaMask](/assets/mainchain/ibc/web-portal/28.confirm-tx-metamask.png "Confirm MetaMask")

And when processed, a confirmation similar to the one below will appear:

![Tx Started](/assets/mainchain/ibc/web-portal/29.ethereum-gravity-tx-started.png "Tx Started")

Now is another good time to go for a coffee, and once returned your transaction should show completed as indicated by
the checkmark in the status page and the FUND back in your GB wallet. At the time of writing, the transaction should be
complete in 96 block confirmations.

![Tx History](/assets/mainchain/ibc/web-portal/30.ethereum-gravity-tx-history.png "Tx History")

### 2. FUND from Gravity Bridge to Unification

The process of this transfer is identical to our first transfer with Gravity Bridge selected as the source and
Unification as the destination

![Begin](/assets/mainchain/ibc/web-portal/31.gravity-unification-begin.png "Begin")

Once completed, your FUND will once again be visible in your Unification wallet and exchangeable to your Unification web
wallet if desired!

![Tx History](/assets/mainchain/ibc/web-portal/32.gravity-ethereum-tx-history.png "Tx History")
