<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/image.ts";
import variables from "../../docs/components/variables/image.json";

import ShowcaseCode from "../../docs/components/raw/Image.txt";
import Showcase from "../../docs/components/showcases/Image.vue";

export default {
  name: "DevPageImage",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return { api, variables, router, Showcase, ShowcaseCode };
  },
};
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
