```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.6.1/und_v1.6.1_linux_x86_64.tar.gz
tar -zxvf und_v1.6.1_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin
$HOME/.und_mainchain/cosmovisor/upgrades/1-ibc/bin/und version --log_level=""
```
