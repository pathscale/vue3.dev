const api = [
	{
		title: "VIcon",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Icon/Icon.vue",
		props: [
			{
				name: "name",
				description: "icon name",
				type: "String",
				required: true,
			},
			{
				name: "src",
				description: "path to the .svg icon (required once)",
				type: "String",
				required: true,
			},
			{
				name: "bundle",
				description: "bundle name where you want the icon be exported",
				type: "String",
				required: true,
			},
			{
				name: "size",
				description: "The icon comes in 4 different sizes",
				type: "String",
				values: "is-small, is-normal, is-medium, is-large",
			},
			{
				name: "fill",
				description: "Define the color used to paint the svg element",
				type: "String",
			},
			{
				name: "custom-class",
				description: "CSS classes to be applied on svg element",
				type: "String",
			},
			{
				name: "custom-size",
				description: "Size to be applied on svg element",
				type: "String",
			},
			{
				name: "cache-version",
				description: "Version of the icon cache",
				type: "String",
				default: "1.0.0",
			},
		],
	},
];

export default api;
