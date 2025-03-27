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
import BasicCode from '../../docs/components/raw/Input/Basic.txt'

export default {
  name: 'DevPageInput',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter()
    return { api, variables, router, Showcases, ColorCode, LoadingCode, SizeCode, BasicCode }
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
      title="Basic"
      :code="BasicCode"
      :component="Showcases.Basic"
      :path="router.currentRoute.value.path"
      is-half-width />
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
      title="States"
      :code="LoadingCode"
      :component="Showcases.Loading"
      :path="router.currentRoute.value.path"
      is-half-width />
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
