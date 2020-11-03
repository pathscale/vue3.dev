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
              {{ intl.$ts('blog.title') }}
            </p>
            <div class="has-text-white">
              {{ intl.$ts('blog.content1') }}
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
    <footer class="footer mb-6">
      <v-columns hcentered vcentered>
        <v-column>
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              {{ intl.$ts('blog.article') }}
            </p>
            <span class="has-text-white">
              {{ intl.$ts('blog.content1') }}
            </span>
          </div>
        </v-column>
        <v-column>
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              {{ intl.$ts('blog.article') }}
            </p>
            <span class="has-text-white">
              {{ intl.$ts('blog.content1') }}
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
}
</style>
