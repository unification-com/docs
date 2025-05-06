# Developer Guide: React Hooks

The `fundjs-react` library extends the `fundjs` library and contains all the required React hooks to create, manage 
and query **Payment Streams**.

The code snippets in this guide are available as a full React application in our Github repository
[`fundjs-examples`](https://github.com/unification-com/fundjs-examples/tree/main/examples/react) 

The Payment Streams React application was built using [Cosmos Kit](https://github.com/cosmology-tech/cosmos-kit), 
which contains all the necessary scaffolding to create a React application that includes RPC communication, and 
transaction signing/broadcasting using a number of wallets (such as Keplr).

**Note:** This guide assumes the reader is familiar with React, and associated concepts such as hooks.

## Dependencies

NodeJS >= `v18.20` is recommended.

Install the `fundjs-react` library:

```bash
npm install @unification-com/fundjs-react
```

Or with Yarn:

```bash
yarn add @unification-com/fundjs-react
```

For creating signing and broadcasting transactions, some additional dependencies are required:

```bash
npm install @cosmjs/stargate @cosmos-kit/react @interchain-ui/react @interchain-ui/react-no-ssr @tanstack/react-query 
```

Or with Yarn:

```bash
yarn add @cosmjs/stargate @cosmos-kit/react @interchain-ui/react @interchain-ui/react-no-ssr @tanstack/react-query
```

## Querying

The `fundjs-react` library contains hooks for each of the gRPC query endpoints for the `streams` module

### useParams

### useCalculateFlowRate

### useStreams

### useAllStreamsForReceiver

### useStreamByReceiverSender

### useStreamReceiverSenderCurrentFlow

### useAllStreamsForSender
