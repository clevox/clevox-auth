var MongoClient = require('mongodb').MongoClient;

var insertDocument = function (db, user, callback) {
  console.log("user------------------------------>",user);
  db.collection('user').insertOne(user, function (err, result) {
    
    console.log("Inserted User.");
    callback(result);
  });
};

var saveUser = function (user , callback) {
  MongoClient.connect('mongodb://localhost:27017/AuthDB', function (err, db) {

    console.log("user passed", user);

    if (err) {
      console.log(err);
      return;
    }
    
    insertDocument(db, { userId: user.userId, email: user.email, firstName : user.firstName , lastName : user.lastName, password : user.password, createdDate: new Date() }, function () {
      db.close();
      callback();
    });

  });

};

var checkUserForLogin = function (email , password , callback) {  
  MongoClient.connect('mongodb://localhost:27017/AuthDB', function (err, db) {
    db.collection('user').findOne({email: email , password : password}, function(err, user) {
      
      if (err) {
        console.log(err);
      }      
      console.log(user);

      callback(err, user);
    });
  });
  
  
};

module.exports = {
  saveUser: saveUser,
  checkUserForLogin : checkUserForLogin
};