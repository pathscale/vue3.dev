<script>
import { VDropdown, VDropdownItem, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseDropdown',
  components: { VDropdown, VDropdownItem, VButton }
}
</script>

<template>
  <v-dropdown hoverable>
    <template #trigger>
      <v-button type="is-info">
        Hover me
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
