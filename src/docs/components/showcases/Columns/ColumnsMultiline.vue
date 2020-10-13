<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseColumns',
  components: { VColumns, VColumn }
}
</script>

<template>
  <v-columns multiline>
    <v-column size="is-4">
      <p class="has-background-info has-text-white px-4 py-4">
        is-4
      </p>
    </v-column>
    <v-column size="is-3">
      <p class="has-background-primary has-text-white px-4 py-4">
        is-3
      </p>
    </v-column>
    <v-column size="is-5">
      <p class="has-background-link has-text-white px-4 py-4">
        is-5
      </p>
    </v-column>
    <v-column size="is-6">
      <p class="has-background-success has-text-white px-4 py-4">
        is-6
      </p>
    </v-column>
    <v-column size="is-8">
      <p class="has-background-warning has-text-white px-4 py-4">
        is-8
      </p>
    </v-column>
    <v-column size="is-4">
      <p class="has-background-info has-text-white px-4 py-4">
        is-4
      </p>
    </v-column>
    <v-column size="is-2">
      <p class="has-background-link has-text-white px-4 py-4">
        is-2
      </p>
    </v-column>
  </v-columns>
</template>
