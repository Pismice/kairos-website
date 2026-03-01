const dotenv = require('dotenv');
const envConfig = dotenv.config().parsed || {};

module.exports = {
	apps: [{
		name: 'kairos-website',
		script: 'build/index.js',
		env: {
			PORT: 3001,
			HOST: '0.0.0.0',
			NODE_ENV: 'production',
			...envConfig
		}
	}]
};
