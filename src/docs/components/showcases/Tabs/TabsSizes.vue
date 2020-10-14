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
  <v-tabs v-model="activeTab" size="is-small">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
    <v-tab label="Thursday" disabled />
  </v-tabs>

  <v-tabs v-model="activeTab" size="is-medium">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
    <v-tab label="Thursday" disabled />
  </v-tabs>

  <v-tabs v-model="activeTab" size="is-large">
    <v-tab label="Monday" />
    <v-tab label="Tuesday" />
    <v-tab label="Wednesday" />
    <v-tab label="Thursday" disabled />
  </v-tabs>
</template>
