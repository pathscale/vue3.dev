<script>
import { VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const Component = {
  components: { VButton, VColumns, VColumn, Carousel, Slide, Pagination, Navigation },
  setup() {
    const intl = useI18n()
    return { intl }
  }
}

export default Component
</script>

<template>
  <section class="hero section px-0" id="trailer">
    <div class="hero-body px-0">
      <div class="container has-background-black-ter is-fullwidth has-border py-6">
        <p class="title has-text-white has-text-centered">
          {{ intl.$ts('trailer.title') }}
        </p>
        <v-columns hcentered>
          <v-column size="is-6" class="has-text-centered">
            <p class="has-text-white is-size-5 is-size-6-touch">
              {{ intl.$ts('trailer.content') }}
            </p>
            <v-button type="is-primary" rounded inverted outlined class="mt-6 mb-6 is-uppercase">
              {{ intl.$ts('trailer.button') }}
            </v-button>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .is-fullwidth {
    max-width: 100vw;
  }
  .has-border {
    border-top: 0.25rem solid red;
    border-bottom: 0.25rem solid red;
  }
</style>
