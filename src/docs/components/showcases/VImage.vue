
<script>
/* eslint-disable no-undef -- ignore */

import { onBeforeMount, ref } from 'vue'

export default {
  name: 'VImage',
  inheritAttrs: true,
  props: {
    dataSrc: String
  },
  setup(props) {
    const cachedUrl = ref('')
    onBeforeMount(async() => {
      cachedUrl.value = await t(props.dataSrc, $__CDN)
    })
    return { cachedUrl }
  }
}
</script>

<template>
  <img v-bind="$attrs" :src="cachedUrl" :data-src="dataSrc" />
</template>
