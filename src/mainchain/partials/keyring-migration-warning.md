
::: warning IMPORTANT!
**If you are upgrading your `und` binary from a previous version to v1.8.x, Cosmos SDK v0.46.x uses a new keyring
interface, and your keyring will be migrated the first time you interact with the upgraded `und`**

Please ensure you back up your keystore first, and make sure you have safely copied private keys and written
down mnemonics!

On Linux systems, for example, the keyring may be located in

```bash
$HOME/.local/share/keyrings/UndMainchain.keyring
```

Safely backup your keyring and any keyfiles you may be using!
:::

