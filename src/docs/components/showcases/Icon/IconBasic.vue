<script>
import { VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseIcon',
  components: { VIcon }
}
</script>

<template>
  <v-icon name="github-icon" bundle="icons" />
  <v-icon name="discord-icon" bundle="icons" />
  <v-icon name="vuejs-icon" bundle="icons" />
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
