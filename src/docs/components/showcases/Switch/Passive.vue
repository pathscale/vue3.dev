<script>
import { VField, VSwitch } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseSwitch",
  components: { VField, VSwitch },
};
</script>

<template>
  <v-field label="Pasive Type">
    <v-switch type="is-info" passive-type="is-danger">
      Info
    </v-switch>
  </v-field>
</template>
