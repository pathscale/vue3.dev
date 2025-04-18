<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/tag.ts";
import variables from "../../docs/components/variables/tag.json";

import ClosableCode from "../../docs/components/raw/Tag/Closable.txt";
import ColorsCode from "../../docs/components/raw/Tag/Colors.txt";
import SizesCode from "../../docs/components/raw/Tag/Sizes.txt";
import StatesCode from "../../docs/components/raw/Tag/States.txt";
import StylesCode from "../../docs/components/raw/Tag/Styles.txt";
// eslint-disable-next-line no-restricted-syntax -- using all components
import * as Showcases from "../../docs/components/showcases/Tag";

export default {
  name: "DevPageTag",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return {
      api,
      variables,
      router,
      Showcases,
      ClosableCode,
      ColorsCode,
      SizesCode,
      StatesCode,
      StylesCode,
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
      title="Closable"
      :code="ClosableCode"
      :component="Showcases.Closable"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.Sizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="States"
      :code="StatesCode"
      :component="Showcases.States"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Styles"
      :code="StylesCode"
      :component="Showcases.Styles"
      :path="router.currentRoute.value.path" />
    <section id="api" class="pt-4">
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
