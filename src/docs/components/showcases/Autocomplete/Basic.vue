<script>
import { VAutocomplete } from '@pathscale/vue3-ui'
import { ref } from 'vue'

export default {
  name: 'DevShowcaseAutocomplete',
  components: { VAutocomplete },
  setup() {
    const items = [
      'Apple',
      'Banana',
      'Orange',
      'Mango',
      'Pear',
      'Peach',
      'Grape',
      'Tangerine',
      'Pineapple',
    ]

    const result = ref('')

    return {
      items,
      result,
    }
  },
}
</script>

<template>
  Selected: {{ result }}
  <v-autocomplete v-model="result" :items="items" />
</template>
