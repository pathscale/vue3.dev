<script>
import { VProgress, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress, VField }
}
</script>

<template>
  <section>
    <v-field label="Show value">
      <v-progress :value="40" show-value />
    </v-field>
  </section>
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
