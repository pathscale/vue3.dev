<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/checkbox.ts";

import ShowcaseCode from "../../docs/components/raw/Checkbox.txt";
import Showcase from "../../docs/components/showcases/Checkbox.vue";

export default {
	name: "DevPageCheckbox",
	components: { SnippetSection, ApiSection },
	setup() {
		const router = useRouter();
		return { api, router, Showcase, ShowcaseCode };
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
  </div>
</template>
