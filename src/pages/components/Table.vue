<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import api from '../../docs/components/api/table.ts'
import { SnippetSection, ApiSection } from '../../components'

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

const Component = {
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return {
      intl,
      api,
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
  </div>
</template>
