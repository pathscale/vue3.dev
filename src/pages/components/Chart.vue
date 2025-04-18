<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/chart.ts";

import BasicCode from "../../docs/components/raw/Chart/Basic.txt";
import CandleCode from "../../docs/components/raw/Chart/Candle.txt";
// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from "../../docs/components/showcases/Chart";

export default {
	name: "DevPageChart",
	components: { SnippetSection, ApiSection },
	setup() {
		const router = useRouter();
		return {
			api,
			router,
			Showcases,
			BasicCode,
			CandleCode,
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
      title="Candle Chart"
      :component="Showcases.Candle"
      :code="CandleCode"
      :path="router.currentRoute.value.path"
      is-half-width/>

    <snippet-section
      title="Basic"
      :code="BasicCode"
      :component="Showcases.Basic"
      :path="router.currentRoute.value.path"
      is-half-width/>

    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
