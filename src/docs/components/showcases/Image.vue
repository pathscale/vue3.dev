<script>
import { VImage } from '@pathscale/vue3-ui'

const Component = {
  components: { VImage },
}
export default Component;
</script>
<template>
  <section class="content">
    <v-image src="https://bulma.io/images/placeholders/128x128.png" size="is-128x128" />
    <v-image src="https://bulma.io/images/placeholders/128x128.png" size="is-64x64" rounded />
  </section>
</template>
