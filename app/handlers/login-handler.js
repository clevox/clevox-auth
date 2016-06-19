var user = require('../models/user');

var login = function(req, res) {

  var userEmail = req.body.email;
  var password = req.body.password;

  user.checkUserForLogin(userEmail, password, function (err, user) {
    
  });

};


module.exports = {
  login : login
};
