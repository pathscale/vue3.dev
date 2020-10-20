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
    <v-textarea color="is-primary" size="is-small" v-model="text" />
  </v-field>

  <v-field>
    <v-textarea color="is-primary" size="is-normal" v-model="text" />
  </v-field>

  <v-field>
    <v-textarea color="is-primary" size="is-medium" v-model="text" />
  </v-field>

  <v-field>
    <v-textarea color="is-primary" size="is-large" v-model="text" />
  </v-field>
</template>
