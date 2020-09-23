<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import api from '../docs/components/Button/button.ts'

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList },
  setup() {
    const intl = useI18n();
    return { intl, api }
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

    <section id="api" class="pt-4">
      <h2 class="title is-4">
        <a href="/documentation/button/#api" class="router-link-exact-active is-active">#</a> API
      </h2>
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in api.props" :key="index">
            <th>{{ value.name }}</th>
            <td> {{ value.type }}</td>
            <td>{{ value.values }}</td>
            <td>{{ value.default }}</td>
            <td>{{ value.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>