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
    <v-switch>
      Default
    </v-switch>
  </v-field>

  <v-field label="Values" :message="value">
    <v-switch v-model="value" type="is-dark" false-value="NO" true-value="YES">
      Dark
    </v-switch>
  </v-field>

  <v-field label="Pasive Type">
    <v-switch type="is-info" passive-type="is-danger">
      Info
    </v-switch>
  </v-field>

  <v-field label="Outlined">
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

  <v-field label="Sizes">
    <v-switch size="is-small" type="is-success" passive-type="is-success">
      Small
    </v-switch>
  </v-field>
  <v-field>
    <v-switch size="is-medium" type="is-warning" passive-type="is-warning">
      Medium
    </v-switch>
  </v-field>
  <v-field>
    <v-switch size="is-large" type="is-danger" passive-type="is-danger">
      Large
    </v-switch>
  </v-field>
</template>
