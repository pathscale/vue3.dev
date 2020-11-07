<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

import {
  HomeSection,
  OverviewSection,
  ClientsSection,
  FeaturesSection
} from 'src/components/sections'

export default {
  name: 'DevPageHome',
  components: {
    HomeSection,
    OverviewSection,
    ClientsSection,
    FeaturesSection
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
  <features-section />
  <clients-section />
</template>
