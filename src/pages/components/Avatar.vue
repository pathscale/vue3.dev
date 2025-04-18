<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection } from "../../components";

import api from "../../docs/components/api/avatar.ts";

import AvatarBasic from "../../docs/components/raw/Avatar/AvatarBasic.txt";
import AvatarWithPhoto from "../../docs/components/raw/Avatar/AvatarWithPhoto.txt";
// eslint-disable-next-line no-restricted-syntax -- Using comprehensively
import * as Showcase from "../../docs/components/showcases/Avatar";

export default {
	name: "DevPageAvatar",
	components: { SnippetSection, ApiSection },
	setup() {
		const router = useRouter();
		return { api, router, Showcase, AvatarBasic, AvatarWithPhoto };
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

    <snippet-section title="Avatar Basic" :code="AvatarBasic" :component="Showcase.AvatarBasic" :path="router.currentRoute.value.path" />

    <snippet-section title="Avatar With Photo" :code="AvatarWithPhoto" :component="Showcase.AvatarWithPhoto" :path="router.currentRoute.value.path" />


    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
