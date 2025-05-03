await Bun.build({
  entrypoints: ['benchie.js'],
  outdir: '.',                
  minify: true,
  target: 'browser',
  naming: "[dir]/[name].min.[ext]",
});

console.log('✅ benchie.min.js built using Bun');
