<script>
import { VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseButton',
  components: { VIcon }
}
</script>

<template>
  <v-icon src="../src/assets/icons/github.svg" name="github-icon" bundle="navbar-icons" />
</template>

<style>
.svg-github-icon {
  fill: black;
  height: 50px;
  width: 50px;
}
</style>
