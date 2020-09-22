<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";


const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList },
  setup() {
    const intl = useI18n();
    return { intl }
  }
}
export default Component;
</script>

<template>
  <section>
    <h1 class="title">
      Button
    </h1>
    <p>
      The classic button, in different colors, sizes, and states
    </p>
  </section>
</template>