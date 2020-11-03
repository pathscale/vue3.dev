<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

import { VDropdown, VDropdownItem, VButton } from '@pathscale/vue3-ui'
import { ref, watchEffect, onUnmounted } from 'vue'

export default {
  name: 'DevPageTheming',
  components: { VDropdown, VDropdownItem, VButton },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    const colors = ['black', 'red', 'blue', 'green']
    const color = ref('#000')
    const root = document.documentElement

    const isOriginalColor = color.value === '#000'

    function setColor(value) {
      root.style.setProperty('--blm-nav-bg-clr', value)
    }

    onUnmounted(() => {
      root.style.setProperty('--blm-nav-bg-clr', '#000')
    })

    watchEffect(() => {
      setColor(color.value)
    })

    return { intl, router, color, colors, setColor, isOriginalColor }
  }
}
</script>

<template>
  <h1 class="title">
    {{ router.currentRoute.value.meta.title }}
  </h1>
  <p>
    {{ router.currentRoute.value.meta.metaTags[0].content }}
  </p>

  <h4 class="title is-4 mt-6">
    Vue3-ui Styles
  </h4>

  <p>
    You can add styles to Vue3-ui quickly by installing <a href="https://www.npmjs.com/package/@pathscale/bulma-pull-2981-css-var-only" target="_blank" rel="noopener">bulma-pull-2981-css-var-only</a> based in <a href="https://bulma.io/" target="_blank" rel="noopener">Bulma</a>, getting support for CSS Variables and theming changes in running time.
    <br /><br /> Additionally, if you want to use <b>Accordion</b>, <b>Sidebar</b>, <b>Switch</b> or <b>Tooltip</b>, you have to install <a href="https://www.npmjs.com/package/@pathscale/bulma-extensions-css-var" target="_blank" rel="noopener">bulma-extensions-css-var</a>, because those components are not in the Bulma core.
  </p>

  <h5 class="title is-5 mt-6">
    Installation
  </h5>

  <div class="box has-background-light is-family-code">
    npm i @pathscale/bulma-pull-2981-css-var-only @pathscale/bulma-extensions-css-var
  </div>

  <h5 class="title is-5 mt-6">
    Usage
  </h5>

  <div class="box has-background-light is-family-code">
    import { createApp } from 'vue'
    <br />
    import App from 'App.vue'
    <br />
    import '@pathscale/bulma-pull-2981-css-var-only'
    <br />
    import '@pathscale/bulma-extensions-css-var'
    <br />
    <br />
    createApp(App).mount('#app')
  </div>

  <h5 class="title is-4 mt-6">
    Customization
  </h5>

  <p>
    <strong>@pathscale/bulma-pull-2981-css-var-only</strong> exports css variables for most of Vue3-ui components,
    they can be swapped to create dynamic ui styles and themes.
    <br />
    <br />
    <span class="has-text-danger">
      You will find what css variables are available for what components in their <b> API section </b>.
    </span>
  </p>


  <v-dropdown v-model="color" class="pt-3">
    <template #trigger>
      <v-button type="is-info">
        <span v-if="isOriginalColor">Choose your Navbar color</span>
        <span v-else>I choose you, {{ color }} </span>
      </v-button>
    </template>

    <v-dropdown-item v-for="color in colors" :value="color" :key="color" :style="`background-color: ${color}`">
      {{ color }}
    </v-dropdown-item>
  </v-dropdown>

  <p class="py-3">
    <i>Select a color to see the magic!</i>
  </p>

  <code>
    element.style {
    <br />&nbsp; --blm-nav-bg-clr: {{ color }};
    <br />
    }
  </code>

  <h6 class="title is-6 mt-6">
    Swapping css variables using vanilla javascript
  </h6>

  <p class="mb-4">
    You can assign values to a css variable by appending properties to your root DOM node
  </p>

  <div class="box has-background-light is-family-code">
    const root = document.documentElement
    <br />
    root.style.setProperty('--blm-nav-bg-clr', '#000')
  </div>

  <h6 class="title is-6 mt-6">
    Swapping css variables using Vue composable
  </h6>

  <p class="mb-4">
    Css variables can be assigned values using helper functions from <a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener">vue-composable</a>, a vue3 utility library.
    <br />
    <br />
    For this you will need to add vue-composable as a dependency.
  </p>

  <div class="box has-background-light is-family-code">
    npm i vue-composable
  </div>

  <p class="mb-4">
    You can now use vue-composable <strong>useCssVariables</strong> method to set your variables
  </p>

  <div class="box has-background-light is-family-code">
    import { useCssVariables } from 'vue-composable'
    <br />
    <br />
    useCssVariables([{ name: '--blm-nav-bg-clr', value: '#000' }])
  </div>
</template>
