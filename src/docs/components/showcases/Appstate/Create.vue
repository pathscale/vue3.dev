<script>
import { createState, useState } from '@pathscale/appstate-fast'

export default {
  name: 'AppstateShowcase',
  setup() {
    const state = createState({
      counter: 0
    })
    const counterState = useState(state)
    return { state, counterState }
  }
}
</script>

<template>
  <div>
    Counter: {{ counterState.counter }}
  </div>
</template>
