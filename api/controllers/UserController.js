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
          var token = TokenService.create({ // eslint-disable-line no-undef
            id: response.id,
            email: response.email,
            password: response.password
          });
          return res.json({accessToken: token});
        } else {
          return res.badRequest(response);
        }
      });
    }
  }
};
