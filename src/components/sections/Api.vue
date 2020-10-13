<script>
import { VTag, VTab, VTabs, VTooltip } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

import { ref } from 'vue'

export default {
  name: 'DevAPI',
  components: { VTag, VTab, VTabs, VTooltip },
  props: {
    'api': Object
  },
  setup(props) {
    const intl = useI18n()

    const components = []
    props.api.forEach(e => {
      components.push(0)
    })
    const tab = ref(components)
    return { intl, tab }
  }
}
</script>

<template>
  <div>
    <div v-for="(item, key) in api" :key="key">
      <div class="is-aligned-center">
        <p class="pb-4 is-size-4 pt-4">
          {{ item.title }}
        </p>
        <a class="mx-4" v-if="item.github" :href="item.github" target="_blank" rel="noopener">
          <i class="icon icon-github is-medium" />
        </a>
      </div>



      <v-tabs v-model="tab[key]" type="is-boxed">
        <v-tab label="Properties" v-if="item.props">
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
                <th>
                  <v-tooltip label="required" v-if="value.required">
                    <code>{{ value.name }}</code>*
                  </v-tooltip>
                  <code v-if="!value.required">{{ value.name }}</code>
                </th>
                <td><v-tag>{{ value.type }}</v-tag></td>
                <td>{{ value.values || '—' }}</td>
                <td>{{ value.default || '—' }}</td>
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
                <td><v-tag>{{ value.parameters || '—' }}</v-tag></td>
              </tr>
            </tbody>
          </table>
        </v-tab>
        <v-tab label="Slots" v-if="item.slots">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>props</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in item.slots" :key="index">
                <th><code>{{ value.name }}</code></th>
                <td>{{ value.description }}</td>
                <td><v-tag>{{ value.props || '—' }}</v-tag></td>
              </tr>
            </tbody>
          </table>
        </v-tab>
        <v-tab label="Methods" v-if="item.methods">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in item.methods" :key="index">
                <th>
                  <v-tooltip label="required" v-if="value.required">
                    <code>{{ value.name }}</code>*
                  </v-tooltip>
                  <code v-if="!value.required">{{ value.name }}</code>
                </th>
                <td>{{ value.description }}</td>
              </tr>
            </tbody>
          </table>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>
