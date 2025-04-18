<script>
import { VButton, VDropdown, VDropdownItem } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseDropdown",
	components: { VDropdown, VDropdownItem, VButton },
};
</script>

<template>
  <v-dropdown>
    <template #trigger>
      <v-button type="is-success">
        Click me
      </v-button>
    </template>
    <v-dropdown-item> Blue </v-dropdown-item>
    <v-dropdown-item> Green </v-dropdown-item>
  </v-dropdown>
</template>
