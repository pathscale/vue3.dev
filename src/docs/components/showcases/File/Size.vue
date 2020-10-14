<script>
import { VField, VFile } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VFile }
}
</script>

<template>
  <v-field>
    <v-file has-name color="is-info" size="is-small">
      <template #label>
        Choose a file
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>

  <v-field>
    <v-file has-name color="is-info" size="is-medium">
      <template #label>
        Choose a file
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>

  <v-field>
    <v-file has-name color="is-info" size="is-large">
      <template #label>
        Choose a file
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>
</template>
