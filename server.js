/*
|--------------------------------------------------------------------------
| Global APP Init
|--------------------------------------------------------------------------
*/
	global._directory_base = __dirname;
	global.config = {};
		  config.app = require( './config/app.js' );
		  config.database = require( './config/database.js' )[config.app.env];
	const ViewUserAuth = require( _directory_base + '/app/v1.0/Http/Models/ViewUserAuthModel.js' )

/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const BodyParser = require( 'body-parser' );
	const Express = require( 'express' );
	const Mongoose = require( 'mongoose' );

	// Primary Variable
	const App = Express();
	
	// Generate API Documentation
	require( 'express-aglio' )( App,{
		source: __dirname+ '/docs/source/index.md',
		output: __dirname+ '/docs/html/index.html',
		aglioOptions: {
			themeCondenseNav: true,
			themeTemplate: 'triple',
			themeVariables: 'streak'
		}
	} );
	var kafka = require("kafka-node"),
	Producer = kafka.Producer,
	Consumer = kafka.Consumer,
	client = new kafka.KafkaClient({kafkaHost : "149.129.252.13:9092"}),
	producer = new Producer(client),    
	consumer = new Consumer(
        client,
        [
            { topic: 'kafkaRequestData', partition: 0 },{ topic: 'kafkaDataCollectionProgress', partition: 0 },{ topic: 'kafkaResponse', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );
	consumer.on('message', function (message) {
		json_message = JSON.parse(message.value);
		if(message.topic=="kafkaRequestData"){
			//ada yang request data ke microservices
			let reqDataObj;
			let responseData = false;
			console.log( json_message );
			console.log( "msg_agg", json_message.agg );
			if(json_message.msa_name=="auth"){
				const matchJSON = JSON.parse( json_message.agg );
				if( json_message.agg ){
					console.log( "matchJSON", matchJSON );
					const set = ViewUserAuth.aggregate( [	
						// 	matchJSON
					] );
					reqDataObj = {
						"msa_name":json_message.msa_name,
						"model_name":json_message.model_name,
						"requester":json_message.requester,
						"request_id":json_message.request_id,
						"data": set
					}
					responseData = true;	
				}
			}
			if( responseData ){
				let payloads = [
					{ topic: "kafkaResponseData", messages: JSON.stringify( reqDataObj ), partition: 0 }
				];
				// producer.send( payloads, function( err, data ){
				// 	console.log( "Send data to kafka", data );
				// } );
			}
		}
	});

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Routing Folder
	App.use( '/files', Express.static( 'public' ) );

	// Parse request of content-type - application/x-www-form-urlencoded
	App.use( BodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	App.use( BodyParser.json() );

	// Setup Database
	Mongoose.Promise = global.Promise;
	Mongoose.connect( config.database.url, {
		useNewUrlParser: true,
		ssl: config.database.ssl
	} ).then( () => {
		console.log( "Database :" );
		console.log( "\tStatus \t\t: Connected" );
		console.log( "\tMongoDB URL \t: " + config.database.url + " (" + config.app.env + ")" );
	} ).catch( err => {
		console.log( "Database :" );
		console.log( "\tDatabase Status : Not Connected" );
		console.log( "\tMongoDB URL \t: " + config.database.url + " (" + config.app.env + ")" );
	} );

	// Server Running Message
	App.listen( parseInt( config.app.port[config.app.env] ), () => {
		console.log( "Server :" );
		console.log( "\tStatus \t\t: OK" );
		console.log( "\tService \t: " + config.app.name + " (" + config.app.env + ")" );
		console.log( "\tPort \t\t: " + config.app.port[config.app.env] );
	} );

/*
 |--------------------------------------------------------------------------
 | Routing
 |--------------------------------------------------------------------------
 */
	require( './routes/api.js' )( App );

/*
 |--------------------------------------------------------------------------
 | Exports
 |--------------------------------------------------------------------------
 */
	module.exports = App;