<script>
import { VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import logo from '../../assets/svg/vue3-logo.svg'

export default {
  name: 'DevHome',
  components: { VButton, VColumns, VColumn },
  setup() {
    const intl = useI18n()
    return { intl, logo }
  }
}
</script>

<template>
  <section class="hero is-fullheight" id="home">
    <div class="hero-body">
      <div class="container">
        <v-columns hcentered>
          <v-column size="is-full-touch is-three-quarters" class="has-text-centered">
            <img :src="logo" ref="social chat" class="mb-4" />
            <p class="has-text-white is-size-5 is-size-6-touch">
              {{ intl.$ts('home.content') }}
            </p>
            <p align="center" class="section">
              <a class="mx-2" href="https://www.npmjs.com/package/@pathscale/vue3-ui">
                <img src="https://img.shields.io/npm/v/@pathscale/vue3-ui?style=for-the-badge" />
              </a>
              <a class="mx-2" href="https://www.npmjs.com/package/@pathscale/vue3-ui">
                <img src="https://img.shields.io/npm/dt/@pathscale/vue3-ui?style=for-the-badge" />
              </a>
              <a class="mx-2" href="https://bundlephobia.com/result?p=@pathscale/vue3-ui">
                <img src="https://img.shields.io/bundlephobia/min/@pathscale/vue3-ui?style=for-the-badge" />
              </a>
              <a class="mx-2" href="https://bundlephobia.com/result?p=@pathscale/vue3-ui">
                <img src="https://img.shields.io/bundlephobia/minzip/@pathscale/vue3-ui?style=for-the-badge" />
              </a>
              <a class="mx-2" href="https://github.com/pathscale/vue3-ui/blob/master/LICENSE-MIT.txt">
                <img src="https://img.shields.io/npm/l/@pathscale/vue3-ui?style=for-the-badge" />
              </a>
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <v-columns>
      <v-column class="has-text-centered mb-6">
        <v-button type="is-danger" class="has-text-white is-size-5" rounded size="is-large">
          {{ intl.$ts('home.button') }}
          <p class="is-size-3">
            ↓
          </p>
        </v-button>
      </v-column>
    </v-columns>
  </section>
</template>
