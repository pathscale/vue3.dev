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
        &lt; Sign In / Sign up
      </v-breadcrumb-item>
    </v-breadcrumb>

    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column class="is-one-third">
            <h1 class="title pb-6">
              Forgot Password?
            </h1>
            <p class="subtitle">
              Enter your login email
            </p>
            <v-field class="pb-2">
              <v-input name="email" size="is-medium" placeholder="Email" color="is-black" />
            </v-field>
            <v-button type="is-black" size="is-large" class="is-100">
              Send Password Reset Link
            </v-button>
            <div class="has-text-right py-3">
              <a class="has-text-primary-dark">
                Forgot Account?
              </a>
            </div>
            <hr />
            <p class="py-3 has-text-centered">
              New to Mach IV Motors?
            </p>
            <v-button type="is-primary" size="is-large" class="is-100 has-text-black">
              Create New Account
            </v-button>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>