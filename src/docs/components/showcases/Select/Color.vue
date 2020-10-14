<script>
import { VField, VSelect } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSelect',
  components: { VField, VSelect }
}
</script>

<template>
  <v-field>
    <v-select color="is-info" placeholder="Info" size="is-normal">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-success" placeholder="Success" size="is-normal">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-warning" placeholder="Warning" size="is-normal">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field>
    <v-select color="is-danger" placeholder="Danger" size="is-normal">
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>
</template>
