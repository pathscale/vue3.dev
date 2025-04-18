<script>
import { useRouter } from "vue-router";
import { SnippetSection } from "../../components";

import ShowcaseCode from "../../docs/components/raw/Playground.txt";
import Showcase from "../../docs/components/showcases/Playground.vue";

export default {
  name: "DevPlayground",
  components: { SnippetSection },
  setup() {
    const router = useRouter();
    return { router, Showcase, ShowcaseCode };
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
  </div>
</template>
