<script>
import {
  VIcon,
  VImage,
  VNavbar,
  VNavbarItem,
  VSwitch,
} from "@pathscale/vue3-ui";
import { useI18n } from "vue-composable";
import { useTheme } from "../../composables/useTheme";

import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

import logo from "../../assets/svg/vue3-logo.svg";

export default {
  name: "DevNavbar",
  components: {
    VNavbar,
    VNavbarItem,
    VIcon,
    VImage,
    VSwitch,
  },
  setup(/* props, { emit } */) {
    const languages = {
      es: "es-ES",
      en: "en-EN",
      pt: "pt-BR",
    };

    const router = useRouter();
    const isMenuOpen = ref(false);
    const showLanguageMenu = ref(false);
    const intl = useI18n();
    const { theme } = useTheme();

    const toggleTheme = () => {
      theme.value = theme.value === "light" ? "dark" : "light";
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    globalThis.mobileCheck = () => {
      let check = false;
      ((a) => {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            a.slice(0, 4),
          )
        ) {
          check = true;
        }
      })(navigator.userAgent || navigator.vendor || globalThis.opera);
      return check;
    };

    const isMobile = globalThis.mobileCheck();

    watchEffect(() => {
      if (isMobile && isMenuOpen.value === false) {
        showLanguageMenu.value = false;
      }
    });

    const isActive = (name) => {
      return (
        router.currentRoute.value.path.includes(name) ||
        router.currentRoute.value.name.includes(name)
      );
    };

    // function toggleLanguageMenu() {
    //   showLanguageMenu.value = !showLanguageMenu.value
    // }

    function changeLanguage(language) {
      showLanguageMenu.value = false;
      intl.locale.value = language;
    }

    function redirect(name) {
      router.push({
        name,
      });
      closeMenu();
    }

    function getLanguageMenuHeight() {
      return `height: ${showLanguageMenu.value ? 40 : 0}px `;
    }

    return {
      intl,
      isMenuOpen,
      languages,
      isActive,
      logo,
      changeLanguage,
      getLanguageMenuHeight,
      // closeMenu,
      redirect,
      theme,
      toggleTheme,
    };
  },
};
</script>

<template>
  <div class="big-menu">
    <div class="hidden-language-menu" :style="getLanguageMenuHeight()">
      <div class="is-flex pt-2">
        <v-navbar-item v-for="l in intl.locales.value" :key="l" :value="l" class="mx-3 is-size-6 has-text-centered"
          @click="changeLanguage(l)">
          {{
            languages[l]
          }}
        </v-navbar-item>
      </div>
    </div>
    <v-navbar v-model="isMenuOpen">
      <template #brand>
        <v-navbar-item class="ml-6" @click="redirect('home')">
          <v-image :src="logo" alt="vue3-ui logo" size="is-64x64" custom-class="is-fullwidth" />
        </v-navbar-item>
      </template>
      <template #start>
        <v-navbar-item class="mx-3 is-size-5 py-4 has-text-centered" :class="{ 'is-active-item': isActive('home') }"
          :active="isActive('home')" @click="redirect('home')">
          {{ intl.$ts('home.title') }}
        </v-navbar-item>
        <v-navbar-item class="mx-3 is-size-5 py-4 has-text-centered"
          :class="{ 'is-active-item': isActive('documentation') }" :active="isActive('documentation')"
          @click="redirect('documentation')">
          Documentation
        </v-navbar-item>
        <v-navbar-item class="mx-3 is-size-5 py-4 has-text-centered" :class="{ 'is-active-item': isActive('demo') }"
          :active="isActive('demo')" @click="redirect('demo')">
          Demo
        </v-navbar-item>
      </template>
      <template #end>
        <v-navbar-item tag="div" class="mx-3 is-size-5 py-4 has-text-centered flex is-justified-center is-align-items-center">
          <button class="theme-toggle-button mx-4" type="button" aria-label="Toggle theme" @click="toggleTheme">
            <span style="color: white; font-size: 32px; line-height: 32px;">
              {{ theme === 'light' ? '\u2600' : '\u263D' }}
            </span>
          </button>
          <a class=" mx-4" href="https://github.com/pathscale/vue3-ui" target="_blank" rel="noopener">
            <v-icon custom-class="navbar-icon" name="github-icon" bundle="icons" />
          </a>
          <a class="mx-4" href="https://discord.com/invite/8ygCBpS" target="_blank" rel="noopener">
            <v-icon custom-class="navbar-icon" name="discord-icon" bundle="icons" />
          </a>
        </v-navbar-item>
      </template>
    </v-navbar>
  </div>
</template>

<style scoped>
.theme-toggle-button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
</style>