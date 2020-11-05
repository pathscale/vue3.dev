<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

import {
  HomeSection,
  OverviewSection,
  ClientsSection,
  BlogSection
} from '../components/sections'

export default {
  name: 'DevPageHome',
  components: {
    HomeSection,
    OverviewSection,
    ClientsSection,
    BlogSection
  },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router }
  }
}
</script>

<template>
  <home-section />
  <overview-section />
  <clients-section />
  <blog-section />
</template>
