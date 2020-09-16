ag<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VMenu, VMenuList, VMenuItem },
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
        FAQs
      </v-breadcrumb-item>
    </v-breadcrumb>
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column class="is-7">
            <v-columns gapless>
              <v-column>
                <h1 class="title">
                  FAQs
                </h1>
              </v-column>
              <v-column>
                <v-input name="search" has-icons-right right-icon="&#128269;" size="is-medium" placeholder="Quick Search" class="has-white-black has-background-grey-lighter" />
              </v-column>
            </v-columns>
            <v-menu>
              <v-menu-list>
                <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border" expanded>
                  <template #label="props">
                    Account & Settings
                    <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                  </template>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4" expanded>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                </v-menu-item>
                <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
                  <template #label="props">
                    Order & Returns
                    <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                  </template>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                </v-menu-item>
                <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
                  <template #label="props">
                    Sales & Products
                    <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                  </template>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                </v-menu-item>
                <v-menu-item class="is-size-5 has-text-weight-bold py-4 has-background-grey-lighter has-border">
                  <template #label="props">
                    Other
                    <i class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
                  </template>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                  <v-menu-item label="How do I change my billing address" class="is-size-6 has-text-weight-bold py-4">
                    Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-menu-item>
                </v-menu-item>
              </v-menu-list>
            </v-menu>
          </v-column>
          <v-column size="is-2" />
          <v-column>
            <div class="has-background-grey-lighter px-4 py-4">
              <h1 class="subtitle is-size-4">
                Need More Help?
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

<style>
.has-border {
  border-top: solid gray 1px !important;
  border-left: solid gray 1px !important;
  border-right: solid gray 1px !important;
  border-radius: 0 !important;
}
</style>