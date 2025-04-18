<script>
import { VButton, VDropdown, VDropdownItem } from "@pathscale/vue3-ui";
import { ref } from "vue";

export default {
	name: "DevShowcaseDropdown",
	components: { VDropdown, VDropdownItem, VButton },
	setup() {
		const item = ref(null);
		return { item };
	},
};
</script>

<template>
  <v-dropdown v-model="item">
    <template #trigger>
      <v-button type="is-primary">
        <span v-if="!item">Choose your pokemon</span>
        <span v-else>I choose you, {{ item }} </span>
      </v-button>
    </template>

    <v-dropdown-item value="Pikachu">
      Pikachu
    </v-dropdown-item>
    <v-dropdown-item value="Charmander">
      Charmander
    </v-dropdown-item>
    <v-dropdown-item value="Squirtle">
      Squirtle
    </v-dropdown-item>
  </v-dropdown>
</template>
