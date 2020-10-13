<script>
import { VProgress, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress, VField }
}
</script>

<template>
  <section>
    <v-field label="Sizes">
      <v-progress size="is-small" :value="20" />
      <v-progress :value="30" />
      <v-progress size="is-medium" :value="40" />
      <v-progress size="is-large" :value="50" />
    </v-field>
  </section>
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
