<script>
import { VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseIcon',
  components: { VIcon }
}
</script>

<template>
  <v-icon class="red" src="../src/assets/icons/github.svg" name="github-icon" bundle="navbar-icons" />
</template>

<style scoped>
.svg-github-icon {
  fill: black;
  height: 50px;
  width: 50px;
}
</style>
