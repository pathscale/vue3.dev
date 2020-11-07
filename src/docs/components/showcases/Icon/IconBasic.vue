<script>
import { VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseIcon',
  components: { VIcon }
}
</script>

<template>
  <v-icon src="src/assets/icons/github.svg" name="github-icon" bundle="navbar-icons" />
  <v-icon src="src/assets/icons/discord.svg" name="discord-icon" bundle="navbar-icons" />
  <v-icon src="src/assets/icons/vuejs.svg" name="vuejs-icon" bundle="navbar-icons" />
</template>

<style scoped>
.svg-github-icon {
  fill: black;
  height: 50px;
  width: 50px;
}

.svg-discord-icon {
  fill: #7289da;
  height: 50px;
  width: 50px;
}

.svg-vuejs-icon {
  fill: #41b883;
  height: 50px;
  width: 50px;
}
</style>
