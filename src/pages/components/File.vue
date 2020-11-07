<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from 'src/components'

import api from 'src/docs/components/api/file.ts'
import variables from 'src/docs/components/variables/file.json'

// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from 'src/docs/components/showcases/File'
import AlignCode from 'src/docs/components/raw/File/Align.txt'
import ColorsCode from 'src/docs/components/raw/File/Colors.txt'
import DefaultCode from 'src/docs/components/raw/File/Default.txt'
import SizeCode from 'src/docs/components/raw/File/Size.txt'
import StyleCode from 'src/docs/components/raw/File/Style.txt'

export default {
  name: 'DevPageFile',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, variables, router, Showcases, AlignCode, ColorsCode, DefaultCode, SizeCode, StyleCode }
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
      title="Default"
      :code="DefaultCode"
      :component="Showcases.Default"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
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
      title="Alignment"
      :code="AlignCode"
      :component="Showcases.Align"
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
