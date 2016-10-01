var user = require('../models/user');
var cryptoHelper = require('./../helpers/crypto-helper');

var registerUser = function (req, res) {
  req.body.password = cryptoHelper.encrypt(req.body.password);
  user.saveUser(req.body, function (err, result) {
    if (err) {
      return res.send({ success: false });
    }
    console.log("registerUser Saved");
    res.send({ success: true });    
  });
  
};


module.exports = {
  registerUser : registerUser
};
