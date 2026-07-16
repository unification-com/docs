<template>
  <div>
    {{ item.name }}<br />
    <span v-if="item.link">
      <a :href="item.url" target="_blank">{{ item.url }}</a>
    </span>
    <span v-if="!item.link">
      {{ item.url }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true, type: Object },
  },
}
</script>
