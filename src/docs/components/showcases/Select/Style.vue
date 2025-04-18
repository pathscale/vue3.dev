<script>
import { VField, VSelect } from "@pathscale/vue3-ui";
import { ref } from "vue";

export default {
  name: "DevShowcaseSelect",
  components: { VField, VSelect },
  setup() {
    const selected = ref(null);
    return { selected };
  },
};
</script>

<template>
  <v-field label="Rounded">
    <v-select v-model="selected" placeholder="warning" rounded>
      <option value="1">
        Option 1
      </option>
      <option value="2">
        Option 2
      </option>
    </v-select>
  </v-field>

  <v-field label="Expanded">
    <v-select v-model="selected" color="is-danger" placeholder="danger" expanded>
      <option value="1">
        Option 1
      </option>
      <option value="2">
        Option 2
      </option>
    </v-select>
  </v-field>
</template>
