<script>
import { VButton } from '@pathscale/vue3-ui'
import { computed, ref } from 'vue'
// import { createState, useState } from '@pathscale/appstate-fast' // It does not work
import { useState } from '../../../../appstate-fast' // Works

export default {
  name: 'AppstateShowcase',
  components: { VButton },
  setup() {
    const state = useState({ count: 0 });
    const count = computed(() => {
      // eslint-disable-next-line no-console -- ignore
      console.log('I must to be fire on count changes, but I do not')
      return state.count.value
    });

    const countMirror = ref(0);

    const incrementCounter = () => {
      state.count.set(state.count.value + 1);
      countMirror.value = state.count.value
    }
    const decrementCounter = () => {
      state.count.set(state.count.value - 1);
      countMirror.value = state.count.value
    }
    return { incrementCounter, decrementCounter, count, countMirror }
  }
}
</script>

<template>
  <span class="is-size-3">
    Counter: {{ count }} <u class="is-size-7 has-text-grey-light">(It should change just like the one below)<u /></u></span>
  <p class="is-size-3">
    Counter Ref: {{ countMirror }}
  </p>
  <div class="buttons mt-3">
    <v-button type="is-danger" @click="decrementCounter">
      -
    </v-button>
    <v-button type="is-success" @click="incrementCounter">
      +
    </v-button>
  </div>
</template>
