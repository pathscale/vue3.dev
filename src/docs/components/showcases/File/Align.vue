<script>
import { VField, VFile } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VFile }
}
</script>

<template>
  <v-field>
    <v-file has-name color="is-black" alignment="is-left">
      <template #label>
        File
      </template>
      <template #fileName>
        This is a file name
      </template>
    </v-file>
  </v-field>


  <v-field>
    <v-file has-name color="is-black" alignment="is-centered">
      <template #label>
        File
      </template>
      <template #fileName>
        This is a file name
      </template>
    </v-file>
  </v-field>

  <v-field>
    <v-file has-name color="is-black" alignment="is-right">
      <template #label>
        File
      </template>
      <template #fileName>
        This is a file name
      </template>
    </v-file>
  </v-field>
</template>
