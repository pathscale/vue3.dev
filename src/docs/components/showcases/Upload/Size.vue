<script>
import { VField, VUpload, VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseFile',
  components: { VField, VUpload, VIcon },
}
</script>

<template>
  <v-field>
    <v-upload type="is-info" size="is-small">
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
    <v-upload type="is-info" size="is-medium">
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
    <v-upload type="is-info" size="is-large">
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
