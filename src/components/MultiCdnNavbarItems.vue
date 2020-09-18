<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VNavbarItem } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";


const Component = {
  props: ['isActive', 'sectionScroll'],
  components: { VNavbarItem },
  setup() {
    const intl = useI18n();
    return { intl }
  }
}
export default Component;
 
</script>

<template>
  <div class="is-block-touch is-flex">
    <v-navbar-item
      class="mx-3 is-size-6 has-text-centered"
      :class="{'is-active-item': isActive(1) }"
      :active="isActive(1)"
      @click="sectionScroll('why-multi-cdn')">
      {{ intl.$ts('project.subtitle') }}
    </v-navbar-item>
    <v-navbar-item
      class="mx-3 is-size-6 has-text-centered"
      :class="{'is-active-item': isActive(2) }"
      :active="isActive(2)"
      @click="sectionScroll('data-driven-multi-cdn')">
      {{ intl.$ts('resources.subtitle') }}
    </v-navbar-item>
  </div>
</template>
