<script>
import { VAccordion, VField } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseAccordion',
  components: { VAccordion, VField }
}
</script>

<template>
  <v-field>
    <v-accordion header-is-trigger background="#d9dedb">
      <template #header>
        <div class="py-3 px-3">
          Click me
        </div>
      </template>
      <template #content>
        <div class="py-3 px-3">
          Content
        </div>
      </template>
    </v-accordion>
  </v-field>
</template>
