const api = [
	{
		title: "VCalendar",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Calendar/Calendar.vue",
		props: [
			{
				name: "v-model",
				description: "Binding value",
				type: "Date, Array",
			},
			{
				name: "type",
				description: "Bulma Calendar Type: date|time|datetime",
				type: "String",
			},
			{
				name: "clearable",
				description: "Date / Time is clearable",
				type: "Boolean",
			},
			{
				name: "dialog",
				description: "Display Mode: Dialog",
				type: "Boolean",
			},
			{
				name: "inline",
				description: "Display Mode: Inline",
				type: "Boolean",
			},
			{
				name: "range",
				description: "Range Selection instead of Single Date",
				type: "Boolean",
			},
			{
				name: "options",
				description: "JS Object with regular Bulma Calendar Options",
				type: "Object",
			},
		],
		events: [
			{
				name: "select",
				description:
					"Triggered when start / end date is selected, but not yet validated and saved",
				parameters: "[date, date]",
			},
		],
	},
];

export default api;
