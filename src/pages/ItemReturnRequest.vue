ag<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem, VCheckbox} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { reactive } from "vue"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem, VCheckbox },
  setup() {
    const intl = useI18n();
    const state = reactive({
      items: [
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          order: 158375,
          return: 'Return elegible for 5 mor days',
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          order: 158375,
          return: 'Return elegible for 5 mor days',
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          order: 158375,
          return: 'Return elegible for 5 mor days',
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
      <v-breadcrumb-item tag="router-link" :to="{ name: 'orders' }">
        Orders & Returns
      </v-breadcrumb-item>
      <v-breadcrumb-item active>
        Return Request
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column class="is-7">
            <v-columns gapless>
              <v-column>
                <h1 class="title">
                  Item Return Request
                </h1>
                <span>
                  Need to return your item? You can make a return request here
                </span>
              </v-column>
            </v-columns>
            <p class="subtitle is-size-5">
              1. Select item to return
            </p>
            <div class="my-2">
              <v-checkbox v-for="(item, index) in state.items" :key="index" class="my-2 is-inline-flex is-aligned-center">
                <v-columns class="ml-2">
                  <v-column size="is-2">
                    <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
                  </v-column>
                  <v-column>
                    <p>
                      {{ item.title }}
                    </p>
                    <div class="is-inline-flex my-2">
                      <p class="has-text-primary-dark mr-3">
                        Order No: {{ item.order }}
                      </p>
                      <p>
                        {{ item.return }}
                      </p>
                    </div>
                  </v-column>
                </v-columns>
              </v-checkbox>
              <a>The item I want to return is not listed?</a>
              <br />
              <v-button type="is-black mt-3">
                Select Return Item
              </v-button>
            </div>
            <hr />
            <p class="subtitle is-size-5">
              2. Return Details
            </p>
            <hr />
            <p class="subtitle is-size-5">
              3. Return Confirmation
            </p>
          </v-column>
          <v-column size="is-2" />
          <v-column>
            <h1 class="subtitle is-size-4">
              Other Topics
            </h1>
            <div class="subtitle py-5 px-5 mb-4 has-background-grey-lighter has-border has-text-centered">
              <a class="has-text-grey-dark">Orders History</a>
            </div>
            <div class="subtitle py-5 px-5 has-background-grey-lighter has-border has-text-centered">
              <a class="has-text-grey-dark">Orders Tracking</a>
            </div>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>

<style>
.has-border {
  border: solid darkgray 1px !important;
}
</style>