module.exports = {
  index: {
    options: {
      baseUrl: './src',
      mainConfigFile: 'rjsGrunt.js',
      name: 'jsRequire/index',
      include: ['requireJs'],
      out: '<%=paths.dist.JsRjs%>/requireJSPackage.min.js',
      uglify2: {
        output: {
          beautify: false
        },
        compress: {
          sequences: false,
          global_defs: {
            DEBUG: false
          }
        },
        warnings: true,
        mangle: false
      }
    }
  }
};