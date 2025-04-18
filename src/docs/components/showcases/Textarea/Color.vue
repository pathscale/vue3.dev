<script>
import { VField, VTextarea } from "@pathscale/vue3-ui";
import { ref } from "vue";

export default {
  name: "DevShowcaseTextarea",
  components: { VField, VTextarea },
  setup() {
    const text = ref("");
    return { text };
  },
};
</script>

<template>
  <v-field>
    <v-textarea v-model="text" color="is-info" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-success" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-warning" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-danger" />
  </v-field>
</template>
