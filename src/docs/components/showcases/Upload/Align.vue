<script>
import { VField, VIcon, VUpload } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseFile",
	components: { VField, VUpload, VIcon },
};
</script>

<template>
  <v-field>
    <v-upload type="is-success">
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>

      <template #label>
        File
      </template>
      <template #name>
        This is a file name
      </template>
    </v-upload>
  </v-field>

  <v-field>
    <v-upload type="is-success" centered>
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>

      <template #label>
        File
      </template>
      <template #name>
        This is a file name
      </template>
    </v-upload>
  </v-field>

  <v-field>
    <v-upload type="is-success" right>
      <template #icon>
        <v-icon name="upload-icon" bundle="icons" fill="white" />
      </template>

      <template #label>
        File
      </template>
      <template #name>
        This is a file name
      </template>
    </v-upload>
  </v-field>
</template>
