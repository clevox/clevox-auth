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
    tokenHelper.createToken(user, function (err, data) {
      if (err) {
        return res.send({ success : false, error: 'Server Error!' });
      }
      return res.send({ success: true, data: data });
    });
  });

};


module.exports = {
  login : login
};
