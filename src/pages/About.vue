<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem },
  setup() {
    const intl = useI18n();
    return { intl }
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
        About Us
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          About Us
        </h1>
        <v-columns hcentered>
          <v-column class="is-7">
            Mach IV Motors, LLC is a small motorcycle restoration business in Wisconsin. 
            We restore classic Japanese, European and American motorcycles.  
            
            <br /><br />

            We also stock various NOS and used parts for classic bikes.
            We currently have over 10,000 NOS parts in inventory, used parts change each week.

            <br /><br />

            We are always looking for new projects, so if you have a bike or even a whole
            collection please check out our contact section and let us know what you                           
            have! Our NOS parts inventory could always use refreshing as well.
          </v-column>
          <v-column size="is-2" />
          <v-column>
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="subtitle is-size-4">
                Contact Us
              </h1>
              <div class="is-inline-flex is-aligned-center">
                <i class="icon icon-phone is-medium has-text-grey" />
                <p class="ml-2 py-2 has-text-primary-dark">
                  920.202.2201
                </p>
              </div>
              <br />
              <div class="is-inline-flex is-aligned-center">
                <i class="icon icon-fax is-medium has-text-grey" />
                <p class="ml-2 py-2 has-text-primary-dark">
                  920.257.4370
                </p>
              </div>
              <br />
              <div class="is-inline-flex is-aligned-center">
                <i class="icon icon-email is-medium has-text-grey" />
                <p class="ml-2 py-2 has-text-primary-dark">
                  kara@mach4motors.com
                </p>
              </div>
            </div>
          </v-column>
        </v-columns>
        <v-columns>
          <v-column>
            <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
          </v-column>
          <v-column>
            <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
          </v-column>
        </v-columns>
        <v-columns>
          <v-column>
            <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
          </v-column>
          <v-column>
            <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
          </v-column>
          <v-column>
            <img src="http://www.mach4motors.com/_/rsrc/1389820088684/home/CL_360.jpg" />
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>