const api = [
	{
		title: "VCard",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/Card.vue",
		props: [
			{
				name: "tag",
				description: "Card tag name",
				type: "String",
				values: "div, a, router-link, nuxt-link...",
				default: "div",
			},
		],
	},
	{
		title: "VCardHeader",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/CardHeader.vue",
		props: [
			{
				name: "title",
				description: "Card title",
				type: "String",
			},
			{
				name: "tag",
				description: "Card tag name",
				type: "String",
				values: "div, a, router-link, nuxt-link...",
				default: "header",
			},
		],
	},
	{
		title: "VCardFooter",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/CardFooter.vue",
		props: [
			{
				name: "tag",
				description: "Card tag name",
				type: "String",
				values: "div, a, router-link, nuxt-link...",
				default: "footer",
			},
		],
	},
	{
		title: "VCardContent",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/CardContent.vue",
	},
	{
		title: "VCardImage",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/CardImage.vue",
	},
	{
		title: "VCardFooterItem",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Card/CardFooterItem.vue",
	},
];

export default api;
