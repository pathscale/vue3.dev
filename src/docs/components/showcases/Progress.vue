<script>
import { VProgress, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseProgress',
  components: { VProgress, VField }
}
</script>

<template>
  <section>
    <v-field label="Indeterminate">
      <v-progress :value="null" />
    </v-field>

    <v-field label="Colors">
      <v-progress type="is-danger" :value="40" />
      <v-progress type="is-success" :value="60" />
      <v-progress type="is-info" :value="80" />
      <v-progress type="is-warning" :value="100" />
    </v-field>

    <v-field label="Sizes">
      <v-progress size="is-small" :value="20" />
      <v-progress :value="30" />
      <v-progress size="is-medium" :value="40" />
      <v-progress size="is-large" :value="50" />
    </v-field>

    <v-field label="Show value">
      <v-progress :value="40" show-value />
    </v-field>

    <v-field label="Percent">
      <v-progress :value="80" show-value format="percent" />
    </v-field>
  </section>
</template>

<style scoped>
.progress-wrapper {
    margin-top: 1em;
}
</style>
