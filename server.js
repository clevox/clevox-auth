var restify = require('restify'),
    port = 5001;

var server = restify.createServer();

// Middlewares
server.use(restify.bodyParser());

var routes = require('./routes');

routes(server);

server.listen(port, function () { console.log('Listening on ' + server.address().port) });

