<template>
  <div class="language-bash extra-class"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/tmp <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>/tmp
  <span class="token function">wget</span> https://github.com/unification-com/mainchain/releases/download/{{ dlDir }}/und_v{{ version }}_linux_x86_64.tar.gz
  <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> und_v{{ version }}_linux_x86_64.tar.gz
  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/{{installDir}}
  <span class="token function">mv</span> und <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/{{installDir}}
  <span class="token environment constant">$HOME</span>/.und_mainchain/cosmovisor/{{installDir}}/und version <span class="token parameter variable">--log_level</span><span class="token operator">=</span><span class="token string">""</span></code></pre>
  </div>
</template>

<script>
export default {
  props: {
    version: { required: true },
    plan: { required: true },
  },
  data() {
    return {
      dlDir: (this.version === "1.5.1") ? this.version : `v${this.version}`,
      installDir: (this.version === "1.5.1") ? 'genesis/bin' : `upgrades/${ this.plan }/bin`,
    };
  },
}
</script>
