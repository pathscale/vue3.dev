<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTooltip',
  components: { VTooltip, VButton }
}
</script>

<template>
  <section>
    <v-tooltip type="is-danger" label="Delay 500(ms)" position="is-right" :delay="500">
      <v-button type="is-danger">
        Delay 500(ms)
      </v-button>
    </v-tooltip>
  </section>
</template>

<style scoped>
 .button {
    margin: .5rem;
  }
</style>
