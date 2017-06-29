module.exports = {
  create: function (req, res) {
    if (req.method.toUpperCase() != 'POST') {
      return res.forbidden();
    }

    var body = req.body;
    var user = body ? body.user : null;

    if (user) {
      UserService.createUserAccount(user, function (success, response) { // eslint-disable-line no-undef
        if (success) {
          var token = generateAccessToken(response);
          var result = getResponseObject(token, response);
          return res.json(result);
        } else {
          return res.badRequest(response);
        }
      });
    }
  },
  login: function (req, res) {
    if (req.method.toUpperCase() != 'POST') {
      return res.forbidden();
    }

    var body = req.body;
    var user = body ? body.user : {};

    UserService.findUser(user, function (success, response) { // eslint-disable-line no-undef
      if (success) {
        var token = generateAccessToken(response);
        var result = getResponseObject(token, response);
        return res.json(result);
      } else {
        return res.notFound({message: 'user not found'});
      }
    });
  }
};

function generateAccessToken (user) {
  var token = TokenService.create({ // eslint-disable-line no-undef
    id: user.id,
    email: user.email,
    isActive: user.isActive
  });

  return token;
}

function getResponseObject (token, user) {
  return {
    accessToken: token,
    isActive: user.isActive
  };
}
