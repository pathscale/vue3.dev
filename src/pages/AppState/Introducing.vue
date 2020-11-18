<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'
import api from '../../docs/components/api/appstate.ts'
import { Introducing, Introducing2 } from '../../docs/components/showcases/Appstate'
import GlobalCode from '../../docs/components/raw/Appstate/Introducing.txt'
import GlobalCode2 from '../../docs/components/raw/Appstate/Introducing2.txt'



export default {
  name: 'DevPageInstallation',
  components: { SnippetSection, ApiSection },
  setup() {
    const router = useRouter()
    return { router, Showcases: Introducing, Introducing2, GlobalCode, GlobalCode2, api }
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

    <br />
    Vue has released their latest version, Vue3. Where in this latest version the <a href="https://v3.vuejs.org/api/composition-api.html" target="__blank">Composition API</a> is introduced which offers a simpler and more modern concept of state management.
    With this new concept, you can choose more flexible state management options instead of just using Vuex. <b>Appstate-fast</b> offers better state management performance and is also highly compatible with Vue3.

    <snippet-section title="Global state" :code="GlobalCode" :component="Showcases" :path="router.currentRoute.value.path" />
    <snippet-section title="Global state with Composition API (Remove this)" :code="GlobalCode2" :component="Introducing2" :path="router.currentRoute.value.path" />
    Create and initialize the state with the <b>createState</b> method. The returned instace could be used to get/set the state outside a Vue component.
    <br />

    To use the state instance inside a Vue Component, import it with <b>useState</b> method.

    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
