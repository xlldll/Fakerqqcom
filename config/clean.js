module.exports = {
	/*
	 * +'/*'
	 * 代表清除该目录下的任何文件以及文件夹
	 */
	distJsMin   : [ '<%=paths.dist.JsMin%>' + '/*' ],
	distCssMin  : [ '<%=paths.dist.CssMin%>' + '/*' ],
	distJsRjs   : [ '<%=paths.dist.JsRjs%>' + '/*' ],
	distJsMult  : [ '<%=paths.dist.JsMult%>' + '/*' ],
	distCssMult : [ '<%=paths.dist.CssMult%>' + '/*' ],
	bbsES5      : [ 'src/js2Min/bbsES5.js' ],
	folder_v2   : [ 'path/to/dir/**' ],
	contents    : [ 'path/to/dir/*' ],
	subfolders  : [ 'path/to/dir/*/' ],
	css         : [ 'path/to/dir/*.css' ],
	all_css     : [ 'path/to/dir/**/*.css' ]
};