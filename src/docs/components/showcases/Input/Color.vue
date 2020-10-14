<script>
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseInput',
  components: { VField, VInput }
}
</script>

<template>
  <v-field>
    <v-input color="is-info" />
  </v-field>

  <v-field>
    <v-input color="is-success" />
  </v-field>

  <v-field>
    <v-input color="is-warning" />
  </v-field>

  <v-field>
    <v-input color="is-danger" />
  </v-field>

  <v-field>
    <v-input />
  </v-field>
</template>
