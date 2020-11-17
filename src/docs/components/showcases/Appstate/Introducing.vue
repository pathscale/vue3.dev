<script>
import { createState, useState } from '@pathscale/appstate-fast'
import { VButton } from '@pathscale/vue3-ui'

const globalState = createState({
  counter: 0
})

function resetCounter() {
  globalState.value = {
    counter: 0
  }
}

export default {
  name: 'AppstateShowcase',
  components: { VButton },
  setup() {

    const counterState = useState(globalState)

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

    return { counterState, incrementCounter, decrementCounter, resetCounter }
  }
}
</script>

<template>
  <p class="is-size-3">
    Counter: {{ counterState.counter }}
  </p>
  <div class="buttons mt-3">
    <v-button type="is-danger" @click="decrementCounter">
      -
    </v-button>
    <v-button type="is-success" @click="incrementCounter">
      +
    </v-button>
    <v-button type="is-info" @click="resetCounter">
      Reset
    </v-button>
  </div>
</template>
