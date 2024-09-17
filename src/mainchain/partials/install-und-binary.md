The latest pre-compiled binaries are available for download from
[https://github.com/unification-com/mainchain/releases](https://github.com/unification-com/mainchain/releases).

- The `und` binary has been compiled for Linux, OSX and Windows.

Download the latest version of `und` - for example, using Linux:

<DownloadUndClient />

Once downloaded, you can verify the SHA256 checksum against those listed in the release's `checksums.txt`, for example:

```bash
openssl dgst -sha256 ARCHIVE_NAME.tar.gz
```

**Replacing `ARCHIVE_NAME.tar.gz` with the archive you downloaded, e.g. `und_v1.9.0_linux_x86_64.tar.gz`**

should output something like:

```
SHA256(und_v1.9.0_linux_x86_64.tar.gz)= e03079ba9e4484b73e0469e4afc2372be4dca10a7013337fd9505edaa6823082
```

Extract them and copy the binaries to a suitable location - preferably a location in your `$PATH` environment variable,
for example `/usr/local/bin`.

```bash
tar -zxvf ARCHIVE_NAME.tar.gz
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

The output should be <LatestUndVersion />.
