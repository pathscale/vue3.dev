<script>
import { VButton, VTooltip } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseTooltip",
	components: { VTooltip, VButton },
};
</script>

<template>
  <v-tooltip type="is-success" label="Always" always position="is-right">
    <v-button type="is-success">
      Always
    </v-button>
  </v-tooltip>
</template>

<style scoped>
.button {
  margin: 0.5rem;
}
</style>
