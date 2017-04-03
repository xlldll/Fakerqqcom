module.exports = {
  fonts: {
    files: [{
      expand: true,
      cwd: '<%=paths.src.FONTS%>',
      src: ['**/*'],
      dest: '<%=paths.dist.FONTS%>',
      flatten: true,
      filter: 'isFile'
    }]
  },
  libs: {
    files: [{
      expand: true,
      cwd: '<%=paths.src.jsRequire%>',
      src: ['libs/*'],
      dest: '<%=paths.dist.JS%>/libs',
      flatten: true,
      filter: 'isFile'
    }]
  }
};