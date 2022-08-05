It is good practice to set the minimum-gas-prices value in `$HOME/.und_mainchain/config/app.toml`, in order to protect
your full node from spam transactions. This should be set as a decimal value in `nund`, and the recommended value is
currently `25.0nund`. This means your node will ignore any Txs with a gas price below this value. To do so, open
up `$HOME/.und_mainchain/config/app.toml` in a text editor, and set `minimum-gas-prices`

```bash
nano $HOME/.und_mainchain/config/app.toml
```

Change:

```toml
minimum-gas-prices = ""
```

To, for example:

```toml
minimum-gas-prices = "25.0nund"
```

Hit <kbd>Ctrl</kbd>+<kbd>X</kbd> followed by `y` and then return to save the file and exit nano.
