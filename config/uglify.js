module.exports = function( grunt ) {
	return {
		options         : {
			banner           : '\n/*<%=pkg.name%> 开始压缩于：<%= grunt.template.today(\'yyyy-mm-dd HH:MM\') %>*/\n',
			footer           : '\n/*<%=pkg.name%> 最后修改于：<%= grunt.template.today("yyyy-mm-dd HH:MM") %>*/\n',
			preserveComments : false
		},
		js2MinSync      : {
			options : {
				mangle : true,
				report : 'gzip'
			},
			files   : [ {
				expand  : true,
				cwd     : '<%=paths.src.js2MinSync%>',
				src     : [ '!{,**/}*.min.js','{,**/}*.js' ],
				dest    : '<%=paths.dist.JS%>',
				ext     : '.min.js',
				flatten : true
			} ]
		},
		js2MultSync     : {
			options : {
				mangle : true
			},
			files   : {
				'dist/js/lazyIndexAjax.min.js' : [ '<%=paths.src.js2MultSync%>/jquery.lazyload.js',
					'<%=paths.src.js2MultSync%>/index.js',
					'<%=paths.src.js2MultSync%>/template.min.js',
					'<%=paths.src.js2MultSync%>/ajax.js'
				]
			}
		},
		ReactBrowserify : {
			options : {
				mangle : true,
				report : 'gzip'
			},
			files   : {
				'dist/js/bbsES5.min.js' : [ '<%=paths.src.js2Min%>/bbsES5.js' ]
			}
		}
	};
}