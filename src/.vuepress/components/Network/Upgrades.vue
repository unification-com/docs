<template>
  <div>
    <table>
      <thead>
      <th><code>und</code></th>
      <th>Chain Id</th>
      <th>From #</th>
      <th>To #</th>
      <th>State Export Required?*</th>
      </thead>
      <tbody>
      <tr v-for="item in upgrades">
        <td>{{ item.und }}</td>
        <td>{{ item.chain_id }}</td>
        <td>{{ item.from }}</td>
        <td>{{ item.to }}</td>
        <td>{{ item.state_export }}</td>
      </tr>
      </tbody>
    </table>
    <p><strong>*</strong>State export and migration to new genesis to upgrade from previous version</p>
  </div>
</template>

<script>
export default {
  props: {
    upgrades: { required: true, type: Array },
  },
}
</script>
