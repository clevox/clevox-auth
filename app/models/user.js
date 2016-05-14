var MongoClient = require('mongodb').MongoClient;

var insertDocument = function (db, user, callback) {
  
};

var saveUser = function (user) {
  MongoClient.connect('mongodb://localhost:27017/AuthDB', function (err, db) {

    console.log("user passed", user);

    if (err) {
      console.log(err);
      return;
    }

    insertDocument(db, { userId: user.userId, email: user.email, password : user.password, createdDate: new Date() }, function () {
      db.close();
    });

  });

};

module.exports = {
  saveUser: saveUser
};