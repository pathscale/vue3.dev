<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VCard, VCardContent, VCheckbox} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { ref } from 'vue'


const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VCard, VCardContent, VCheckbox },
  emits: ['showSignUp', 'showSignIn'],
  props: ['show'],
  setup(props, {emit}) {
    const intl = useI18n();
    const checkbox = ref(true);
    return { intl, emit, checkbox }
  }
}
export default Component;
</script>

<template>
  <v-card class="container px-3 py-3 has-background-white auth-card" v-show="show">
    <a class="close is-size-5 pr-5 has-text-black" @click="emit('showSignUp')">
      &#9932;
    </a>
    <v-card-content>
      <h1 class="subtitle">
        Sign Up
      </h1>
      <v-field class="pb-2">
        <v-input name="email" size="is-medium" placeholder="Email/SMS" color="is-black" />
      </v-field>
      <v-field class="pb-2">
        <v-input name="password" size="is-medium" placeholder="Password" color="is-black" />
      </v-field>
      <v-field class="pb-2">
        <v-checkbox class="pb-4" required v-model="checkbox" size="is-large">
          I agree with <a>Terms & Conditions</a> and <br /><a>Privacy Policies</a> 
        </v-checkbox>
      </v-field>
      <v-button type="is-black" size="is-large" class="is-100 has-text-centered" :disabled="!checkbox">
        Sign Up
      </v-button>
      <hr />
      <p class="py-3 has-text-centered">
        Already have an account?
      </p>
      <v-button type="is-primary" size="is-large" class="is-100 has-text-black" @click="emit('showSignIn')">
        Sign In
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