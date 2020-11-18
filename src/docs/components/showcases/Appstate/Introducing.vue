<script>
import { VButton } from '@pathscale/vue3-ui'
import { watchEffect } from 'vue'
// eslint-disable-next-line import/no-unresolved -- ignore
import { useState, createState } from '@pathscale/appstate-fast'

const globalState = createState({ count: 0, memory: 0 })

export default {
  name: 'AppstateShowcase',
  components: { VButton },
  setup() {
    const state = useState(globalState);
    watchEffect(() => {
      // eslint-disable-next-line no-console -- ignore
      console.log('Memory', state.memory.value)
    })

    const resetCounter = () => {
      state.memory.set(state.count.value);
      state.count.set(0);
    }

    const incrementCounter = () => {
      state.count.set(p => p + 1);
    }
    const decrementCounter = () => {
      state.count.set(p => p - 1);
    }
    return { incrementCounter, decrementCounter, state, resetCounter}
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
