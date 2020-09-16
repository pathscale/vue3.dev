<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";

const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput },
  setup() {
    const intl = useI18n();
    return { intl }
  }
}
export default Component;
</script>

<template>
  <section class="hero is-fullheight section">
    <div class="hero-body pt-4 is-aligned-start">
      <div class="container">
        <v-columns hcentered>
          <v-column class="is-one-third">
            <h1 class="title pb-6">
              Forgot Password?
            </h1>
            <p class="subtitle">
              Setup Your New Password
            </p>
            <v-field class="pb-2">
              <v-input name="password" size="is-medium" placeholder="Enter New Password" color="is-black" />
            </v-field>
            <v-field class="pb-2">
              <v-input name="confirm" size="is-medium" placeholder="Confirm New Password" color="is-black" />
            </v-field>
            <v-button type="is-black" size="is-large" class="is-100">
              Set New Password
            </v-button>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>