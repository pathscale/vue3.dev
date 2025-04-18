<script>
import { VField, VInput } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseInput",
  components: { VField, VInput },
};
</script>

<template>
  <v-field>
    <v-input color="is-info" placeholder="is-info" />
  </v-field>

  <v-field>
    <v-input color="is-success" placeholder="is-success" />
  </v-field>

  <v-field>
    <v-input color="is-warning" placeholder="is-warning" />
  </v-field>

  <v-field>
    <v-input color="is-danger" placeholder="is-danger" />
  </v-field>

  <v-field>
    <v-input placeholder="default" />
  </v-field>
</template>
