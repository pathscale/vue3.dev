<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  props: ['sectionScroll'],
  components: { VButton, VColumns, VColumn },
  setup() {
    const intl = useI18n();
    return { intl }
  }
}
export default Component;
</script>

<template>
  <section class="hero is-fullheight section" id="home">
    <div class="hero-body">
      <div class="container">
        <v-columns hcentered>
          <v-column size="is-full-touch is-three-quarters" class="has-text-centered">
            <img src="https://revenge--game.b-cdn.net/revenge-graffiti.svg" ref="social chat" style="width: 100%" />
            <p class="has-text-black">
              {{ intl.$ts('home.content') }}
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <v-columns>      
      <v-column class="has-text-centered mb-6">
        <v-button type="is-rounded is-white has-text-primary is-size-6 is-size-7-touch " size="is-medium" @click="sectionScroll('project')">
          {{ intl.$ts('home.button') }} 
          <p class="is-size-3">
            ↓
          </p>
        </v-button>
      </v-column>      
    </v-columns>
  </section>
</template>
