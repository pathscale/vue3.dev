<script>
import { useI18n } from "vue-composable";

import { useRouter } from 'vue-router'; 
import api from '../../docs/components/Button/button.ts'
import { SnippetSection, ApiSection } from "../../components"

import ButtonColors from "../../docs/components/Button/examples/ButtonColors.vue"
import ButtonColorsCode from "../../docs/components/Button/examples/ButtonColors.html"

const Component = {
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n();
     const router = useRouter();
    return { intl, api, router, ButtonColors, ButtonColorsCode }
  }
}
export default Component;
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>
    <snippet-section title="Colors" :code="ButtonColorsCode" :component="ButtonColors" />
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>