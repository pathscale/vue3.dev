<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VTag, VTab, VTabs } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { ref } from 'vue'
 
import api from '../docs/components/Button/button.ts'

const Component = {
  components: { VTag,  VTab, VTabs },
  setup() {
    const intl = useI18n();
    const tab = ref(0);
    return { intl, api, tab }
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

      <v-tabs v-model="tab" type="is-boxed">
        <v-tab label="Properties">
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
                <th><code>{{ value.name }}</code></th>
                <td><v-tag>{{ value.type }}</v-tag></td>
                <td>{{ value.values }}</td>
                <td>{{ value.default }}</td>
                <td>{{ value.description }}</td>
              </tr>
            </tbody>
          </table>
        </v-tab>
        <v-tab label="Events">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Parameters</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in api.events" :key="index">
                <th><code>{{ value.name }}</code></th>
                <td>{{ value.description }}</td>
                <td><v-tag>{{ value.parameters }}</v-tag></td>
              </tr>
            </tbody>
          </table>
        </v-tab>
      </v-tabs>
    </section>
  </section>
</template>