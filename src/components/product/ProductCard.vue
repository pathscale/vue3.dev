<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { useRouter} from "vue-router"

import Stars from "./Stars.vue";

const Component = {
  components: { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton, Stars },
  props: ['title', 'stars', 'price', 'shipping'],
  emits: ['addToCart'],
  setup(props, { emit }) {
    const intl = useI18n();
    const router = useRouter();
    return { intl, emit, router }
  }
}
export default Component;
</script>
<template>
  <v-card>
    <v-card-image>
      <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg?height=179&width=320" alt="Placeholder image" />
    </v-card-image>
    <v-card-content class="py-2 px-2">
      <a class="is-size-7 has-text-black" @click="router.push({
        name: 'product',
        params: {
          id: parseInt(Math.random() * 100)
        }
      })">
        {{ title }}
      </a>
      <stars :stars="stars" size="is-small" />
      <v-columns vcentered gapless multiline>
        <v-column>
          <p class="has-text-weight-bold is-size-6">
            ${{ price }}
          </p>
          <p class="is-size-7">
            + ${{ shipping }} shipping
          </p>
        </v-column>
        <v-column class="has-text-right ml-1">
          <v-button type="is-primary" class="is-size-7 px-3" outlined @click="emit('addToCart')">
            <i class="icon icon-cart-plus has-text-primary" /> 
            <p>Add to Cart</p>
          </v-button>
        </v-column>
      </v-columns>
    </v-card-content>
  </v-card>
</template>

<style scoped>
  img {
    width: 100%;
    filter: brightness(65%);
  }
  .has-shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>


