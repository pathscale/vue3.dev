<script>
import { VField, VCheckbox } from '@pathscale/vue3-ui'
import { ref } from 'vue'

export default {
  name: 'DevShowcaseCheckbox',
  components: { VField, VCheckbox },
  setup() {
    const value = ref(false)
    function getValue() {
      // Need the `toString` to show `false` when indeterminate
      return value.value.toString()
    }
    return { value, getValue }
  }
}
</script>

<template>
  <v-field>
    <v-checkbox v-model="value">
      Active checkbox
    </v-checkbox>
    <br />
    <v-checkbox indeterminate v-model="value">
      Indeterminate checkbox
    </v-checkbox>
    <br />
    <v-checkbox disabled v-model="value">
      Disabled checkbox
    </v-checkbox>
  </v-field>

  <v-field :message="getValue()" label="Custom values">
    <v-checkbox v-model="value" true-value="YES" false-value="NO">
      Accept?
    </v-checkbox>
  </v-field>
</template>
