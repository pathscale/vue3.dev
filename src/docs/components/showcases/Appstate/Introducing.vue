<script>
import { VButton } from '@pathscale/vue3-ui'
import { watchEffect } from 'vue'
import { useState, createState } from '@pathscale/appstate-fast'

const globalState = createState({ count: 0, memory: 0, times: 0 })

export default {
  name: 'AppstateShowcase',
  components: { VButton },
  setup() {
    const state = useState(globalState)
    watchEffect(() => {

      console.log('Called when memory changes its value', state.memory.value)
      state.times.set(p => p + 1)
    })

    const resetCounter = () => {
      state.memory.set(state.count.value)
      state.count.set(0)
    }

    const incrementCounter = () => {
      state.count.set(p => p + 1)
    }
    const decrementCounter = () => {
      state.count.set(p => p - 1)
    }
    return { incrementCounter, decrementCounter, state, resetCounter }
  }
}
</script>

<template>
  <p class="is-size-3">
    Counter: {{ state.count }}
  </p>
  <p class="is-size-6">
    Memory: {{ state.memory }}
  </p>
  <p class="is-size-6">
    Memory changes: {{ state.times }} times
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
