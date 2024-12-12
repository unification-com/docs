# und CLI

The und binary (>= v1.10.1) can also be used to create and manage Payment Streams, and a number of commands are 
available to facilitate this.

## Create a Stream

In order to create a stream we need a few pieces of information - the receiver wallet, the flow rate, and the deposit.

### Calculating the Flow Rate

The Flow rate can be calculated manually, or automatically using the und binary.

#### Manually

First, we’ll need to convert the amount being sent in FUND to `nund`. This is simply `FUND * 10^9`, for example, 
100 FUND = 100,000,000,000 `nund`,

Next, we calculate the flow rate using the formula:

**`Flow Rate = nund / total seconds`**

For example, if we’re sending 100 FUND/month, then the total seconds is **(365/12) * 24 * 60 * 60**.

**`Flow Rate = 100000000000 / ((365/12) * 24 * 60 * 60) = 38051`**

(rounded down from 38051.75)

Our flow rate is **38051**.

#### Automatically

Two commands can be used to help automatically calculate the flow rate:

**Convert FUND to nund:**

```bash
und convert 100 fund nund
```

**Calculate the Flow rate:**

```bash
und query stream calculate_flow \
--coin 100000000000nund \
--period month \
--duration 1
```

This will return the flow rate of **38051**.

Once we have this information, the stream can be created using the command:

```bash
und tx stream create [RECEIVER_ADDRESS] [DEPOSIT_AMOUNT] [FLOW_RATE]
```

For example:

```bash
und tx stream create und123...abc 1000000000000nund 38051 \
--node https://rpc.unification.io:443 \
--chain-id FUND-MainNet-2 \
--gas auto \
--gas-adjustment 1.5 \
--gas-prices 25.0nund \
--from SENDER_WALLET
```

## Modify a Stream

### Top Up Deposit

Topping up a deposit is simple, and requires the sender wallet to execute the following command:

```bash
und tx stream topup [RECEIVER_ADDRESS] [DEPOSIT_AMOUNT]
```

For example:

```bash
und tx stream topup und123...abc 1000000000000nund \
--node https://rpc.unification.io:443 \
--chain-id FUND-MAinNet-2 \
--gas auto \
--gas-adjustment 1.5 \
--gas-prices 25.0nund \
--from SENDER_WALLET
```

### Update Flow Rate

The flow rate can be updated at any time during an active stream. The sender may modify the flow rate if, for example, 
they wish to move on to a higher (or lower) subscription tier on the service they are paying for.

Two important things happen when a flow rate is updated:

1. Any unclaimed payments are calculated at the current flow rate and sent to the receiver wallet (with validator 
   fees also calculated and sent if applicable)
2. The deposit zero time is recalculated based on the new flow rate.

The following command can be executed to update a flow rate:

```bash
und tx stream update-flow [RECEIVER_ADDRESS] [NEW_FLOW_RATE]
```

For example, the Sender wants to move onto a higher subscription tier, which costs 150 FUND/month. The new flow 
rate is therefore 57077 nund/sec:

`150000000000 / ((365/12) * 24 * 60 * 60) = 57077`

(rounded down from 57077.62)

The command to run is:

```bash
und tx stream update-flow und123...abc 57077 \
--node https://rpc.unification.io:443 \
--chain-id FUND-MainNet-2 \
--gas auto \
--gas-adjustment 1.5 \
--gas-prices 25.0nund \
--from SENDER_WALLET
```

## Cancel a Stream

A sender can cancel a stream at any time. When a stream is cancelled, any unclaimed payment up to the time of the
cancellation is calculated and sent to the receiver. Any remaining deposit, if any, is returned to the sender's wallet.

The following command can be executed to cancel a stream:

```bash
und tx stream cancel [RECEIVER_ADDRESS]
```

For example:

```bash
und tx stream cancel und123...abc \
--node https://rpc.unification.io:443 \
--chain-id FUND-MainNet-2 \
--gas auto \
--gas-adjustment 1.5 \
--gas-prices 25.0nund \
--from SENDER_WALLET
```

## Claim from a Stream

A receiver can run the claim command at any time:

```bash
und tx stream claim [SENDER_ADDRESS]
```

For example:

```bash
und tx stream claim und456...def \
--node https://rpc.unification.io:443 \
--chain-id FUND-MainNet-2 \
--gas auto \
--gas-adjustment 1.5 \
--gas-prices 25.0nund \
--from RECEIVER_WALLET
```

## Query a Stream

A stream can be queried with the following command:

```bash
und query stream stream [RECEIVER_ADDRESS] [SENDER_ADDRESS]
```

For example:

```bash
und query stream stream und123...abc und456...def \
--node https://rpc.unification.io:443 \
--chain-id FUND-MainNet-2
```

The data returned will be similar to that displayed in the UI, but without the real-time claimable amount.
