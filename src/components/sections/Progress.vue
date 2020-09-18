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
    <div class="hero-body pt-6 px-0">
      <div class="container has-text-black">
        <v-columns>
          <v-column>
            <h1 class="pb-3 is-size-3 has-text-black has-text-centered has-text-weight-bold">
              {{ intl.$ts('progress.text') }}
            </h1>
            <h3 class="pb-6 has-text-black has-text-centered">
              {{ intl.$ts('progress.content') }}
            </h3>
            <div>
              <div  
                class="is-inline-flex is-fullwidth"
                :class="{'is-reverse': key % 2}"
                v-for="(item, key) in Object.keys(intl.$ts('progress.date'))" :key="key">
                <span class="has-circle has-text-black has-text-weight-bold">{{ key + 1 }}</span>
                <div class="mt-6 px-4 my-6 py-2" :class="[`has-border-${ key % 2 ? 'right' : 'left'}`, {'has-text-right': key % 2}]">
                  <h2 class="subtitle has-text-black">
                    {{ intl.$ts(`progress.date.date${key + 1}`) }}
                  </h2>
                  <span>
                    {{ intl.$ts(`progress.detail.detail${key + 1}`) }}
                  </span>
                </div>
              </div>
            </div>
          </v-column>
        </v-columns>
        <v-columns>
          <v-column class="has-text-centered">
            <span class="my-6 has-text-weight-bold">
              {{ intl.$ts(`progress.button`) }}
            </span>
          </v-column>
        </v-columns>
      </div>
    </div>
    <footer class="footer my-6">
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
          <v-button class="is-black px-6 py-6 redirect-button" size="is-large" @click="redirectTo('faq')">
            {{ intl.$ts('faq.title') }} 
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
  .has-circle {
    display: flex;
    align-items: center;
    background-color: black;
    padding: 20px;
    width: 50px;
    height: 50px;
    margin: auto 10px;
    border-radius: 50px;
  }
  .has-border-left {
    border-left: solid black 4px;
  }
  .has-border-right {
    border-right: solid black 4px;
  }
  .is-reverse {
    flex-direction: row-reverse;
  }
  .is-fullwidth {
    width: 100%;
  }
</style>
