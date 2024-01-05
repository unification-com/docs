<template>
   <div>
     <strong>Latest Height</strong>: {{ latest }}
     <pre class="language-toml">
     <code><span class="token punctuation">[</span><span class="token table class-name">statesync</span><span class="token punctuation">]</span>
     <span class="token key property">enable</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
     <span class="token key property">rpc_servers</span> <span class="token punctuation">=</span> <span class="token string">"{{ rpcNodes }}"</span>
     <span class="token key property">trust_height</span> <span class="token punctuation">=</span> <span class="token number">{{ trustHeight }}</span>
     <span class="token key property">trust_hash</span> <span class="token punctuation">=</span> <span class="token string">"{{ trustHash }}"</span>
     <span class="token comment"># 2/3 of unbonding time</span>
     <span class="token key property">trust_period</span> <span class="token punctuation">=</span> <span class="token string">"168h"</span></code>
     </pre>
   </div>
</template>

<script>
import { fromBase64, toHex } from '@cosmjs/encoding';

export default {
  props: {
    network: { required: true, type: String },
  },
  data() {
    return {
      restUrl: (this.network === "testnet") ? 'https://rest-testnet.unification.io' : 'https://rest.unification.io',
      trustHeight: "fetching...",
      trustHash: "fetching...",
      latest: "fetching...",
      rpcNodes: (this.network === "testnet") ? "https://sync1-testnet.unification.io:26657,https://sync2-testnet.unification.io:26657" : "https://rpc1.unification.io:443,https://rpc.unification.chainmasters.ninja:443",
    };
  },
  mounted() {
    fetch(`${this.restUrl}/cosmos/base/tendermint/v1beta1/blocks/latest`, {cache: "no-cache"})
        .then(response => response.json())
        .then(latest => {
          let h = Number(latest.block?.header?.height)
          this.latest = h
          h = Math.floor(h / 1000) * 1000
          this.trustHeight = h
          fetch(`${this.restUrl}/cosmos/base/tendermint/v1beta1/blocks/${h}`, {cache: "no-cache"})
              .then(response => response.json())
              .then(trusted => {
                this.trustHash = toHex(fromBase64(trusted.block_id.hash)).toUpperCase()
              })
        });
  }
}

</script>
