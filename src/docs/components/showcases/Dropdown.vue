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
    <h4 class="is-size-5 mb-4">
      Basic Dropdown
    </h4>
    <v-dropdown v-model="item">
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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

    <h4 class="is-size-5 mb-4 mt-6">
      Hoverable Dropdown
    </h4>
    <v-dropdown v-model="item" hoverable>
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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


    <h4 class="is-size-5 mb-4 mt-6">
      Disabled Dropdown
    </h4>
    <v-dropdown v-model="item" disabled>
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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

    <h4 class="is-size-5 mb-4 mt-6">
      Left dropdown
    </h4>
    <v-dropdown v-model="item" position="is-left">
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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

    <h4 class="is-size-5 mb-4 mt-6">
      Right dropdown
    </h4>
    <v-dropdown v-model="item" position="is-right">
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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

    <h4 class="is-size-5 mb-4 mt-6">
      Up dropdown
    </h4>
    <v-dropdown v-model="item" position="is-up">
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
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


    <h4 class="is-size-5 mb-4 mt-6">
      Dropdown with link
    </h4>
    <v-dropdown>
      <template #trigger>
        <button class="button is-primary">
          <span v-if="!item">Choose your pokemon</span>
          <span v-else>I choose you, {{ item }} </span>
        </button>
      </template>

      <v-dropdown-item value="Pikachu" has-link>
        <a href="https://google.com" target="_blank" has-link>This is a link</a>
      </v-dropdown-item>
    </v-dropdown>
  </section>
</template>