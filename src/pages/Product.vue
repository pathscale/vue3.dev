<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { reactive } from 'vue'

import { Recently, Item , ProductCard, ProductImages, Stars } from "../components"

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea, Recently, Item, 
  ProductCard, ProductImages, Stars},
  setup() {
    const intl = useI18n();
    const state = reactive({
      product: {
          title: 'Suzuki NOS NEW 57712-28050 Dimmer Switch Knob TC TS TC125 TS400 TS125',
          stock: 'Only 2 left in stock - order soon!',
          price: 250,
          quantity: 1,
          stars: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue odio ut hendrerit varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
          features: ['Mauris in nulla velit. Phasellus scelerisque mollis vestibulum.', 'Mauris in nulla velit. Phasellus scelerisque mollis vestibulum.', 'Mauris in nulla velit. Phasellus scelerisque mollis vestibulum.', 'Mauris in nulla velit. Phasellus scelerisque mollis vestibulum.', 
          'Mauris in nulla velit. Phasellus scelerisque mollis vestibulum.'],
          images: [
            'http://www.mach4motors.com/_/rsrc/1389820173879/home/DSC06890.JPG', 
            'http://www.mach4motors.com/_/rsrc/1389820222190/home/DSC06949.JPG', 
            'http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg', 
            'http://www.mach4motors.com/_/rsrc/1389820173879/home/DSC06890.JPG'
          ]
      }, 
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
      ]
    })

    return { intl, state}
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
      <v-breadcrumb-item>
        Product
      </v-breadcrumb-item>
      <v-breadcrumb-item>
        Category Name
      </v-breadcrumb-item>
      <v-breadcrumb-item active>
        Product Name
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column size="is-9">
            <v-columns>
              <v-column size="is-5">
                <product-images :images="state.product.images" />
              </v-column>
              <v-column>
                <h1 class="title is-size-6">
                  {{ state.product.title }}
                </h1>
                <div class="is-inline-flex">
                  <stars :stars="state.product.stars" />
                  <p class="ml-2">
                    250 ratings
                  </p>
                </div>
                <br />
                <div class="is-100 is-justified-between">
                  <p class="has-text-primary-dark">
                    {{ state.product.stock }}
                  </p>
                  <div class="is-aligned-center">
                    <p class="mr-2">
                      Share Product
                    </p>
                    <a class="icon icon-facebook is-medium has-text-grey-dark" />
                    <a class="icon icon-instagram is-medium has-text-grey-dark mx-2" />
                    <a class="icon icon-twitter is-medium has-text-grey-dark" />
                  </div>
                </div>
                <hr />
                <p class="image has-text-weight-bold">
                  Product Description:
                </p>
                <span>
                  {{ state.product.description }}
                </span>
                <ul>
                  <li v-for="feature in state.product.features" :key="feature">
                    - {{ feature }}
                  </li>
                </ul>
              </v-column>
            </v-columns>
            <hr />
          </v-column>
          <v-column size="is-3">
            <div class="has-background-grey-lighter px-4 py-4">
              <div class="is-inline-flex">
                <div>
                  <i class="icon icon-map-marker has-text-grey-dark" />
                </div>
                <div>
                  <p class="is-size-7 has-text-grey">
                    Deliver to
                  </p>
                  <p class="has-text-weight-bold">
                    3489 Sunny Day Drive, Oklahoma, 74056, United States
                  </p>
                  <a>Edit shipping address</a>
                </div>
              </div>
             
              
              <hr class="has-background-black" />
              <div class="is-inline-flex is-aligned-center py-4">
                <p class="pr-3">
                  Quantity:
                </p>
                <v-field>
                  <v-select placeholder="1">
                    <option selected>
                      1
                    </option>
                    <option>2</option>
                  </v-select>
                </v-field>
              </div>
              <v-button type="is-black" class="is-100 has-text-centered">
                <i class="icon icon-cart-plus has-text-white" /> 
                <p>Add to Cart</p>
              </v-button>
            </div>
          </v-column>
        </v-columns>
        <hr />
        <div class="is-inline-flex is-aligned-center is-justified-between is-100">
          <h1 class="title px-4">
            Similar to this product
          </h1>
          <a class="has-text-primary">
            Explore >
          </a>
        </div>
        <v-columns>
          <v-column>
            <v-columns multiline>
              <v-column size="is-one-quarter" v-for="(item, index) in state.items" :key="index">
                <product-card class="my-2"
                              :title="item.title"
                              :stars="item.stars"
                              :price="item.price"
                              :shipping="item.shipping" />
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
    border: gray solid 1px;
  }
</style>