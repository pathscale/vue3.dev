<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from '../../components'

import api from '../../docs/components/api/input.ts'
import variables from '../../docs/components/variables/input.json'

// eslint-disable-next-line no-restricted-syntax -- using all
import * as Showcases from '../../docs/components/showcases/Input'
import ColorCode from '../../docs/components/raw/Input/Color.txt'
import LoadingCode from '../../docs/components/raw/Input/Loading.txt'
import SizeCode from '../../docs/components/raw/Input/Size.txt'
import TypeCode from '../../docs/components/raw/Input/Type.txt'

export default {
  name: 'DevPageInput',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter()
    return {  api, variables, router, Showcases, ColorCode, LoadingCode, SizeCode, TypeCode }
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
      title="Type"
      :code="TypeCode"
      :component="Showcases.Type"
      :path="router.currentRoute.value.path" />
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
    <section id="variables" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#variables`" class="is-active">#</a> Variables
      </h2>
      <variables-section :variables="variables" />
    </section>
  </div>
</template>
