module.exports = function(app) {

    app.get('/ping', function(req, res, next) {
        res.send("pong");
    });
    
    var registrationHandler = require('../app/handlers/registration-handler');
	// var allowedFeaturesHandler = require('../app/handlers/allowed-features-handler');
	
	// app.get('/api/IsFeatureAllowed/:id', featureAllowedHandler.IsFeatureAllowed);
	
	app.get('/api/', registrationHandler);
    

};

