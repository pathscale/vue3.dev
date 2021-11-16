<script>
import { VSlider } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSlider',
  components: { VSlider }
}
</script>

<template>
  <v-slider size="is-small" step="1" min="0" max="100" value="50" disabled="disabled" />
  <v-slider size="is-small" step="1" min="0" max="100" value="50" />
  <v-slider class="slider is-fullwidth" step="1" min="0" max="100" value="50" />
  <v-slider size="is-medium" step="1" min="0" max="100" value="50" />
  <v-slider size="is-large" step="1" min="0" max="100" value="50" />
</template>


