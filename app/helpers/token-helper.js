var user = require('../models/user');
var global = require('./../../global');

var createToken = function(user) {

  var token = generateGuid();
  var date = new Date();

  console.log("createToken");

  var tokenData = {
    userId: user.email,
    created: date,
    expired: date.setDate(date.getDate() + 7),
    token: token
  };

  global.redisClient.set(tokenData.userId, JSON.stringify(tokenData));

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
