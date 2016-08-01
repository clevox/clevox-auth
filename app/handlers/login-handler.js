var user = require('../models/user');
var tokenHelper = require('./../helpers/token-helper');

var login = function(req, res) {

  var userEmail = req.body.email;
  var password = req.body.password;
  console.log("Login Request came", userEmail, password);
  
  user.checkUserForLogin(userEmail, password, function (err, user) {
    
    if (err) {
      return res.send({ success : false, error: 'Server Error!' });
    }
    tokenHelper.createToken(user);
    res.send(user);
  });

};


module.exports = {
  login : login
};
