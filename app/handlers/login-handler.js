var user = require('../models/user');

var login = function(req, res) {

  var userEmail = req.body.email;
  var password = req.body.password;
  console.log("Login Request came", userEmail, password);
  
  user.checkUserForLogin(userEmail, password, function (err, user) {
    
    if (err) {
      return res.status(500).send({ success : false, error: 'Server Error!' });
    }
    res.status(200).send(user);
  });

};


module.exports = {
  login : login
};
