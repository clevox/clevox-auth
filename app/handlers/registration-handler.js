var user = require('../models/user');
var cryptoHelper = require('./../helpers/crypto-helper');

var registerUser = function (req, res) {
  req.body.password = cryptoHelper.encrypt(req.body.password);
  user.saveUser(req.body, function () {
    console.log("registerUser", req.body);
    res.send({ success: true });
  });
  
};


module.exports = {
  registerUser : registerUser
};
