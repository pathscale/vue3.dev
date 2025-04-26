<script>
import { computed, reactive, watchEffect } from "vue";
import { setI18n } from "vue-composable";
import { useColorState } from "./composables/useColorState";
import { useTheme } from "./composables/useTheme";
import { useBulmaTheme } from "./pages/Design/composables/useBulmaTheme";
import { useColorPalette } from "./pages/Design/composables/useColorPalette";
import { defaultTheme, setTheme } from "./theming";

// TODO: bundling .json + code splitting -> copying .json + fetching
import en from "./locales/en.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";

export default {
  name: "DevApp",
  setup() {
    setI18n({
      locale: (navigator.language || navigator.userLanguage).slice(0, 2),
      fallback: "en",
      messages: {
        en,
        es, // : ()=> import('./locales/es.json').default,
        pt, // : ()=> import('./locales/pt.json').default
      },
    });
    const { theme } = useTheme();
    const { accent, gray, background } = useColorState();
    const { colorScales } = useColorPalette(
      {
        accent,
        gray,
        background,
      },
      theme,
    );
    const { applyTheme } = useBulmaTheme(
      {
        accent,
        gray,
        background,
      },
      colorScales,
      theme,
    );
    watchEffect(() => {
      applyTheme();
    });
    watchEffect(() => setTheme(defaultTheme));
  },
};
</script>

<template>
  <router-view />
  <!-- whitelist -->

  <div v-if="false" class="
      v-toast-container v-toast-container--top v-toast-container--bottom
      v-toast--top-left
      v-toast--top
      v-toast--top-right
      v-toast--bottom-left
      v-toast--bottom
      v-toast--bottom-right
    " />
</template>
