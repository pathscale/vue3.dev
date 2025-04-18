<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/dropdown.ts";
import variables from "../../docs/components/variables/dropdown.json";

// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from "../../docs/components/showcases/Dropdown";

import DropdownBasicCode from "../../docs/components/raw/Dropdown/DropdownBasic.txt";
import DropdownDisabledCode from "../../docs/components/raw/Dropdown/DropdownDisabled.txt";
import DropdownHoverableCode from "../../docs/components/raw/Dropdown/DropdownHoverable.txt";
import DropdownLinkCode from "../../docs/components/raw/Dropdown/DropdownLink.txt";
import DropdownPositionCode from "../../docs/components/raw/Dropdown/DropdownPosition.txt";
import DropdownVModelCode from "../../docs/components/raw/Dropdown/DropdownVModel.txt";

export default {
  name: "DevPageDropdown",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return {
      api,
      variables,
      router,
      Showcases,
      DropdownBasicCode,
      DropdownHoverableCode,
      DropdownPositionCode,
      DropdownDisabledCode,
      DropdownLinkCode,
      DropdownVModelCode,
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
      :code="DropdownBasicCode"
      :component="Showcases.DropdownBasic"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Hoverable"
      :code="DropdownHoverableCode"
      :component="Showcases.DropdownHoverable"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Disabled"
      :code="DropdownDisabledCode"
      :component="Showcases.DropdownDisabled"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Position"
      :code="DropdownPositionCode"
      :component="Showcases.DropdownPosition"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Link"
      :code="DropdownLinkCode"
      :component="Showcases.DropdownLink"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="VModel"
      :code="DropdownVModelCode"
      :component="Showcases.DropdownVModel"
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
