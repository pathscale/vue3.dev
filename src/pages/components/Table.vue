<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from '../../components'

import api from '../../docs/components/api/table.ts'
import variables from '../../docs/components/variables/table.json'

// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from '../../docs/components/showcases/Table'
import BasicCode from '../../docs/components/raw/Table/Basic.txt'
import StyledCode from '../../docs/components/raw/Table/Styled.txt'
import SearchCode from '../../docs/components/raw/Table/Search.txt'
import CustomCode from '../../docs/components/raw/Table/Custom.txt'
import SelectCode from '../../docs/components/raw/Table/Select.txt'
import PaginateCode from '../../docs/components/raw/Table/Paginate.txt'
import DynamicCode from '../../docs/components/raw/Table/Dynamic.txt'
import DragCode from '../../docs/components/raw/Table/Drag.txt'
import StickyCode from '../../docs/components/raw/Table/Sticky.txt'
import OthersCode from '../../docs/components/raw/Table/Others.txt'

export default {
  name: 'DevPageTable',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter()
    return {
      api,
      variables,
      router,
      Showcases,
      BasicCode,
      StyledCode,
      SearchCode,
      CustomCode,
      SelectCode,
      PaginateCode,
      DynamicCode,
      DragCode,
      StickyCode,
      OthersCode
    }
  }
}
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}. Table component is designed to work together with <a href="datagrid" target="_blank" rel="noopener">DataGrid</a> utility class
    </p>

    <snippet-section
      title="Basic"
      :code="BasicCode"
      :component="Showcases.Basic"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Styled"
      :code="StyledCode"
      :component="Showcases.Styled"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Search"
      :code="SearchCode"
      :component="Showcases.Search"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Custom Components"
      :code="CustomCode"
      :component="Showcases.Custom"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Select"
      :code="SelectCode"
      :component="Showcases.Select"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Paginate"
      :code="PaginateCode"
      :component="Showcases.Paginate"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Dynamic"
      :code="DynamicCode"
      :component="Showcases.Dynamic"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Drag"
      :code="DragCode"
      :component="Showcases.Drag"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sticky"
      :code="StickyCode"
      :component="Showcases.Sticky"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Others"
      :code="OthersCode"
      :component="Showcases.Others"
      :path="router.currentRoute.value.path" />

    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
    <section id="datagrid" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#datagrid`" class="is-active">#</a> Datagrid
      </h2>
      Check out <a @click="router.push({name: 'datagrid'})">here</a> the Datagrid API documentation
    </section>
    <section id="variables" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#variables`" class="is-active">#</a> Variables
      </h2>
      <variables-section :variables="variables" />
    </section>
  </div>
</template>
