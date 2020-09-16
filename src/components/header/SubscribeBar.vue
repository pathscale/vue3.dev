<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { ref } from 'vue'


const Component = {
  components: { VColumns, VColumn },
  setup() {
    const intl = useI18n();
    const show = ref(true);
    return { intl, show }
  }
}
export default Component;
</script>

<template>
  <div class="has-background-primary-light px-5 py-4 is-inline-flex is-100" v-if="show">
    <u class="has-text-weight-bold">Subscribe us</u>&nbsp;today to get access to VIP contents and a 5% discount for each order etc ...
    <a class="close is-size-5 pr-5 has-text-black" @click="show = false">
      &#9932;
    </a>
  </div>
</template>

<style scoped>
  .close {
    position: absolute;
    right: 0;
    font-weight: bold;
  }
</style>


