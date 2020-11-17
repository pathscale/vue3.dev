<script>
import { useRouter } from 'vue-router'
import { SnippetSection } from '../../components'


// import api from '../../docs/components/api/appstate'
// import { Modules } from '../../docs/components/showcases/AppState'
import GlobalCode from '../../docs/components/raw/Appstate/Modules.txt'


export default {
  name: 'DevPageInstallation',
  components: { SnippetSection },
  setup() {
    const router = useRouter()
    return { router, GlobalCode }
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


    <snippet-section title="Modules Appstate" :code="GlobalCode" :component="null" :path="router.currentRoute.value.path" />
 

    <!-- 
      <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section> 
    -->
  </div>
</template>
