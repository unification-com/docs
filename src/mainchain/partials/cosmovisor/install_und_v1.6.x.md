:::: tabs :options="{ useUrlFragment: false }"

::: tab MainNet
#### MainNet

**Note:** upgrade path name is `1-init_ibc`

```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.6.2/und_v1.6.2_linux_x86_64.tar.gz
tar -zxvf und_v1.6.2_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/1-init_ibc/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/1-init_ibc/bin
$HOME/.und_mainchain/cosmovisor/upgrades/1-init_ibc/bin/und version --log_level=""
```
:::

::: tab TestNet
#### TestNet

**Note:** upgrade path name is `1-ibc`

```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.6.2/und_v1.6.2_linux_x86_64.tar.gz
tar -zxvf und_v1.6.2_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin
$HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin/und version --log_level=""
```
:::

::::
