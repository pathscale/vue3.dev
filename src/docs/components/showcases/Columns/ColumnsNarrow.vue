<script>
import { VColumn, VColumns } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseColumns",
  components: { VColumns, VColumn },
};
</script>

<template>
  <v-columns>
    <v-column narrow>
      <div class="px-4 py-4 has-background-success has-text-white" style="width: 500px;">
        <p class="title is-5 has-text-white">
          Narrow column
        </p>
        This column is 500px wide
      </div>
    </v-column>
    <v-column>
      <div class="has-background-light px-4 py-4">
        <p class="title is-5">
          Flexible column
        </p>
        This column takes all space left
      </div>
    </v-column>
  </v-columns>
</template>
