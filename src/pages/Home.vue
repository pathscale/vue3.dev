<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { useRouter} from "vue-router"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput },
  setup() {
    const intl = useI18n();
    const router = useRouter();
    return { intl, router }
  }
}
export default Component;
</script>
r
<template>
  <section class="hero is-fullheight section">
    <div class="hero-body pt-4" style="flex-grow: 0;">
      <div class="container">
        Home
      </div>
    </div>
  </section>
</template>