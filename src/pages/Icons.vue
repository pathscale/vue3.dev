<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../components'

import api from '../docs/components/api/icon.ts'

// eslint-disable-next-line no-restricted-syntax -- Using all of them
import * as Showcases from '../docs/components/showcases/Icon'
import BasicCode from '../docs/components/raw/Icon/IconBasic.txt'

export default {
  name: 'DevPageInstallation',
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router, Showcases, BasicCode, api }
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

    <div class="subtitle content mt-4">
      Prerequisites
    </div>
    <div class="box has-background-light is-family-code">
      <i class=" has-text-grey-light">rollup.config.js</i>
      <br />
      <br />
      import vue3svg from '@pathscale/vue3-svg-icons'
      <br />
      &nbsp; plugins: [
      <br /> &nbsp;  &nbsp; vue3svg()
      <br />
      &nbsp;&nbsp;]
    </div>

    <snippet-section title="Basic Use" :code="BasicCode" :component="Showcases.IconBasic" :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
