<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../components'

import api from '../docs/components/api/appstate.ts'

// eslint-disable-next-line no-restricted-syntax -- Using all of them
import * as Showcases from '../docs/components/showcases/Appstate'
import CreateCode from '../docs/components/raw/Appstate/Create.txt'
import UpdateCode from '../docs/components/raw/Appstate/Update.txt'


export default {
  name: 'DevPageInstallation',
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router, Showcases, CreateCode, UpdateCode, api }
  }
}
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }} inspired by <a href="https://hookstate.js.org/">Hookstate</a>
    </p>

    <snippet-section title="Create state" :code="CreateCode" :component="Showcases.Create" :path="router.currentRoute.value.path" />
    <snippet-section title="Update state" :code="UpdateCode" :component="Showcases.Update" :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
