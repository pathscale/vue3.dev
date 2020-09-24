<script>
import { useI18n } from "vue-composable";

 
import api from '../docs/components/Button/button.ts'
import { ApiSection } from "../components/sections"

const Component = {
  components: { ApiSection },
  setup() {
    const intl = useI18n();
    return { intl, api }
  }
}
export default Component;
</script>

<template>
  <div>
    <h1 class="title">
      Button
    </h1>
    <p>
      The classic button, in different colors, sizes, and states
    </p>
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a href="/documentation/button/#api" class="router-link-exact-active is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>