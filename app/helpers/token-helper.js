var user = require('../models/user');
var global = require('./../../global');

var createToken = function(user , callback) {

  var token = generateGuid();
  var date = new Date();
  var expired = new Date();
  expired.setDate(expired.getDate() + 7);

  console.log("createToken");
  
  global.redisClient.get("user.email", function (err, value) {

    if (err) {
      return callback(err, null);
    }

    if (value) {
      console.log("redisClient.get", value);
      return callback(null, value);
    }

    var tokenData = {
      userId: user.email,
      created: date,
      expired: new Date(expired),
      token: token
    };

    global.redisClient.set(tokenData.userId, JSON.stringify(tokenData), function (err, reply) {
      console.log("redisClient.set", err, reply);
      return callback(null, {userId : user.email ,  token : token , expired : tokenData.expired , firstName : user.firstName , lastName : user.lastName});
    });
    
  });
  
};

var generateGuid = function () {
    var dateTime = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function (c) {
      var r = (dateTime + Math.random()*16)%16 | 0;
      dateTime = Math.floor(dateTime/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

module.exports = {
  createToken : createToken
};
