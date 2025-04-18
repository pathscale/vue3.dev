<script>
import { VIcon, VTab, VTabs, VTag, VTooltip } from "@pathscale/vue3-ui";

import { ref } from "vue";

export default {
	name: "DevAPI",
	components: { VTag, VTab, VTabs, VTooltip, VIcon },
	props: {
		api: Object,
	},
	setup(props) {
		const components = [];
		props.api.forEach(() => {
			components.push(0);
		});
		const tab = ref(components);
		return { tab };
	},
};
</script>

<template>
  <div>
    <div v-for="(item, key) in api" :key="key">
      <div class="is-aligned-center">
        <p class="pb-4 is-size-4 pt-4">
          {{ item.title }}
        </p>
        <a v-if="item.github" class="mx-4" :href="item.github" target="_blank" rel="noopener">
          <v-icon name="github-icon" bundle="icons" />
        </a>
      </div>

      <v-tabs v-model="tab[key]" type="is-boxed">
        <v-tab v-if="item.props" label="Properties">
          <div class="table-container">
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
                    <v-tooltip v-if="value.required" label="required">
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
          </div>
        </v-tab>
        <v-tab v-if="item.events" label="Events">
          <div class="table-container">
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
            <div />
          </div>
        </v-tab>
        <v-tab v-if="item.slots" label="Slots">
          <div class="table-container">
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
          </div>
        </v-tab>
        <v-tab v-if="item.methods" label="Methods">
          <div class="table-container">
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
                    <v-tooltip v-if="value.required" label="required">
                      <code>{{ value.name }}</code>*
                    </v-tooltip>
                    <code v-if="!value.required">{{ value.name }}</code>
                  </th>
                  <td>{{ value.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<style scoped>
.svg-github-icon {
  fill: black;
  height: 28px;
  width: 28px;
}
</style>
