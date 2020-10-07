<script>
import { VButton, VColumns, VColumn, VSelect } from '@pathscale/vue3-ui'
import { useI18n } from "vue-composable";
import { ref } from 'vue'

const Component = {
  components: { VButton, VColumns, VColumn, VSelect },
  setup() {
    const intl = useI18n()
    const isLandscape = ref(window.matchMedia('(orientation: landscape)').matches)
    window.addEventListener('orientationchange', () => {
      isLandscape.value = !isLandscape.value
    });

    return { intl, isLandscape }
  }
}
export default Component
</script>

<template>
  <section class="hero section" id="blog">
    <div class="hero-body">
      <div class="container">
        <v-columns vcentered hcentered>
          <v-column size="is-full-touch is-half has-text-centered" style="z-index: 1">
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
      <div class="content has-text-centered">
        <v-button type="is-primary" rounded inverted outlined class="mt-6 mb-6 is-uppercase">
          {{ intl.$ts('blog.button') }}
        </v-button>
        <p class="has-text-white mt-6">
          <strong class="has-text-white">2020 ©</strong>
          by PathScale Pte Ltd {{ process.env.VUE_APP_VERSION_NUMBER }}
        </p>
      </div>
    </footer>
  </section>
</template>

<style scoped>
  .has-border {
    border-left: 0.25rem solid red;
  }
</style>
