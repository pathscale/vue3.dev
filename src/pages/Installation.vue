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
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>

    <h4 class="title is-4 mt-6">
      Install using npm
    </h4>

    <div class="box has-background-light is-family-code">
      npm i @pathscale/vue3-ui
    </div>
  </div>
</template>
