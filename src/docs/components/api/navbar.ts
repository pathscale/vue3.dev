const api = [
	{
		title: "VNavbar",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Navbar/Navbar.vue",
		props: [
			{
				name: "v-model",
				description:
					"Binding value to control the behaviour of the mobile menu programmatically",
				type: "String, Number",
			},
			{
				name: "type",
				description: "Navbar color",
				type: "String",
				values:
					"is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...",
			},
			{
				name: "transparent",
				description:
					"This will remove any hover or active background from the navbar items",
				type: "Boolean",
			},
			{
				name: "fixed-top",
				description: "You can fix the navbar to the top of the page",
				type: "Boolean",
			},
			{
				name: "fixed-bottom",
				description: "You can fix the navbar to the bottom of the page",
				type: "Boolean",
			},
			{
				name: "mobile-burger",
				description: "Display burger icon in mobile",
				type: "Boolean",
				default: "true",
			},
			{
				name: "spaced",
				description:
					"Sets Top and Bottom paddings with 1rem, Left and Right paddings with 2rem",
				type: "Boolean",
			},
			{
				name: "shadow",
				description: "Add a shadow to navbar",
				type: "Boolean",
			},
		],
		slots: [
			{
				name: "brand",
				description: "Brand logo slot",
			},
			{
				name: "start",
				description: "Left items slot",
			},
			{
				name: "end",
				description: "Right items slot",
			},
		],
	},
	{
		title: "VNavbarItem",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Navbar/NavbarItem.vue",
		props: [
			{
				name: "tag",
				description:
					"Sets the type of the component that have to render as navbar-item",
				type: "String",
				values: "a, router-link, div...",
				default: "a",
			},
			{
				name: "active",
				description: "Active style",
				type: "Boolean",
			},
			{
				name: "Any attribute",
				description: "Native or inherited attributes",
				type: " String",
				values: "href, to, ...",
			},
		],
	},
	{
		title: "VNavbarDropdown",
		github:
			"https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Navbar/NavbarDropdown.vue",
		props: [
			{
				name: "label",
				description: "Dropdown menu label",
				type: "Boolean",
			},
			{
				name: "hoverable",
				description: "The dropdown will show up on hover",
				type: "Boolean",
			},
			{
				name: "active",
				description: "Active style",
				type: "Boolean",
			},
			{
				name: "right",
				description: "You can position the dropdown to start from the right",
				type: "Boolean",
			},
			{
				name: "arrowless",
				description: "Hide dropdown's arrow icon",
				type: "Boolean",
			},
			{
				name: "boxed",
				description: "Boxed style",
				type: "Boolean",
			},
			{
				name: "collapsible",
				description: "Collapsible dropdown on mobile",
				type: "Boolean",
				values: "",
			},
		],
		slots: [
			{
				name: "default",
				description: "Menu item body",
			},
			{
				name: "label",
				description: "Dropdown menu custom label",
			},
		],
	},
];

export default api;
