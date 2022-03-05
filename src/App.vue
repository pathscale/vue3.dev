<script>
import { watchEffect } from 'vue'
import { setI18n } from 'vue-composable'
import { defaultTheme, setTheme } from './theming'

// TODO: bundling .json + code splitting -> copying .json + fetching
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

export default {
  name: 'DevApp',
  setup() {
    setI18n({
      locale: (navigator.language || navigator.userLanguage).slice(0, 2),
      fallback: 'en',
      messages: {
        en,
        es, // : ()=> import('./locales/es.json').default,
        pt, // : ()=> import('./locales/pt.json').default
      },
    })
    watchEffect(() => setTheme(defaultTheme))
  },
}
</script>

<template>
  <router-view />

  <!-- whitelist -->
  <div class="v-toast-container v-toast-container--top v-toast-container--bottom" />
</template>
