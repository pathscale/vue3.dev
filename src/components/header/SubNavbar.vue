<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { useRouter } from "vue-router"

const Component = {
  components: { VColumns, VColumn },
  setup() {
    const intl = useI18n();
    const router = useRouter();
    return { intl, router }
  }
}
export default Component;
</script>

<template>
  <div class="has-background-grey-lighter px-5 py-1 has-border-top">
    <v-columns vcentered gapless>
      <v-column class="is-size-7 is-inline-flex">
        <i class="icon icon-map-marker is-medium has-text-grey-dark" />
        <span>
          <p>
            Deliver to
          </p>
          <p class="has-text-weight-bold">
            Current Location
          </p>
        </span>
      </v-column>
      <v-column class="has-text-centered is-6">
        <v-columns mobile class="has-text-weight-medium">
          <v-column class="is-size-7 is-inline-flex">
            <i class="icon icon-alert-decagram is-medium has-text-grey-dark" />
            <p class="ml-2 is-aligned-center">
              Best Deals
            </p>
          </v-column>
          <v-column class="is-size-7 is-inline-flex">
            <i class="icon icon-gavel is-medium has-text-grey-dark" />
            <p class="ml-2 is-aligned-center">
              Auctions
            </p>
          </v-column>
          <v-column class="is-size-7 is-inline-flex">
            <i class="icon icon-format-list-checks is-medium has-text-grey-dark" />
            <a class="ml-2 is-aligned-center has-text-grey-dark" @click="router.push({
              name: 'orders',
            })">
              Order & Returns
            </a>
          </v-column>
        </v-columns>
      </v-column>
      <v-column class="has-text-right"> 
        <a class="icon icon-facebook is-medium has-text-grey-dark" />
        <a class="icon icon-instagram is-medium has-text-grey-dark mx-2" />
        <a class="icon icon-twitter is-medium has-text-grey-dark" />
      </v-column>
    </v-columns>
  </div>
</template>

<style scoped>
  .has-border-top {
    border-top: 1px solid black;
  }
</style>


