<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/switch.ts";

import DefaultCode from "../../docs/components/raw/Switch/Default.txt";
import PassiveCode from "../../docs/components/raw/Switch/Passive.txt";
import SizesCode from "../../docs/components/raw/Switch/Sizes.txt";
import StylesCode from "../../docs/components/raw/Switch/Style.txt";
import ValuesCode from "../../docs/components/raw/Switch/Values.txt";
// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from "../../docs/components/showcases/Switch";

export default {
	name: "DevPageSwitch",
	components: { SnippetSection, ApiSection },
	setup() {
		const router = useRouter();
		return {
			api,
			router,
			Showcases,
			DefaultCode,
			PassiveCode,
			SizesCode,
			StylesCode,
			ValuesCode,
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
      title="Styles"
      :code="StylesCode"
      :component="Showcases.Style"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Size"
      :code="SizesCode"
      :component="Showcases.Sizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Values"
      :code="ValuesCode"
      :component="Showcases.Values"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Passive"
      :code="PassiveCode"
      :component="Showcases.Passive"
      :path="router.currentRoute.value.path" />
    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
