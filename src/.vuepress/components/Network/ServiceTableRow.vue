<template>
  <tr v-if="services">
    <td>
      <strong>{{ title }}</strong>
    </td>
    <td>
      <ul>
        <li v-for="item in services">
          <Network-ServiceItem :item="item" />
        </li>
      </ul>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    services: { required: true },
    title: { required: true, type: String }
  },
}
</script>

