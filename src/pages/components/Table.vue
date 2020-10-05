<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import api from '../../docs/components/api/datagrid.ts'
import { SnippetSection, ApiSection } from '../../components'

import * as Showcases from '../../docs/components/showcases/Table'
// import ShowcaseCode from "../../docs/components/raw/Datagrid.txt"

const Component = {
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, router, Showcases }
  },
}
export default Component
</script>

<template>
  <div>
    <h1 class="title mt-6">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>

    <h1 class="title mt-6">Examples</h1>
    <snippet-section
      title="Basic"
      code=""
      :component="Showcases.Basic"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Styled"
      code=""
      :component="Showcases.Styled"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Search"
      code=""
      :component="Showcases.Search"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Custom Components"
      code=""
      :component="Showcases.Custom"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Select"
      code=""
      :component="Showcases.Select"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Paginate"
      code=""
      :component="Showcases.Paginate"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Dynamic"
      code=""
      :component="Showcases.Dynamic"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Drag"
      code=""
      :component="Showcases.Drag"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Sticky"
      code=""
      :component="Showcases.Sticky"
      :path="router.currentRoute.value.path"
    />
    <snippet-section
      title="Others"
      code=""
      :component="Showcases.Others"
      :path="router.currentRoute.value.path"
    />

    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>