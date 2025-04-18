<script>
import { VField, VTag } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseTag",
	components: { VTag, VField },
};
</script>

<template>
  <v-field grouped group-multiline>
    <v-tag class="control" disabled>
      Disabled
    </v-tag>
  </v-field>
</template>
