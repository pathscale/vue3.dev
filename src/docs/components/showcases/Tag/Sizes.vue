<script>
import { VField, VTag } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseTag",
  components: { VTag, VField },
};
</script>

<template>
  <v-field grouped group-multiline>
    <v-tag class="control" type="is-dark">
      Default
    </v-tag>
    <v-tag class="control" type="is-primary" size="is-medium">
      Medium
    </v-tag>
    <v-tag class="control" type="is-info" size="is-large">
      Large
    </v-tag>
  </v-field>
</template>
