<script>
import { VField, VTag } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseTag",
  components: { VTag, VField },
};
</script>

<template>
  <v-field grouped group-multiline>
    <v-tag rounded class="control">
      Rounded tag label
    </v-tag>
  </v-field>
</template>
