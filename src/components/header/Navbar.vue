<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { ref } from "vue";
import { useRouter } from "vue-router";

import logo from '../../assets/images/logo.jpeg'

const Component = {
  components: { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn },
  emits: ['showSignIn', 'showSignUp', 'openSidebar', 'closeAuth'],
  props: ['isAuthActive'],
  setup(props, { emit }) {
    const intl = useI18n();
    const router = useRouter();
    const isLogged = ref(false);
    return { intl, logo, emit, isLogged, router }
  }
}
export default Component;
</script>

<template>
  <v-navbar transparent>
    <template #brand>
      <v-navbar-item class="px-3">
        <a @click="emit('openSidebar')" :is-active="false" class="has-text-white is-size-3">
          <i class="icon icon-menu has-text-white is-large" />
        </a>
      </v-navbar-item>
      <v-navbar-item>
        <img src="http://www.mach4motors.com/_/rsrc/1389820850337/config/customLogo.gif?revision=2" alt="space revenge logo" />
      </v-navbar-item>
    </template>
    <template #start>
      <v-navbar-item href="#">
        <v-input name="search" has-icons-right right-icon="&#128269;" size="is-medium" placeholder="Quick Search" class="has-white-black has-background-grey-lighter" />
      </v-navbar-item>
    </template>
    <template #end>
      <div class="is-flex">
        <v-navbar-item class="has-text-white is-aligned-center">
          <i class="icon icon-cart has-text-white is-medium" />
          <p class="ml-2">
            My Cart (15)
          </p>
        </v-navbar-item>
        <v-navbar-item class="has-text-white is-aligned-center">
          <i class="icon icon-face-agent has-text-white" /> 
          <p class="ml-2">
            Customer <br /> Support
          </p>
        </v-navbar-item>
        <v-navbar-item class="has-text-white mr-6 is-aligned-center" :class="{'has-border-botton': isAuthActive}">
          <i class="icon icon-account-circle has-text-white" />
          <div>
            <p class="ml-2" @click="emit('showSignIn')">
              Sign In /
            </p>
            <p class="ml-2" @click="emit('showSignUp')">
              Sign Up
            </p>
          </div>
        </v-navbar-item>
      </div>
    </template>
  </v-navbar>
</template>
<style scoped>
  .has-border-botton {
    border-bottom: 5px solid var(--blm-prim);
  }

</style>


