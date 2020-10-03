<script>
import { VTag, VField } from '@pathscale/vue3-ui'

const Component = {
  components: { VTag, VField },
}
export default Component;
</script>
<template>
  <section>
    <v-field grouped group-multiline>
      <v-tag class="control" type="is-primary" closable attached>
        Primary
      </v-tag>
      <v-tag class="control" type="is-link" closable>
        Link
      </v-tag>
      <v-tag class="control" type="is-info">
        Info
      </v-tag>
      <v-tag class="control" type="is-success">
        Success
      </v-tag>
      <v-tag class="control" type="is-warning">
        Warning
      </v-tag>
      <v-tag class="control" type="is-danger">
        Danger
      </v-tag>
      <v-tag class="control" disabled>
        Disabled
      </v-tag>
      <v-tag rounded class="control">
        Rounded tag label 
      </v-tag>
      <v-tag class="control" type="is-dark">
        Default
      </v-tag>
      <v-tag class="control" type="is-primary" size="is-medium">
        Medium
      </v-tag>
      <v-tag class="control" type="is-info" size="is-large">
        Large
      </v-tag>
    </v-field>
  </section>
</template>
