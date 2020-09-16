<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { reactive } from 'vue'


const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VTextarea},
  setup() {
    const intl = useI18n();
    const state = reactive({
      category: "General Enquiry",
      support: "N/A",
      title: "",
      message: ""
    })
    return { intl, state }
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
        Contact Us
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <h1 class="title">
          Contact Us
        </h1>
        <span>
          Have an enquiry? Send us a message by the form below
        </span>
        <v-columns hcentered>
          <v-column class="is-8">
            <v-columns class="pt-4">
              <v-column>
                <v-field label="Choose a category">
                  <v-select v-model="state.category" expanded>
                    <option>General Enquiry</option>
                    <option>With options</option>
                  </v-select>
                </v-field>
              </v-column>
              <v-column>
                <v-field label="Order needs support">
                  <v-select v-model="state.support" expanded>
                    <option>N/A</option>
                    <option>With options</option>
                  </v-select>
                </v-field>
              </v-column>
            </v-columns>
            <v-field label="Title">
              <v-input v-model="state.title" expanded placeholder="Request for Item-name to be restocked" />
            </v-field>
            <v-field label="Message">
              <v-textarea v-model="state.message" size="is-medium" />
            </v-field>
            <v-columns>
              <v-column class="has-text-centered">
                <v-button type="is-black" class="has-text-centered px-6">
                  Send Message
                </v-button>
              </v-column>
            </v-columns>
          </v-column>
          <v-column size="is-1" />
          <v-column>
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="subtitle is-size-4">
                Or reach out to us at
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
      </div>
    </div>
  </section>
</template>