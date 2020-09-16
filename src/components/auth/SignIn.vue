<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VCard, VCardContent} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VCard, VCardContent },
  emits: ['showSignIn'],
  props: ['show'],
  setup(props, {emit}) {
    const intl = useI18n();
    return { intl, emit }
  }
}
export default Component;
</script>

<template>
  <v-card class="container px-3 py-3 has-background-white auth-card" v-show="show">
    <a class="close is-size-5 pr-5 has-text-black" @click="emit('showSignIn')">
      &#9932;
    </a>
    <v-card-content>
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
    </v-card-content>
  </v-card>
</template>


.<style scoped>
  @media screen and (max-width: 1023px) {
    .auth-card {
      width: 100%;
    }
  }

  .close {
    position: absolute;
    right: 0;
    font-weight: bold;
  }

  .auth-card {
    position: absolute;
    right: 0;
    z-index: 100;
  }
</style>