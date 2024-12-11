# Developer Guide: `fundjs`

The `fundjs` library contains all the required methods to create, manage and query Payment Streams This guide outlines
each of the methods, and how to implement and use them.

## Dependencies

NodeJS >= v18.20 is recommended.

Install the `fundjs` library:

```bash
npm install @unification-com/fundjs
```

Or with Yarn:

```bash
yarn add @unification-com/fundjs
```

For creating signing and broadcasting transactions, some other dependencies are also required:

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

The following parameters are required:

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
const flowRate = await client.mainchain.stream.v1.calculateFlowRate(flowRequest)
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

### allStreamsForReceiver

### streamByReceiverSender

### streamReceiverSenderCurrentFlow

### allStreamsForSender

## Creating & Broadcasting Txs



