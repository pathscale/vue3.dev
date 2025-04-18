<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/button.ts";
import variables from "../../docs/components/variables/button.json";

import ChipsCode from "../../docs/components/raw/Button/ButtonChips.txt";
import ColorsCode from "../../docs/components/raw/Button/ButtonColors.txt";
import SizesCode from "../../docs/components/raw/Button/ButtonSizes.txt";
import StatesCode from "../../docs/components/raw/Button/ButtonStates.txt";
import StylesCode from "../../docs/components/raw/Button/ButtonStyles.txt";
// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcases from "../../docs/components/showcases/Button";

export default {
	name: "DevPageButton",
	components: { SnippetSection, ApiSection, VariablesSection },
	setup() {
		const router = useRouter();
		return {
			api,
			variables,
			router,
			Showcases,
			ColorsCode,
			StylesCode,
			SizesCode,
			StatesCode,
			ChipsCode,
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
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.ButtonColors"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Styles"
      :code="StylesCode"
      :component="Showcases.ButtonStyles"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="States"
      :code="StatesCode"
      :component="Showcases.ButtonStates"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.ButtonSizes"
      :path="router.currentRoute.value.path" />

    <snippet-section
      title="Chips"
      :code="ChipsCode"
      :component="Showcases.ButtonChips"
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
