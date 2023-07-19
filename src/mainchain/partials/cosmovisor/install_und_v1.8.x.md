```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/v1.8.1/und_v1.8.1_linux_x86_64.tar.gz
tar -zxvf und_v1.8.1_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/upgrades/3-keyleth/bin
mv und $HOME/.und_mainchain/cosmovisor/upgrades/3-keyleth/bin
$HOME/.und_mainchain/cosmovisor/upgrades/3-keyleth/bin/und version --log_level=""
```
