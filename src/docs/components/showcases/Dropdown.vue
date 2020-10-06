<script>
import { ref } from 'vue'
import { VDropdown, VDropdownItem } from '@pathscale/vue3-ui'

const Component = {
  components: { VDropdown, VDropdownItem },
  setup() {
    const item = ref(null)
    return { item }
  },
}
export default Component
</script>
<template>
  <section>
    <h4 class="is-size-5 mb-4">Dropdown</h4>
    <v-dropdown v-model="item">
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item}} </span>
        </button>
      </template>

      <v-dropdown-item value="Pikachu">Pikachu</v-dropdown-item>
      <v-dropdown-item value="Charmander">Charmander</v-dropdown-item>
      <v-dropdown-item value="Squirtle">Squirtle</v-dropdown-item>
    </v-dropdown>
  </section>
</template>