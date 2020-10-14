<script>
import { VField, VSwitch } from '@pathscale/vue3-ui'
import { ref } from 'vue'

export default {
  name: 'DevShowcaseSwitch',
  components: { VField, VSwitch },
  setup() {
    const value = ref('NO')
    return { value }
  }
}
</script>

<template>
  <v-field label="Values" :message="value">
    <v-switch v-model="value" type="is-dark" false-value="NO" true-value="YES">
      Dark
    </v-switch>
  </v-field>
</template>
