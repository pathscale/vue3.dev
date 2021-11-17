<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from '../../components'

import api from '../../docs/components/api/slider.ts'
import variables from '../../docs/components/variables/slider.json'

// eslint-disable-next-line no-restricted-syntax -- using all components
import * as Showcases from '../../docs/components/showcases/Pagination'
import DefaultCode from '../../docs/components/raw/Pagination/Default.txt'

export default {
  name: 'DevPagePagination',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter()
    return { api, variables, router, Showcases, DefaultCode }
  },
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
      title="Default"
      :code="DefaultCode"
      :component="Showcases.Default"
      :path="router.currentRoute.value.path"
      is-half-width />

    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
    <section id="variables" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#variables`" class="is-active">#</a> Variables
      </h2>
      <variables-section :variables="variables" />
    </section>
  </div>
</template>
