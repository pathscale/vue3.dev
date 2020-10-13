<script>
import { useI18n } from 'vue-composable'
import { useRouter } from 'vue-router'
// import api from '../../docs/components/api/breadcrumb.ts'
// import { SnippetSection, ApiSection } from "../../components"

// import Showcase from "../../docs/components/showcases/Breadcrumb.vue"
// import ShowcaseCode from "../../docs/components/raw/Breadcrumb.txt"

export default {
  name: 'DevPageTheming',
  // components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router }
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
</template>
