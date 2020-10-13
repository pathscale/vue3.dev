<script>
import { VProgress, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress, VField }
}
</script>

<template>
  <v-field>
    <v-progress :value="null" />
  </v-field>
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
