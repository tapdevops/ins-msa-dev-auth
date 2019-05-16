/*
 |--------------------------------------------------------------------------
 | Database Connections
 |--------------------------------------------------------------------------
 |
 | Here are each of the database connections setup for your application.
 | Of course, examples of configuring each database platform that is
 | supported by NodeJS is shown below to make development simple.
 |
 */
	module.exports = {
		production: {
			url: 'mongodb://s_auth:4uth2019@dbapp.tap-agri.com:4848/s_auth?authSource=s_auth',
			ssl: false
		},
		development: {
			url: 'mongodb://s_auth:s_auth@dbappdev.tap-agri.com:4848/s_auth?authSource=s_auth',
			ssl: false
		}
	}