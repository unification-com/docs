# Unification ERC-20 & IBC Tokens

In addition to the native **FUND** coin on Unification MainNet, Unification has a number of ERC-20 and IBC tokens deployed 
on several networks. Below is an overview of the tokens deployed by Unification and its community members.

## FUND

**FUND** is the native coin of Unification `mainchain` used for staking, Tx fees and BEACON/WrkChain fees. It also has 
representation on other networks as an ERC-20 token. It can be transferred from `mainchain` to Ethereum mainnet via IBC 
and Gravity Bridge. From Ethereum, it can currently also be bridged to Polygon mainnet. The ERC-20 can be traded, and
is also a utility token for paying for UNoDE subscriptions.

It is represented as an ERC-20 Token on the following networks:

| Network             | Contract Address/IBC Denomination                                      | Symbol |
|---------------------|------------------------------------------------------------------------|--------|
| Unification MainNet | Native coin (no contract or IBC denomination)                          | nund   |
| Gravity Bridge      | `ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519` | nund   |
| Ethereum mainnet    | `0xe9b076b476d8865cdf79d1cf7df420ee397a7f75`                           | FUND   |
| Polygon mainnet     | `0x1f0145eaC900d75808510190dFC293A09c7A964F`                           | fxFUND | 
| Shibarium mainnet   | `0xaDA0fA1f9A4Ea8513B3b607EFD31792336c09507`                           | FUND   |
| Sepolia testnet     | `0xAfE70A1985ebDefbDCaeedba045d66091C38E1B1`                           | FUND   |
| Shibarium testnet   | `0x27Ad57c007fa9Ef6BC4D2846f341e316e0445dEe`                           | FUND   |

**Community FUND deployments**

Additionally, the community have deployed representations of **FUND** on other networks:

| Network | Contract Address/IBC Denomination                                          | Symbol  |
|---------|----------------------------------------------------------------------------|---------|
| Osmosis | `ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC`     | nund    |

## xFUND

**xFUND** is a utility token used to pay for services such as OoO and VOR.

| Network           | Contract Address/IBC Denomination             | Symbol  |
|-------------------|-----------------------------------------------|---------|
| Ethereum mainnet  | `0x892A6f9dF0147e5f079b0993F486F9acA3c87881`  | xFUND   |
| Polygon mainnet   | `0x77a3840f78e4685afaf9c416b36e6eae6122567b`  | xFUND   |
| Shibarium mainnet | `0x89dc93C6c12CaE47aCAf4aD9305d7A442C30dBB2`  | xFUND   |
| Sepolia testnet   | `0xb07C72acF3D7A5E9dA28C56af6F93862f8cc8196`  | xFUND   |
| Shibarium testnet | `0x78f022230EaE6E05D8739E83a14b0Cf1D00CfaD5`  | xFUND   |

## FUNDx (Supertoken)

**FUNDx** is the [Superfluid Supertoken](https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-tokens).
It is wrapped FUND (1:1), with functionality required for Superfluid subscriptions. Used to pay UNoDE subscriptions
in **FUND**.

**Note:** Each Supertoken is a wrapper for the corresponding **FUND** token on its respective network

| Network           | Contract Address                             | Symbol  |
|-------------------|----------------------------------------------|---------|
| Ethereum mainnet  | `0x479347DfD0Be56f2a5F7bB1506bFD7AB24d4BA26` | FUNDx   |
| Polygon mainnet   | `0xf1e073d53AF781966F23B1a3B2D9E67cbbA69B92` | fxFUNDx |
| Sepolia testnet   | `0x783fDEAB6951504C4601184587AaFED01511ED24` | FUNDx   |
