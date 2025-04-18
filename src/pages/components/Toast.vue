<script>
import { useRouter } from "vue-router";
import { ApiSection, SnippetSection, VariablesSection } from "../../components";

import api from "../../docs/components/api/toast.ts";
import variables from "../../docs/components/variables/notification.json";

import DefaultCode from "../../docs/components/raw/Toast/Default.txt";
// eslint-disable-next-line no-restricted-syntax -- using all of them
import * as Showcases from "../../docs/components/showcases/Toast";

export default {
  name: "DevPageToast",
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter();
    return {
      api,
      variables,
      router,
      Showcases,
      DefaultCode,
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

    <div class="notification is-danger">
      <span>If you are using @pathscale/rollup-plugin-vue3-ui-css-purge, you have to add to add the
        toast classes to purger whitelist v-if="false" class="v-toast-container v-toast-container--top
        v-toast-container--bottom v-toast--top-left v-toast--top v-toast--top-right
        v-toast--bottom-left v-toast--bottom v-toast--bottom-right"
      </span>
    </div>

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
