<script>
import { useI18n } from 'vue-composable'

export default {
  name: 'DevFooter',
  setup() {
    const intl = useI18n()
    return { intl }
  }
}
</script>

<template>
  <footer class="footer pb-5">
    <div class="content has-text-centered">
      <p class="has-text-white mt-6">
        <strong class="has-text-white">2020 ©</strong>
        by PathScale Pte Ltd Version: {{ process.env.VUE_APP_VERSION_NUMBER }}
      </p>
    </div>
  </footer>
</template>
