<script>
import { VButton, VTooltip } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseTooltip",
  components: { VTooltip, VButton },
};
</script>

<template>
  <v-tooltip type="is-danger" label="Delay 500(ms)" position="is-right" :delay="500">
    <v-button type="is-danger">
      Delay 500(ms)
    </v-button>
  </v-tooltip>
</template>

<style scoped>
.button {
  margin: 0.5rem;
}
</style>
