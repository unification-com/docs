:::: tabs :options="{ useUrlFragment: false }"

::: tab MainNet
#### MainNet

```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.7.0/und_v1.7.0_linux_x86_64.tar.gz
tar -zxvf und_v1.7.0_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin
$HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin/und version --log_level=""
```
:::

::: tab TestNet
#### TestNet

```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.7.0/und_v1.7.0_linux_x86_64.tar.gz
tar -zxvf und_v1.7.0_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin
$HOME/.und_mainchain/cosmovisor/upgrades/2-grog/bin/und version --log_level=""
```
:::

::::
