<script>
import { VProgress } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress }
}
</script>

<template>
  <v-progress type="is-danger" :value="40" />
  <v-progress type="is-success" :value="60" />
  <v-progress type="is-info" :value="80" />
  <v-progress type="is-warning" :value="100" />
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
