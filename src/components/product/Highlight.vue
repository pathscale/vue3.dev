<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { useRouter } from "vue-router";

const Component = {
  components: { VColumns, VColumn },
  setup() {
    const intl = useI18n();
    const router = useRouter()
    return { intl, router }
  }
}
export default Component;
</script>
<template>
  <div class="is-relative">
    <v-columns class="is-absolute" mobile style="z-index: 1">
      <v-column>
        <a @click="router.push({
          name: 'products',
        })">
          <p class="title has-text-white is-5 pt-5 pl-3">
            Bike Parts
          </p>
          <p class="has-text-white is-6 pl-3 is-size-7">
            11,540 items
          </p>
        </a>
      </v-column>
      <v-column>
        <a @click="router.push({
          name: 'products',
        })">
          <p class="is-size-6 pt-4 has-text-white has-text-right pr-1 has-text-primary">
            See More >
          </p>
        </a>
      </v-column>
    </v-columns> 
    <v-columns>
      <v-column>
        <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg?height=179&width=320" class="has-shadow" />
      </v-column>
    </v-columns>
  </div>
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


