var user = require('../models/user');

var registerUser = function(req, res) {

  user.saveUser(req.body, function () {
    console.log("registerUser", req.body);
    res.send({ success: true });
  });
  
  

};


module.exports = {
  registerUser : registerUser
};
