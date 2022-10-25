require('esbuild')
  .build({
    entryPoints: ['js/main.js'],
    outfile: 'bundle.js',
    bundle: true,
    watch: {
      onRebuild(error, result) {
        if (error) {
          console.error(error);
        } else {
          console.log('watch rebuild succesful!');
        }
      }
    },
    sourcemap: true
  })
  .then(() => console.log('watching...'))
  .catch(() => process.exit(1));
