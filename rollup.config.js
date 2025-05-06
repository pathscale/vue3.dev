import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";
// import vue3uiPurge from "@pathscale/rollup-plugin-vue3-ui-css-purge";
import vue3svg from "@pathscale/vue3-svg-icons";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import html, { makeHtmlAttributes } from "@rollup/plugin-html";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import sucrase from "@rollup/plugin-sucrase";
import terser from "@rollup/plugin-terser";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import analyzer from "rollup-plugin-analyzer";
import gzip from "rollup-plugin-gzip";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { string } from "rollup-plugin-string";
import styles from "rollup-plugin-styles";
import { visualizer } from "rollup-plugin-visualizer";

import copy from "rollup-plugin-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = [".ts", ".mjs", ".js", ".vue", ".json"];

const env = dotenv.config({ path: path.join(__dirname, ".env") });
const prod = process.env.NODE_ENV === "production";
const watch =
  Boolean(process.env.ROLLUP_WATCH) || Boolean(process.env.LIVERELOAD);

const aliases = {
  "~": path.resolve("src").replaceAll("\\", "/"),
};

const addVersion = (fileName) => {
  const ver = prod ? env.parsed.VUE_APP_VERSION_NUMBER : Date.now();
  const { dir, ext, base } = path.parse(fileName);
  if (ext === ".html") {
    return fileName;
  }
  const filename = `${base}?v=${ver}`;
  return dir ? `${dir}/${filename}` : filename;
};

const template = ({ attributes, files, meta, publicPath, title }) => {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName);
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script data-src="${publicPath}${file}"${attrs}></script>`;
    })
    .join("\n");

  const links = (files.css || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName);
      const href = `${publicPath}${file}`;
      // It will be replaces by <link rel="stylesheet" href="..."> by Benchie in browser runtime
      return `<meta name="pathscale-cdn" content="tag=link, rel=stylesheet, href=${href}">`;
    })
    .join("\n");

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join("\n");
  const name = "Vue3-ui";
  const description =
    "Very clean Vue3 components styled with love and care to integrate nicely with Bulma CSS | Vue3-ui";
  const socialTitle =
    "Very clean Vue3 components styled with love and care to integrate nicely with Bulma CSS | Vue3-ui";
  const url = "https://vue3.dev";
  const imageUrl = `${url}/vue3-ui.png`;

  return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${metas}
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="canonical" href="${url}">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="es_ES">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${socialTitle}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="${name}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:secure_url" content="${imageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:title" content="${socialTitle}">
    <meta name="twitter:site" content="@PathScale">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="twitter:creator" content="@pathscale">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="preconnect" href="${url}">
    <script>
    const $__CDN_LIST = [
      window.location.origin,
      'https://vue3--dev.b-cdn.net'  // Fallback CDN
    ].filter(url => url && typeof url === 'string' && url.startsWith('http'));
    ${fs.readFileSync("cdn/benchie.min.js", "utf8").trim()}
    </script>
    ${links}
  </head>
  <body style="display: none;">
    <div id="app"></div>
    ${scripts}
  </body>
</html>`;
};
const config = [
  {
    input: "src/main.ts",
    output: [
      {
        format: "iife",
        file: "dist/app.js",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    ],

    plugins: [
      string({
        include: "**/*.txt",
      }),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          "process.env.VUE_APP_VERSION_NUMBER": JSON.stringify(
            env.parsed.VUE_APP_VERSION_NUMBER,
          ),
          __VUE_OPTIONS_API__: "false",
          __VUE_PROD_DEVTOOLS__: "false",
        },
        preventAssignment: true,
      }),
      json(),
      alias({
        entries: [{ find: "vue", replacement: "@vue/runtime-dom" }],
      }),
      resolve({
        dedupe: [
          "vue",
          "@vue/compiler-core",
          "@vue/compiler-dom",
          "@vue/compiler-sfc",
          "@vue/compiler-ssr",
          "@vue/reactivity",
          "@vue/runtime-core",
          "@vue/runtime-dom",
          "@vue/shared",
          "vuex",
        ],
        preferBuiltins: true,
        extensions,
      }),
      commonjs(),
      vue3svg(),
      // prod && vue3uiPurge({ alias: aliases, debug: false }),
      vue(),
      styles({
        mode: prod ? "extract" : "inject",
        url: {
          hash: "[name][extname]",
          publicPath: env.parsed.BASE_URL,
          inline: true,
        },
        minimize: prod && {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      image(),
      sucrase({ exclude: ["**/node_modules/**"], transforms: ["typescript"] }),

      prod && terser({ format: { comments: false } }),
      prod &&
        gzip({
          fileName: ".br",
          customCompression: (content) =>
            zlib.brotliCompressSync(Buffer.from(content), {
              params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 },
            }),
        }),
      html({
        publicPath: env.parsed.BASE_URL,
        title: "Vue3-ui",
        template,
      }),

      watch &&
        serve({
          host: "0.0.0.0",
          contentBase: "dist",
          historyApiFallback: true,
          port: 5000,
        }),

      watch && livereload({ watch: "dist" }),
      prod && analyzer(),
      prod && visualizer(),
      copy({
        targets: [{ src: "public/**/*", dest: "dist/" }],
      }),
    ].filter(Boolean),
  },
];

export default config;
