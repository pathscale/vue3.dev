<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VNavbar, VNavbarItem, VNavbarDropdown} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { ref } from "vue"
import { useRouter } from "vue-router"


import logo from '../../assets/svg/vue3-logo.svg'

const Component = {
  components: {    
    VButton, VNavbar, VNavbarItem, VNavbarDropdown
  },
  setup(props, {emit}) {
     const languages = {
        es: "es-ES",
        en: "en-EN",
        pt: "pt-BR"
    }

    const router = useRouter();
    const isMenuOpen = ref(false);
    const showLanguageMenu = ref(false);
    const intl = useI18n();

    const isActive = (name) => {
      return router.currentRoute.value.name === name
    }

    function toggleLanguageMenu() {
      showLanguageMenu.value = !showLanguageMenu.value;
    }
    
    function changeLanguage(language) {
      showLanguageMenu.value = false
      intl.locale.value = language
    }
    
    return { 
     intl,
     isMenuOpen,
     languages,
     isActive,
     logo,
     toggleLanguageMenu,
     changeLanguage,
     showLanguageMenu
    }
  }
 }
export default Component
</script>

<template>
  <div class="big-menu">
    <div class="hidden-language-menu" 
         :style="`height: ${showLanguageMenu ? 40 : 0}px`">
      <div class="is-flex pt-2">
        <v-navbar-item 
          v-for="l in intl.locales.value" :key="l"
          :value="l"
          class="mx-3 is-size-6 has-text-centered"
          @click="changeLanguage(l)">
          {{
            languages[l]
          }}
        </v-navbar-item>
      </div>
    </div>
    <v-navbar v-model="isMenuOpen">
      <template #brand>
        <v-navbar-item class="ml-6">
          <img :src="logo" alt="revenge logo" />
        </v-navbar-item>
      </template>
      <template #end>
        <v-navbar-item
          class="mx-3 is-size-5 py-4 has-text-centered"
          :class="{'is-active-item': isActive('home') }"
          :active="isActive('home')">
          {{ intl.$ts('home.title') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 is-size-5 py-4 has-text-centered"
          :class="{'is-active-item': isActive('trailer') }"
          :active="isActive('trailer')">
          {{ intl.$ts('trailer.title') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 is-size-5 py-4 has-text-centered"
          :class="{'is-active-item': isActive('client') }"
          :active="isActive('client')">
          {{ intl.$ts('clients.title') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 is-size-5 py-4 has-text-centered"
          :class="{'is-active-item': isActive('blog') }"
          :active="isActive('blog')">
          {{ intl.$ts('blog.title') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 is-size-5 py-4 has-text-centered"
          @click="toggleLanguageMenu">
          {{ intl.$ts(`language`) }}: {{ languages[intl.locale.value] }}
        </v-navbar-item>
        <v-navbar-item
          tag="div"
          class="mx-3 is-size-5 py-4 has-text-centered">
          <a class="mx-4" href="https://github.com/pathscale/vue3-ui" target="_blank" rel="noopener">
            <i class="icon icon-github has-text-white is-medium" />
          </a>
          <a class="mx-4" href="https://discord.com/invite/yXHXefX" target="_blank" rel="noopener">
            <i class="icon icon-discord has-text-white is-medium" />
          </a>
          <a class="mx-4" href="https://twitter.com/pathscale" target="_blank" rel="noopener">
            <i class="icon icon-twitter has-text-white is-medium" />
          </a>
        </v-navbar-item>
      </template>
    </v-navbar>
  </div>
</template>