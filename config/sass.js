module.exports = {
  css2Min: {
    options: {
      style: 'expanded'
    },
    files: [{
      expand: true,
      cwd: '<%=paths.src.css2Min%>',
      src: ['**/*.scss'],
      dest: '<%=paths.src.css2Min%>',
      ext: '.css',
      flatten: false
    }]
  },
  css2Mult: {
    options: {
      style: 'expanded'
    },
    files: [{
      expand: true,
      cwd: '<%=paths.src.css2Mult%>',
      src: ['**/*.scss'],
      dest: '<%=paths.src.css2Mult%>',
      ext: '.css',
      flatten: false
    }]
  },
  bowerCss: {
    options: {
      style: 'expanded'
    },
    files: [{
      expand: true,
      cwd: '<%=paths.src.bowerCss%>',
      src: ['**/*.scss'],
      dest: '<%=paths.src.bowerCss%>',
      ext: '.css',
      flatten: false
    }]
  }
};