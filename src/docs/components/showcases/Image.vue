<script>
import { VImage } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseImage',
  components: { VImage }
}
</script>

<template>
  <p class="title">
    Relative path
  </p>
  <img data-src="./128x128.png" alt="1 only data-src" />
  <img src="#" data-src="./128x128.png" alt="1 src # and data-src" />
  <img src="./128x128.png" alt="3 only src" />
  <img src="./128x128.png" data-src="./128x128.png" alt="4 src and data-src" />


  <p class="title">
    Absolute path
  </p>
  <img data-src="https://vue3--dev.b-cdn.net/128x128.png" alt="5 only data-src" />
  <img src="#" data-src="https://vue3--dev.b-cdn.net/128x128.png" alt="7 src # and data-src" />
  <img src="https://vue3--dev.b-cdn.net/128x128.png" alt="6 only src" />
  <img src="https://vue3--dev.b-cdn.net/128x128.png" data-src="https://vue3--dev.b-cdn.net/128x128.png" alt="8 src and data-src" />



  <v-image src="https://vue3--dev.b-cdn.net/128x128.png"
           alt="placeholder image"
           size="is-128x128" rounded centered />
</template>
