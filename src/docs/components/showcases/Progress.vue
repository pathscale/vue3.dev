<script>
import { VProgress, VField } from '@pathscale/vue3-ui'

const Component = {
  components: { VProgress, VField },
}
export default Component;
</script>
<template>
  <section>
    <v-field label="Indeterminate">
      <v-progress />
    </v-field>
    <v-field label="Colors">
      <v-progress type="is-danger" :value="40" />
    </v-field>
    <v-field>
      <v-progress type="is-success" :value="60" />
    </v-field>
    <v-field>
      <v-progress type="is-info" :value="80" />
    </v-field>
    <v-field>
      <v-progress type="is-warning" :value="100" />
    </v-field>

    <v-field label="Sizes"> 
      <v-progress size="is-small" value="20" />
    </v-field>
    <v-field>
      <v-progress value="30" />
    </v-field>
    <v-field>
      <v-progress size="is-medium" value="40" />
    </v-field>
    <v-field>
      <v-progress size="is-large" value="50" />
    </v-field>

    <v-field label="Show value">
      <v-progress :value="40" show-value />
    </v-field>
    <v-field label="Percent">
      <v-progress :value="80" show-value format="percent" />
    </v-field>
  </section>
</template>
