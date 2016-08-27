//var MongoClient = require('mongodb').MongoClient;
var global = require('../../global');

var insertDocument = function (user, callback) {
  console.log("user------------------------------>",user);
  global.mongoDb.collection('user').insertOne(user, function (err, result) {
    console.log("Inserted User.");
    callback(result);
  });
};

var saveUser = function (user, callback) {
  insertDocument({ userId: user.userId, email: user.email, firstName: user.firstName, lastName: user.lastName, password: user.password, createdDate: new Date() }, function () {
    callback();
  });
};

var checkUserForLogin = function (email, password, callback) {
  
  global.mongoDb.collection('user').findOne({ email: email, password: password }, function (err, user) {
    if (err) {
      console.log(err);
      return callback(err, null);
    }
    console.log(user);

    return callback(err, user);
  });
};

module.exports = {
  saveUser: saveUser,
  checkUserForLogin : checkUserForLogin
};
