<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <section>
    <v-tooltip type="is-info" label="Squared" squared>
      <v-button type="is-info">
        Squared
      </v-button>
    </v-tooltip>
    <v-tooltip type="is-success" label="Dashed" dashed>
      <v-button type="is-success">
        Dashed
      </v-button>
    </v-tooltip>
    <v-tooltip type="is-warning" label="Multilined" multilined>
      <v-button type="is-warning">
        Multilined
      </v-button>
    </v-tooltip>
  </section>
</template>

<style scoped>
 .button {
    margin: .5rem;
  }
</style>
