import url from "@rollup/plugin-url";
import purgecss from "rollup-plugin-purgecss";
import styles from "rollup-plugin-styles";
import vue from "rollup-plugin-vue";

export default {
  input: "src/main.js",
  output: {
    assetFileNames: "[name]-[hash][extname]",
  },
  plugins: [
    url({
      include: ["**/*.svg"],
      limit: 0, // Always copy the SVG as a separate file (don't inline base64)
    }),
    vue({ css: false }), // Extract styles from Vue components

    // Extract all imported CSS into a single file (e.g. "styles.css")
    styles({
      mode: ["extract", "styles.css"],
      minimize: true,
    }),

    // Purge unused CSS by scanning Vue and JS files (and HTML) for used classes
    purgecss({
      content: ["./src/**/*.vue", "./src/**/*.js", "./public/index.html"],
      safelist: [
        "html",
        "body",
        "button",
        "input", // Add any classes you want to keep
      ],
    }),
  ],
};
