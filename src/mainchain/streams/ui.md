# Payment Streams UI

The Unification Foundation has deployed a fully functional, proof of concept Payment Streams UI:

[streams.unification.io](https://streams.unification.io)

![Create Stream](/assets/mainchain/streams/Create.png "Create Stream")

Using the UI, it’s possible to interact with all the features of the Payment Streams module:

* Creating a stream
* Modifying a stream
* Withdrawing (claiming) from a stream
* Cancelling a stream
* Querying a stream (current state on-chain)
* View the full Tx history for a stream (querying events emitted for a stream)

## Creating a Stream

In order to create a new payment stream, you will need a few bits of information:

* The receiver wallet address
* The amount you want to stream and the frequency
* Enough FUND in your wallet to cover the deposit and the transaction fee

In this example, we’re creating a stream for 100 FUND/month. Once the details are entered, the flow rate is 
automatically calculated and displayed for confirmation.

![Create Stream](/assets/mainchain/streams/Create_2.png "Create Stream")

Before broadcasting the transaction, the UI will display the following information:

* The receiving wallet address
* The amount you wish to deposit (this can be modified before sending the transaction)
* The calculated flow rate (in both nund/second and FUND/second
* The time and date the current deposit amount will run out (effectively ending the stream). This will automatically
  update if the Deposit amount is modified before sending the transaction, to show the effect of adding 
  more/less deposit.

When the "Create" button is clicked, your selected wallet provider (for example Keplr) will pop up asking you to verify, 
sign and broadcast the transaction.

If successful, the UI will display the transaction hash with a link to the block explorer.

Behind the scenes, the Payment Streams module will emit a number of useful events in the on-chain transaction, which 
can be used by developers to capture and process data (for example, a websocket listening for Stream events in order to 
update their subscription database)

## Viewing a Stream (as a Sender)

Once created, the UI will automatically update with the new stream information, which can be accessed via the
"As Sender" tab.

![View Stream](/assets/mainchain/streams/Stream_Info.png "View Stream")

Each stream entry in the list contains all pertinent information regarding the stream, including:

* The Receiver wallet address (linked to the block explorer)
* The current flow rate
* The remaining deposit in the stream
* The date and time the current deposit amount will reach zero
* The date and time of the last claim made by the receiver
* A real-time update of the current amount the receiver can claim/withdraw

Viewing the stream as a sender displays a number of action buttons which the sender can undertake. These are covered in
the relevant sections below.

## Viewing a Stream (as a Receiver)

As a Receiver, the data shown is identical to that of a sender. The only difference is the action buttons - only the 
Tx History and Claim buttons are available to the receiver.

![View Stream](/assets/mainchain/streams/Stream_Info_as_receiver.png "View Stream")

## View Tx History (both)

Clicking the "Tx History" button will open a modal listing the complete transaction history for the stream. 
This includes transactions broadcast by both the sender and the receiver.

![Stream Tx History](/assets/mainchain/streams/Tx_History.png "Stream Tx History")

## Modifying a Stream (sender)

The sender can modify the stream in two ways - topping up the deposit, or adjusting the flow rate.

## Top up the Deposit

A sender may wish to top up the deposit to, for example, renew or extend a subscription. If the deposit zero time is 
close, a subscription service may send a reminder to a user that the subscription is about to expire. The user may then
add more FUND to the stream in order to extend or renew the subscription.

Once the "Top Up Deposit" button is clicked, a dialog will appear allowing the user to enter the amount of FUND they 
wish to add to the stream. Clicking "Send" will prompt the wallet provider to ask the user to verify/sign and broadcast the Tx. The only requirements are that the sender wallet has enough FUND to cover the addition, and the tx fee.

If successful, the deposit zero time will be updated, and relevant events will be emitted by the blockchain.

## Modify the Flow Rate

A sender may wish to modify the flow rate of a stream if, for example, they are moving to a different subscription tier 
to a particular service.

Clicking the "Update Flow Rate" button will open a dialog prompting the user to enter the new details.

![Update Stream](/assets/mainchain/streams/Update_Flow_Rate_1.png "Update Stream")

The new flow rate will be calculated based on this data, and a new dialog will appear asking the user to confirm.

![Update Stream](/assets/mainchain/streams/Update_Flow_Rate_2.png "Update Stream")

This dialog will contain the new flow rate information, as well as a notice that the current claimable amount at the 
current flow rate will automatically be sent to the receiver before the flow rate is applied on-chain.

## Cancelling a Stream (sender)

A sender can cancel a stream at any time. This will open a dialog asking the user to confirm, and display information 
about the cancellation process.


![Cancel Stream](/assets/mainchain/streams/Cancel.png "Cancel Stream")

Cancelling a stream will have the following effects:

* The claimable amount at the block time the cancellation transaction is processed will be sent to the receiver.
* Any remaining deposit held in the stream will be refunded to the sender.
* The stream will be deleted from the blockchain state

## Claiming from a Stream (receiver)

A receiver can withdraw the current claimable amount at any time during the lifetime of a stream. This can be done as 
frequently as desired, or even only once the stream has ended (the deposit zero time is reached).

![Claim Stream](/assets/mainchain/streams/Claim.png "Claim Stream")

Clicking the "Claim" button will open a dialog showing:

* The total amount currently claimable
* The actual amount you will receive
* The amount that will be sent to validators. This is currently a flat fee of 1% of the total claimable amount 
  in this transaction. The fee can be modified via Governance.
