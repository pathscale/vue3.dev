<script>
import { VField, VSwitch } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseSwitch",
  components: { VField, VSwitch },
};
</script>

<template>
  <v-field>
    <v-switch size="is-small" type="is-success" passive-type="is-success">
      Small
    </v-switch>
  </v-field>
  <v-field>
    <v-switch size="is-medium" type="is-warning" passive-type="is-warning">
      Medium
    </v-switch>
  </v-field>
  <v-field>
    <v-switch size="is-large" type="is-danger" passive-type="is-danger">
      Large
    </v-switch>
  </v-field>
</template>
