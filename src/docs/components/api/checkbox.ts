const api = [
	{
		title: "VCheckbox",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Checkbox/Checkbox.vue",
		props: [
			{
				name: "v-model",
				description: "Binding value",
				type: "Boolean",
				required: true,
			},
			{
				name: "native-value",
				description: "Same as native value",
				type: "Boolean",
			},
			{
				name: "indeterminate",
				description: "Same as native indeterminate",
				type: "String",
			},
			{
				name: "type",
				description: "Checkbox color",
				type: "String",
				values:
					"is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...",
			},
			{
				name: "disabled",
				description: "Same as native disabled",
				type: "Boolean",
			},
			{
				name: "required",
				description: "Same as native required",
				type: "Boolean",
			},
			{
				name: "name",
				description: "Same as native name",
				type: "String",
			},
			{
				name: "size",
				description: "Size of the checkbox",
				type: "String",
				values: "is-small, is-medium, is-large",
			},
			{
				name: "true-value",
				description: "Returned value when it's checked",
				type: "Any",
				default: "true",
			},
			{
				name: "false-value",
				description: "Returned value when it's not checked",
				type: "Any",
			},
		],
		events: [
			{
				name: "input",
				description: "Triggers when the value of checkbox is changed",
				parameters: "value: Boolean",
			},
			{
				name: "[any].native",
				description: "Listen to any event using this syntax, e.g click.native",
				parameters: "event: $event",
			},
		],
	},
];

export default api;
