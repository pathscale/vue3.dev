<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <section>
    <v-tooltip type="is-info" label="Animated" position="is-right" animated>
      <v-button type="is-info">
        Animated
      </v-button>
    </v-tooltip>
  </section>
</template>

<style scoped>
 .button {
    margin: .5rem;
  }
</style>
