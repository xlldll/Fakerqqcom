module.exports = {
  options: {
    jshintrc: '.jshintrc.json'
  },
  coffee2Js: ['<%=paths.src.js2Min%>{,**/}*.js',
    '<%=paths.src.js2Mult%>{,**/}*.js'
  ],
  Gruntfile: ['Gruntfile.js']
};