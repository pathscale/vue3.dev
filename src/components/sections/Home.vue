<script>
import { VButton, VColumns, VColumn, VImage } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import logo from '../../assets/svg/vue3-logo.svg'

import '../../smoothScroll'

export default {
  name: 'DevHome',
  components: { VButton, VColumns, VColumn, VImage },
  setup() {
    const intl = useI18n()
    function scrollToOverview() {
      // eslint-disable-next-line no-undef -- defined globally in smothScroll.js
      smoothScroll(document.querySelector('#overview'))
    }
    return { intl, logo, scrollToOverview }
  },
}
</script>

<template>
  <section class="hero is-fullheight" id="home">
    <div class="hero-body">
      <div class="container">
        <v-columns hcentered>
          <v-column size="is-full-touch is-three-quarters" class="has-text-centered">
            <v-image :src="logo" ref="social chat" class="mb-4" size="is-128x128" centered />
            <p class="has-text-white is-size-5 is-size-6-touch">
              {{ intl.$ts('home.content') }}
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <v-columns>
      <v-column class="has-text-centered mb-6">
        <v-button
          type="is-danger"
          class="has-text-white is-size-5"
          rounded
          size="is-large"
          @click="scrollToOverview">
          {{ intl.$ts('home.button') }}
          <p class="is-size-3">
            ↓
          </p>
        </v-button>
      </v-column>
    </v-columns>
  </section>
</template>
