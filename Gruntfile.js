'use strict';
module.exports = function( grunt ) {
	require( 'time-grunt' )( grunt );
	var configs = require( 'load-grunt-configs' )( grunt );
	grunt.config.init( configs );
	require( 'load-grunt-tasks' )( grunt );
	grunt.registerTask( "mylive",[ "concurrent:mylive" ] );
	grunt.registerTask( 'default',[ 'connect','watch' ] );
	/* 1.项目准备 */
	/* 导入外部文件并分离JS文件到bowerJs */
	grunt.registerTask( '1bower',[ 'bower:install','sync:bowerJs','watch:bower' ] );
	/* 2.开发环境-项目开发 */
	/* 所有 */
	grunt.registerTask( '2all',[ 'sass','sync','cssmin','uglify','connect','watch' ] );
	/* CSS */
	grunt.registerTask( '2css',[ 'sass','sync:css2MinSync','clean:destCssMin','sync:css2MultSync','cssmin' ] );
	/* JS(由requireJs接手) */
	grunt.registerTask( '2js',[ 'sync:js2MinSync','clean:destJsMin','sync:js2MultSync','uglify' ] );
	/* 实时修改主页 */
	grunt.registerTask( '2live',[ 'sass:css2Min','browserify','connect:index','watch' ] );
	/* 3.生产环境-项目优化 */
	/* 用GruntRJS打包各依赖JS关系 */
	grunt.registerTask( '3requireJSPackage',[ 'clean:destJsRjs','requirejs:index' ] );
	/* 用browserify打包ReactJSX */
	grunt.registerTask( '3transform',[ 'clean:bbsES5','browserify','uglify:ReactBrowserify' ] );
	/* 检查格式 */
	grunt.registerTask( '3chkCss',[ 'csslint' ] );
	grunt.registerTask( '3chkJs',[ 'jshint' ] );
	/* 文件压缩 */
	grunt.registerTask( '3allMin',[ 'imagemin','htmlmin:releaseHtml','cssmin:css2MultIndex','cssmin:css2MultBbs' ] );
	/* 4.其它 */
	/* 文件合并 */
	grunt.registerTask( '4concat',[ 'concat' ] );
	grunt.registerTask( '4copy',[ 'copy' ] );
};

