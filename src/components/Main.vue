<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VNavbar, VNavbarItem, VNavbarDropdown, VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { onMounted, ref, watchEffect, computed } from 'vue'
import { useI18n } from "vue-composable";
import logo from '../assets/svg/vue3-logo.svg'

import {
  HomeSection,
  ProjectSection,
  ResourcesSection,
  FaqSection,
  ProgressSection
} from './sections'

import MultiCdnNavbarItems from './MultiCdnNavbarItems.vue'
import CookieBannerFullWidth from './CookieBannerFullWidth.vue'

const Component = {
  components: {
    VNavbar,
    VNavbarItem,
    VNavbarDropdown,
    VButton,
    VColumns,
    VColumn,
    HomeSection,
    ProjectSection,
    ResourcesSection,
    MultiCdnNavbarItems,
    CookieBannerFullWidth,
    FaqSection,
    ProgressSection
  },
  setup() {
    const activeItem = ref(0)
    const isDropdownOpen = ref(false);
    const isMenuOpen = ref(false);
    const showLanguageMenu = ref(false);
    const pathname = ref(location.pathname.slice(1));

    const isHomeActive = computed(() => activeItem.value === 0 && pathname.value !== 'faq' && pathname.value !== 'progress' );
    const intl = useI18n();

    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.slice(0, 4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    const isMobile = window.mobileCheck();

    watchEffect(() => {
      if (isMobile && isMenuOpen.value === false) {
        showLanguageMenu.value = false
      }
    })

    const sections = [
      'home',
      'project',
      'resources',
    ]
    const navbarColor = computed(() => {
      return activeItem.value === 0 ? 'transparent' : '#111';
    })
    
    let pnls, well
    let scdir,
      hold = false

    function isActive(i) {
      return activeItem.value === i
    }

    function sectionScroll(name) {
      const index = sections.indexOf(name)
      if (index !== -1 && pathname.value !== "faq" && pathname.value !== "progress" ) {
        showLanguageMenu.value = false
        isMenuOpen.value = false
        activeItem.value = index
        history.replaceState('', 'Pathscale', sections[activeItem.value])
        well.style.transform = 'translateY(-' + index * 100 + 'vh)'
      }
    }

    function toggleLanguageMenu() {
      showLanguageMenu.value = !showLanguageMenu.value;
    }
    
    function changeLanguage(language) {
      showLanguageMenu.value = false
      intl.locale.value = language
    }

    function _scrollY(obj) {
      let slength, plength, pan
      const step = 100,
        vh = window.innerHeight / 100,
        vmin = Math.min(window.innerHeight, window.innerWidth) / 100
      if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
        pan = this || obj
        plength = Number.parseInt(pan.offsetHeight / vh)
      }
      if (pan === undefined) {
        return
      }
      plength = plength || Number.parseInt(pan.offsetHeight / vmin)
      slength = Number.parseInt(pan.style.transform.replace('translateY(', ''))
      if (scdir === 'up' && Math.abs(slength) < plength - plength / pnls) {
        slength -= step
      } else if (scdir === 'down' && slength < 0) {
        slength += step
      } else if (scdir === 'top') {
        slength = 0
      }
      if (hold === false) {
        hold = true
        activeItem.value = Math.abs(slength) / 100
        history.replaceState('', 'Pathscale', sections[activeItem.value])
        pan.style.transform = 'translateY(' + slength + 'vh)'
        setTimeout(function () {
          hold = false
        }, 1000)
      }
    }
    /* [swipe detection on touchscreen devices] */
    function _swipe(obj) {
      let swdir, sY, dY
      obj.addEventListener(
        'touchstart',
        function (e) {
          const tchs = e.changedTouches[0]
          swdir = 'none'
          sY = tchs.pageY
          // e.preventDefault();
        },
        { passive: true }
      )

      obj.addEventListener(
        'touchmove',
        function (e) {
          /* [prevent scrolling when inside DIV] */
        },
        { passive: true }
      )

      obj.addEventListener(
        'touchend',
        function (e) {
          const tchs = e.changedTouches[0]
          dY = tchs.pageY - sY
          if (Math.abs(dY) < 50) return
          swdir = dY < 0 ? 'up' : 'down'
          if (obj.id === 'well') {
            if (swdir === 'up' && activeItem.value <= 1) {
              scdir = swdir
              _scrollY(obj)
              // eslint-disable-next-line sonarjs/no-duplicated-branches -- temporary
            } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
              scdir = swdir
              _scrollY(obj)
            }
            e.stopPropagation()
          }
        },
        false,
      )
    }

    onMounted(() => {

      pnls = document.querySelectorAll('.section').length
      /* [assignments] */
      well = document.querySelector('#well')
      if (location.pathname.slice(1)) {
        sectionScroll(`${location.pathname.slice(1)}`)
      } else {
        well.style.transform = 'translateY(0vh)'
      }
      well.addEventListener(
        'wheel',
        function (e) {
          if (e.deltaY < 0) {
            scdir = 'down'
          }
          if (e.deltaY > 0) {
            scdir = 'up'
          }
          e.stopPropagation()
        },
        { passive: true },
      )
      well.addEventListener('wheel', _scrollY, { passive: true })
      _swipe(well)

      document.addEventListener('keydown', function (event) {
        const { key } = event
        if (key === 'ArrowUp' || key === 'ArrowLeft') {
          if (activeItem.value >= 1) {
            sectionScroll(sections[activeItem.value - 1])
          }
        } else if (key === 'ArrowDown' || key === 'ArrowRight') {
          if (activeItem.value <= 1) {
            sectionScroll(sections[activeItem.value + 1])
          }
        }
      })
    })

    function setDocHeight() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    };

    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);

    setDocHeight();

    const redirectTo = (path) => {
      showLanguageMenu.value = false
      isMenuOpen.value = false 
      window.history.replaceState(null, null, path)
      pathname.value = location.pathname.slice(1);
    }

     const languages = {
        es: "es-ES",
        en: "en-EN",
        pt: "pt-BR"
    }
    return { 
      activeItem,
      changeLanguage,
      intl,
      isActive,
      isDropdownOpen,
      isHomeActive,
      isMenuOpen,
      languages,
      logo, 
      navbarColor,
      pathname,
      redirectTo,
      sectionScroll,
      showLanguageMenu,
      toggleLanguageMenu,
    }
  },
}

export default Component
</script>
<template>
  <div class="home is-relative">
    <CookieBannerFullWidth />
    <div class="big-menu" :style="`background-color: ${navbarColor}`">
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
      <v-navbar transparent v-model="isMenuOpen">
        <template #brand>
          <v-navbar-item class="ml-6">
            <img :src="logo" alt="revenge logo" />
          </v-navbar-item>
        </template>
        <template #end>
          <v-navbar-item
            class="mx-3 my-5 is-size-5 has-text-centered"
            :class="{'is-active-item': isHomeActive }"
            :active="isHomeActive"
            @click="sectionScroll('home')">
            {{ intl.$ts('home.title') }}
          </v-navbar-item>
          <v-navbar-item
            class="mx-3 my-5 is-size-5 has-text-centered"
            :class="{'is-active-item': isActive(1) }"
            :active="isActive(1)"
            @click="sectionScroll('project')">
            {{ intl.$ts('project.title') }}
          </v-navbar-item>
          <v-navbar-item
            class="mx-3 my-5 is-size-5 has-text-centered"
            :class="{'is-active-item': isActive(2) }"
            :active="isActive(2)"
            @click="sectionScroll('resources')">
            {{ intl.$ts('resources.title') }}
          </v-navbar-item>
          <v-navbar-item
            class="mx-3 my-5 is-size-5 has-text-centered"
            @click="toggleLanguageMenu">
            {{ intl.$ts(`language`) }}: {{ languages[intl.locale.value] }}
          </v-navbar-item>
          <v-navbar-item tag="div" class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd mx-3 my-5 is-size-5 has-text-centered">
            <v-button tag="a" href="https://social.soy/" target="_blank" rel="noopener"
                      class="mt-6 is-size-6 is-size-7-touch " rounded type="is-primary" size="is-medium">
              <strong>{{ intl.$ts('resources.button1') }}</strong>
            </v-button>
          </v-navbar-item>
        </template>
      </v-navbar>
      <div class="navbar-menu submenu" v-show="false">
        <div class="navbar-start" />
        <div class="navbar-end">
          <multi-cdn-navbar-items :is-active="isActive" :section-scroll="sectionScroll" />
        </div>
      </div>
    </div>
    <progress-section v-if="pathname === 'progress'" :redirect-to="redirectTo" />
    <faq-section v-if="pathname === 'faq'" :redirect-to="redirectTo" />
    <div v-show="pathname != 'home' || pathname !='project' || pathname != 'resources'" class="well" id="well">
      <home-section :section-scroll="sectionScroll" />
      <div style="touch-action: none">
        <project-section />
        <resources-section :section-scroll="sectionScroll" :redirect-to="redirectTo" />
      </div>
    </div>
  </div>
</template>

<style>
.is-visible {
  height: 40px;
  padding-top: 10px;
}
.is-hidden {
  height: 0;
  padding-top: 0;
}
</style>