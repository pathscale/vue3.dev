<script>
import { VButton, VField, VInput, VSelect } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseField",
  components: { VField, VInput, VButton, VSelect },
};
</script>

<template>
  <v-field>
    <v-field addons>
      <v-input />
      <v-button type="is-info">
        Search
      </v-button>
    </v-field>
    <v-field addons position="has-addons-centered">
      <v-select placeholder="Category">
        <option>New</option>
        <option>Used</option>
      </v-select>
      <v-input placeholder="Product name" />
      <v-button type="is-info">
        Search
      </v-button>
    </v-field>
    <v-field addons position="has-addons-right">
      <v-input placeholder="Your email" />
      <v-button type="is-static">
        @gmail.com
      </v-button>
    </v-field>
  </v-field>
</template>
