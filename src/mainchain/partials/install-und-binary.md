The latest pre-compiled binaries are available for download from
[https://github.com/unification-com/mainchain/releases](https://github.com/unification-com/mainchain/releases).

- The `und` binary has been compiled for Linux, OSX and Windows.

Download the latest version of `und`:

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/checksums.txt
```
:::

::: tab TestNet
#### TestNet
```bash
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/checksums.txt
```
:::
::::


Once downloaded, you can verify the SHA256 checksum against those listed in the release's `checksums.txt`, for example:

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
openssl dgst -sha256 und_v1.6.3_linux_x86_64.tar.gz
```

should output:

```
SHA256(und_v1.6.3_linux_x86_64.tar.gz)= a640ba6ef95c19aa2b75c300d9307c65d89418d02ae878e1e98d449cc4d42371
```
:::

::: tab TestNet
#### TestNet
```bash
openssl dgst -sha256 und_v1.6.3_linux_x86_64.tar.gz
```

should output:

```
SHA256(und_v1.6.3_linux_x86_64.tar.gz)= a640ba6ef95c19aa2b75c300d9307c65d89418d02ae878e1e98d449cc4d42371
```
:::
::::

Extract them and copy the binaries to a suitable location - preferably a location in your `$PATH` environment variable,
for example `/usr/local/bin`.

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
tar -zxvf und_v1.6.3_linux_x86_64.tar.gz
sudo mv und /usr/local/bin/und
```
:::

::: tab TestNet
#### TestNet
```bash
tar -zxvf und_v1.6.3_linux_x86_64.tar.gz
sudo mv und /usr/local/bin/und
```
:::
::::

Once installed, verify:

```bash
which und
```

should output:

```bash
/usr/local/bin/und
```

and:

```bash
und version --log_level=""
```

The output should match the latest release version tag.
