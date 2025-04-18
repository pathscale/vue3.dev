<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/tabs.ts";
import variables from "../../docs/components/variables/tabs.json";

import BasicCode from "../../docs/components/raw/Tabs/TabsBasic.txt";
import PositionCode from "../../docs/components/raw/Tabs/TabsPosition.txt";
import SizesCode from "../../docs/components/raw/Tabs/TabsSizes.txt";
import TypesCode from "../../docs/components/raw/Tabs/TabsTypes.txt";
// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from "../../docs/components/showcases/Tabs";

export default {
  name: "DevPageTabs",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return {
      api,
      variables,
      router,
      Showcases,
      BasicCode,
      PositionCode,
      SizesCode,
      TypesCode,
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
      title="Basic"
      :code="BasicCode"
      :component="Showcases.TabsBasic"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Position"
      :code="PositionCode"
      :component="Showcases.TabsPosition"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.TabsSizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Types"
      :code="TypesCode"
      :component="Showcases.TabsTypes"
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
