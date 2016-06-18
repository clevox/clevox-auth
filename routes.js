module.exports = function (app) {

    app.get('/api/ping', function (req, res, next) {
        res.send("pong");
    });

    var registrationHandler = require('./app/handlers/registration-handler');
    var loginHandler = require('./app/handlers/login-handler');


    app.post('/api/registration', registrationHandler.registerUser);

    app.post('/api/login', loginHandler.login)


};

