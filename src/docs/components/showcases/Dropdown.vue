<script>
import { ref } from 'vue'
import { VDropdown, VDropdownItem, VField, VButton } from '@pathscale/vue3-ui'

const Component = {
  components: { VDropdown, VDropdownItem, VField, VButton },
  setup() {
    const item = ref(null)
    return { item }
  },
}
export default Component
</script>
<template>
  <section>
    <v-field label="Basic dropdown">
      <v-dropdown>
        <template #trigger>
          <v-button type="is-success"> Basic Dropdown </v-button>
        </template>
        <v-dropdown-item> Blue </v-dropdown-item>
        <v-dropdown-item> Green </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Hoverable Dropdown">
      <v-dropdown hoverable>
        <template #trigger>
          <v-button type="is-info">
            Hover me
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Disabled Dropdown">
      <v-dropdown disabled>
        <template #trigger>
          <v-button type="is-link">
            Can't click me
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Left dropdown">
      <v-dropdown position="is-left">
        <template #trigger>
          <v-button type="is-warning">
            Click and see
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Right dropdown">
      <v-dropdown position="is-right">
        <template #trigger>
          <v-button type="is-danger">
            Click and see
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Up dropdown">
      <v-dropdown position="is-up">
        <template #trigger>
          <v-button type="is-primary">
            Everything backwards
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <v-field label="Dropdown with link">
      <v-dropdown>
        <template #trigger>
          <v-button type="is-info">
            Click me
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu" has-link>
          <a href="https://google.com" target="_blank" has-link>This is a link</a>
        </v-dropdown-item>
      </v-dropdown>
    </v-field>

    <V-field label="v-model dropdown">
      <v-dropdown v-model="item">
        <template #trigger>
          <v-button type="is-primary">
            <span v-if="!item">Choose your pokemon</span>
            <span v-else>I choose you, {{ item }} </span>
          </v-button>
        </template>

        <v-dropdown-item value="Pikachu"> Pikachu </v-dropdown-item>
        <v-dropdown-item value="Charmander"> Charmander </v-dropdown-item>
        <v-dropdown-item value="Squirtle"> Squirtle </v-dropdown-item>
      </v-dropdown>
    </V-field>
  </section>
</template>