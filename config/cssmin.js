module.exports = {
	options      : {
		shorthandCompacting : false,
		roundingPrecision   : -1
	},
	css2MinSync  : {
		files : [ {
			expand : true,
			cwd    : '<%=paths.src.css2MinSync%>',
			src    : [ '!*.min.css','**/*.css','!**/*.map' ],
			dest   : '<%=paths.dist.CSS%>',
			ext    : '.min.css'
		} ]
	},
	css2MultSync : {
		files : {
			'dist/css/indexRbs.min.css' : [ '<%=paths.src.css2MultSync%>/replaceBootstrap.css',
				'<%=paths.src.css2MultSync%>/index.css'
			]
		}
	}
};