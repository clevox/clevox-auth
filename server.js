var restify = require('restify'),
    port = 5001;

var server = restify.createServer();

var routes = require('./routes');

routes(server);

// server.get('/ping', function (req, res, next) {
//   res.send("pong");
// });


server.listen(port, function () { console.log('Listening on ' + server.address().port) });

