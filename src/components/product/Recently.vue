<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { reactive } from 'vue'

import ProductCard from "./ProductCard.vue"

const Component = {
components: { VColumns, VColumn, ProductCard },
  emits: ['addToCart'],
  setup(props, { emit }) {
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
        }
      ]
    })
    return { intl, state, emit }
  }
}
export default Component;
</script>
<template>
  <div>
    <h1 class="has-text-weight-bold is-size-5">
      Your recently viewed items
    </h1>
    <product-card v-for="(item, index) in state.items" :key="index" class="my-2"
                  :title="item.title"
                  :stars="item.stars"
                  :price="item.price"
                  :shipping="item.shipping"
                  @addToCart="emit('addToCart')" />
  </div>
</template>

