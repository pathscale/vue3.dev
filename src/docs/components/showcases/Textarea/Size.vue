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
    <v-textarea v-model="text" color="is-primary" size="is-small" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-primary" size="is-normal" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-primary" size="is-medium" />
  </v-field>

  <v-field>
    <v-textarea v-model="text" color="is-primary" size="is-large" />
  </v-field>
</template>
