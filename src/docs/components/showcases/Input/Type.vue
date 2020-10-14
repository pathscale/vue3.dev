<script>

import { ref } from 'vue'
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseInput',
  components: { VField, VInput },
  setup() {
    const email = ref('')
    return { email }
  }
}
</script>

<template>
  <v-field label="Email">
    <v-input color="is-info" v-model="email" type="email" />
  </v-field>

  <v-field label="Password">
    <v-input color="is-success" type="password" />
  </v-field>
</template>
