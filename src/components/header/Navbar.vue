<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VNavbar, VNavbarItem, VNavbarDropdown} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { ref, watchEffect } from "vue"


const Component = {
  props: ['activeItem', 'changeLanguage', 'isActive', 'languages', 'toggleLanguageMenu', 'showLanguageMenu', 'isMenuOpen'],
  components: {    
    VButton, VNavbar, VNavbarItem, VNavbarDropdown
  },
  setup(props, {emit}) {
    const navbarColor = [
      'transparent',
      '#24073b',
      '#21073B',
      '#1E073B',
      '#18073b',
      '#14073b',
      '#120b3e',
      '#111743',
    ]

     const languages = {
        es: "es-ES",
        en: "en-EN",
        pt: "pt-BR"
    }

    const isMenuOpened = ref(props.isMenuOpen);
    const isDropdownOpen = ref(false);

    const intl = useI18n();

     watchEffect(() => {
      isMenuOpened.value = props.isMenuOpen;
    })

    watchEffect(() => {
      emit('isMenuOpened', isMenuOpened.value)
    })
    
    return { 
     intl,
     isDropdownOpen,
     isMenuOpened,
     languages,
     navbarColor,
    }
  }
 }
export default Component
</script>

<template>
  <div class="big-menu" :style="`background-color: ${navbarColor[activeItem]}`">
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
    <v-navbar transparent v-model="isMenuOpened">
      <template #brand>
        <v-navbar-item class="ml-6">
          <img alt="pathscale logo" />
        </v-navbar-item>
      </template>
      <template #end>
        <v-navbar-item
          class="mx-3 my-5 is-size-5 has-text-centered"
          :class="{'is-active-item': isActive(0) }"
          :active="isActive(0)">
          {{ intl.$ts('home.title') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 my-5 is-size-5 has-text-centered"
          :class="{'is-active-item': isActive(6) }"
          :active="isActive(6)">
          {{ intl.$ts('project.subtitle') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 my-5 is-size-5 has-text-centered"
          :class="{'is-active-item': isActive(7) }"
          :active="isActive(7)">
          {{ intl.$ts('history.subtitle') }}
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 my-5 is-size-5 has-text-centered"
          @click="toggleLanguageMenu">
          {{ intl.$ts(`language`) }}: {{ languages[intl.locale.value] }}
        </v-navbar-item>
        <v-navbar-item tag="div" class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd mx-3 my-5 is-size-5 has-text-centered">
          <v-button tag="a" href="mailto:sales@pathscale.com?&subject=PathScale%20Multi-CDN" target="_blank" class="mt-6 is-size-6 is-size-7-touch " rounded type="is-primary" size="is-medium">
            <strong>{{ intl.$ts('multi_cdn.button') }}</strong>
          </v-button>
        </v-navbar-item>
      </template>
    </v-navbar>
  </div>
</template>