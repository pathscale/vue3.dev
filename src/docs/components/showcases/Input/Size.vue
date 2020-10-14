<script>
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseInput',
  components: { VField, VInput }
}
</script>

<template>
  <v-field>
    <v-input color="is-info" class="is-small" />
  </v-field>

  <v-field>
    <v-input color="is-success" class="is-medium" />
  </v-field>

  <v-field>
    <v-input color="is-warning" class="is-large" />
  </v-field>
</template>
