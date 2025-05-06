/// <reference types="bun-types" />

await Bun.build({
  entrypoints: ["./cdn/benchie.js"],
  outdir: "./cdn",
  minify: true,
  target: "browser",
  naming: "[dir]/[name].min.[ext]",
});

console.log("✅ benchie.min.js built using Bun");

export {};
