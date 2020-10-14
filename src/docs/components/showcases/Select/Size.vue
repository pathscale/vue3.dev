<script>
import { VField, VSelect } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSelect',
  components: { VField, VSelect }
}
</script>

<template>
  <v-field>
    <v-select color="is-info" placeholder="Small" size="is-small">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-info" placeholder="Normal" size="is-normal">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-info" placeholder="Medium" size="is-medium">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-info" placeholder="Large" size="is-large">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>
</template>
