module.exports = function () {
	var client = './src/client/';

	var config = {
		temp : './.tmp/',
		/**
		 * All file paths
		 */
		alljs : [
			'./src/**/*.js',
			'./*.js'
		],

		less : client + 'styles/styles.less'
	};
	return config;
};
