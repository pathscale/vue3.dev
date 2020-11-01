<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <v-tooltip type="is-info" label="is-info">
    <v-button type="is-info">
      is-info
    </v-button>
  </v-tooltip>
  <v-tooltip type="is-success" label="is-success">
    <v-button type="is-success">
      is-success
    </v-button>
  </v-tooltip>
  <v-tooltip type="is-warning" label="is-warning">
    <v-button type="is-warning">
      is-warning
    </v-button>
  </v-tooltip>
  <v-tooltip type="is-danger" label="is-danger">
    <v-button type="is-danger">
      is-danger
    </v-button>
  </v-tooltip>
</template>

<style scoped>
.button {
    margin: 0.5rem;
}
</style>
