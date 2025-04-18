/* eslint-disable import/no-commonjs -- Todo when switch to native ESM */
const showcaseDir = "src/docs/components/showcases";
const rawDir = "src/docs/components/raw";

const path = require("path");
const sh = require("shelljs");

// Change working dir to project root
const root = path.resolve(__dirname, "..");
sh.cd(root);

sh.rm("-rf", rawDir);
sh.cp("-R", showcaseDir, rawDir);

const vue = sh.find([rawDir]).filter((v) => /\.vue$/i.test(v));
for (const v of vue) {
	sh.mv("-f", v, v.slice(0, -4) + ".txt");
}

console.log("Snippets build - done!");
