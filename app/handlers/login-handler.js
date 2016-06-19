var user = require('../models/user');

var login = function(req, res) {

  var userEmail = req.body.email;
  var password = req.body.password;
  console.log("Login Request came", userEmail, password);
  
  user.checkUserForLogin(userEmail, password, function (err, user) {
    res.send(user);
  });

};


module.exports = {
  login : login
};
