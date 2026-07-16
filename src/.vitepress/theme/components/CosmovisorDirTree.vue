<template>
<div class="language- extra-class"><pre class="language-text"><code>.
├── current -&gt; /path/to/.und_mainchain/cosmovisor/{{current}}
├── genesis
│   └── bin
│       └── und
├── UND_COSMOVISOR_ENV
└── upgrades
    <span v-for="item in dirs">└── {{item}}
        └── bin
            └── und
    </span>
</code></pre></div>
</template>

<script>
export default {
  props: {
    network: { required: true },
    plan: { required: true },
    upgraded: { required: true },
  },
  data() {
    return {
      dirs: [],
      current: '',
    };
  },
  mounted() {
    const ibcPlan = (this.network === 'testnet') ? '1-ibc' : '1-init_ibc'
    const plans = [ibcPlan, '2-grog', '3-keyleth', '4-percival', '5-pike', '6-scanlan', '7-taryon']

    for(let i = 0; i < plans.length; i += 1) {
      this.dirs.push(plans[i])
      if(this.plan === plans[i]) {
        break
      }
    }

    if(this.upgraded === true) {
      this.current = `upgrades/${this.plan}`
    } else {
      this.current = (this.dirs.length > 1) ? `upgrades/${this.dirs[this.dirs.length - 2]}` : 'genesis'
    }

  }
}
</script>
