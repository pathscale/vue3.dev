<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from '../../components'

import api from '../../docs/components/api/progress.ts'
import variables from '../../docs/components/variables/progress.json'

// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from '../../docs/components/showcases/Progress'
import ColorsCode from '../../docs/components/raw/Progress/ProgressColors.txt'
import IndeterminateCode from '../../docs/components/raw/Progress/ProgressIndeterminate.txt'
import PercentCode from '../../docs/components/raw/Progress/ProgressPercent.txt'
import SizesCode from '../../docs/components/raw/Progress/ProgressSizes.txt'
import ValueCode from '../../docs/components/raw/Progress/ProgressValue.txt'

export default {
  name: 'DevPageProgress',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, variables, router, Showcases, ColorsCode, IndeterminateCode, PercentCode, SizesCode, ValueCode }
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
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Indeterminate"
      :code="IndeterminateCode"
      :component="Showcases.Indeterminate"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.Sizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Show Value"
      :code="ValueCode"
      :component="Showcases.Value"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Show Percentage Value"
      :code="PercentCode"
      :component="Showcases.Percent"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
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
