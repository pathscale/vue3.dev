<script>
import { VBreadcrumb, VBreadcrumbItem } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseBreadcrumb",
  components: { VBreadcrumb, VBreadcrumbItem },
};
</script>

<template>
  <v-breadcrumb size="is-normal">
    <v-breadcrumb-item>
      Home
    </v-breadcrumb-item>
    <v-breadcrumb-item>
      Documentation
    </v-breadcrumb-item>
    <v-breadcrumb-item active>
      Breadcrumb
    </v-breadcrumb-item>
  </v-breadcrumb>

  <v-breadcrumb size="is-medium">
    <v-breadcrumb-item>
      Home
    </v-breadcrumb-item>
    <v-breadcrumb-item>
      Documentation
    </v-breadcrumb-item>
    <v-breadcrumb-item active>
      Breadcrumb
    </v-breadcrumb-item>
  </v-breadcrumb>

  <v-breadcrumb size="is-large">
    <v-breadcrumb-item>
      Home
    </v-breadcrumb-item>
    <v-breadcrumb-item>
      Documentation
    </v-breadcrumb-item>
    <v-breadcrumb-item active>
      Breadcrumb
    </v-breadcrumb-item>
  </v-breadcrumb>
</template>
