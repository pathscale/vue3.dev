<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/textarea.ts'

// eslint-disable-next-line no-restricted-syntax -- using all
import * as Showcases from '../../docs/components/showcases/Textarea'
import ColorCode from '../../docs/components/raw/Textarea/Color.txt'
import SizeCode from '../../docs/components/raw/Textarea/Size.txt'
import LoadingCode from '../../docs/components/raw/Textarea/Loading.txt'
import FocusedCode from '../../docs/components/raw/Textarea/Focused.txt'
import CounterCode from '../../docs/components/raw/Textarea/Counter.txt'

export default {
  name: 'DevPageTextarea',
  components: { SnippetSection, ApiSection },
  setup() {
    const router = useRouter()
    return { api, router, Showcases, ColorCode, SizeCode, LoadingCode, FocusedCode, CounterCode }
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
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Size"
      :code="SizeCode"
      :component="Showcases.Size"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Loading"
      :code="LoadingCode"
      :component="Showcases.Loading"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Focused"
      :code="FocusedCode"
      :component="Showcases.Focused"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Counter"
      :code="CounterCode"
      :component="Showcases.Counter"
      :path="router.currentRoute.value.path"
      is-half-width />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
