<script>
import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection, VariablesSection } from '../../components'

import api from '../../docs/components/api/slider.ts'
import variables from '../../docs/components/variables/slider.json'

// eslint-disable-next-line no-restricted-syntax -- using all components
import * as Showcases from '../../docs/components/showcases/Slider'
import TooltipCode from '../../docs/components/raw/Slider/Tooltip.txt'
import ColorsCode from '../../docs/components/raw/Slider/Colors.txt'
import SizesCode from '../../docs/components/raw/Slider/Sizes.txt'
import StatesCode from '../../docs/components/raw/Slider/States.txt'
import StylesCode from '../../docs/components/raw/Slider/Styles.txt'

export default {
  name: 'DevPageSlider',
  components: { SnippetSection, ApiSection, VariablesSection },
  setup() {
    const router = useRouter()
    return { api, variables, router, Showcases, TooltipCode, ColorsCode, SizesCode, StatesCode, StylesCode }
  }
}
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
      title="Tooltip"
      :code="TooltipCode"
      :component="Showcases.Tooltip"
      :path="router.currentRoute.value.path"

      is-half-width />
    <snippet-section
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.Sizes"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="States"
      :code="StatesCode"
      :component="Showcases.States"
      :path="router.currentRoute.value.path"
      is-half-width />
    <snippet-section
      title="Styles"
      :code="StylesCode"
      :component="Showcases.Styles"
      :path="router.currentRoute.value.path"
      is-half-width />
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
