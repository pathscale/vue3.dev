<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { reactive, computed } from 'vue'

import { Recently, Item } from "../components"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea, Recently, Item},
  setup() {
    const intl = useI18n();
    const state = reactive({
      items: [
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stock: 'Only 2 left in stock - order soon!',
          price: 250,
          quantity: 1,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stock: 'Only 2 left in stock - order soon!',
          price: 250,
          quantity: 1,
        }
      ]
    })

    const totalItems = computed(() => {
      let sum = 0;
      state.items.forEach(e => { sum += e.quantity})
      return sum
    });

    const subtotal = computed(() => {
      let sum = 0;
      state.items.forEach(e => { sum += e.price})
      return sum
    });

    const deleteItem = (index) => {
      state.items = state.items.filter((e, i) => i !== index)
    }

    const deleteAll = (value) => {
      state.items = []
    }
    
    return { intl, state , totalItems, subtotal, deleteItem, deleteAll}
  }
}
export default Component;
</script>

<template>
  <section class="hero is-fullheight section">
    <v-breadcrumb>
      <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }">
        Home
      </v-breadcrumb-item>
      <v-breadcrumb-item active>
        My Cart
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          My Cart
        </h1>
        <a @click="deleteAll()">
          Delete All
        </a>
        <v-columns hcentered>
          <v-column size="is-9">
            <hr />
            <div v-for="(item, index) in state.items" :key="index">
              <item :title="item.title" :stock="item.stock" :price="item.price" :quantity="item.quantity" />
              <hr />
            </div>
            <div class="pt-3 is-justified-end">
              <p>Subtotal ({{ state.items.length }} items)</p>
              <p class="has-text-weight-bold pl-3 has-text-danger-dark">
                ${{ subtotal }}
              </p>
            </div>
          </v-column>
          <v-column size="is-3">
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="has-text-weight-bold is-size-4">
                Subtotal
              </h1>
              <div class="is-justified-between pb-6">
                <p>
                  {{ state.items.length }} items
                </p>
                <p class="has-text-weight-bold has-text-danger-dark">
                  ${{ subtotal }}
                </p>
              </div>
              <v-button type="is-black" class="has-text-centered px-6 is-100" size="is-large" tag="router-link" :to="{ name: 'signInCheckout' }">
                <i class="icon icon-cart-arrow-right has-text-white" /> 
                <p>Check Out</p>
              </v-button>
            </div>
            <div class="has-border px-4 py-4 mt-4">
              <recently @addToCart="state.items.push(state.items[0])" />
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>


.<style scoped>
  .has-border {
    border: gray solid 1px;
  }
</style>