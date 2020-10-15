<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/breadcrumb.ts'

// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from '../../docs/components/showcases/Breadcrumb'
import BreadcrumbBasicCode from '../../docs/components/raw/Breadcrumb/BreadcrumbBasic.txt'
import BreadcrumbSizesCode from '../../docs/components/raw/Breadcrumb/BreadcrumbSizes.txt'
import BreadcrumbSeparatorCode from '../../docs/components/raw/Breadcrumb/BreadcrumbSeparator.txt'


export default {
  name: 'DevPageBreadcrumb',
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, router, Showcases, BreadcrumbBasicCode, BreadcrumbSizesCode, BreadcrumbSeparatorCode }
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
      :code="BreadcrumbBasicCode"
      :component="Showcases.BreadcrumbBasic"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="BreadcrumbSizesCode"
      :component="Showcases.BreadcrumbSizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Separator"
      :code="BreadcrumbSeparatorCode"
      :component="Showcases.BreadcrumbSeparator"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
