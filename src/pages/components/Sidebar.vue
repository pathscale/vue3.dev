<script>
import { useI18n } from "vue-composable";

import { useRouter } from 'vue-router';
import api from '../../docs/components/api/sidebar.ts'
import { SnippetSection, ApiSection } from "../../components"

import Showcase from "../../docs/components/showcases/Sidebar.vue"
import ShowcaseCode from "../../docs/components/raw/Sidebar.txt"

const Component = {
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n();
    const router = useRouter();
    const path = `${router.currentRoute.value.path}#api`;
    return { intl, api, router, path, Showcase, ShowcaseCode }
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
    <snippet-section :code="ShowcaseCode" :component="Showcase" :path="router.currentRoute.value.path" />
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="path" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
