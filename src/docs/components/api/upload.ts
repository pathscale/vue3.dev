const api = [
	{
		title: "VUpload",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Upload/Upload.vue",
		props: [
			{
				name: "v-model",
				description: "Binding value",
				type: "File, Array",
			},
			{
				name: "accept",
				description: "Same as native   accept",
				type: "Boolean",
			},
			{
				name: "multiple",
				description: "Upload multiple files",
				type: "Boolean",
			},
			{
				name: "disabled",
				description: "Disabled input",
				type: "Boolean",
			},
			{
				name: "dragDrop",
				description: "Support drag and drop",
				type: "Boolean",
			},
			{
				name: "boxed",
				description: "Boxed block style",
				type: "Boolean",
			},
			{
				name: "size",
				description: "The file input comes in 4 different sizes",
				type: "String",
				values: "is-small, is-normal, is-medium, is-large",
				default: "is-normal",
			},
			{
				name: "type",
				description: "File input color",
				type: "String",
				values:
					"is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...",
			},
			{
				name: "centered",
				description: "Display centered",
				type: "Boolean",
			},
			{
				name: "right",
				description: "Display right",
				type: "Boolean",
			},
			{
				name: "expanded",
				description: "Display full width",
				type: "Boolean",
			},
			{
				name: "Any native attribute",
			},
		],
		slots: [
			{
				name: "label",
				description: "File label",
			},
		],
		events: [
			{
				name: "[any].native",
				description: "Listen to any event using this syntax, e.g click.native",
				parameters: "event: $event",
			},
		],
	},
];

export default api;
