<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton, VSelect, VField } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  components: { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton, VSelect, VField },
  props: ['title', 'stock', 'price', 'quantity'],
  emits: ['addToCart'],
  setup(props, { emit }) {
    const intl = useI18n();
    return { intl, emit }
  }
}
export default Component;
</script>
<template>
  <v-columns gapless>
    <v-column class="is-3 mr-3">
      <img class="is-100" src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg?height=179&width=320" />
    </v-column>
    <v-column size="is-7">
      <p class="is-size-5">
        {{ title }}
      </p>
      <p class="is-size-7 has-text-primary">
        {{ stock }}
      </p>
      <div class="is-inline-flex is-aligned-center">
        <p class="pr-3">
          Quantity:
        </p>
        <v-field>
          <v-select :placeholder="`${quantity}`">
            <option selected>
              1
            </option>
            <option>2</option>
          </v-select>
        </v-field>
      </div>
    </v-column>
    <v-column size="is-2 has-text-right is-aligned-between">
      <p class="has-text-weight-bold has-text-danger-dark">
        ${{ price }}
      </p>
      <a class="is-size-7" @click="deleteItem(index)">
        Delete item
      </a>
    </v-column>
  </v-columns>
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


