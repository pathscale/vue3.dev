<script>
import { createState, useState } from '@pathscale/appstate-fast'
import { VButton } from '@pathscale/vue3-ui'

export default {
  name: 'AppstateShowcase',
  components: { VButton },
  setup() {
    const state = createState({
      counter: 0
    })
    const counterState = useState(state)

    const incrementCounter = () => {
      counterState.value = {
        counter: counterState.value.counter + 1
      }
    }

    const decrementCounter = () => {
      counterState.value = {
        counter: counterState.value.counter - 1
      }
    }

    return { state, counterState, incrementCounter, decrementCounter }
  }
}
</script>

<template>
  <div>
    <v-button @click="decrementCounter">
      -
    </v-button>
    Counter: {{ counterState.counter }}
    <v-button @click="incrementCounter">
      +
    </v-button>
  </div>
</template>
