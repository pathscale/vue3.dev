<script>
import { VBreadcrumb, VBreadcrumbItem } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseBreadcrumb",
	components: { VBreadcrumb, VBreadcrumbItem },
};
</script>

<template>
  <v-breadcrumb separator="has-dot-separator">
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

  <v-breadcrumb separator="has-arrow-separator">
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

  <v-breadcrumb separator="has-bullet-separator">
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

  <v-breadcrumb separator="has-succeeds-separator">
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
