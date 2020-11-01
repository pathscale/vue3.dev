<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <v-tooltip type="is-info" label="is-small" multilined size="is-small">
    <v-button type="is-info">
      is-small
    </v-button>
  </v-tooltip>
  <v-tooltip type="is-info" label="is-medium" multilined size="is-medium">
    <v-button type="is-info">
      is-medium
    </v-button>
  </v-tooltip>
  <v-tooltip type="is-info" label="is-large" multilined size="is-large">
    <v-button type="is-info">
      is-large
    </v-button>
  </v-tooltip>
</template>

<style scoped>
.button {
    margin: .5rem;
}
</style>
