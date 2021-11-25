<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/upload.ts'

// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from '../../docs/components/showcases/Calendar'
import BasicCode from '../../docs/components/raw/Calendar/Basic.txt'

export default {
  name: 'DevPageCalendar',
  components: { SnippetSection, ApiSection },
  setup() {
    const router = useRouter()
    return {
      api,
      router,
      Showcases,
      BasicCode,
    }
  },
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
      :path="router.currentRoute.value.path" />

    VCalendar component use <b class="is-bold">@bulma-calendar</b> underhood. For use it, you have
    to import the bulma-calendar styles

    <br />
    <br />

    <code> import 'bulma-calendar/dist/css/bulma-calendar.min.css' </code>

    <br />
    <br />

    and inject the instance in the global scope

    <br />
    <br />

    <code>
      import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min'
      <br />
      <br />

      provide('$bulmaCalendar', bulmaCalendar)
    </code>

    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
