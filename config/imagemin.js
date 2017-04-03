module.exports = {
  srcImg: {
    options: {
      optimizationLevel: 3
    },
    files: [{
      expand: true,
      cwd: '<%=paths.src.IMAGES%>',
      src: ['**/*.{png,jpg,jpeg,gif}'],
      dest: '<%=paths.dist.IMAGES%>'
    }]
  }
};