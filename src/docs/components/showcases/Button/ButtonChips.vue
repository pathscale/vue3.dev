<script>
import { VButton } from '@pathscale/vue3-ui'
import { ref } from 'vue'

export default {
  name: 'DevShowcaseButton',
  components: { VButton },
  setup() {
    const isActive = ref(true)

    

    const onClick = () => {
      isActive.value = !isActive.value
    }

    return {
      isActive,
      onClick,
    }
  },
}
</script>

<template>
  <div class="buttons">
    <v-button type="is-info" focused @click="onClick" :inverted="isActive" rounded>
      Click me
    </v-button>
  </div>
</template>
