<script>
import { ref } from 'vue'
import { VTabs, VTab /* , VButton */ } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTabs',
  components: { VTabs, VTab /* , VButton */ },
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  }
}
</script>

<template>
  <v-tabs v-model="activeTab" type="is-boxed">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
  </v-tabs>

  <v-tabs v-model="activeTab" type="is-toggle">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
  </v-tabs>

  <v-tabs v-model="activeTab" type="is-toggle-rounded">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
  </v-tabs>
</template>
