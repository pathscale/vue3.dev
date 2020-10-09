<script>
import { VBreadcrumb, VBreadcrumbItem, VField } from '@pathscale/vue3-ui'

const Component = {
  components: { VBreadcrumb, VBreadcrumbItem, VField }
}

export default Component
</script>
<template>
  <section>
    <v-breadcrumb>
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

    <v-breadcrumb size="is-medium" separator="has-bullet-separator">
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

    <v-breadcrumb size="is-large" separator="has-succeeds-separator">
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
  </section>
</template>
