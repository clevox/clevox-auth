var server = require('http').createServer()
  , port = 5001;


server.listen(port, function () { console.log('Listening on ' + server.address().port) });

