<script>
import { VSidebar, VButton, VSwitch, VField } from '@pathscale/vue3-ui'
import { reactive } from 'vue'

export default {
  name: 'DevShowcaseSidebar',
  components: { VSidebar, VButton, VSwitch, VField },
  setup(props) {
    const state = reactive({
      state: true,
      overlay: false,
      reduced: false
    })

    function close() {
      state.open = false
    }

    return { state, close }
  }
}
</script>

<template>
  <v-field>
    <v-switch v-model="state.open" type="is-dark">
      Open
    </v-switch>
    <v-switch v-model="state.overlay" type="is-dark">
      Overlay
    </v-switch>
    <v-switch v-model="state.reduced" type="is-dark">
      Reduced
    </v-switch>
  </v-field>

  <v-sidebar :open="state.open" type="is-light" fullheight :reduce="state.reduced" :overlay="state.overlay" @close="close" position="fixed">
    <section class="section px-1">
      <v-button tag="a" @click="close" type="is-text" class="is-pulled-right">
        &#x274C;
      </v-button>
    </section>
    <section class="section py-2">
      <a v-if="state.reduced">
        H...
      </a>
      <a v-else>
        Home
      </a>
    </section>
    <section class="section py-2">
      <a v-if="state.reduced">
        S...
      </a>
      <a v-else>
        Services
      </a>
    </section>
    <section class="section py-2">
      <a v-if="state.reduced">
        C...
      </a>
      <a v-else>
        Contact
      </a>
    </section>
  </v-sidebar>
</template>

<style>
.button.is-text {
    text-decoration: none;
    outline: none;
}
</style>
