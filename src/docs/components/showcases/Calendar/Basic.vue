<script>
import { VCalendar, VField } from "@pathscale/vue3-ui";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min";
import { computed, provide, reactive } from "vue";

import "bulma-calendar/dist/css/bulma-calendar.min.css";

export default {
  name: "DevShowcaseCalendar",
  components: { VField, VCalendar },
  setup() {
    provide("$bulmaCalendar", bulmaCalendar);
    const state = reactive({
      date: [null, null],
      options: {
        dateFormat: "dd.MM.yyyy",
        labelFrom: "From",
        labelTo: "To",
      },
    });

    const displayDate = computed(() => {
      if (!state.date || !state.date[0] || !state.date[1]) {
        return "- n/a -";
      }
      return `${state.date[0]} to ${state.date[1]}`;
    });

    return { state, displayDate };
  },
};
</script>

<template>
	<v-field label="Date">
		<v-calendar v-model="state.date" type="date" :options="state.options" range />
	</v-field>
	<v-field label="Range">
		<div class="field">
			Selected Range: {{ displayDate }}
		</div>
	</v-field>
</template>
