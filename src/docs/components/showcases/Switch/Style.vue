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
  <v-field>
    <v-switch type="is-success" outlined>
      Success
    </v-switch>
  </v-field>
  <v-field>
    <v-switch type="is-danger" disabled>
      Disabled
    </v-switch>
  </v-field>
  <v-field>
    <v-switch type="is-warning" :rounded="false">
      Square
    </v-switch>
  </v-field>
</template>
