const path = require("path");

const extensions = [".ts", ".mjs", ".js", ".vue", ".json"];
const babelConfig = (api) => {
	api.cache.invalidate(() => process.env.NODE_ENV === "production");
	const plugins = [
		[
			"babel-plugin-module-resolver",
			{
				extensions,
				alias: {
					"~": path.resolve("src").replaceAll("\\", "/"),
					vue: "@vue/runtime-dom",
				},
			},
		],
	];
	return { plugins };
};

module.exports = babelConfig;
