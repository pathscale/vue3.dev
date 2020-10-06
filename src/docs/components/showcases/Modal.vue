<script>
import { reactive } from "vue"
import { VButton, VModal } from '@pathscale/vue3-ui'

const Component = {
  components: { VButton, VModal },
  setup() {
    const state = reactive({
      showModal: false,
      showModalCard: false,
    })
    return { state }
  }
}
export default Component;
</script>
<template>
  <section>
    <div class="buttons">
      <v-button type="is-success" @click="state.showModal = true">
        Show Modal
      </v-button>
      <v-button type="is-primary" @click="state.showModalCard = true">
        Show Modal Card
      </v-button>
    </div>

    <v-modal v-model="state.showModal">
      <img width="640" height="480" class="has-background-grey" />
    </v-modal>
    <v-modal v-model="state.showModalCard" card>
      <template #title>
        Modal title
      </template>

      <template #content>
        <img width="640" height="480" class="has-background-grey" />
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
  </section>
</template>
