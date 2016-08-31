var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    secret = 'AqwerersdfaAqwWqwTtd6F$#%^&*546363463456093498234098324092384928340234qdhjahBHDWSAWEJbsbcdsfkjher2%345sdgsdg';

var encrypt = function (text) {
  var cipher = crypto.createCipher(algorithm, secret);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

module.exports = {
  encrypt : encrypt
};  
