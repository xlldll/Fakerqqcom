module.exports = {
  dist: {
    options: {
      transform: [
        ['babelify',
          {
            presets: ['es2015', 'stage-2', 'react'],
            plugins: ['transform-decorators-legacy']
          }
        ]
      ]
    },
    src: ['<%=paths.src.js2Min%>/component/bbsReact.js'],
    dest: '<%=paths.dist.JsMin%>/bbsES5.js'
  }
};