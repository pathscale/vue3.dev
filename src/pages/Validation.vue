<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'

export default {
  name: 'DevPageInstallation',
  setup() {
    const intl = useI18n()
    const router = useRouter()
    return { intl, router }
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
  </div>
</template>
