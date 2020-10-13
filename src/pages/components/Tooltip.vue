<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { SnippetSection, ApiSection } from '../../components'

import api from '../../docs/components/api/tooltip.ts'

// eslint-disable-next-line no-restricted-syntax -- using all components
import * as Showcases from '../../docs/components/showcases/Tooltip'
import AlwaysCode from '../../docs/components/raw/Tooltip/Always.txt'
import AnimatedCode from '../../docs/components/raw/Tooltip/Animated.txt'
import ColorsCode from '../../docs/components/raw/Tooltip/Colors.txt'
import DelayCode from '../../docs/components/raw/Tooltip/Delay.txt'
import SizesCode from '../../docs/components/raw/Tooltip/Sizes.txt'
import StylesCode from '../../docs/components/raw/Tooltip/Styles.txt'

export default {
  name: 'DevPageTooltip',
  components: { SnippetSection, ApiSection },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, api, router, Showcases, AlwaysCode, AnimatedCode, ColorsCode, DelayCode, SizesCode, StylesCode }
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
      title="Colors"
      :code="ColorsCode"
      :component="Showcases.Colors"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Sizes"
      :code="SizesCode"
      :component="Showcases.Sizes"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Styles"
      :code="StylesCode"
      :component="Showcases.Styles"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Always"
      :code="AlwaysCode"
      :component="Showcases.Always"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Animated"
      :code="AnimatedCode"
      :component="Showcases.Animated"
      :path="router.currentRoute.value.path" />
    <snippet-section
      title="Delay"
      :code="DelayCode"
      :component="Showcases.Delay"
      :path="router.currentRoute.value.path" />
    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
