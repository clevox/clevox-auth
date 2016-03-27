var userModel = require('../models/user');

var registerUser = function(req, res) {

  console.log("registerUser");
  
  res.send({ success: true });

};


module.exports = {
  registerUser : registerUser
};
