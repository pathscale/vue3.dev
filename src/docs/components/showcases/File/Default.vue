<script>
import { VField, VFile } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VFile }
}
</script>

<template>
  <v-field>
    <v-file>
      <template #label>
        Choose a file
      </template>
    </v-file>
  </v-field>

  <v-field>
    <v-file has-name color="is-success">
      <template #label>
        Choose a file
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>
</template>
