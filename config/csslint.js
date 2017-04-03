module.exports = {
  css: {
    options: {
      csslintrc: '.csslintrc.json'
    },
    checkCss: {
      options: {
        import: 2
      },
      src: ['<%=paths.src.css2Min%>{,**/}*.css',
        '<%=paths.src.css2Mult%>{,**/}*.css'
      ]
    }
  }
};