var jwt = require('jsonwebtoken');

var constant = sails.config.constant; // eslint-disable-line no-undef

module.exports = {
  create: function (input) {
    var token = jwt.sign(input, constant.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    return token;
  },
  validate: function (token, done) {
    jwt.verify(token, constant.SECRET_KEY, function (err, decoded) {
      var result = {
        isValid: !err,
      };

      if (!err) {
        result['decoded'] = decoded;
      }

      done(result);
    });
  }
};
