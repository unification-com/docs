# Developer Guide: `fundjs`

The `fundjs` library contains all the required methods to create, manage and query Payment Streams. This guide outlines
each of the methods, and how to implement and use them.

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

// create client
const client = await createMainchainRPCQueryClient({rpcEndpoint: RPC_ENDPOINT})
```

### params

The on-chain parameters can be queried using the `params` method

```javascript
const params = await client.mainchain.stream.v1.params()
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
const flowRateRes = await client.mainchain.stream.v1.calculateFlowRate(flowRequest)
```

A Javascript object is returned:

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
const allStreamsRes = await client.mainchain.stream.v1.streams() 
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
const receiverStreamsRes = await client.mainchain.stream.v1.allStreamsForReceiver(receiverReq)
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
const senderStreamsRes = await client.mainchain.stream.v1.allStreamsForSender(receiverReq)
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

const streamRes = await client.mainchain.stream.v1.streamByReceiverSender(sendRecReq)

```

### streamReceiverSenderCurrentFlow

The current and configured flow rate for a particular stream between two wallets can be queried using the 
`streamReceiverSenderCurrentFlow` method. This is useful for checking if a stream is currently active, or if it
has expired (deposit depleted to zero).

```javascript
const streamFlowRes = await client.mainchain.stream.v1.streamReceiverSenderCurrentFlow(sendRecReq)
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
const client = await createRPCQueryClient({rpcEndpoint: RPC_ENDPOINT})

// get the module params
const params = await client.mainchain.stream.v1.params()
console.log(params)

// calculate flow rate for 100 FUND/month
const flowRequest = {
  coin: "100000000000nund",
  period: mainchain.stream.v1.StreamPeriod.STREAM_PERIOD_MONTH,
  duration: 1
}

const flowRateRes = await client.mainchain.stream.v1.calculateFlowRate(flowRequest)
console.log(flowRateRes)

// get all streams
const allStreamsRes = await client.mainchain.stream.v1.streams()
console.log(allStreamsRes)

// get all streams for receiver
const receiverReq = {
  receiverAddr: RECEIVER_ADDR,
  // pagination: {}
}

const receiverStreamsRes = await client.mainchain.stream.v1.allStreamsForReceiver(receiverReq)
console.log(receiverStreamsRes)

// get all streams for sender
const senderReq = {
  senderAddr: SENDER_ADDR,
  // pagination: {}
}

const senderStreamsRes = await client.mainchain.stream.v1.allStreamsForSender(senderReq)
console.log(senderStreamsRes)

// get a single stream between a sender and receiver
const sendRecReq = {
  receiverAddr: RECEIVER_ADDR,
  senderAddr: SENDER_ADDR,
}

const streamRes = await client.mainchain.stream.v1.streamByReceiverSender(sendRecReq)
console.log(streamRes)

// get the current flow rate/chec if the stream is active
const streamFlowRes = await client.mainchain.stream.v1.streamReceiverSenderCurrentFlow(sendRecReq)
console.log(streamFlowRes)
```

## Creating & Broadcasting Txs


