<script>
import { VColumn, VColumns } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseColumns",
  components: { VColumns, VColumn },
};
</script>

<template>
  <v-columns vcentered>
    <v-column>
      <p class="has-background-link has-text-white px-4 py-4">
        Vertical Alignment
      </p>
    </v-column>
    <v-column>
      <p class="has-background-warning has-text-white px-4 py-4" style="height: 100px;">
        Vertical Alignment
      </p>
    </v-column>
  </v-columns>
  <v-columns hcentered>
    <v-column size="is-4">
      <p class="has-background-success has-text-white px-4 py-4">
        Horizontal Alignment
      </p>
    </v-column>
  </v-columns>
</template>
