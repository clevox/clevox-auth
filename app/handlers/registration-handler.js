var user = require('../models/user');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    secret = 'AqwerersdfaAqwWqwTtd6F$#%^&*546363463456093498234098324092384928340234qdhjahBHDWSAWEJbsbcdsfkjher2%345sdgsdg';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm, secret);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

var registerUser = function (req, res) {
  req.body.password = encrypt(req.body.password);
  user.saveUser(req.body, function () {
    console.log("registerUser", req.body);
    res.send({ success: true });
  });
  
};


module.exports = {
  registerUser : registerUser
};
