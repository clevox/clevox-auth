//var MongoClient = require('mongodb').MongoClient;
var global = require('../../global');

var saveUser = function (user, callback) {
  console.log("user------------------------------>",user);
  global.mongoDb.collection('user').insertOne({ userId: user.userId, email: user.email, firstName: user.firstName, lastName: user.lastName, password: user.password, createdDate: new Date() }, function (err, result) {
    console.log("Inserted User.");
    if (err) {
      console.log(err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

var checkUserForLogin = function (email, password, callback) {
  
  global.mongoDb.collection('user').findOne({ email: email, password: password }, function (err, user) {
    if (err) {
      console.log(err);
      return callback(err, null);
    }
    console.log(user);

    return callback(null, user);
  });
};

module.exports = {
  saveUser: saveUser,
  checkUserForLogin : checkUserForLogin
};
