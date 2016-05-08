var MongoClient = require('mongodb').MongoClient;

var saveUser = function(user) {

	
	MongoClient.connect('mongodb://localhost:27017/AuthDB', function(err , db) {

		console.log("user passed", user);

		if(err) {
			console.log(err);
			return;
		}
	});

//}
};

module.exports = {
	saveUser : saveUser
};