var restify = require('restify'),
  port = 5001;

var redis = require("redis"),
  redisClient = redis.createClient();

redisClient.on("error", function (err) {
  console.log("redis Error " + err);
});

redisClient.on("connect", function () {
  console.log("redis connected");
});

var server = restify.createServer();

server.use(restify.bodyParser());

var routes = require('./routes');

routes(server);

server.listen(port, function () { console.log('Listening on ' + server.address().port) });
