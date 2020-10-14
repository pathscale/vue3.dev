<script>
import { VField, VSelect } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSelect',
  components: { VField, VSelect }
}
</script>

<template>
  <v-field label="Rounded">
    <v-select placeholder="warning" rounded>
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>

  <v-field label="Expanded">
    <v-select color="is-danger" placeholder="danger" expanded>
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>
</template>
