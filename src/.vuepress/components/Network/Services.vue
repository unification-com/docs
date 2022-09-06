<template>
  <div>
    <h4>Unification Foundation</h4>
    <table>
      <Network-ServiceTableRow :services="services?.seed?.foundation" title="Seeds" />
      <Network-ServiceTableRow :services="services?.rpc?.foundation" title="RPCs" />
      <Network-ServiceTableRow :services="services?.rest?.foundation" title="REST" />
      <Network-ServiceTableRow :services="services?.explorer?.foundation" title="Explorer" />
    </table>
    <div v-if="parseInt(numCommunity, 10) > 0">
      <h4>Community</h4>
      <table>
        <Network-ServiceTableRow v-if="services?.seed?.community.length > 0" :services="services?.seed?.community" title="Seeds" />
        <Network-ServiceTableRow v-if="services?.rpc?.community.length > 0" :services="services?.rpc?.community" title="RPCs" />
        <Network-ServiceTableRow v-if="services?.rest?.community.length > 0" :services="services?.rest?.community" title="REST" />
        <Network-ServiceTableRow v-if="services?.explorer?.community.length > 0" :services="services?.explorer?.community" title="Explorer" />
      </table>
    </div>
    <div v-if="parseInt(numLegacy, 10) > 0">
      <h4>Legacy (pre {{ currentChainId }})</h4>
      <table>
        <Network-ServiceTableRow v-if="services?.seed?.legacy.length > 0" :services="services?.seed?.legacy" title="Seeds" />
        <Network-ServiceTableRow v-if="services?.rpc?.legacy.length > 0" :services="services?.rpc?.legacy" title="RPCs" />
        <Network-ServiceTableRow v-if="services?.rest?.legacy.length > 0" :services="services?.rest?.legacy" title="REST" />
        <Network-ServiceTableRow v-if="services?.explorer?.legacy.length > 0" :services="services?.explorer?.legacy" title="Explorer" />
      </table>
    </div>

    <h3>IBC</h3>
    <h4>Unification Foundation</h4>
    <Network-IBC :relayers="services?.ibc_relayers?.foundation" />
    <div v-if="services?.ibc_relayers?.community.length > 0">
      <h4>Community</h4>
      <Network-IBC :relayers="services?.ibc_relayers?.foundation" />
    </div>

  </div>
</template>

<script>
export default {
  props: {
    services: { required: true, type: Object },
    currentChainId: {required: true },
    numCommunity: {required: true },
    numLegacy: {required: true },
  },
}
</script>
