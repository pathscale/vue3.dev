<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

import {
  HomeSection,
  TrailerSection,
  ClientsSection,
  BlogSection
} from '../components/sections'

const Component = {
  components: {
    HomeSection,
    TrailerSection,
    ClientsSection,
    BlogSection
  },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router }
  }
}

export default Component
</script>

<template>
  <section>
    <home-section />
    <trailer-section />
    <clients-section />
    <blog-section />
  </section>
</template>
