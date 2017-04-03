module.exports = function( grunt ) {
	return {
		options: {
			separator: '\n/*****************CONCAT*******************/\n',
				stripBanners: true,
				banner: '/*<%= pkg.name %> - version <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
		}
	};
}