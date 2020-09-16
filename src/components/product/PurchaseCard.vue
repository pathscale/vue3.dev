<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton } from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { useRouter} from "vue-router"

const Component = {
  components: { VColumns, VColumn, VCard, VCardHeader, VCardContent, VCardImage, VButton },
  props: ['title', 'status'],
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
      <img class="is-100" src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg?height=179&width=320" alt="Placeholder image" />
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
      <p class="is-size-7 has-text-success">
        {{ status }}
      </p>
      <v-columns vcentered gapless multiline>
        <v-column>
          <a>
            Rate Product
          </a>
        </v-column>
        <v-column class="has-text-right">
          <v-button type="is-primary" class="is-size-7 px-3" outlined>
            <i class="icon icon-restore has-text-primary" /> 
            <p>Order History</p>
          </v-button>
        </v-column>
      </v-columns>
    </v-card-content>
  </v-card>
</template>
