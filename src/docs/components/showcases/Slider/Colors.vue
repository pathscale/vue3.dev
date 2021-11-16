<script>
import { VSlider } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSlider',
  components: { VSlider,  }
}
</script>

<template>
  <v-slider />
  <v-slider type="is-success" />
  <v-slider type="is-warning" />
  <v-slider type="is-danger" />
  <v-slider type="is-info" />
</template>


