module.exports = {
  options: {
    dateFormat: function(time) {
	grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
	grunt.log.writeln('Waiting for more changes...');
	}
  },
  transform: {
    files: ['<%=paths.src.js2Min%>'+'/component/{,**/}*.js'],
    tasks: ['clean:bbsES5', 'browserify']
  },
  configFiles: {
    files: ['Gruntfile.js'],
    options: {
      reload: true
    }
  },
  css2Mult: {
    files: ['<%=paths.src.css2Mult%>'+'/{,**/}*.{css,scss,map}'],
    tasks: ['newer:sass:css2Mult',
      'sync:css2MultSync',
      'clean:distCssMult',
      'newer:cssmin:Css2MultSync'
    ]
  },
  css2Min: {
    files: ['<%=paths.src.css2Min%>'+'/{*,**/}*.{css,scss,map}'],
    options: {
      event: ['added', 'deleted', 'changed']
    },
    tasks: ['newer:sass:css2Min',
      'sync:css2MinSync',
      'clean:distCssMin',
      'newer:cssmin:css2MinSync'
    ]
  },
  js2Min: {
    files: ['<%=paths.src.js2Min%>'+'/{,**/}*.{coffee,js}'],
    tasks: ['sync:js2MinSync',
      'clean:destJsMin',
      'newer:uglify:js2MinSync'
    ]
  },
  js2Mult: {
    files: ['<%=paths.src.js2Mult%>'+'/{,**/}*.{coffee,js}'],
    tasks: ['sync:js2MultSync',
      'clean:destJsMult',
      'newer:uglify:js2MultSync'
    ]
  },
  imgmin: {
    files: ['<%=paths.src.IMAGES%>'+'/{,**/}*'],
    tasks: ['newer:imagemin', 'sync:imgs']
  },
  htmlmin: {
    files: ['<%=paths.src.HTML%>'+'/{,**/}*'],
    tasks: ['newer:htmlmin', 'sync:htmls']
  },
  fonts: {
    files: ['<%=paths.src.FONTS%>'+'/{,**/}*'],
    tasks: ['sync:fonts']
  },
  livereload: {
    options: {
      livereload: '<%=connect.options.livereload%>'
    },
    files: ['./'+'<%=paths.src.HTML%>'+'/{,**/}*.html',
      './index.html',
      './'+'<%=paths.src.css2Min%>'+'/{,**/}*.css',
      './'+'<%=paths.src.css2Mult%>'+'/{,**/}*.css',
      './'+'<%=paths.src.js2Min%>'+'/{,**/}*.js',
      './'+'<%=paths.src.js2Mult%>'+'/{,**/}*.js',
      './'+'<%=paths.src.jsRequire%>'+'/{,**/}*.js',
      './'+'<%=paths.src.IMAGES%>'+'/{,**/}*.{png,jpg}',
      './'+'<%=paths.src.FONTS%>'+'/{,**/}*'
    ]
  },
  bower: {
    files: ['<%=paths.src.bower%>'+'/{,**/}*'],
    tasks: ['sync:bowerJs']
  }
};