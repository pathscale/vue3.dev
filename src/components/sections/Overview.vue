<script>
import { VButton, VColumn, VColumns } from "@pathscale/vue3-ui";
import { useI18n } from "vue-composable";

import { useRouter } from "vue-router";

export default {
  name: "DevTrailer",
  components: { VButton, VColumns, VColumn },
  setup() {
    const intl = useI18n();
    const router = useRouter();

    function redirect(name) {
      document.querySelector("#well").scrollIntoView(); // Scroll to top
      router.push({
        name,
      });
    }
    return { intl, redirect };
  },
};
</script>

<template>
  <section id="overview" class="hero section px-0">
    <div class="hero-body px-0">
      <div class="container has-background-black-ter is-fullwidth has-border py-6">
        <p class="title has-text-white has-text-centered">
          {{ intl.$ts('overview.title') }}
        </p>
        <v-columns hcentered>
          <v-column size="is-6" class="has-text-centered px-4">
            <p class="has-text-white is-size-5 is-size-6-touch">
              Vue3-ui provides one of the most complete implementations of the <b>Bulma</b>
              components and grid system, following robust guidelines to do those really easy and
              fast to use.
              <br /><br />
              With full Vue 3 support, our source code is optimized to take full advantage of the
              <b>Composition API</b>, offering better performance and reduced javascript load.
            </p>
            <div class="pt-3">
              <v-button
                type="is-primary"
                rounded
                inverted
                outlined
                class="my-6 mx-5 is-uppercase"
                @click="redirect('installation')">
                Getting Started
              </v-button>
              <v-button
                type="is-primary"
                rounded
                inverted
                outlined
                class="my-6 mx-5 is-uppercase"
                tag="a"
                href="https://github.com/pathscale/vue3-ui"
                target="_blank"
                rel="noopener">
                Github
              </v-button>
            </div>
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
