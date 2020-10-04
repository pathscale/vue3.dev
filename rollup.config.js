import path from 'path'
import zlib from 'zlib'
import dotenv from 'dotenv'

// import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
// import typescript from '@rollup/plugin-typescript'
import gzip from 'rollup-plugin-gzip'
import styles from 'rollup-plugin-styles'
import html, { makeHtmlAttributes } from '@rollup/plugin-html'
import analyzer from 'rollup-plugin-analyzer'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import compiler from '@ampproject/rollup-plugin-closure-compiler'
import sucrase from '@rollup/plugin-sucrase'
import vue3uiPurge from '@pathscale/rollup-plugin-vue3-ui-css-purge'
import tsickle from '@pathscale/rollup-plugin-tsickle'
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer'

import { string } from 'rollup-plugin-string'

const extensions = ['.ts', '.mjs', '.js', '.vue', '.json']
const env = dotenv.config({ path: path.join(__dirname, '.env') })
const prod = process.env.NODE_ENV === 'production'
const watch = Boolean(process.env.ROLLUP_WATCH) || Boolean(process.env.LIVERELOAD)

const addVersion = fileName => {
  const ver = prod ? env.parsed.VUE_APP_VERSION_NUMBER : new Date().getTime()
  const { dir, ext, base } = path.parse(fileName)
  if (ext === '.html') return fileName
  const filename = base + `?v=${ver}`
  return dir ? `${dir}/${filename}` : filename
}

const template = ({ attributes, files, meta, publicPath, title }) => {
  publicPath = publicPath.startsWith('/') ? publicPath.slice(1) : publicPath

  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName)
      const attrs = makeHtmlAttributes(attributes.script)
      return `<script data-src="${publicPath}${file}"${attrs}></script>`
    })
    .join('\n')

  const links = (files.css || [])
    .map(({ fileName }) => {
      const file = addVersion(fileName)
      const attrs = makeHtmlAttributes(attributes.link)
      return `<link data-href="${publicPath}${file}" rel="stylesheet"${attrs}>`
    })
    .join('\n')

  const metas = meta
    .map(input => {
      const attrs = makeHtmlAttributes(input)
      return `<meta${attrs}>`
    })
    .join('\n')
  const name = 'Vue3-ui'
  const description = 'Very clean Vue3 components styled with love and care. | Vue3-ui'
  const socialTitle = 'Very clean Vue3 components styled with love and care. | Vue3-ui'
  const url = 'https://vue3--dev.b-cdn.net'
  const imageUrl = `${url}/vue3-ui.png`

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
      ${prod ? '"https://vue3--dev.b-cdn.net/"' : ''}
    ];
    /**!
     * PathScale CONFIDENTIAL
     * __
     * [2020] PathScale PTE Ltd
     * All Rights Reserved.
     *
     * NOTICE:  All information contained herein is, and remains the property of PathScale PTE Ltd. The intellectual and technical concepts contained herein are proprietary to PathScale PTE Ltd and may be covered by Singapore and Foreign Patents, patents in process, and are protected by trade secret or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from PathScale PTE Ltd.
     */
    let $__CDN;async function t(t,e){const a=new URL(t,e).href;if(!window.caches)return a;const r=await window.caches.open("v1");let s=await r.match(t);s||(s=await fetch(a,{method:"GET",cache:"no-store"}),await r.put(t,s.clone()));const c=await s.blob();return URL.createObjectURL(c)}async function e(e,a){e.dataset.href&&(e.href&&URL.revokeObjectURL(e.href),e.setAttribute("href",await t(e.dataset.href,a))),e.dataset.src&&(e.src&&URL.revokeObjectURL(e.src),e.setAttribute("src",await t(e.dataset.src,a)))}window.addEventListener("DOMContentLoaded",(async function(){const a=new AbortController,r=$__CDN_LIST.map(t=>async function(t,e){return await fetch(t,{signal:e,cache:"no-store",mode:"no-cors",method:"HEAD",body:null}),t}(t,a.signal));$__CDN=await Promise.race(r),a.abort();const s=Array.from(document.querySelectorAll("[data-src]")),c=Array.from(document.querySelectorAll("[data-href]")),o=s.map(async e=>{const a=e.dataset.src;e.setAttribute("src",await t(a,$__CDN))}),n=c.map(async e=>{const a=e.dataset.href;e.setAttribute("href",await t(a,$__CDN))});await Promise.all(o),await Promise.all(n),new MutationObserver(async t=>{for await(const a of t)if("attributes"===a.type)await e(a.target,$__CDN);else if("childList"===a.type)for await(const t of a.addedNodes)"dataset"in t&&await e(t,$__CDN)}).observe(document,{attributes:!0,attributeFilter:["data-src","data-href"],childList:!0,subtree:!0})}));
    </script>
    ${links}
  </head>
  <body style="display: none;">
    <div id="app"></div>
    ${scripts}
  </body>
</html>`
}

const config = [
  // Bundle
  {
    input: 'src/main.ts',

    output: [
      {
        format: 'iife',
        file: `dist/app.js`,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name][extname]`,
      },
    ],

    plugins: [
      string({
        include: '**/*.txt',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.VUE_APP_VERSION_NUMBER': JSON.stringify(env.parsed.VUE_APP_VERSION_NUMBER),
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),

      json(),

      alias({ entries: { vue: '@vue/runtime-dom' } }),

      resolve({
        dedupe: [
          'vue',
          '@vue/compiler-core',
          '@vue/compiler-dom',
          '@vue/compiler-sfc',
          '@vue/compiler-ssr',
          '@vue/reactivity',
          '@vue/runtime-dom',
          '@vue/runtime-core',
          '@vue/shared',
          'vuex',
        ],
        preferBuiltins: true,
        extensions,
      }),
      commonjs(),

      prod && vue3uiPurge(),
      vue(),

      styles({
        mode: prod ? 'extract' : 'inject',
        url: { hash: `[name][extname]`, publicPath: env.parsed.BASE_URL, inline: true },
        minimize: prod && { preset: ['default', { discardComments: { removeAll: true } }] },
      }),

      image(),

      prod && tsickle(),
      // prod && typescript(),
      // prod && babel({ babelHelpers: 'bundled', extensions, babelrc: true }),
      !prod && sucrase({ exclude: ['**/node_modules/**'], transforms: ['typescript'] }),

      prod &&
        compiler({
          warning_level: 'verbose',
          language_in: 'ECMASCRIPT_NEXT',
          language_out: 'ECMASCRIPT_2018',
          externs: 'externs/localstorage.js',
          jscomp_off: '*',
        }),

      prod &&
        gzip({
          fileName: '.br',
          customCompression: content =>
            zlib.brotliCompressSync(Buffer.from(content), {
              params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 },
            }),
        }),

      html({
        publicPath: env.parsed.BASE_URL,
        title: 'Vue3-ui',
        template,
      }),

      watch &&
        serve({ host: '0.0.0.0', contentBase: 'dist', historyApiFallback: true, port: 5000 }),

      watch && livereload({ watch: 'dist' }),

      prod && analyzer(),
      prod && visualizer(),
    ],
  },
]

export default config
