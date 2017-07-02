module.exports = {
  create: async (req, res) => {
    if (req.method.toUpperCase() != 'POST') {
      return res.forbidden();
    }

    const { body } = req;
    const user = body ? body.user : null;

    if (user) {
      const {response, isSuccess} = await UserService.createUserAccount(user);
      
      if (isSuccess) {
        const token = generateAccessToken(response);
        const result = getResponseObject(token, response);
        return res.json(result);
      } else {
        return res.badRequest(response);
      }

    } else {
      return res.forbidden();
    }
  },
  login: async (req, res) => {
    if (req.method.toUpperCase() != 'POST') {
      return res.forbidden();
    }

    const { body } = req;
    const user = body ? body.user : null;
    
    const {response, isSuccess} = await UserService.findUser(user);
    
    if (isSuccess && response) {
      const token = generateAccessToken(response);
      const result = getResponseObject(token, response);
      return res.json(result);
    } else {
      return res.notFound({message: 'user not found'});
    }
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
