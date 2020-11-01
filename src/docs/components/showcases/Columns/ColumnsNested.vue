<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseColumns',
  components: { VColumns, VColumn }
}
</script>

<template>
  <v-columns>
    <v-column size="is-2" class="has-background-warning">
      Sidebar
    </v-column>
    <v-column size="is-10" class="has-background-info">
      <v-columns>
        <v-column class="has-text-white">
          Header
        </v-column>
      </v-columns>
      <v-columns>
        <v-column class="has-background-primary has-text-white">
          Left content
          <div style="height: 200px;" />
        </v-column>
        <v-column class="has-background-success has-text-white">
          Right content
          <div style="height: 200px;" />
        </v-column>
      </v-columns>
    </v-column>
  </v-columns>
</template>
