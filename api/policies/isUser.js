module.exports = function (req, res, next) {
  var userDetails = req.userDetails;

  if (userDetails) {
    UserService.findUser({id: userDetails.id}, function (success) { // eslint-disable-line no-undef
      if (success) {
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
