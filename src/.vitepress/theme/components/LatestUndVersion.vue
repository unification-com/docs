<template>
  <span>{{ latestVersion }}</span>
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
};
</script>
