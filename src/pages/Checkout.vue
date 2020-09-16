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
        Checkout
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          Check out
        </h1>
        <v-columns hcentered class="mb-6">
          <v-column class="is-9">
            <p class="subtitle is-size-5">
              1. Shipping Address
            </p>
            <v-checkbox class="is-aligned-center is-flex py-2" v-model="state.currrentLocation">
              <div class="is-inline-flex">
                <p class="mx-2 has-text-weight-bold is-flex-none">
                  Current location
                </p>
                <p>
                  Address here, Contact number here
                </p>
              </div>
            </v-checkbox>
            <v-checkbox class="is-aligned-center is-flex py-2">
              <div class="is-inline-flex">
                <p class="mx-2 is-flex-none">
                  Office
                </p>
                <p>
                  Address here, Contact number here
                </p>
              </div>
            </v-checkbox>
            <br />
            <a>+ Add New Address</a>
            <br />
            <v-button type="is-black mt-3">
              Choose Shipping Address
            </v-button>
            <hr />
            <p class="subtitle is-size-5">
              2. Payment Method
            </p>
            <v-checkbox class="is-aligned-center is-flex py-2" v-model="state.currrentLocation">
              <div class="is-inline-flex">
                <p class="mx-2 has-text-white px-1 py-1 has-background-black is-flex-none">
                  VISA
                </p>
                <p>
                  Ending 4563
                </p>
              </div>
            </v-checkbox>
            <v-checkbox class="is-aligned-center is-flex py-2">
              <div class="is-inline-flex">
                <p class="mx-2 has-text-white px-1 py-1 has-background-black is-flex-none">
                  PayPal
                </p>
                <p>
                  account*****@gmail.com
                </p>
              </div>
            </v-checkbox>
            <br />
            <a>+ Add New Payment Method</a>
            <br />
            <v-button type="is-black mt-3">
              Choose Payment Method
            </v-button>
            <hr />
            <p class="subtitle is-size-5">
              3. Items (s) Delivery Review
            </p>
            <v-columns>
              <v-column size="is-7">
                <div v-for="(item, index) in state.items" :key="index">
                  <item :title="item.title" :stock="item.stock" :price="item.price" :quantity="item.quantity" />
                  <hr />
                </div>
              </v-column>
              <v-column>
                Delivery Options
                <v-checkbox class="is-aligned-center is-flex py-2" v-model="state.currrentLocation">
                  <v-columns>
                    <v-column>
                      <div class="is-inline-flex">
                        <p class="mx-2 has-text-weight-bold is-flex-none">
                          Normal Delivery
                        </p>
                        <p>
                          7-10 working days
                        </p>
                      </div>
                      <p class="mx-2">
                        Est. delivery date: 21 June 2020
                      </p>
                    </v-column>
                    <v-column narrow class="has-text-weight-bold has-text-right">
                      $9.00
                    </v-column>
                  </v-columns>
                </v-checkbox>
                <v-checkbox class="is-aligned-center is-flex py-2" v-model="state.currrentLocation">
                  <v-columns>
                    <v-column>
                      <div class="is-inline-flex">
                        <p class="mx-2 has-text-weight-bold is-flex-none">
                          Speed Delivery
                        </p>
                        <p>
                          5-7 working days
                        </p>
                      </div>
                      <p class="mx-2">
                        Est. delivery date: 17 June 2020
                      </p>
                    </v-column>
                    <v-column narrow class="has-text-weight-bold has-text-right">
                      $11.00
                    </v-column>
                  </v-columns>
                </v-checkbox>
                <v-checkbox class="is-aligned-center is-flex py-2" v-model="state.currrentLocation">
                  <v-columns>
                    <v-column>
                      <div class="is-inline-flex">
                        <p class="mx-2 has-text-weight-bold is-flex-none">
                          Express Delivery
                        </p>
                        <p>
                          3-5 working days
                        </p>
                      </div>
                      <p class="mx-2">
                        Est. delivery date: 14 June 2020
                      </p>
                    </v-column>
                    <v-column narrow class="has-text-weight-bold has-text-right">
                      $15.00
                    </v-column>
                  </v-columns>
                </v-checkbox>
              </v-column>
            </v-columns>
          
            By placing your order, you agree to Match IV Motors's <a>privacy policy</a>  and <a>conditions of use.</a> 
            <br />
            <v-button type="is-black mt-3" tag="router-link" :to="{ name: 'order' }">
              Confirm & Order
            </v-button>
          </v-column>
          <v-column>
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="subtitle is-size-4">
                Order Summary
              </h1>
              <div class="is-justified-between">
                <p>
                  2 items
                </p>
                <p class="has-text-danger-dark">
                  $500
                </p>
              </div>
              <div class="is-justified-between">
                <p>
                  Shipping & Handing 
                </p>
                <p>
                  $60
                </p>
              </div>
              <hr class="image has-background-black" />
              <div class="is-justified-between">
                <p>
                  Shipping & Handing 
                </p>
                <p class="has-text-weight-bold has-text-danger-dark">
                  $560
                </p>
              </div>
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>

<style>
  .is-flex-none {
    flex: none;
  }
</style>