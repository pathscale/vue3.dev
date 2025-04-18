<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/timeline.ts";

import ClosableCode from "../../docs/components/raw/Timeline/Example.txt";
import Example from "../../docs/components/showcases/Timeline/Example.vue";

export default {
	name: "DevPageTag",
	components: { SnippetSection, ApiSection },
	setup() {
		const router = useRouter();
		return { api, router, Example, ClosableCode };
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
    <snippet-section
      :code="ClosableCode"
      :component="Example"
      :path="router.currentRoute.value.path" />
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
