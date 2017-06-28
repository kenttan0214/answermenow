module.exports = {
  create: function (req, res) {
    if (req.method.toUpperCase() != 'POST') {
      return res.forbidden();
    }

    var user = req.param('user');

    User.create(user).exec(function (err, userAccount) { // eslint-disable-line no-undef
      if (!err) {
        return res.json(userAccount);
      } else {
        return res.badRequest();
      }
    });
  }
};
