<script>
import { VField, VTag } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseTag",
	components: { VTag, VField },
};
</script>

<template>
  <v-field grouped group-multiline>
    <v-tag class="control" type="is-info">
      Info
    </v-tag>
    <v-tag class="control" type="is-success">
      Success
    </v-tag>
    <v-tag class="control" type="is-warning">
      Warning
    </v-tag>
    <v-tag class="control" type="is-danger">
      Danger
    </v-tag>
  </v-field>
</template>
