<script>
import VImage from './VImage.vue'

export default {
  name: 'DevShowcaseImage',
  components: { VImage }
}
</script>

<template>
  <v-image data-src="/pathscale.webp " alt="128x128" />
  <img src="./128x128.png" alt="128x128" />
</template>
