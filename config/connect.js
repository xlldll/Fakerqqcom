module.exports = {
	options : {
		open       : {
			target   : 'http://fakerqqcom',
			appName  : 'chrome',
			callback : function() {}
		},
		hostname   : 'fakerqqcom',
		livereload : 35729
	},
	index   : {
		options : {
			open : true,
			port : 8080,
			base : [ '.' ]
		}
	}
};