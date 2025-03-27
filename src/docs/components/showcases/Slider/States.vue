<script>
import { VSlider } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSlider',
  components: { VSlider, }
}
</script>

<template>
  <v-slider step="1" min="0" max="100" value="50" disabled="disabled" />
</template>


