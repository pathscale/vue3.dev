<script>
import { VColumn, VColumns } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseColumns",
	components: { VColumns, VColumn },
};
</script>

<template>
  <v-columns>
    <v-column>
      <p class="has-background-link has-text-white px-4 py-4">
        First Column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-success has-text-white px-4 py-4">
        Second Column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-primary has-text-white px-4 py-4">
        Third Column
      </p>
    </v-column>
  </v-columns>
</template>
