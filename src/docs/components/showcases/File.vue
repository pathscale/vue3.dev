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

  <v-field label="Sizes">
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

  <v-field label="Aligment">
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
