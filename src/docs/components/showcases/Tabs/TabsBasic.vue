<script>
import { ref } from 'vue'
import { VTabs, VTab } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTabs',
  components: { VTabs, VTab },
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  },
}
</script>

<template>
  <v-tabs v-model="activeTab">
    <v-tab label="Monday">
      Monday Content
    </v-tab>
    <v-tab label="Tuesday">
      Tuesday Content
    </v-tab>
    <v-tab label="Wednesday">
      Wednesday Content
    </v-tab>
    <v-tab label="Thursday" disabled />
  </v-tabs>
</template>
