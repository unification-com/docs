<template>
  <table>
    <table v-for="item in relayers">
      <thead>
      <th></th>
      <th>Source</th>
      <th>Destination</th>
      </thead>
      <tbody>
      <tr>
        <td>Name</td>
        <td>{{ item.src.chain_name}}</td>
        <td>{{ item.dest.chain_name}}</td>
      </tr>
      <tr>
        <td>Chain ID</td>
        <td>{{ item.src.chain_id}}</td>
        <td>{{ item.dest.chain_id}}</td>
      </tr>
      <tr>
        <td>Channel</td>
        <td>{{ item.src.channel}}</td>
        <td>{{ item.dest.channel}}</td>
      </tr>
      <tr>
        <td>Coin</td>
        <td>{{ item.src.coin_id}}</td>
        <td>{{ item.dest.coin_id}}</td>
      </tr>
      </tbody>
    </table>
  </table>
</template>

<script>
export default {
  props: {
    relayers: { required: true },
  }
}
</script>
