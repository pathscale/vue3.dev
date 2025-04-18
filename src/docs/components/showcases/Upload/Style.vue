<script>
import { VField, VIcon, VUpload } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseFile",
  components: { VField, VUpload, VIcon },
};
</script>

<template>
  <v-field label="Fullwidth">
    <v-upload expanded type="is-danger">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>

      <template #label>
        Full size
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>

  <v-field label="Boxed">
    <v-upload boxed type="is-warning">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>

      <template #label>
        Boxed
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>

  <v-field>
    <v-upload boxed>
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" />
      </template>

      <template #label>
        Boxed with name
      </template>
      <template #name>
        File Name
      </template>
    </v-upload>
  </v-field>
</template>
