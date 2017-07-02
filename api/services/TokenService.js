const jwt = require('jsonwebtoken');

const constant = sails.config.constant; // eslint-disable-line no-undef

module.exports = {
  create: (input) => {
    const token = jwt.sign(input, constant.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    return token;
  },
  validate: async (token) => {
    let result = {};
    let isSuccess = true;

    try {
      result = await jwt.verify(token, constant.SECRET_KEY);
    } catch (err) {
      isSuccess = false;
      result = err;
    }

    return { result, isSuccess };
  }
};
