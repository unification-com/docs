# Testing Payment Streams

:::tip Note
This guide is for **TestNet** only, and valid from block **13,910,300**
:::

## Introduction

Payment Streams offer a way to send a specified amount of tokens to a receiver over a specified amount of time.
Streams are calculated as a flow of the lowest denomination of a token per second. For example, for FUND, this would
be a flow of `nund`/s

Once a stream is set up, it is the responsibility of the receiver to "claim" payments, which are calculated as per the
specified flow rate at the point of the claim. 

Streams will continue until either the deposited amount runs out, or the sender cancels the stream. Flow rates and 
deposit amounts can also be adjusted at any time by the receiver.

**A simple example**

Sender Alice sets up a payment stream to receiver Bob. She wants to send 60480000 `nund` over 1 week to Bob. This
works out at a flow rate of 100 `nund` per second. Alice creates a new stream, setting a flow rate of 100 `nund`/s
and deposits 60480000 `nund`.

After 2 days (exactly 172800 seconds), Bob executes his first claim transaction. He receives
17280000 `nund` in his wallet, which leaves 43200000 `nund` remaining deposited in the stream. Validator fees are 0% in
this example (lucky Bob!).

One day later (exactly 86400 seconds later!), Alice decides to cancel the stream. Since it was 86400 seconds since
Bob's last claim, the module sends the 8640000 `nund` still owed to Bob's wallet. The remaining 34560000 `nund` deposit
is returned to Alice's wallet.

## Testing prerequisites

### `und` Binary

The latest `und` v1.10.x binary is required for testing:

```bash
mkdir $HOME/test_und
cd $HOME/test_und
wget https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_linux_x86_64.tar.gz
tar -zxvf und_v1.10.1_linux_x86_64.tar.gz
```

### Wallets

At least two wallets are required for testing - one to send, and one to receive. Multiple wallets can be used to test
multiple streams. You can set up new wallets using `und`, for example

```bash
./und keys add tn_stream_sender1
./und keys add tn_stream_sender2
./und keys add tn_stream_receiver1
./und keys add tn_stream_receiver2
```

:::tip Note
- a Sender can send to multiple different receiver wallets
- a Receiver can receive from multiple different sender wallets
- only one stream can exist between a sender and receiver wallet, but can be modified
:::

Once you have at least two wallets, visit the [TestNet Faucet](https://faucet-testnet.unification.io) to ensure they
all have a decent amount of FUND. The faucet will send 100 FUND to a wallet, and can be used multiple times to receive
larger amounts of FUND.

## Create a stream

In this example, we're sending 500 FUND/month for two months. The sender wallet will need 1000 FUND to deposit in the
stream, plus a few extra for Tx fees.

:::tip Note
The stream module works with integer values, not decimals. Therefore, calculated flow rates may not be exact, leading to 
over or under payments of a couple of `nund` (a fraction of a fraction of a penny) 
:::

### Calculate flow rate

First, we need to FUND amount in `nund`. 1 FUND is 1,000,000,000 nund, so

500 FUND = 500000000000 nund

This can be converted for you by running:

```bash
./und convert 500 fund nund
```

#### Manual

**Target Rate:** 500 FUND/month.  
**Calculation:** 500000000000 / ((365/12) * 24 * 60 * 60) = 190258 nund/second. (rounded down from 190258.75)

#### Automatic

The `und` binary has a built-in flow rate calculator, which can be called using

```bash
und query stream calculate_flow --coin [AMOUNT] --period [PERIOD] --duration [NUMBER_OF_PERIODS]
```

For example, if we were sending 100 FUND every 2 weeks, the command would be

```bash
./und query stream calculate_flow --coin 100000000000nund --period week --duration 2
```

To calculate 500 FUND month, we can run

```bash
./und query stream calculate_flow --coin 500000000000nund --period month --duration 1
```

### Submit the `create` transaction

Now we have the flow rate of 190258nund/s for a payment of 500 FUND/month, we can create a new payment stream. Since the
payment needs to run for 2 months, we'll need to deposit 1000 FUND in the same transaction, using the following:

```bash
und tx stream create [RECEIVER_ADDRESS] [DEPOSIT_AMOUNT] [FLOW_RATE]
```

For this guide's example:

```bash
./und tx stream create $(und keys show tn_stream_receiver1 -a) 1000000000000nund 190258 \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2 \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 25.0nund \
  --from tn_stream_sender1
```

Querying the transaction will output a number of events containing information about the stream, including the date/time
the deposit will reach zero. This can be used by developers, for example to notify users when a subscription is 
due for renewal.

## Querying a Stream

A stream can be queries using the following command:

```bash
und query stream stream [RECEIVER_ADDRESS] [SENDER_ADDRESS]
```

For example:

```bash
./und query stream stream $(und keys show tn_stream_receiver1 -a) $(und keys show tn_stream_sender1 -a) \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2
```

This will retrieve and output the stream data including flow rate, remaining deposit and the date/time when the deposit
will reach zero.

## Claim/withdraw

Receivers can claim and withdraw at any time by sending the `claim` transaction. The module will automatically 
calculate how much the receiver can withdraw from the stream. The payment is calculated from the time of the last
claim (in the case of a new stream, this is the same as the creation time), to the current block time. The number
of seconds that has passed between the two times is multiplied by the flow rate to get the payment value.

If the module is configured with a Validator fee > 0%, this is deducted from the payment amount and sent to the 
fee collector for distribution among validators. The remainder is sent to the Receiver wallet.

The claim command has the following format:

```bash
und tx stream claim [SENDER_ADDRESS]
```

For example:

```bash

./und tx stream claim $(und keys show tn_stream_sender1 -a) \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2 \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 25.0nund \
  --from tn_stream_receiver1
```

## Updating Streams

Two aspects of a stream can be modified by the **sender** at any time:

1. The deposit can be topped up - this will extend the stream time. For example, adding 600 FUND to a 100 FUND/month
stream will allow the stream to continue for another 6 months.
2. The flow rate can be modified - this will change the amount being paid to the receiver. For example, a change to 
a subscription plan could prompt a change in the flow rate.

### Top up deposit

Topping up a deposit is simple, and requires the sender wallet to execute the following command:

```bash
und tx stream topup [RECEIVER_ADDRESS] [DEPOSIT_AMOUNT]
```

For this example, the sender wants to ensure the stream continues for another two months, and therefore deposits 
1000 FUND:

```bash
./und tx stream topup $(und keys show tn_stream_receiver1 -a) 1000000000000nund \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2 \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 25.0nund \
  --from tn_stream_sender1
```

Once the transaction has been processed on-chain, querying the stream will show that the deposit zero time has increased
accordingly:

```bash
./und query stream stream $(und keys show tn_stream_receiver1 -a) $(und keys show tn_stream_sender1 -a) \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2
```

### Modify flow rate

The flow rate can be updated at any time during an active stream. The sender may modify the flow rate if, for example,
they wish to move on to a higher (or lower) subscription tier on the service they are paying for.

Two important things happen when a flow rate is updated:

1. Any unclaimed payments are calculated at the current flow rate and sent to the receiver wallet (with validator fees
also calculated and sent if applicable)
2. The deposit zero time is recalculated based on the new flow rate.

Senders may also with to execute the `topup` command after updating a flow rate, especially if the flow rate has been
increased.

The following command can be executed to update a flow rate:

```bash
und tx stream update-flow [RECEIVER_ADDRESS] [NEW_FLOW_RATE]
```

In this guide's example, the Sender wants to move onto a higher subscription tier, which costs 750 FUND/month. The new
flow rate is therefore **285388 nund/s**:

750000000000 / ((365/12) * 24 * 60 * 60) = 285388 (rounded down from 285388.12)

The command to run is:

```bash
./und tx stream update-flow $(und keys show tn_stream_receiver1 -a) 285388 \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2 \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 25.0nund \
  --from tn_stream_sender1
```

Querying the transaction hash will show a number of events emitted with data relating to the automatic claim, and the
new flow rate and deposit zero time

Querying the stream will also output the new flow rate and deposit zero time

## Cancelling Streams

A sender can cancel a stream at any time. When a stream is cancelled, any unclaimed payment up to the time of the
cancellation is calculated and sent to the receiver. Any remaining deposit, if any, is returned to the sender's wallet.

The following command can be executed to cancel a stream:

```bash
und tx stream cancel [RECEIVER_ADDRESS]
```

For example:

```bash
./und tx stream cancel $(und keys show tn_stream_receiver1 -a) \
  --node https://rpc-testnet.unification.io:443 \
  --chain-id FUND-TestNet-2 \
  --gas auto \
  --gas-adjustment 1.5 \
  --gas-prices 25.0nund \
  --from tn_stream_sender1
```
