<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VTag, VTab, VTabs } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { ref } from 'vue'

const Component = {
  props: ['api'],
  components: { VTag,  VTab, VTabs },
  setup() {
    const intl = useI18n();
    const tab = ref(0);
    return { intl, tab }
  }
}
export default Component;
</script>

<template>
  <div>
    <div v-for="(item, key) in api" :key="key">
      <p class="pb-4 is-size-4">
        {{ item.title }}
      </p>
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
              <tr v-for="(value, index) in item.props" :key="index">
                <th><code>{{ value.name }}</code></th>
                <td><v-tag>{{ value.type }}</v-tag></td>
                <td>{{ value.values }}</td>
                <td>{{ value.default }}</td>
                <td>{{ value.description }}</td>
              </tr>
            </tbody>
          </table>
        </v-tab>
        <v-tab label="Events" v-if="item.events">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Parameters</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in item.events" :key="index">
                <th><code>{{ value.name }}</code></th>
                <td>{{ value.description }}</td>
                <td><v-tag>{{ value.parameters }}</v-tag></td>
              </tr>
            </tbody>
          </table>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>