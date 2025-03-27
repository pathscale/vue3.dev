<script>
import { VSlider } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSlider',
  components: { VSlider, }
}
</script>

<template>
  <v-slider rounded size="is-small" step="1" min="0" max="100" value="50" disabled="disabled" />
  <v-slider rounded type="is-warning" size="is-small" step="1" min="0" max="100" value="50" />
  <v-slider rounded type="is-danger" size="is-medium" step="1" min="0" max="100" value="50" />
  <v-slider rounded type="is-info" size="is-large" step="1" min="0" max="100" value="50" />
</template>


