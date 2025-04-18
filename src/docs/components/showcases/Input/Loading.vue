<script>
import { VField, VInput } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseInput",
	components: { VField, VInput },
};
</script>

<template>
  <v-field>
    <v-input loading placeholder="I'm loading" />
  </v-field>
  <v-field>
    <v-input disabled placeholder="I'm disabled" />
  </v-field>
</template>
