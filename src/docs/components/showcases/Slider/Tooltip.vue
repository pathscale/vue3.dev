<script>
import { VSlider } from '@pathscale/vue3-ui'
import {ref} from 'vue'

export default {
  name: 'DevShowcaseSlider',
  components: { VSlider,  },
  setup() {
    const value = ref(30)
    return {
      value
    }
  }
}
</script>

<template>
  <v-slider step="1" min="0" max="100" v-model="value" tooltip type="is-success" />

  <v-slider step="1" min="0" max="100" v-model="value" vertical />

  <span>Value: {{ value }}</span>
</template>


