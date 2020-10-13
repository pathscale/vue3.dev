<script>
import { VImage } from '@pathscale/vue3-ui'

export default {
  name: 'HelloWord',
  components: { VImage }
}
</script>

<template>
  <section class="section has-text-centered">
    <v-image centered src="https://vue3--dev.b-cdn.net/vue3-ui-logo.png" size="is-128x128" />
    <h1 class="title">
      Welcome to Your Vue3-ui App
    </h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://vue3--dev.b-cdn.net/" target="_blank" rel="noopener">Vue3-ui documentation</a>.
    </p>
  </section>
</template>
