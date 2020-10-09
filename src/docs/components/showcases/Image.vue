<script>
import { VImage } from '@pathscale/vue3-ui'

const Component = {
  components: { VImage }
}
export default Component
</script>
<template>
  <section>
    <v-image src="https://vue3--dev.b-cdn.net/128x128.png"
             alt="placeholder image"
             size="is-128x128" rounded centered />
  </section>
</template>
