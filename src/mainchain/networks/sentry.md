# Configuring Sentries (for Validators)

Although not essential, it is highly recommended to configure at least one (preferably two or more) sentries to protect 
a validator node. Conceptually, sentries act as a P2P "firewall" for a validator node, protecting it from DDoS
and other attacks. The validator node runs in private subnet and communicates only with its configured sentries,
which relay information to and from the public blockchain network.

::: tip Note
The Validator should have egress access to the Internet via a configured NAT or Proxy to allow for software updates etc.
:::

This guide will outline the steps and configurations required to set up a 2-Sentry network. It will use generic
IP addresses and pseudo firewall rules for demonstration purposes only and should therefore not be copied verbatim to
your own configuration. SSH configuration is out of scope for this guide, which will only deal with the required
P2P ports. It is assumed the reader has configured their own SSH tunnel, Bastion etc. for access to their nodes.

## Example Network

Cloud platforms each have their own methods for configuring public and private subnets. Generally, hosts on a private
subnet will not be assigned a public IP and will require Internet access via a NAT gateway or similar. Hosts on a public
subnet will be assigned a public IP, and will have direct access to the Internet. If the subnets are created within
the same VPN, then communication should be possible between hosts on the different subnets.

Configuring VPNs and subnets is out of scope for this guide

### Validator

Private Subnet  
Private IP: `10.0.0.3`  
Public IP: N/A  

### Sentry 1

Public Subnet  
Private IP: `10.1.1.4 `  
Public IP: `123.123.22.33`  

### Sentry 2

Public Subnet  
Private IP: `10.1.1.5`  
Public IP: `234.234.33.44`  

## Firewall Configuration

There should be two firewall rules covering P2P access - one for private access between sentries and the Validator, and
another of public P2P access. For example:

1. Validator - allow ingress on port `26656` from `10.1.1.4/32` (Sentry 1) and `10.1.1.5/32` (Sentry 2)
2. Sentries - allow ingres access on port `26656` from `0.0.0.0/0` (everyone)

## Node Configuration

The Sentry nodes should be installed, running, and fully synced. Once fully synced, it is possible to reconfigure the
nodes to communicate directly with each other by editing the `.und_mainchain/config/config.toml` file.

All configuration parameters are in the `[p2p]` section of `config.toml`

### Validator

The Valildator's `config.toml` should contain somethign along the lines of:

```toml
seeds = ""
pex = false
persistent_peers = "sentry_1_node_id@10.1.1.4:26656,sentry_2_node_id@10.1.1.5:26656"
unconditional_peer_ids = "sentry_1_node_id,sentry_2_node_id"
addr_book_strict = false
```

- `seeds` is not required to be set, because the validator should not communicate directly with other P2P nodes that are 
not its sentries, or broadcast its P2P address.  
- `pex` is set to `false`, since the validator will not broadcast or consume the wider network's P2P data.  
- `persistent_peers` is set to the two Sentry nodes' P2P addresses.  
- `unconditional_peer_ids` ensures that the validator will always try to connect to the sentry nodes.  
- `addr_book_strict` allows the node address book to store private IP addresses, since `persistent_peers` is configured
to use the private IPs of the sentry nodes.

### Sentry 1

Sentry 1 should be configured to connect to the Validator and to Sentry 2, for example:

```toml
seeds = "0c2b65bc604a18a490f5f55bb7b4140cfb512ced@seed1.unification.io:26656,e66e0f89af19da09f676c85b262d591b8c2bb9d8@seed2.unification.io:26656"
pex = true
persistent_peers = "validator_node_id@10.0.0.3:26656,sentry_2_node_id@234.234.33.44:26656,"
unconditional_peer_ids = "validator_node_id,sentry_2_node_id"
private_peer_ids= "validator_node_id"
addr_book_strict = false
```

- `seeds` is set as normal, so that the Sentry can query for more P2P addresses and broadcast its own  
- `pex` is set to true to allow for P2P address propagation  
- `persistent_peers` is set to the Validator (private IP), and optionally Sentry 2. Note that for Sentry 2 the public IP 
is used, otherwise the private IP version of the node address would be stored in its address book and broadcast.
- `unconditional_peer_ids` is set to the Validator's Node ID and optionally Sentry 2's Node ID
- `private_peer_ids` is set to the Validator's Node ID to ensure that its P2P address is never gossiped/broadcast to the
network.
- `addr_book_strict` is set to false to allow the node to store the validator's private IP.

### Sentry 2

Sentry 2 should be configured to connect to the Validator and to Sentry 1, for example:

```toml
seeds = "0c2b65bc604a18a490f5f55bb7b4140cfb512ced@seed1.unification.io:26656,e66e0f89af19da09f676c85b262d591b8c2bb9d8@seed2.unification.io:26656"
pex = true
persistent_peers = "validator_node_id@10.0.0.3:26656,sentry_1_node_id@123.123.22.33:26656,"
unconditional_peer_ids = "validator_node_id,sentry_1_node_id"
private_peer_ids= "validator_node_id"
addr_book_strict = false
```

Notes are similar to those outlined for Sentry 1.
