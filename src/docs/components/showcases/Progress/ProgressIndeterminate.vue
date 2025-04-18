<script>
import { VProgress } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseProgress",
	components: { VProgress },
};
</script>

<template>
  <v-progress :value="null" />
</template>

<style scoped>
.progress-wrapper {
  margin-top: 1em;
}
</style>
