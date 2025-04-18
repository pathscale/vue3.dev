<script>
import { VButton, VDropdown, VDropdownItem } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseDropdown",
	components: { VDropdown, VDropdownItem, VButton },
};
</script>

<template>
  <v-dropdown class="py-2">
    <template #trigger>
      <v-button type="is-warning">
        Default
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

  <br />

  <v-dropdown position="is-right" class="py-2">
    <template #trigger>
      <v-button type="is-danger">
        Right
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

  <br />

  <v-dropdown position="is-up is-right" class="py-2">
    <template #trigger>
      <v-button type="is-primary">
        Up
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

  <br />

  <v-dropdown position="is-up is-right" class="py-2">
    <template #trigger>
      <v-button type="is-light">
        Right/Up
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
