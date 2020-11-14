<script>
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseField',
  components: { VField, VInput }
}
</script>

<template>
  <v-field>
    <v-field horizontal label="From" size="is-small">
      <v-input placeholder="Name" />
    </v-field>
    <v-field horizontal label="From" size="is-medium">
      <v-input placeholder="Name" />
    </v-field>
    <v-field horizontal label="From" size="is-large">
      <v-input placeholder="Name" />
    </v-field>
  </v-field>
</template>
