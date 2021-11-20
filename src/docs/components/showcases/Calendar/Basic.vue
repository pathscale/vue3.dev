<script>
import { VField } from '@pathscale/vue3-ui'
import { computed, reactive } from 'vue'
import BulmaCalendar from './src/BulmaCalendar.vue'

export default {
  name: 'DevShowcaseCalendar',
  components: { VField, BulmaCalendar },
  setup() {
    const state = reactive({
      date: [null, null],
      options: {
        dateFormat: 'dd.MM.yyyy',
        labelFrom: 'From',
        labelTo: 'To',
      },
    })

    const displayDate = computed(() => {
      if (!state.date || !state.date[0] || !state.date[1]) return '- n/a -'
      return state.date[0] + ' to ' + state.date[1]
    })

    return { state, displayDate }
  },
}
</script>

<template>
  <v-field label="Date">
    <bulma-calendar type="date" v-model="state.date" :options="state.options" range />
  </v-field>
  <v-field label="Range">
    <div class="field">
      Selected Range: {{ displayDate }}
    </div>
  </v-field>
</template>