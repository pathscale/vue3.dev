<script>
import { useI18n } from "vue-composable";

 
import api from '../docs/components/Image/image.ts'
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
      Image
    </h1>
    <p>
      A container for responsive images
    </p>
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a href="/documentation/button/#api" class="router-link-exact-active is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>