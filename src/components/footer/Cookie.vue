<script>
import { VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import { reactive, onMounted } from 'vue'

export default {
  name: 'Cookie',
  components: {
    VButton, VColumns, VColumn
  },
  setup() {
    const intl = useI18n()
    const state = reactive({
      showBanner: false
    })
    onMounted(() => {
      const isAccepted = localStorage.getItem('pathscaleCookiesBanner') === 'true'
      state.showBanner = !isAccepted
    })
    function handlePrivacyPolicy() {

      console.log('handlePrivacyPolicy')
    }
    function handleAgree() {
      localStorage.setItem('pathscaleCookiesBanner', 'true')
      state.showBanner = false
    }
    return { handlePrivacyPolicy, handleAgree, intl, state }
  }
}
</script>

<template>
  <transition name="fade">
    <div v-if="state.showBanner" id="cookie-banner-full-width">
      <v-columns>
        <v-column size="is-10">
          <span id="text-cookie">
            {{ intl.$ts('cookies') }} <a @click="handlePrivacyPolicy"> {{ intl.$ts('policy') }} </a>.
          </span>
        </v-column>
        <v-column class="is-centered">
          <v-button class="agree-button" type="is-rounded is-white has-text-primary is-size-6 is-size-7-touch " size="is-medium" @click="handleAgree">
            {{ intl.$ts('agree') }}
          </v-button>
        </v-column>
      </v-columns>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

#cookie-banner-full-width {
  position: fixed;
  left: 50%;
  margin-left: -40vw;
  width: 80vw;
  background: #260e3b;
  border: 1px solid #260e3b;
  z-index: 200;
  padding: 16px;
  box-shadow: 0 0 10px 3px rgb(0 0 0 / 75%);
}

@media only screen and (max-width: 1024px) {
  #cookie-banner-full-width {
    padding: 10px;
    margin: -20px;
    position: fixed;
    left: 20px;
    bottom: 5vh;
    z-index: 100;
    width: 100vw;
  }
}

@media only screen and (orientation: landscape) {
  #cookie-banner-full-width {
    bottom: 10vh;
  }
}

#inner-div {
  display: flex;
}

.agree-button {
  margin-left: 15px;
  margin-right: 10px;
}

#text-cookie {
  text-align: justify;
  font-family: opensans, helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.45px;
  color: white;
}
</style>
