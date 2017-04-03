module.exports = {
  install: {
    options: {
      targetDir: './<%=paths.src.bower%>',
      layout: 'byType',
      install: true,
      verbose: true,
      cleanTargetDir: true,
      cleanBowerDir: true,
      bowerOptions: {}
    }
  }
};