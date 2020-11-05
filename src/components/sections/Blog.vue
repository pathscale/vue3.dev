<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import { ref } from 'vue'

export default {
  name: 'DevBlog',
  components: { VColumns, VColumn },
  setup() {
    const intl = useI18n()
    const isLandscape = ref(window.matchMedia('(orientation: landscape)').matches)
    window.addEventListener('orientationchange', () => {
      isLandscape.value = !isLandscape.value
    })

    return { intl, isLandscape }
  }
}
</script>

<template>
  <section class="hero section" id="blog">
    <div class="hero-body">
      <div class="container">
        <v-columns vcentered hcentered>
          <v-column size="is-full-touch is-half has-text-centered" style="z-index: 1;">
            <p class="title has-text-white">
              Reasons to choose Vue3-ui
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <footer class="footer mb-6">
      <v-columns hcentered vcentered class="features" multiline>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              100% Responsive
            </p>
            <span class="has-text-white">
              Designed for <b>mobile</b> first
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Modular
            </p>
            <span class="has-text-white">
              Import only the components that you need
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Modern
            </p>
            <span class="has-text-white">
              Built with <a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Vue 3</a> and <a href="https://bulma.io/" target="_blank" rel="noopener">Bulma CSS v0.9.1</a>
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Configurable
            </p>
            <span class="has-text-white">
              Create <a href="/documentation/theming" target="_blank" rel="noopener">themes</a> with CSS variables support
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Free
            </p>
            <span class="has-text-white">
              Open source on <b>Github</b>
            </span>
          </div>
        </v-column>
      </v-columns>
    </footer>
  </section>
</template>

<style scoped>
.has-border {
  border-left: 0.25rem solid red;
  min-height: 200px;
}
</style>
