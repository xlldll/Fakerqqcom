module.exports = {
  srcHtml: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%=paths.src.HTML%>',
      src: ['**/*.html'],
      dest: '<%=paths.dist.HTML%>'
    }]
  },
  otherHtml: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      'dist/index.html': './index.html'
    }
  }
};