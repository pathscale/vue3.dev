<script>

import { ref } from 'vue'
import { VField, VInput } from '@pathscale/vue3-ui'

const Component = {
  components: { VField, VInput },
  setup() {
    const email = ref('')
    return { email }
  },
}
export default Component;
</script>
<template>
  <section class="box">
    <v-field label="Email">
      <v-input color="is-info" v-model="email" type="email" />
    </v-field>
    <v-field label="Password">
      <v-input color="is-success" type="password" />
    </v-field>
    <v-field>
      <v-input color="is-warning" class="is-small" />
    </v-field>
    <v-field>
      <v-input color="is-danger" class="is-large" />
    </v-field>
    <v-field>
      <v-input loading />
    </v-field>
  </section>
</template>
