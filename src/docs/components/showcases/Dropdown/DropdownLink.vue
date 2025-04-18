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
      <v-button type="is-info">
        Click me
      </v-button>
    </template>

    <v-dropdown-item value="Pikachu" has-link>
      <a class="px-2 py-2" href="https://google.com" target="_blank" rel="noopener" has-link>This is a link</a>
    </v-dropdown-item>
    <v-dropdown-item value="Pikachu" has-link>
      <a class="px-2 py-2" href="https://google.com" target="_blank" rel="noopener" has-link>This is a link</a>
    </v-dropdown-item>
    <v-dropdown-item value="Pikachu" has-link>
      <a class="px-2 py-2" href="https://google.com" target="_blank" rel="noopener" has-link>This is a link</a>
    </v-dropdown-item>
  </v-dropdown>
</template>
