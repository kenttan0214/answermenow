module.exports = async (req, res, next) => {
  const accessToken = req.headers['x-access-token'];

  if (accessToken) {
    const {result, isSuccess} = await TokenService.validate(accessToken);

    if (isSuccess && result) {
      req.userDetails = result;
      return next();
    } else {
      forbiddenRequest(res);
    }
  } else {
    forbiddenRequest(res);
  }
};

function forbiddenRequest (res) {
  return res.forbidden('You are not permitted to perform this action.');
}
