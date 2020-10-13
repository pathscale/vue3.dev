<script>
import { VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseButton',
  components: { VButton }
}
</script>

<template>
  <div class="buttons">
    <v-button disabled type="is-info">
      Disabled
    </v-button>
    <v-button loading type="is-info">
      Loading
    </v-button>
  </div>
</template>
