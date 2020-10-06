<script>

import { ref } from 'vue'
import { VField, VTextarea } from '@pathscale/vue3-ui'

const Component = {
  components: { VField, VTextarea },
  setup() {
    const text = ref('')
    return { text }
  },
}
export default Component;
</script>
<template>
  <section>
    <v-field label="Color">
      <v-textarea color="is-info" v-model="text" />
    </v-field>

    <v-field label="Size">
      <v-textarea color="is-primary" size="is-large" v-model="text" />
    </v-field>

    <v-field label="Loading">
      <v-textarea color="is-danger" v-model="text" loading />
    </v-field>
    
    <v-field label="Focused">
      <v-textarea color="is-danger" v-model="text" focused />
    </v-field>
  </section>
</template>
