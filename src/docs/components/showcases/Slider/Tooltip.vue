<script>
import { VSlider } from "@pathscale/vue3-ui";
import { ref } from "vue";

export default {
  name: "DevShowcaseSlider",
  components: { VSlider },
  setup() {
    const value = ref(30);
    return {
      value,
    };
  },
};
</script>

<template>
  <v-slider v-model="value" step="1" min="0" max="100" tooltip type="is-success" />

  <v-slider v-model="value" step="1" min="0" max="100" vertical />

  <span>Value: {{ value }}</span>
</template>


