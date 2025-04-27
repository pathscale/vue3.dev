<script>
import { VIcon } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseIcon",
  components: { VIcon },
};
</script>

<template>
  <v-icon name="github-icon" bundle="icons" custom-class="link-icon" />
  <v-icon name="vuejs-icon" bundle="icons" custom-class="link-icon" />
  <v-icon name="discord-icon" bundle="icons" custom-class="link-icon" />
</template>

<style>
.link-icon {
  fill: var(--link);
  width: 100px;
  height: 100px;
}
</style>
