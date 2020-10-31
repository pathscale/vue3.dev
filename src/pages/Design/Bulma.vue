<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

export default {
  name: 'DevPageBulma',
  setup() {
    const intl = useI18n()
    const router = useRouter()
    function redirect(name) {
      router.push({
        name
      })
    }
    return { intl, router, redirect }
  }
}
</script>

<template>
  <h1 class="title">
    {{ router.currentRoute.value.meta.title }}
  </h1>
  <p>
    {{ router.currentRoute.value.meta.metaTags[0].content }}
  </p>

  <div class="content mt-3">
    <p class="subtitle">
      Layout
    </p>
    <ul>
      <li>
        <a href="https://bulma.io/documentation/layout/container/" rel="noopener noreferrer" target="_blank">Container</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/layout/hero/" rel="noopener noreferrer" target="_blank">Hero</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/layout/section/" rel="noopener noreferrer" target="_blank">Section</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/layout/footer/" rel="noopener noreferrer" target="_blank">Footer</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/layout/tiles/" rel="noopener noreferrer" target="_blank">Tile system</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/layout/level/" rel="noopener noreferrer" target="_blank">Level</a>
      </li>
    </ul>

    <p class="subtitle">
      Columns
    </p>
    The bulma grid was wrapped by <a @click="redirect('columns')">Columns</a> component.


    <p class="subtitle mt-4">
      Elements
    </p>
    <ul>
      <li>
        <a href="https://bulma.io/documentation/elements/box/" rel="noopener noreferrer" target="_blank">Box</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/elements/content/" rel="noopener noreferrer" target="_blank">Content</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/components/panel/" rel="noopener noreferrer" target="_blank">Panel</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/elements/title/" rel="noopener noreferrer" target="_blank">Title</a>
      </li>
    </ul>
    <p class="subtitle">
      Helpers
    </p>
    <ul>
      <li>
        <a href="https://bulma.io/documentation/helpers/spacing-helpers/" rel="noopener noreferrer" target="_blank">Spacing</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/helpers/visibility-helpers/" rel="noopener noreferrer" target="_blank">Visibility</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/helpers/other-helpers/" rel="noopener noreferrer" target="_blank">Other</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/helpers/color-helpers/" rel="noopener noreferrer" target="_blank">Color</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/helpers/typography-helpers/" rel="noopener noreferrer" target="_blank">Typography</a>
      </li>
      <li>
        <a href="https://bulma.io/documentation/helpers/flexbox-helpers/" rel="noopener noreferrer" target="_blank">Flexbox </a><i>(pending)</i>
      </li>
    </ul>
  </div>
  Checkout the Bulma <a href="https://bulma.io/documentation/" rel="noopener noreferrer" target="_blank">documentation</a> for more details.
</template>
