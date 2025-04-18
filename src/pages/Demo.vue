<script>
import {
  VBreadcrumb,
  VBreadcrumbItem,
  VColumn,
  VColumns,
} from "@pathscale/vue3-ui";

export default {
  name: "Demo",
  components: {
    VBreadcrumb,
    VBreadcrumbItem,
    VColumn,
    VColumns,
  },
};
</script>

<template>
  <section class="has-background-white pt-6">
    <v-columns class="pt-5 mx-0">
      <v-column size="is-2">
        <div class="pt-6 px-5" />
      </v-column>
      <v-column class="pt-6">
        <v-breadcrumb>
          <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }">
            Home
          </v-breadcrumb-item>
          <v-breadcrumb-item class="is-capitalized" active>
            Demo
          </v-breadcrumb-item>
        </v-breadcrumb>
        <br />

        <section class="hero is-fullheight">
          <div class="subtitle">
            Hah! I bet you expected some fancy demo, but actually all of vue3.dev is built on vue3-ui,
            including the samples.
            <br /><br />
            Please go check those out <a href="https://vue3.dev/">@vue3-ui</a>.
          </div>
        </section>
      </v-column>
    </v-columns>
  </section>
</template>
