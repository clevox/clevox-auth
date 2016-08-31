var restify = require('restify');
var redis = require("redis");
var global = require('./global');

var port = 5001;

var redisClient = redis.createClient();

redisClient.on("error", function (err) {
  console.log("redis Error " + err);
});

redisClient.on("connect", function () {
  console.log("redis connected");
  global.redisClient = redisClient;  
});

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/AuthDB', function (err, db) {
  if (err) return console.log(err);
  global.mongoDb = db;
  console.log("mongoDb connected");
});

var server = restify.createServer();

server.use(restify.bodyParser());

var routes = require('./routes');

routes(server);

server.listen(port, function () { console.log('Listening on ' + server.address().port) });
