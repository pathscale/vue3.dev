<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection } from 'src/components'

// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from 'src/docs/components/showcases/Validation'
import BasicCode from 'src/docs/components/raw/Validation/Basic.txt'

export default {
  name: 'DevPageValidation',
  components: { SnippetSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router, Showcases, BasicCode }
  }
}
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>

    <snippet-section
      title="Basic"
      :code="BasicCode"
      :component="Showcases.Basic"
      :path="router.currentRoute.value.path" />
  </div>
</template>
