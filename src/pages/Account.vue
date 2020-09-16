ag<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem, VCheckbox} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { reactive } from 'vue'

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem, VCheckbox },
  setup() {
    const intl = useI18n();
    const state = reactive ({
      email: 'iam80yomillionaire@email.com',
      password: 'password',
      paypal: 'paypalaccount@paypal.com',
      billingAddress: '3414 Oneida St, Chadwicks, Ney York (NY), 13319',
      shippingAddress: '3414 Oneida St, Chadwicks, Ney York (NY), 13319',
      contactNumber: '+12345678910',
      disabledEmail: true,
      disabledPassword: true,
      disabledPaypal: true,
      disabledBillingAddress: true,
      disabledShippingAddress: true,
      disabledContactNumber: true
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
        FAQs
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          Account Settings
        </h1>
        <v-menu>
          <v-menu-list>
            <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border is-grid" expanded>
              <template #label="props">
                Login Details
                <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
              </template>
              <v-columns gapless multiline>
                <v-column size="is-full" class="my-2">
                  <v-columns>
                    <v-column narrow style="width: 150px" class="has-text-weight-bold">
                      Email
                    </v-column>
                    <v-column narrow>
                      <v-field class="is-inline-flex is-aligned-center">
                        <v-input class="ml-2" v-model="state.email" :disabled="state.disabledEmail" />
                      </v-field>
                    </v-column>
                    <a class="has-text-info is-aligned-center" @click="state.disabledEmail = !state.disabledEmail">{{ state.disabledEmail ? 'Edit': 'Save' }}</a>
                  </v-columns>
                </v-column>
                <v-column size="is-full" class="my-2">
                  <v-columns>
                    <v-column narrow style="width: 150px" class="has-text-weight-bold">
                      Password
                    </v-column>
                    <v-column narrow>
                      <v-field class="is-inline-flex is-aligned-center">
                        <v-input class="ml-2" type="password" v-model="state.password" :disabled="state.disabledPassword" />
                      </v-field>
                    </v-column>
                    <a class="has-text-info is-aligned-center" @click="state.disabledPassword = !state.disabledPassword">{{ state.disabledPassword ? 'Edit': 'Save' }}</a>
                  </v-columns>
                </v-column>
                <div class="my-4">
                  <v-checkbox>
                    Remember my login
                  </v-checkbox>
                </div>
              </v-columns>
            </v-menu-item>
            <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
              <template #label="props">
                Payment Settings
                <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
              </template>
              <v-columns gapless multiline>
                <v-column size="is-full" class="my-2">
                  <v-columns>
                    <v-column narrow style="width: 150px" class="has-text-weight-bold">
                      Paypal Account
                    </v-column>
                    <v-column narrow>
                      <v-field class="is-inline-flex is-aligned-center">
                        <v-input class="ml-2" v-model="state.paypal" :disabled="state.disabledPaypal" />
                      </v-field>
                    </v-column>
                    <a class="has-text-info is-aligned-center" @click="state.disabledPaypal = !state.disabledPaypal">{{ state.disabledPaypal ? 'Edit': 'Save' }}</a>
                  </v-columns>
                </v-column>
                <v-column size="is-full" class="my-2">
                  <v-columns>
                    <v-column narrow style="width: 150px" class="has-text-weight-bold">
                      Billing Address
                    </v-column>
                    <v-column narrow>
                      <v-field class="is-inline-flex is-aligned-center">
                        <v-input class="ml-2" v-model="state.billingAddress" :disabled="state.disabledBillingAddress" />
                      </v-field>
                    </v-column>
                    <a class="has-text-info is-aligned-center" @click="state.disabledBillingAddress = !state.disabledBillingAddress">{{ state.disabledBillingAddress ? 'Edit': 'Save' }}</a>
                  </v-columns>
                </v-column>
              </v-columns>
            </v-menu-item>
            <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
              <template #label="props">
                Shipping & Delivery Settings
                <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
              </template>
              
              <v-columns>
                <v-column>
                  <v-field label="Shipping Address">
                    <div class="is-inline-flex">
                      <v-input v-model="state.shippingAddress" :disabled="state.disabledShippingAddress" />
                      <a class="has-text-info is-aligned-center ml-2" @click="state.disabledShippingAddress = !state.disabledShippingAddress">{{ state.disabledShippingAddress ? 'Edit': 'Save' }}</a>
                    </div>
                  </v-field>
                  <v-checkbox>
                    Make default shipping address
                  </v-checkbox>
                  <a class="has-text-info">
                    + Add Shipping Address
                  </a>
                </v-column>
                <v-column>
                  <v-field label="Contact Number">
                    <div class="is-inline-flex">
                      <v-input v-model="state.contactNumber" :disabled="state.disabledContactNumber" />
                      <a class="has-text-info is-aligned-center ml-2" @click="state.disabledContactNumber = !state.disabledContactNumber">{{ state.disabledContactNumber ? 'Edit': 'Save' }}</a>
                    </div>
                  </v-field>
                  <a class="has-text-info">
                    + Add Contact Number
                  </a>
                </v-column>
              </v-columns>
            </v-menu-item>
            <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
              <template #label="props">
                Subscription Plans
                <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
              </template>
            </v-menu-item>
          </v-menu-list>
        </v-menu>
      </div>
    </div>
  </section>
</template>

<style>
.has-border {
  border-top: solid gray 1px !important;
  border-left: solid gray 1px !important;
  border-right: solid gray 1px !important;
  border-radius: 0 !important;
}
</style>