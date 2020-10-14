<script>
import { VField, VSelect } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseSelect',
  components: { VField, VSelect }
}
</script>

<template>
  <v-field>
    <v-select placeholder="loading" loading>
      <option>Select dropdown</option>
      <option>With options</option>
    </v-select>
  </v-field>
</template>
