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
  <section class="hero is-fullheight-with-navbar section pt-6 has-gradient-background" style="overflow-y: scroll;">
    <div class="hero-body pt-6">
      <div class="container has-text-black">
        <v-columns>
          <v-column>
            <h1 class="pb-6 is-size-3 has-text-black has-text-centered has-text-weight-bold">
              {{ intl.$ts('faq.subtitle') }}
            </h1>
            <div class="pt-6" v-for="(item, key) in Object.keys(intl.$ts('faq.question'))" :key="key"> 
              <h2 class="subtitle" style="color: black;">
                {{ intl.$ts(`faq.question.question${key + 1}`) }}
              </h2>
              <span>
                {{ intl.$ts(`faq.answer.answer${key + 1}`) }}
              </span>
              <hr />
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
    <footer class="footer mb-6">
      <v-columns hcentered vcentered>
        <v-column class="has-text-centered">
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large" @click="redirectTo('home')">
            {{ intl.$ts('home.title') }}
            <p class="is-size-1">
              →
            </p>
          </v-button>
        </v-column>
        <v-column class="has-text-centered">
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large" @click="redirectTo('progress')">
            {{ intl.$ts('progress.title') }} 
            <p class="is-size-1">
              →
            </p>
          </v-button>
        </v-column>
      </v-columns>
      <div class="content has-text-centered">
        <p class="has-text-black mt-6">
          <strong class="has-text-black">2020 ©</strong>
          by PathScale Pte Ltd {{ process.env.VUE_APP_VERSION_NUMBER }}
        </p>
      </div>
    </footer>
  </section>
</template>
<style scoped>
 hr {
   height: 1px;
 }
</style>
