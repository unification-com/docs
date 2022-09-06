<template>
  <div>
    <h3>Upgrades</h3>
    <Network-Upgrades :upgrades="networkInfo.upgrades" />
    <h3>Nodes & Services</h3>
    <Network-Services
        :services="networkInfo.services"
        :currentChainId="networkInfo.current_chain_id"
        :numCommunity="numCommunity"
        :numLegacy="numLegacy"
    />
  </div>
</template>

<script>
export default {
  props: {
    network: { required: true, type: String },
  },
  data() {
    return {
      networkInfo: {
        upgrades: [],
        services: {},
      },
      numCommunity: 0,
      numLegacy: 0,
    };
  },
  mounted() {
    fetch(`https://raw.githubusercontent.com/unification-com/${this.network}/master/latest/network_info.json`, {cache: "no-cache"})
        .then(response => response.json())
        .then(data => {
          this.networkInfo = data
          this.numCommunity = data.services.seed.community.length + data.services.rpc.community.length + data.services.rest.community.length + data.services.explorer.community.length
          this.numLegacy = data.services.seed.legacy.length + data.services.rpc.legacy.length + data.services.rest.legacy.length + data.services.explorer.legacy.length
        });
  }
}
</script>
