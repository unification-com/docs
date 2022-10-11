The latest pre-compiled binaries are available for download from
[https://github.com/unification-com/mainchain/releases](https://github.com/unification-com/mainchain/releases).

- The `und` binary has been compiled for Linux, OSX and Windows.

Download the latest version:

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
wget https://github.com/unification-com/mainchain/releases/download/1.5.1/und_v1.5.1_linux_x86_64.tar.gz
wget https://github.com/unification-com/mainchain/releases/download/1.5.1/checksums.txt
```
:::

::: tab TestNet
#### TestNet
```bash
wget https://github.com/unification-com/mainchain/releases/download/v1.6.2/und_v1.6.2_linux_x86_64.tar.gz
wget https://github.com/unification-com/mainchain/releases/download/v1.6.2/checksums.txt
```
:::
::::


Once downloaded, you can verify the SHA256 checksum against those listed in the release's `checksums.txt`, for example:

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
$ openssl dgst -sha256 und_v1.5.1_linux_x86_64.tar.gz
SHA256(und_v1.5.1_linux_x86_64.tar.gz)= ...12324abcd...
```
:::

::: tab TestNet
#### TestNet
```bash
$ openssl dgst -sha256 und_v1.6.2_linux_x86_64.tar.gz
SHA256(und_v1.6.2_linux_x86_64.tar.gz)= ...12324abcd...
```
:::
::::

Extract them and copy the binaries to a suitable location - preferably a location in your `$PATH` environment variable,
for example `/usr/local/bin`.

:::: tabs :options="{ useUrlFragment: false }"
::: tab MainNet
#### MainNet
```bash
tar -zxvf und_v1.5.1_linux_x86_64.tar.gz
sudo mv und /usr/local/bin/und
```
:::

::: tab TestNet
#### TestNet
```bash
tar -zxvf und_v1.6.2_linux_x86_64.tar.gz
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
