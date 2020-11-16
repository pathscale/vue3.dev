<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/field.ts'

// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from '../../docs/components/showcases/Field'
import AddonsCode from '../../docs/components/raw/Field/Addons.txt'
import GroupedCode from '../../docs/components/raw/Field/Grouped.txt'
import HorizontalCode from '../../docs/components/raw/Field/Horizontal.txt'
import MessageCode from '../../docs/components/raw/Field/Message.txt'
import SizeCode from '../../docs/components/raw/Field/Size.txt'

export default {
  name: 'DevPageField',
  components: { SnippetSection, ApiSection },
  setup() {
    
    const router = useRouter()
    return { api, router, Showcases, AddonsCode, GroupedCode, HorizontalCode, MessageCode, SizeCode }
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
      title="Form addons"
      :code="AddonsCode"
      :component="Showcases.Addons"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Grouped"
      :code="GroupedCode"
      :component="Showcases.Grouped"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Horizontal"
      :code="HorizontalCode"
      :component="Showcases.Horizontal"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Label size"
      :code="SizeCode"
      :component="Showcases.Size"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Error message"
      :code="MessageCode"
      :component="Showcases.Message"
      :path="router.currentRoute.value.path"
      is-half-width />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
