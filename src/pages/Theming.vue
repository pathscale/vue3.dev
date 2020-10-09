<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
// import api from '../../docs/components/api/breadcrumb.ts'
// import { SnippetSection, ApiSection } from "../../components"

// import Showcase from "../../docs/components/showcases/Breadcrumb.vue"
// import ShowcaseCode from "../../docs/components/raw/Breadcrumb.txt"

const Component = {
//   components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router }
  }
}

export default Component
</script>

<template>
  <section>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>

    <h4 class="title is-4 mt-6">
      Plug your own styles
    </h4>

    <p>
      Vue3-ui does not ship with any css, instead our components ship with css classes that you can style freely.
    </p>

    <h4 class="title is-4 mt-6">
      Optional css package
    </h4>

    <p>
      You can add styles to vue3-ui very quickly by installing our custom css package.
      <br />
      <br />
      It has been developed to style the same class names that vue3-ui components export. It's a perfect match.
    </p>

    <h5 class="title is-5 mt-6">
      Installation
    </h5>

    <div class="box has-background-light is-family-code">
      npm i @pathscale/bulma-extensions-css-var
    </div>

    <h5 class="title is-5 mt-6">
      Usage
    </h5>

    <div class="box has-background-light is-family-code">
      import { createApp } from 'vue'
      <br />
      import App from 'App.vue'
      <br />
      import '@pathscale/bulma-extensions-css-var'
      <br />
      <br />
      createApp(App).mount('#app')
    </div>

    <h5 class="title is-5 mt-6">
      Customization
    </h5>

    <p>
      <strong>@pathscale/bulma-extensions-css-var</strong> exports css variables for most of vue3-ui components,
      they can be swapped to create dynamic ui styles and themes.
      <br />
      <br />
      You will find what css variables are available for what components in their API section.
    </p>

    <h5 class="title is-5 mt-6">
      Examples
    </h5>

    <h6 class="title is-6">
      Swapping css variables using vanilla javascript
    </h6>

    <div class="box has-background-light is-family-code">
      const root = document.documentElement
      <br />
      root.style.setProperty('--blm-turquoise', 'rgb(24, 0, 75)')
    </div>

    <h6 class="title is-6 mt-6">
      Swapping css variables using vue
    </h6>
    <div class="box has-background-light is-family-code">
      import { useCssVariables } from 'vue-composable'
      <br />
      <br />
      useCssVariables([{ name: '--blm-turquoise', value: 'rgb(24, 0, 75)' }])
    </div>
  </section>
</template>
