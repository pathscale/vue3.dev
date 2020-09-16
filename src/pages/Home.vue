<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

import { useRouter} from "vue-router"
import { Highlight } from "../components"

const Component = {
  components: { VButton, VColumns, VColumn, Highlight,  VSelect, VField, VInput },
  setup() {
    const intl = useI18n();
    const router = useRouter();
    return { intl, router }
  }
}
export default Component;
</script>
r
<template>
  <section class="hero is-fullheight section">
    <div class="hero-body pt-4" style="flex-grow: 0;">
      <div class="container">
        <router-link class="title has-text-white py-4 px-4 is-absolute" style="z-index: 1" :to="{ name: 'products' }">
          Show Cases
        </router-link>
        <div class="show-case-img" @click="router.push({
          name: 'products'
        })">
          <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
        </div>
        <hr />
        <h1 class="title py-4 px-4">
          Highlights
        </h1>
        <v-columns mobile multiline>
          <v-column class="is-half-touch">
            <highlight />
          </v-column>
          <v-column class="is-half-touch">
            <highlight />
          </v-column>
          <v-column class="is-half-touch">
            <highlight />
          </v-column>
          <v-column class="is-half-touch">
            <highlight />
          </v-column>
        </v-columns>
        <hr />
        <h1 class="title py-4 px-4">
          Product Search
        </h1>
        <v-columns multiline vcentered>
          <v-column size="is-3">
            <v-input name="search" has-icons-right right-icon="&#128269;" size="is-medium" placeholder="Search Keyword" class="has-white-black has-background-grey-lighter" />
          </v-column>
          <v-column class="is-2">
            <v-field>
              <v-select color="is-black" placeholder="Color">
                <option>Select dropdown</option>
                <option>With options</option>
              </v-select>
            </v-field>
          </v-column>
          <v-column class="is-2">
            <v-field>
              <v-select color="is-black" placeholder="Condition">
                <option>Select dropdown</option>
                <option>With options</option>
              </v-select>
            </v-field>
          </v-column>
          <v-column class="is-2">
            <v-field>
              <v-select color="is-black" placeholder="Make">
                <option>Select dropdown</option>
                <option>With options</option>
              </v-select>
            </v-field>
          </v-column>
          <v-column class="is-2">
            <v-field>
              <v-select color="is-black" placeholder="Model">
                <option>Select dropdown</option>
                <option>With options</option>
              </v-select>
            </v-field>
          </v-column>
          <v-column class="is-1">
            <v-field>
              <v-select color="is-black" placeholder="Year">
                <option>Select dropdown</option>
                <option>With options</option>
              </v-select>
            </v-field>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>


.<style scoped>
  @media screen and (max-width: 768px) and (orientation: portrait) {
    .column.is-half-touch {
      flex: none;
      width: 100%;
    }
  }

   img {
    width: 100%;
    filter: brightness(65%);
  }

  .show-case-img {
      height: 225px;
      overflow: hidden;
  }
</style>