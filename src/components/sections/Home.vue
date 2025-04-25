<script>
/* globals smoothScroll -- Globally defined */
import { VButton, VColumn, VColumns, VImage } from "@pathscale/vue3-ui";
import { useI18n } from "vue-composable";
import logo from "../../assets/svg/vue3-logo.svg";

import "../../smoothScroll";

export default {
  name: "DevHome",
  components: { VButton, VColumns, VColumn, VImage },
  setup() {
    const intl = useI18n();
    function scrollToOverview() {
      smoothScroll(document.querySelector("#overview"));
    }
    return { intl, logo, scrollToOverview };
  },
};
</script>

<template>
  <section id="home" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <v-columns hcentered>
          <v-column size="is-full-touch is-three-quarters" class="has-text-centered">
            <v-image ref="social chat" :src="logo" class="mb-4" size="is-128x128" centered />
            <p class="is-size-5 is-size-6-touch">
              {{ intl.$ts('home.content') }}
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <v-columns>
      <v-column class="has-text-centered mb-6">
        <v-button type="is-danger" class="has-text-white is-size-5" rounded size="is-large" @click="scrollToOverview">
          {{ intl.$ts('home.button') }}
          <p class="is-size-3">
            ↓
          </p>
        </v-button>
      </v-column>
    </v-columns>
  </section>
</template>
