# Developer Guide: `fundjs`

The `fundjs` library contains all the required methods to create, manage and query **Payment Streams**. 
This guide outlines each of the methods, and how to implement and use them.

## Dependencies

NodeJS >= `v18.20` is recommended.

Install the `fundjs` library:

```bash
npm install @unification-com/fundjs
```

Or with Yarn:

```bash
yarn add @unification-com/fundjs
```

For creating signing and broadcasting transactions, some additional dependencies are required:

```bash
npm install @cosmjs/amino@0.32.4 @cosmjs/crypto@0.32.4 @cosmjs/proto-signing@0.32.4 @cosmjs/stargate@0.32.4 cosmjs-utils@0.1.0
```

Or with Yarn:

```bash
yarn add @cosmjs/amino@0.32.4 @cosmjs/crypto@0.32.4 @cosmjs/proto-signing@0.32.4 @cosmjs/stargate@0.32.4 cosmjs-utils@0.1.0
```

## Querying

### Create a Client

First, a `mainchain` client is required for querying the chain. Both RPC and LCD clients are available in `fundjs`.
For the purposes of this guide, the RPC client will be used.

```javascript
import { mainchain } from '@unification-com/fundjs'

const { createRPCQueryClient } = mainchain.ClientFactory
const RPC_ENDPOINT = "http://localhost:26657"
const SENDER_ADDR = "und1sc4wry4kwypu4ddj9nme70dw3ka6wyhv7sc3vx"
const RECEIVER_ADDR = "und17tc3wwr8ksz5tzgl2t4wmpdmaxx0pn7vvz8j3h"

// create a query client
const queryClient = await createMainchainRPCQueryClient({rpcEndpoint: RPC_ENDPOINT})
```

### params

The on-chain parameters can be queried using the `params` method

```javascript
const params = await queryClient.mainchain.stream.v1.params()
```

The returned JSON is transformed into a Javascript object, e.g.

```javascript
{ 
  params: { 
    validatorFee: "0.01"
  }
}
```

### calculateFlowRate

The `calculateFlowRate` allows you to pass data regarding a stream, and returns the flow rate required to create or
update a stream.

The following parameters are required to be passed as a `QueryCalculateFlowRateRequest` type:

- **coin**: (string) the amount being sent, in the lowest denomination, e.g. `100000000000nund`
- **period**: (integer) the time period a stream should be valid for. For example, month, week, hour etc.
  - second: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_SECOND`
  - minute: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_MINUTE`
  - hour: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_HOUR`
  - day: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_DAY`
  - week: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_WEEK`
  - month: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_MONTH`
  - year: `mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_YEAR`
- **duration**: (integer) the number of time periods, e.g. 1, 2 etc.

For example, a monthly payment of 100 FUND would be represented as:

```javascript
const flowRequest = {
  coin: "100000000000nund",
  period: mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_MONTH,
  duration: 1
}
```

100 FUND paid every two weeks would be:

```javascript
const flowRequest = {
  coin: "100000000000nund",
  period: mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_WEEK,
  duration: 2
}
```

The request parameters are passed to `calculateFlowRate`

```javascript
const flowRateRes = await queryClient.mainchain.stream.v1.calculateFlowRate(flowRequest)
```

A Javascript object is returned, for example:

```javascript
{
  coin: { 
    denom: 'nund', 
    amount: '100000000000'
  },
  period: 6,
  duration: 1,
  seconds: 2628000,
  flowRate: 38051
}
```

The `flowRate` can then be in the `createStream` Msg type.

### streams

All streams can be queried using the `streams` method. The only request parameter it accepts is the optional `cosmosjs` 
pagination type `PageRequest`.

```javascript
const allStreamsRes = await queryClient.mainchain.stream.v1.streams() 
```

### allStreamsForReceiver

Streams can be filtered by the receiver wallet address using the `allStreamsForReceiver` method. The 
`QueryAllStreamsForReceiverRequest` type is expected to be passed, containing the receiver wallet address, and the
option `cosmosjs` pagination type `PageRequest`

```javascript
const receiverReq = {
  receiverAddr: RECEIVER_ADDR,
  // pagination: {}
}
```

The request object is then passed to `allStreamsForReceiver`

```javascript
const receiverStreamsRes = await queryClient.mainchain.stream.v1.allStreamsForReceiver(receiverReq)
```

### allStreamsForSender

Streams can be filtered by the sender wallet address using the `allStreamsForSender` method. The
`QueryAllStreamsForSenderRequest` type is expected to be passed, containing the receiver wallet address, and the
option `cosmosjs` pagination type `PageRequest`

```javascript
const senderReq = {
  senderAddr: SENDER_ADDR,
  // pagination: {}
}
```

The request object is then passed to `allStreamsForSender`

```javascript
const senderStreamsRes = await queryClient.mainchain.stream.v1.allStreamsForSender(receiverReq)
```

### streamByReceiverSender

The `streamByReceiverSender` method allows querying streams for given sender and receiver wallet addresses. If a stream
between the two wallets exists, it will be returned

The `QueryStreamByReceiverSenderRequest` type containing the sender and receiver wallet addresses is passed to the
method:

```javascript
const sendRecReq = {
  receiverAddr: RECEIVER_ADDR,
  senderAddr: SENDER_ADDR,
}

const streamRes = await queryClient.mainchain.stream.v1.streamByReceiverSender(sendRecReq)

```

### streamReceiverSenderCurrentFlow

The current and configured flow rate for a particular stream between two wallets can be queried using the 
`streamReceiverSenderCurrentFlow` method. This is useful for checking if a stream is currently active, or if it
has expired (deposit depleted to zero).

```javascript
const streamFlowRes = await queryClient.mainchain.stream.v1.streamReceiverSenderCurrentFlow(sendRecReq)
```

The returned result contains two values:

1. `configuredFlowRate`: The configured flow rate when the stream is active (i.e. it has funds deposited, and has not expired)
2. `currentFlowRate`: the actual current flow rate. For active streams this will be a positive, non-zero integer.
   Inactive, expired or streams with zero deposit will have this value set to `0`

For example, the following result shows that a stream is configured to send 100 FUND per month, but is currently
expired/inactive due to the deposit being zero

```javascript
{ 
  configuredFlowRate: 38051n, 
  currentFlowRate: 0n 
}
```

As soon as the stream is topped up and FUND deposited, the result would be:

```javascript
{ 
  configuredFlowRate: 38051n, 
  currentFlowRate: 38051n 
}
```

### Putting it together

```javascript
// queries.mjs

import { mainchain } from '@unification-com/fundjs'

const { createRPCQueryClient } = mainchain.ClientFactory

const RPC_ENDPOINT = "http://localhost:26657"
const SENDER_ADDR = "und1sc4wry4kwypu4ddj9nme70dw3ka6wyhv7sc3vx"
const RECEIVER_ADDR = "und17tc3wwr8ksz5tzgl2t4wmpdmaxx0pn7vvz8j3h"

// create client
const queryClient = await createRPCQueryClient({rpcEndpoint: RPC_ENDPOINT})

// get the module params
const params = await queryClient.mainchain.stream.v1.params()
console.log(params)

// calculate flow rate for 100 FUND/month
const flowRequest = {
  coin: "100000000000nund",
  period: mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_MONTH,
  duration: 1
}

const flowRateRes = await queryClient.mainchain.stream.v1.calculateFlowRate(flowRequest)
console.log(flowRateRes)

// get all streams
const allStreamsRes = await queryClient.mainchain.stream.v1.streams()
console.log(allStreamsRes)

// get all streams for receiver
const receiverReq = {
  receiverAddr: RECEIVER_ADDR,
  // pagination: {}
}

const receiverStreamsRes = await queryClient.mainchain.stream.v1.allStreamsForReceiver(receiverReq)
console.log(receiverStreamsRes)

// get all streams for sender
const senderReq = {
  senderAddr: SENDER_ADDR,
  // pagination: {}
}

const senderStreamsRes = await queryClient.mainchain.stream.v1.allStreamsForSender(senderReq)
console.log(senderStreamsRes)

// get a single stream between a sender and receiver
const sendRecReq = {
  receiverAddr: RECEIVER_ADDR,
  senderAddr: SENDER_ADDR,
}

const streamRes = await queryClient.mainchain.stream.v1.streamByReceiverSender(sendRecReq)
console.log(streamRes)

// get the current flow rate/chec if the stream is active
const streamFlowRes = await queryClient.mainchain.stream.v1.streamReceiverSenderCurrentFlow(sendRecReq)
console.log(streamFlowRes)
```

## Creating & Broadcasting Txs

The `fundjs` library contains all the required Msg types to create and manage Payment Streams programmatically. Each
method can be imported in order to generate the desired Msg type, which can then be packed into a standard Cosmos Tx,
signed and broadcast using the methods available with `@cosmjs/stargate`.

### Create a Signer & Signing Client

In addition to the RPC client, a signer is required so that a private key can be used to sign and broadcast 
transactions to the Unification network.

For this, a simple function can be created, to which a Mnemonic, chain data and account number can be passed. It will
return a `Secp256k1HdWallet` wallet that can be used to sign transactions

```javascript
import {Secp256k1HdWallet} from '@cosmjs/amino';
import {makeHdPath} from 'cosmjs-utils';

const getOfflineSignerAmino = async ({ mnemonic, chain, account = 0, }) => {
  try {
    const {
      bech32_prefix,
      slip44
    } = chain;
      return await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: bech32_prefix,
        hdPaths: [makeHdPath(slip44, account)]
      });
  } catch (e) {
    console.log('bad mnemonic');
  }
}
```

Using the `getOfflineSignerAmino` function, a signer can be created, for example

```javascript
const MNEMONIC = "my wallet seed phrase..."

// parameters to create a wallet with HD path m44'/5555'/0'/0 and account index 0
const signerParams = {
  mnemonic: MNEMONIC,
  chain: {
    bech32_prefix: "und", // Bech32 prefix, e.g. "und" for Unification
    slip44: 5555, // for the HD wallet path
  },
  account: 0, // array index of the account used to sign. Used in the HD path
} 

const signer = getOfflineSignerAmino(signerParams)
```

Once a signer has been created, a signing client can be initialised. The Amino convertors and Proto registries need to 
be imported from `fundjs`, and passed to `@cosmjs/proto-signing` and `@cosmjs/stargate`

```javascript
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
  mainchainAminoConverters,
  mainchainProtoRegistry
} from '@unification-com/fundjs';

// include cosmos, ibc and mainchain
const protoRegistry = [
  ...cosmosProtoRegistry,
  ...ibcProtoRegistry,
  ...mainchainProtoRegistry
];

const aminoConverters = {
  ...cosmosAminoConverters,
  ...ibcAminoConverters,
  ...mainchainAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);
```

Once these are created, the signing client can be spawned

```javascript
const RPC_ENDPOINT = "http://localhost:26657"
// create client with signer containing all codecs for cosmos, mainchain and ibc
// signer is from getOfflineSignerAmino
const signingClient = await SigningStargateClient.connectWithSigner(RPC_ENDPOINT, signer, {
  registry,
  aminoTypes
})
```

### Dependencies

In order to generate Msgs, first import the `mainchain` module from `@unification-com/fundjs`, so that the 
`MessageComposer` can be called and used

```javascript
// Note: fundjs also includes all cosmos and ibc Msg types, which can be imported here too if required
import { mainchain } from '@unification-com/fundjs';
```

### createStream

The `createStream` Msg requires a deposit amount, flow rate, sender address (must be the address of the wallet signing
the transaction), and the receiver wallet address

```javascript

const SENDER_ADDR = "und1sc4wry4kwypu4ddj9nme70dw3ka6wyhv7sc3vx"
const RECEIVER_ADDR = "und17tc3wwr8ksz5tzgl2t4wmpdmaxx0pn7vvz8j3h"

const { createStream } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = createStream({
  deposit: {
    denom: 'nund',
    amount: '100000000000', // initial deposit of 100 FUND, for 1 month. Can be topped up once stream is created
  },
  flowRate: '38051', // 100 FUND per month
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})
```

### claimStream

The `claimStream` Msg can be sent by a receiving wallet at any time to withdraw from a stream

```javascript
const { claimStream } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = claimStream({
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})

```

### topUpDeposit

A stream sender (the creator) can add funds to the stream to keep it active and continue payments to the receiver (for
example, renewing a subscription)

```javascript
const { topUpDeposit } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = topUpDeposit({
  deposit: {
    denom: 'nund',
    amount: '100000000000', // deposit of 100 FUND
  },
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})
```

### updateFlowRate

A stream sender may also modify the flow rate at any time (for example, to change a subscription tier)

```javascript
const { updateFlowRate } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = updateFlowRate({
  flowRate: '76103', // modify to 200 FUND per month
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})
```

### cancelStream

Finally, the sender (stream creator) can cancel a stream at any time with the `cancelStream` Msg

```javascript
const { cancelStream } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = cancelStream({
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})
```

### fees

A standard `cosmosjs` "`fee`" object can be created and passed to the signing client

```javascript
const fee = {
  amount: [{
    denom: 'nund',
    amount: '50000000'
  }],
  gas: '2000000',
}
```

### Sign and broadcast

Any of the generated messages above can be signed and broadcast using the `signingClient` created previously. The 
signing wallet address, array of `Msgs` and the `fee` are passed to `signAndBroadcast`:

```javascript
const response = await signingClient.signAndBroadcast(SENDER_ADDR, [msg], fee);
console.log(response)
```

### Putting it together

```javascript
// sign_broadcast.mjs
import { Secp256k1HdWallet } from '@cosmjs/amino';
import { makeHdPath } from 'cosmjs-utils';
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
  mainchain,
  cosmosAminoConverters,
  cosmosProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
  mainchainAminoConverters,
  mainchainProtoRegistry
} from '@unification-com/fundjs';

const MNEMONIC = "my wallet seed phrase..."
const RPC_ENDPOINT = "http://localhost:26657"
const SENDER_ADDR = "und1sc4wry4kwypu4ddj9nme70dw3ka6wyhv7sc3vx"
const RECEIVER_ADDR = "und17tc3wwr8ksz5tzgl2t4wmpdmaxx0pn7vvz8j3h"

// include cosmos, ibc and mainchain
const protoRegistry = [
  ...cosmosProtoRegistry,
  ...ibcProtoRegistry,
  ...mainchainProtoRegistry
];

const aminoConverters = {
  ...cosmosAminoConverters,
  ...ibcAminoConverters,
  ...mainchainAminoConverters
};

// register protos and amino converters
const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

// getOfflineSignerAmino accepts a Mnemonic, chain info and account number and returns a signer
const getOfflineSignerAmino = async ({ mnemonic, chain, account = 0, }) => {
  try {
    const {
      bech32_prefix,
      slip44
    } = chain;
    return await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: bech32_prefix,
      hdPaths: [makeHdPath(slip44, account)]
    });
  } catch (e) {
    console.log('bad mnemonic');
  }
}

// parameters to create a wallet with HD path m44'/5555'/0'/0 and account index 0
const signerParams = {
  mnemonic: MNEMONIC,
  chain: {
    bech32_prefix: "und", // Bech32 prefix, e.g. "und" for Unification
    slip44: 5555, // for the HD wallet path
  },
  account: 0, // array index of the account used to sign. Used in the HD path
}

// create the signer using the above params
const signer = getOfflineSignerAmino(signerParams)

// create client with signer containing all codecs for cosmos, mainchain and ibc,
// passing the RPC endpoint and the signer created above
const signingClient = await SigningStargateClient.connectWithSigner(RPC_ENDPOINT, signer, {
  registry,
  aminoTypes
})

// generate Msg to create a new stream
const { createStream } = mainchain.stream.v1.MessageComposer.withTypeUrl;

const msg = createStream({
  deposit: {
    denom: 'nund',
    amount: '100000000000', // initial deposit of 100 FUND, for 1 month. Can be topped up once stream is created
  },
  flowRate: '38051', // 100 FUND per month
  receiver: RECEIVER_ADDR,
  sender: SENDER_ADDR,
})

// Set network fees and gas
const fee = {
  amount: [{
    denom: 'nund',
    amount: '50000000'
  }],
  gas: '2000000',
}

// sign and broadcast the transaction
const response = await signingClient.signAndBroadcast(SENDER_ADDR, [msg], fee);

// dump the response to console
console.log(response)
```

## Monitoring with Websockets

A very simple implementation for monitoring Payment Streams and parsing the received data:

```javascript
import {WebSocket} from 'ws'

const RPC_WS = "ws://localhost:26657/websocket"

const ws = new WebSocket(RPC_WS)

const start = Math.floor(Date.now() / 1000)

console.log(`Subscribe on ${RPC_WS}`)

function getAttr(attributes, which) {
    const a = attributes.find((attr) => attr.key === which)
    return a.value
}

function parseStreamDeposit(attributes) {
    let msg = ''
    const sender = getAttr(attributes, "sender")
    const receiver = getAttr(attributes, "receiver")
    const amount = getAttr(attributes, "amount_deposited")

    msg = `Top Up deposit: ${sender} -> ${receiver}: ${amount}`

    return msg
}

function parseCreateStream(attributes) {
    let msg = ''
    const sender = getAttr(attributes, "sender")
    const receiver = getAttr(attributes, "receiver")
    const flowRate = getAttr(attributes, "flow_rate")

    msg = `Create Stream: ${sender} -> ${receiver}: ${flowRate} nund/sec`

    return msg
}

function parseClaimStream(attributes) {
    let msg = ''
    const sender = getAttr(attributes, "sender")
    const receiver = getAttr(attributes, "receiver")
    const amount = getAttr(attributes, "claim_total")

    msg = `Claim Stream: ${sender} -> ${receiver}: ${amount}`

    return msg
}

function parseUpdateFlowRate(attributes) {
    let msg = ''
    const sender = getAttr(attributes, "sender")
    const receiver = getAttr(attributes, "receiver")
    const oldFlowRate = getAttr(attributes, "old_flow_rate")
    const newFlowRate = getAttr(attributes, "new_flow_rate")

    msg = `Update Flow Rate: ${sender} -> ${receiver} from ${oldFlowRate} to ${newFlowRate} nund/sec`

    return msg
}

function parseCancelStream(attributes) {
    let msg = ''
    const sender = getAttr(attributes, "sender")
    const receiver = getAttr(attributes, "receiver")

    msg = `Stream Cancelled: ${sender} -> ${receiver}`

    return msg
}

function parseEvent(e) {
    let message = ''
    switch(e.type) {
        case "stream_deposit":
            return parseStreamDeposit(e.attributes)
        case "create_stream":
            return parseCreateStream(e.attributes)
        case "claim_stream":
            return parseClaimStream(e.attributes)
        case "update_flow_rate":
            return parseUpdateFlowRate(e.attributes)
        case "cancel_stream":
            return parseCancelStream(e.attributes)
    }
    return message
}

ws.on("open", function open() {
    ws.send(JSON.stringify({ "jsonrpc": "2.0", "method": "subscribe", "params":
            ["message.module='stream'"], "id": start }))
})

ws.on("message", function incoming(data) {
    const res = JSON.parse(data.toString())
    const blockHeight = res.result.data?.value.TxResult.height
    let txHash

    if(res.result?.events) {
        txHash = res.result?.events["tx.hash"][0]
    }

    for(let i = 0; i < res.result.data?.value.TxResult.result.events.length; i++) {
        const e = res.result.data?.value.TxResult.result.events[i]
        const msg = parseEvent(e)
        if(msg !== '') {
            console.log(`${blockHeight}: ${msg} in Tx ${txHash}`)
        }
    }
});

ws.onerror = error => {
    console.log(`WebSocket error: ${JSON.stringify(error, null, 2)}`)
}
```
