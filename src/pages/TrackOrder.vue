<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VCheckbox} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { reactive } from 'vue'

import { Item } from "../components"


const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VCheckbox, Item },
  setup() {
    const intl = useI18n();
    const state = reactive({
      currrentLocation: true,
       items: [
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          price: 250,
          quantity: 1,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          price: 250,
          quantity: 1,
        }
      ]
    })
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
        Track Order
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          Thank you for ordering!
        </h1>
        <p class="py-2">
          Your order is confirmed and being proceeded. You can find your order details as below.
        </p>
        <a class="py-2">Order Number: 1991832</a>
        <p class="pt-2 has-text-weight-bold">
          Items
        </p>
        <hr />
        <v-columns hcentered class="mb-6">
          <v-column class="is-9">
            <div v-for="(item, index) in state.items" :key="index">
              <item :title="item.title" :stock="item.stock" :price="item.price" :quantity="item.quantity" />
              <hr />
            </div>
            <p class="pt-2 has-text-weight-bold">
              Delivery Options
            </p>
            <v-columns>
              <v-column>
                <div class="is-inline-flex">
                  <p class="mx-2 has-text-weight-bold is-flex-none">
                    Normal Delivery
                  </p>
                  <p>
                    7-10 working days
                  </p>
                  <p class="mx-2 has-text-grey-light">
                    Est. delivery date: 21 June 2020
                  </p>
                </div>
              </v-column>
              <v-column narrow class="has-text-weight-bold has-text-right">
                $9.00
              </v-column>
            </v-columns>
            <v-column />
            <v-column class="has-text-right px-0">
              <div class="is-inline-flex">
                <p class="px-2">
                  Payment Total
                </p>
                <p class="has-text-weight-bold">
                  $509.00
                </p>
              </div>
              <div class="has-text-grey-light">
                Paid by Visa ending 4563
              </div>
            </v-column>
          </v-column>
          <v-column>
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="subtitle is-size-4">
                Track Your Order
              </h1>
              <ol class="px-5 timeline">
                <li class="has-text-success has-text-weight-bold is-active">
                  <div class="py-3">
                    <p>
                      Order is Being proceeded
                    </p>
                    <p class="has-text-grey has-text-weight-normal">
                      7:24 PM, 13 June 2020
                    </p>
                  </div>
                </li>
                <li class="has-text-grey">
                  <div class="py-3">
                    Order is shipped
                  </div>
                </li>
                <li class="has-text-grey">
                  <div class="py-3">
                    Order is out delivery
                    <v-button disabled class="has-text-black my-4">
                      Track Your Order
                    </v-button>
                  </div>
                </li>
                <li class="has-text-grey">
                  <div class="py-3">
                    Order is delivered
                  </div>
                </li>
                <li class="has-text-grey">
                  <div class="py-3">
                    Rate your order
                  </div>
                </li>
              </ol>
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>

<style>
  ol {
    list-style-type: none;
  }

  .timeline > li {
    position: relative;
    margin: 0;
    padding-bottom: 1em;
    padding-left: 20px;
  }

  .timeline > li:before {
    content: '';
    background-color: gray;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 6px;
    width: 1px;
  }

  .timeline > li:after {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='silver' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    position: absolute;
    left: -6px;
    top: 11px;
    height: 25px;
    width: 25px;
  }

  .is-flex-none {
    flex: none;
  }
</style>