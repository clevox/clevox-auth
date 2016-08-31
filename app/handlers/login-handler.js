var user = require('../models/user');
var tokenHelper = require('./../helpers/token-helper');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    secret = 'AqwerersdfaAqwWqwTtd6F$#%^&*546363463456093498234098324092384928340234qdhjahBHDWSAWEJbsbcdsfkjher2%345sdgsdg';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm, secret);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

var login = function(req, res) {

  var userEmail = req.body.email;
  var password = req.body.password;
  console.log("Login Request came", userEmail, password);

  password = encrypt(password);
  
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
