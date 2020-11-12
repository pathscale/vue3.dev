<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/datagrid.ts'

import Showcase from '../../docs/components/showcases/Datagrid.vue'
import ShowcaseCode from '../../docs/components/raw/Datagrid.txt'

export default {
  name: 'DevPageDatagrid',
  components: { SnippetSection, ApiSection },
  setup() {
    
    const router = useRouter()
    return {
      api,
      router,
      Showcase,
      ShowcaseCode
    }
  }
}
</script>

<template>
  <div>
    <h1 class="title mt-6">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}, designed to integrate with  <a href="table" target="_blank" rel="noopener">Table</a> component
    </p>

    <snippet-section
      title="Showcase"
      :code="ShowcaseCode"
      :component="Showcase"
      :path="router.currentRoute.value.path" />

    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
    <section id="table" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#table`" class="is-active">#</a> Table
      </h2>
      Check out <a @click="router.push({path: 'table'})">here</a> the Table API documentation
    </section>
  </div>
</template>
