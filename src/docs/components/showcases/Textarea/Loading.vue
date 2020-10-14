<script>

import { ref } from 'vue'
import { VField, VTextarea } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTextarea',
  components: { VField, VTextarea },
  setup() {
    const text = ref('')
    return { text }
  }
}
</script>

<template>
  <v-field>
    <v-textarea color="is-danger" v-model="text" loading />
  </v-field>
</template>
