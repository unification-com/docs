```bash
mkdir -p $HOME/tmp && cd $HOME/tmp
wget https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz
tar -zxvf und_v1.5.1_linux_x86_64.tar.gz
mkdir -p $HOME/.und_mainchain/cosmovisor/genesis/bin
mv und $HOME/.und_mainchain/cosmovisor/genesis/bin
$HOME/.und_mainchain/cosmovisor/genesis/bin/und version --log_level=""
```
