<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import logo from '../../assets/images/logo.jpeg'

const Component = {
  components: { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn },
  setup() {
    const intl = useI18n();
    return { intl, logo }
  }
}
export default Component;
</script>

<template>
  <footer class="footer py-5">
    <div class="content has-text-centered">
      <v-columns vcentered>
        <v-column>
          Subscription Plans
        </v-column>
        <v-column>
          <router-link class="has-text-grey-dark" :to="{ name: 'about' }">
            About Us
          </router-link>
        </v-column>
        <v-column>
          <router-link class="has-text-grey-dark" :to="{ name: 'contact' }">
            Contact Us
          </router-link>
        </v-column>
        <v-column>
          Events
        </v-column>
        <v-column>
          <router-link class="has-text-grey-dark" :to="{ name: 'faq' }">
            FAQs
          </router-link>
        </v-column>
      </v-columns>
      <v-columns vcentered hcentered>
        <v-column>
          <p>
            <strong>2020 ©</strong>
            by Mach IV Motors {{ process.env.VUE_APP_VERSION_NUMBER }}
          </p>
        </v-column>
      </v-columns>
    </div>
  </footer>
</template>

<style scoped>
  .has-border-top {
    border-top: 1px solid black;
  }
</style>


