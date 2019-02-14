var redis = require('redis');
var client = redis.createClient();

client.on('error', function(error) {
	console.log("Something went wrong");
});

client.set('my test key', 'my test value', redis.print);
client.get('my test key', function(error, result) {
	if (error) throw error;
	console.log('Get Result --->')
});