module.exports = {
  htmls: {
    files: [{
      cwd: '<%=paths.src.HTML%>',
      src: ['{,**/}*.html'],
      dest: '<%=paths.dist.HTML%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  imgs: {
    files: [{
      cwd: '<%=paths.src.IMAGES%>',
      src: ['**'],
      dest: '<%=paths.dist.IMAGES%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  fonts: {
    files: [{
      cwd: '<%=paths.src.FONTS%>',
      src: ['**'],
      dest: '<%=paths.dist.FONTS%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  css2MinSync: {
    files: [{
      cwd: '<%=paths.src.css2Min%>',
      src: ['{,**/}*.css', '!{,**/}*.map'],
      dest: '<%=paths.src.css2MinSync%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  css2MultSync: {
    files: [{
      cwd: '<%=paths.src.css2Mult%>',
      src: ['{,**/}*.css', '!{,**/}*.map'],
      dest: '<%=paths.src.css2MultSync%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  js2MinSync: {
    files: [{
      cwd: '<%=paths.src.js2Min%>',
      src: ['{,**/}*.js', '!{,**/}*.coffee'],
      dest: '<%=paths.src.js2MinSync%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  js2MultSync: {
    files: [{
      cwd: '<%=paths.src.js2Mult%>',
      src: ['{,**/}*.js', '!{,**/}*.coffee'],
      dest: '<%=paths.src.js2MultSync%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  },
  bowerJs: {
    files: [{
      cwd: '<%=paths.src.bower%>',
      src: ['{,**/}*.js', '!{,**/}*.coffee'],
      dest: '<%=paths.src.bowerJs%>'
    }],
    pretend: false,
    verbose: true,
    updateAndDelete: true
  }
};