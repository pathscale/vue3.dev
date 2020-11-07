<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from 'src/components'

import api from 'src/docs/components/api/select.ts'

// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from 'src/docs/components/showcases/Select'
import ColorCode from 'src/docs/components/raw/Select/Color.txt'
import LoadingCode from 'src/docs/components/raw/Select/Loading.txt'
import SizeCode from 'src/docs/components/raw/Select/Size.txt'
import StyleCode from 'src/docs/components/raw/Select/Style.txt'

export default {
  name: 'DevPageSelect',
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, router, Showcases, ColorCode, LoadingCode, SizeCode, StyleCode }
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
      title="Color"
      :code="ColorCode"
      :component="Showcases.Color"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Size"
      :code="SizeCode"
      :component="Showcases.Size"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Style"
      :code="StyleCode"
      :component="Showcases.Style"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Loading"
      :code="LoadingCode"
      :component="Showcases.Loading"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
