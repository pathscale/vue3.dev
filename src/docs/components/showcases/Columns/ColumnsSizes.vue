<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseColumns',
  components: { VColumns, VColumn }
}
</script>

<template>
  <v-columns>
    <v-column size="is-full">
      <p class="has-background-danger has-text-white px-4 py-4">
        Full width column
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-1">
      <p class="has-background-primary has-text-white px-4 py-4">
        is-1
      </p>
    </v-column>
    <v-column size="is-11">
      <p class="has-background-link has-text-white px-4 py-4">
        is-11
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-2">
      <p class="has-background-info has-text-white px-4 py-4">
        is-2
      </p>
    </v-column>
    <v-column size="is-10">
      <p class="has-background-success has-text-white px-4 py-4">
        is-10
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-3">
      <p class="has-background-primary has-text-white px-4 py-4">
        is-3
      </p>
    </v-column>
    <v-column size="is-9">
      <p class="has-background-danger has-text-white px-4 py-4">
        is-9
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-4">
      <p class="has-background-success has-text-white px-4 py-4">
        is-4
      </p>
    </v-column>
    <v-column size="is-8">
      <p class="has-background-link has-text-white px-4 py-4">
        is-8
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-5">
      <p class="has-background-info has-text-white px-4 py-4">
        is-5
      </p>
    </v-column>
    <v-column size="is-7">
      <p class="has-background-primary has-text-white px-4 py-4">
        is-7
      </p>
    </v-column>
  </v-columns>

  <v-columns>
    <v-column size="is-6">
      <p class="has-background-success has-text-white px-4 py-4">
        is-6
      </p>
    </v-column>
    <v-column size="is-6">
      <p class="has-background-danger has-text-white px-4 py-4">
        is-6
      </p>
    </v-column>
  </v-columns>
</template>
