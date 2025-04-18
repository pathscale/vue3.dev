<script>
import { VField, VInput } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseInput",
  components: { VField, VInput },
};
</script>

<template>
  <v-field>
    <v-input color="is-info" size="is-small" placeholder="is-small" />
  </v-field>

  <v-field>
    <v-input color="is-success" size="is-medium" placeholder="is-medium" />
  </v-field>

  <v-field>
    <v-input color="is-warning" size="is-large" placeholder="is-large" />
  </v-field>
</template>
