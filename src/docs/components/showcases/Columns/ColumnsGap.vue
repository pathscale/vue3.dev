<script>
import { VColumn, VColumns } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseColumns",
	components: { VColumns, VColumn },
};
</script>

<template>
  <v-columns gap="is-6">
    <v-column>
      <p class="has-background-link has-text-white px-4 py-4">
        Gap 6
      </p>
    </v-column>
    <v-column>
      <p class="has-background-success has-text-white px-4 py-4">
        Gap 6
      </p>
    </v-column>
    <v-column>
      <p class="has-background-info has-text-white px-4 py-4">
        Gap 6
      </p>
    </v-column>
    <v-column>
      <p class="has-background-primary has-text-white px-4 py-4">
        Gap 6
      </p>
    </v-column>
  </v-columns>

  <v-columns gapless>
    <v-column>
      <p class="has-background-warning has-text-white px-4 py-4">
        Gapless column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-success has-text-white px-4 py-4">
        Gapless column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-info has-text-white px-4 py-4">
        Gapless column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-primary has-text-white px-4 py-4">
        Gapless column
      </p>
    </v-column>
  </v-columns>
</template>
