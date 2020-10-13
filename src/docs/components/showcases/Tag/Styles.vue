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
      <v-tag rounded class="control">
        Rounded tag label
      </v-tag>
    </v-field>
  </section>
</template>
