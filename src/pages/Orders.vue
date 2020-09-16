<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { reactive } from 'vue'


import { PurchaseCard } from "../components"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea, PurchaseCard},
  setup() {
    const intl = useI18n();
    const state = reactive({
      items: [
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          status: 'Delivered'
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          status: 'Delivered'
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          status: 'Delivered'
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          status: 'Delivered'
        }
      ]
    });
    return { intl, state }
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
        Orders & Returns
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          Orders & Returns
        </h1>
        <span>
          You can access all your orders related topics as below.
        </span>
        <v-columns class="mt-4" mobile> 
          <v-column class="mx-3 mt-2 has-background-grey-lighter has-text-centered py-6 has-border">
            <router-link :to="{ name: 'home' }" class="is-size-5 has-text-grey-dark">
              Orders History
            </router-link>
          </v-column>
          <v-column class="mx-3 mt-2 has-background-grey-lighter has-text-centered py-6 has-border">
            <router-link :to="{ name: 'home' }" class="is-size-5 has-text-grey-dark">
              Orders Tracking
            </router-link>
          </v-column>
          <v-column class="mx-3 mt-2 has-background-grey-lighter has-text-centered py-6 has-border">
            <router-link :to="{ name: 'itemReturnRequest' }" class="is-size-5 has-text-grey-dark">
              Return an item
            </router-link>
          </v-column>
        </v-columns>
        <hr class="has-background-grey-dark" />
        <hr />
        <div class="is-inline-flex is-aligned-center is-justified-between is-100">
          <h1 class="title px-4">
            Your Recent Purchases
          </h1>
          <a class="has-text-primary">
            See All Purchase History >
          </a>
        </div>
        <v-columns>
          <v-column>
            <v-columns multiline>
              <v-column size="is-one-quarter" v-for="(item, index) in state.items" :key="index">
                <purchase-card class="my-2"
                               :title="item.title"
                               :status="item.status" />
              </v-column>
            </v-columns>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>

<style scoped>
.has-border {
  border: solid darkgray 1px !important;
}
</style>