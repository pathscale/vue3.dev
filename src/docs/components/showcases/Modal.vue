<script>
import { reactive } from 'vue'
import { VButton, VModal, VImage } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseModal',
  components: { VButton, VModal, VImage },
  setup() {
    const state = reactive({
      showModal: false,
      showModalCard: false
    })
    const setShowModal = () => {
      state.showModal = true
    }
    const setShowModalCard = () => {
      state.showModalCard = true
    }
    return { state, setShowModal, setShowModalCard }
  }
}
</script>

<template>
  <div class="buttons">
    <v-button type="is-success" @click="setShowModal">
      Show Modal
    </v-button>
    <v-button type="is-primary" @click="setShowModalCard">
      Show Modal Card
    </v-button>
  </div>

  <v-modal v-model="state.showModal">
    <v-image width="640" height="480" class="has-background-grey" />
  </v-modal>
  <v-modal v-model="state.showModalCard" card>
    <template #title>
      Modal title
    </template>

    <template #content>
      <v-image width="640" height="480" class="has-background-grey" />
    </template>

    <template #footer>
      <v-button type="is-success">
        Save changes
      </v-button>
      <v-button>
        Cancel
      </v-button>
    </template>
  </v-modal>
</template>
