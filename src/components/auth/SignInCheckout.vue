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
      <v-breadcrumb-item tag="router-link" :to="{ name: 'cart' }">
        &lt; Back to Cart
      </v-breadcrumb-item>
    </v-breadcrumb>

    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column class="is-one-third">
            <h1 class="title pb-6">
              Please sign in to checkout
            </h1>
            <h1 class="subtitle">
              Sign In
            </h1>
            <v-field class="pb-2">
              <v-input name="email" size="is-medium" placeholder="Email/SMS" color="is-black" />
            </v-field>
            <v-field class="pb-2">
              <v-input name="password" size="is-medium" placeholder="Password" color="is-black" />
            </v-field>
            <v-button type="is-black" size="is-large" class="is-100 has-text-centered">
              Sign In
            </v-button>
            <v-columns mobile class="pt-4">
              <v-column class="py-3">
                <a>
                  Forgot Account?
                </a>
              </v-column>
              <v-column class="has-text-right py-3">
                <router-link :to="{ name: 'forgotPassword' }" @click="emit('showSignIn')">
                  Forgot Password?
                </router-link>
              </v-column>
            </v-columns>
            <hr />
            <p class="py-3 has-text-centered">
              New to Mach IV Motors?
            </p>
            <v-button type="is-primary" size="is-large" class="is-100 has-text-black">
              Create New Account
            </v-button>
            <p class="py-3 has-text-centered">
              Or
            </p>
            <v-button type="is-black" size="is-large" class="is-100" outlined tag="router-link" :to="{ name: 'checkout' }">
              Check out as guest
            </v-button>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>