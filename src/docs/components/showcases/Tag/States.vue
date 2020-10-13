<script>
import { VTag, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTag',
  components: { VTag, VField }
}
</script>

<template>
  <section>
    <v-field grouped group-multiline>
      <v-tag class="control" disabled>
        Disabled
      </v-tag>
    </v-field>
  </section>
</template>
