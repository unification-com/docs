:::: tabs :options="{ useUrlFragment: false }"

::: tab MainNet
#### MainNet

**Note:** 1st upgrade path name is `1-init_ibc`

```
.
├── current -> /path/to/.und_mainchain/cosmovisor/upgrades/1-init_ibc
├── genesis
│   └── bin
│       └── und
├── UND_COSMOVISOR_ENV
└── upgrades
    └── 1-init_ibc
        └── bin
            └── und
```
:::

::: tab TestNet
#### TestNet

**Note:** 1st upgrade path name is `1-ibc`

```
.
├── current -> /path/to/.und_mainchain/cosmovisor/upgrades/1-ibc
├── genesis
│   └── bin
│       └── und
├── UND_COSMOVISOR_ENV
└── upgrades
    └── 1-ibc
        └── bin
            └── und
    └── 2-grog
        └── bin
            └── und
```
:::

::::
