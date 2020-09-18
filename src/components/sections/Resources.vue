<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect } from '@pathscale/vue3-ui'
import { useI18n } from "vue-composable";
import { ref } from 'vue'

const Component = {
  props: ['redirectTo', 'sectionScroll'],
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
  <section class="hero is-fullheight section" id="resources" style="overflow-y: auto">
    <div class="hero-body">
      <div class="container">
        <v-columns vcentered hcentered>
          <v-column size="is-full-touch is-half has-text-centered" style="z-index: 1">
            <p class="title has-text-black">
              {{ intl.$ts('resources.title') }}
            </p>
            <div class="has-text-black">
              {{ intl.$ts('resources.content1') }}
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
    <footer class="footer mb-6">
      <v-columns hcentered vcentered>
        <v-column class="has-text-centered">
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large">
            {{ intl.$ts('resources.button3') }}
            <p class="is-size-1">
              →
            </p>
          </v-button>
        </v-column>
        <v-column class="has-text-centered">
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large">
            {{ intl.$ts('resources.button4') }} 
            <p class="is-size-1">
              →
            </p>
          </v-button>
        </v-column>
        <v-column class="has-text-centered">
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large">
            {{ intl.$ts('resources.button5') }} 
            <p class="is-size-1">
              →
            </p>
          </v-button>
        </v-column>
      </v-columns>
      <div class="content has-text-centered">
        <v-button
          rounded
          type="is-primary"
          size="is-medium"
          class="is-size-6 is-size-7-touch"
          @click="sectionScroll('home')">
          {{ intl.$ts('resources.button2') }}
        </v-button>
        <p class="has-text-black mt-6">
          <strong class="has-text-black">2020 ©</strong>
          by PathScale Pte Ltd {{ process.env.VUE_APP_VERSION_NUMBER }}
        </p>
      </div>
    </footer>
  </section>
</template>
