<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/upload.ts";
import variables from "../../docs/components/variables/upload.json";

import AlignCode from "../../docs/components/raw/Upload/Align.txt";
import ColorsCode from "../../docs/components/raw/Upload/Colors.txt";
import DefaultCode from "../../docs/components/raw/Upload/Default.txt";
import SizeCode from "../../docs/components/raw/Upload/Size.txt";
import StyleCode from "../../docs/components/raw/Upload/Style.txt";
// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from "../../docs/components/showcases/Upload";

export default {
  name: "DevPageUpload",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return {
      api,
      variables,
      router,
      Showcases,
      AlignCode,
      ColorsCode,
      DefaultCode,
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
      title="Default"
      :code="DefaultCode"
      :component="Showcases.Default"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
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
      title="Alignment"
      :code="AlignCode"
      :component="Showcases.Align"
      :path="router.currentRoute.value.path" />
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
