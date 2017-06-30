module.exports = function (req, res, next) {
  var accessToken = req.headers['x-access-token'];

  if (accessToken) {
    TokenService.validate(accessToken, function (result) { // eslint-disable-line no-undef
      if (result && result.isValid) {
        req.userDetails = result.decoded;
        return next();
      } else {
        forbiddenRequest(res);
      }
    });
  } else {
    forbiddenRequest(res);
  }
};

function forbiddenRequest (res) {
  return res.forbidden('You are not permitted to perform this action.');
}
