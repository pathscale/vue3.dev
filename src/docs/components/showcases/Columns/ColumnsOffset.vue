<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseColumns',
  components: { VColumns, VColumn }
}
</script>

<template>
  <v-columns>
    <v-column size="is-5" offset="is-offset-7">
      <p class="has-background-primary has-text-white px-4 py-4">
        is-5, at the end
      </p>
    </v-column>
  </v-columns>
  <v-columns>
    <v-column size="is-4" offset="is-offset-2">
      <p class="has-background-link has-text-white px-4 py-4">
        is-4, pushed 2
      </p>
    </v-column>
  </v-columns>
</template>
