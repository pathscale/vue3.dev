<script>
import { VSidebar, VButton, VSwitch, VField, VMenu, VMenuList, VMenuItem } from '@pathscale/vue3-ui'
import { reactive } from 'vue'

export default {
  name: 'DevShowcaseSidebar',
  components: { VSidebar, VButton, VSwitch, VField, VMenu, VMenuList, VMenuItem },
  setup(props) {
    const state = reactive({
      state: true,
      overlay: false,
      reduced: false,
    })

    function close() {
      state.open = false
      state.overlay = false
      state.reduced = false
    }

    return { state, close }
  },
}
</script>

<template>
  <v-field>
    <v-switch v-model="state.open" type="is-dark">
      Open
    </v-switch>
    <v-switch v-show="state.open" v-model="state.overlay" type="is-dark">
      Overlay
    </v-switch>
    <v-switch v-show="state.open" v-model="state.reduced" type="is-dark">
      Reduced
    </v-switch>
  </v-field>

  <v-sidebar
    :open="state.open"
    type="is-light"
    fullheight
    :reduce="state.reduced"
    :overlay="state.overlay"
    position="fixed"
    @close="close">
    <section class="section px-1">
      <v-button tag="a" type="is-text" class="is-pulled-right" @click="close">
        &#x274C;
      </v-button>
    </section>
    <section class="section py-2">
      <v-menu>
        <v-menu-list>
          <v-menu-item :label="state.reduced ? '' : 'Home'" icon="&#x1F3E0;" />
          <v-menu-item :label="state.reduced ? '' : 'Contact'" icon="&#x1F4DE;" />
          <v-menu-item :label="state.reduced ? '' : 'Services'" icon="&#9877;" />
        </v-menu-list>
      </v-menu>
    </section>
  </v-sidebar>
</template>

<style>
.button.is-text {
  text-decoration: none;
  outline: none;
}
</style>
