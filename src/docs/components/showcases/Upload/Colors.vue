<script>
import { VField, VUpload, VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VUpload, VIcon },
}
</script>

<template>
  <v-field>
    <v-upload type="is-success">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>
      <template #label>
        Choose a file...
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>
  <v-field>
    <v-upload type="is-info">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>
      <template #label>
        Choose a file...
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>
  <v-field>
    <v-upload type="is-warning">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>
      <template #label>
        Choose a file...
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>
  <v-field>
    <v-upload type="is-danger">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>
      <template #label>
        Choose a file...
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>
</template>
