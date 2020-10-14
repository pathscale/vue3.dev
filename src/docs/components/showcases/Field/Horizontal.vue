<script>
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseField',
  components: { VField, VInput }
}
</script>

<template>
  <v-field label="Horizontal">
    <v-field horizontal label="From">
      <v-field grouped group-multiline>
        <v-input placeholder="Name" />
        <v-input placeholder="Your email" />
      </v-field>
    </v-field>
  </v-field>
</template>
