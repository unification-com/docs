```bash
sudo nano /etc/systemd/system/und.service
```

At a minimum, the service configuration should contain the following, replacing `USERNAME` and `FULL_PATH_TO`
with your own values:

```
[Unit]
Description=Unification Mainchain Validator Node

[Service]
User=USERNAME
Group=USERNAME
WorkingDirectory=/home/USERNAME
ExecStart=/usr/local/bin/und start --home /FULL_PATH_TO/.und_mainchain
LimitNOFILE=4096

[Install]
WantedBy=default.target
```

It is entirely possible to create a more sophisticated service definition should you desire.

:::tip Note
**Also see**: [Using Cosmovisor with und: Quick Start](/mainchain/migrations/cosmovisor.md) for details on running `und` with
`cosmovisor`.
:::

Next, inform `systemctl` of the new service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable und
```

The service can now be started:

```bash
sudo systemctl start und
```

and stopped:

```bash
sudo systemctl stop und
```

in the background.

Finally, you can monitor the log output for the service by running:

```bash
$ sudo journalctl -u und --follow
```
