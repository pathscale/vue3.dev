<script>
import { VProgress } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress }
}
</script>

<template>
  <v-progress size="is-small" :value="20" />
  <v-progress :value="30" />
  <v-progress size="is-medium" :value="40" />
  <v-progress size="is-large" :value="50" />
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
