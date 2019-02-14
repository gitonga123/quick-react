var redis = require('redis');
var client = redis.createClient();

client.on('error', function(error) {
	console.log("Something went wrong");
});

client.set('My Test Key', 'my test value', redis.print);
client.get('My test Key', function(error, result) {
	if (error) throw error;
	console.log('Get Result --->', result);
});