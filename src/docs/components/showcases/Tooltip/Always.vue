<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <section>
    <v-tooltip type="is-success" label="Always" always position="is-right">
      <v-button type="is-success">
        Always
      </v-button>
    </v-tooltip>
  </section>
</template>

<style scoped>
 .button {
    margin: .5rem;
  }
</style>
