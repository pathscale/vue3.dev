<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import logo from '../../assets/svg/vue3-logo.svg'


const Component = {
  components: { VButton, VColumns, VColumn },
  setup() {
    const intl = useI18n();
    return { intl, logo }
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
            <img :src="logo" ref="social chat" />
            <p class="has-text-white is-size-5 is-size-6-touch">
              {{ intl.$ts('home.content') }}
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
