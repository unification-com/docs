The latest pre-compiled binaries are available for download from
[https://github.com/unification-com/mainchain/releases](https://github.com/unification-com/mainchain/releases).

**The `und` binary has been compiled for Linux, OSX and Windows.**

Download the latest version of `und`:

```bash
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz
wget https://github.com/unification-com/mainchain/releases/download/v1.6.3/checksums.txt
```

Once downloaded, you can verify the SHA256 checksum against those listed in the release's `checksums.txt`, for example:

```bash
$ openssl dgst -sha256 und_v1.6.3_linux_x86_64.tar.gz
SHA256(und_v1.6.3_linux_x86_64.tar.gz)= ...12324abcd...
```

Extract them and copy the binaries to a suitable location - preferably a location in your `$PATH` environment variable,
for example `/usr/local/bin`.

```bash
tar -zxvf und_v1.6.3_linux_x86_64.tar.gz
sudo mv und /usr/local/bin/und
```

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
