<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/select.ts";

import ColorCode from "../../docs/components/raw/Select/Color.txt";
import LoadingCode from "../../docs/components/raw/Select/Loading.txt";
import SizeCode from "../../docs/components/raw/Select/Size.txt";
import StyleCode from "../../docs/components/raw/Select/Style.txt";
// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from "../../docs/components/showcases/Select";

export default {
  name: "DevPageSelect",
  components: { SnippetSection, ApiSection },
  setup() {
    const router = useRouter();
    return {
      api,
      router,
      Showcases,
      ColorCode,
      LoadingCode,
      SizeCode,
      StyleCode,
    };
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
      title="Color"
      :code="ColorCode"
      :component="Showcases.Color"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Size"
      :code="SizeCode"
      :component="Showcases.Size"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Style"
      :code="StyleCode"
      :component="Showcases.Style"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Loading"
      :code="LoadingCode"
      :component="Showcases.Loading"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
