<script>
import { VButton, VField } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseField",
  components: { VField, VButton },
};
</script>

<template>
  <v-field>
    <v-field grouped class="buttons">
      <v-button type="is-primary">
        Accept
      </v-button>
      <v-button type="is-light">
        Cancel
      </v-button>
    </v-field>
    <v-field grouped class="buttons" position="is-grouped-centered">
      <v-button type="is-primary">
        Accept
      </v-button>
      <v-button type="is-light">
        Cancel
      </v-button>
    </v-field>
    <v-field grouped class="buttons" position="is-grouped-right">
      <v-button type="is-primary">
        Accept
      </v-button>
      <v-button type="is-light">
        Cancel
      </v-button>
    </v-field>
  </v-field>
</template>
