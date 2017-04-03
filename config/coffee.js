module.exports = {
  js2Min: {
    expand: true,
    flatten: false,
    cwd: '<%=paths.src.js2Min%>',
    src: ['{,**/}*.coffee'],
    dest: '<%=paths.src.js2Min%>',
    ext: '.js'
  },
  js2Mult: {
    expand: true,
    flatten: false,
    cwd: '<%=paths.src.js2Mult%>',
    src: ['{,**/}*.coffee'],
    dest: '<%=paths.src.js2Mult%>',
    ext: '.js'
  },
  jsRequire: {
    expand: true,
    flatten: false,
    cwd: '<%=paths.src.jsRequire%>',
    src: ['{,**/}*.coffee'],
    dest: '<%=paths.src.jsRequire%>',
    ext: '.js'
  }
};