<script>
/* eslint-disable no-console -- ignore */
import {
  onBeforeMount,
  onMounted } from 'vue'

export default {
  name: 'DevShowcaseImage',
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
  }
}
</script>

<template>
  <p class="title">
    Relative path
  </p>
  <img data-src="./128x128.png" alt="1 only data-src" />
</template>
