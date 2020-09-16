<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem, VCheckbox} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { reactive } from 'vue'

import {  ProductCard } from "../components"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, ProductCard, VMenu, VMenuList, VMenuItem, VCheckbox},
  setup() {
    const intl = useI18n();
    const state = reactive({
      items: [
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
        {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stars: 4,
          price: 250,
          shipping: 35,
        },
      ],
      categories: ['All Categories', 'Motobike Parts', 'Car Parts', 'Category 3', 'Category 4', 'Category 5', 'Category 6'],
      conditions: ['All Conditions', 'New', 'Old', 'Special Condition'],
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
        All Products
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-white py-4 px-4 is-absolute" style="z-index: 1">
          Show Cases
        </h1>
        <div class="show-case-img">
          <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
        </div>
        <h1 class="title py-4 px-4">
          Our Products
        </h1>
        <v-columns hcentered>
          <v-column size="is-3">
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="has-text-weight-bold is-size-4">
                Product Filter
              </h1>
              <v-menu>
                <v-menu-list>
                  <v-menu-item class="is-size-6" expanded>
                    <template #label="props">
                      Category({{ state.categories.length }})
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox class="is-aligned-center is-flex py-1" v-for="category in state.categories" :key="category">
                      <div class="is-inline-flex">
                        <p class="mx-2 is-flex-none">
                          {{ category }}
                        </p>
                      </div>
                    </v-checkbox>
                  </v-menu-item>
                  <v-menu-item class="is-size-6" expanded>
                    <template #label="props">
                      Condition({{ state.conditions.length }})
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox class="is-aligned-center is-flex py-1" v-for="condition in state.conditions" :key="condition">
                      <div class="is-inline-flex">
                        <p class="mx-2 is-flex-none">
                          {{ condition }}
                        </p>
                      </div>
                    </v-checkbox>
                  </v-menu-item>
                  <v-menu-item class="is-size-6">
                    <template #label="props">
                      Make
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox>
                      Make
                    </v-checkbox>
                  </v-menu-item>
                  <v-menu-item class="is-size-6">
                    <template #label="props">
                      Model
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox>
                      Model
                    </v-checkbox>
                  </v-menu-item>
                  <v-menu-item class="is-size-6">
                    <template #label="props">
                      Year
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox>
                      Year
                    </v-checkbox>
                  </v-menu-item>
                  <v-menu-item class="is-size-6">
                    <template #label="props">
                      Rating
                      <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                    </template>
                    <v-checkbox>
                      Rating
                    </v-checkbox>
                  </v-menu-item>
                </v-menu-list>
              </v-menu>
            </div>
          </v-column>
          <v-column size="is-9">
            <div class="is-inline-flex is-aligned-center is-justified-between is-100">
              <v-input name="search" has-icons-right right-icon="&#128269;" size="is-medium" placeholder="Search keyword" class="has-white-black has-background-grey-lighter" />
              <div class="has-text-primary ml-2">
                Clear All Search & Filters
              </div>
            </div>
            <v-columns multiline>
              <v-column size="is-one-quarter" v-for="(item, index) in state.items" :key="index">
                <product-card class="my-2"
                              :title="item.title"
                              :stars="item.stars"
                              :price="item.price"
                              :shipping="item.shipping"
                              @addToCart="emit('addToCart')" />
              </v-column>
            </v-columns>
          </v-column>
        </v-columns>
        <hr />
        <div class="is-inline-flex is-aligned-center is-justified-between is-100">
          <h1 class="title px-4">
            Recommended for you
          </h1>
          <a class="has-text-primary">
            Explore >
          </a>
        </div>
        <v-columns>
          <v-column>
            <v-columns multiline>
              <v-column size="is-one-quarter" v-for="(item, index) in state.items.slice(4)" :key="index">
                <product-card class="my-2"
                              :title="item.title"
                              :stars="item.stars"
                              :price="item.price"
                              :shipping="item.shipping"
                              @addToCart="emit('addToCart')" />
              </v-column>
            </v-columns>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>


 <style scoped>
  img {
    width: 100%;
    filter: brightness(65%);
  }

  .show-case-img {
      height: 225px;
      overflow: hidden;
  }
</style>