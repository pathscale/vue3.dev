<script>
import { VField, VFile } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VFile }
}
</script>

<template>
  <v-field label="Fullwidth">
    <v-file has-name fullwidth color="is-danger">
      <template #label>
        Full size
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>

  <v-field label="Boxed">
    <v-file boxed color="is-warning">
      <template #label>
        Boxed
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>

  <v-field>
    <v-file has-name boxed>
      <template #label>
        Boxed with name
      </template>
      <template #fileName>
        File Name
      </template>
    </v-file>
  </v-field>
</template>
