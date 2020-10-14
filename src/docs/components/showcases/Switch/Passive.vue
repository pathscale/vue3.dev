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
  <v-field label="Pasive Type">
    <v-switch type="is-info" passive-type="is-danger">
      Info
    </v-switch>
  </v-field>
</template>
