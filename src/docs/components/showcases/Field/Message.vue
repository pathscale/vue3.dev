<script>
import { VField, VInput } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseField",
	components: { VField, VInput },
};
</script>

<template>
  <v-field label="Message" type="is-danger" message="Message is required!">
    <v-input color="is-danger" />
  </v-field>
</template>
