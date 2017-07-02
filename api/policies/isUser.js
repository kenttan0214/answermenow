module.exports = async (req, res, next) => {
  const {userDetails} = req;

  if (userDetails) {
    const {id} = userDetails;
    const {response, isSuccess} = await UserService.findUser({id});
    
    if (isSuccess && response) {
      return next();
    } else {
      forbiddenRequest(res);
    }
    
  } else {
    forbiddenRequest(res);
  }
};

 const forbiddenRequest = (res) => {
  return res.forbidden('You are not permitted to perform this action.');
}
