<template>
  <div class="language-bash extra-class"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/tmp <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/tmp
  <span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/{{ latestVersion }}/und_{{ latestVersion }}_linux_x86_64.tar.gz
  <span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/{{ latestVersion }}/checksums.txt
</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latestVersion: null
    };
  },
  mounted() {
    fetch("https://api.github.com/repos/unification-com/mainchain/releases/latest")
        .then(response => response.json())
        .then(data => (this.latestVersion = data.tag_name));
  }
}
</script>
