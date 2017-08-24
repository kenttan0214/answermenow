module.exports = {
  createUser: async (req, res) => {
    const { token } = req.params.all();
    if (token) {
      const {email, name, error} = await GoogleAuthService.verifyIdToken(token);

      if (!error) {
        try {
          const user = await User.create({email, name});
          const accessToken = getAccessToken({
            id: user.id,
            email: email,
            name: name
          });
          return res.json({accessToken});
        } catch (error) {
          return res.serverError(error);
        }
      }
    }

    return res.forbidden();
  },
  signIn: async (req, res) => {
    const { token } = req.params.all();

    if (token) {
      const {email, name, error} = await GoogleAuthService.verifyIdToken(token);

      if (!error) {
        try {
          const user = await User.find({email, name});
          if (user) {
            const accessToken = getAccessToken({
              id: user[0].id,
              email: email,
              name: name
            });
            return res.json({accessToken});
          }
        } catch (error) {
          return res.serverError(error);
        }
      }
    }

    return res.forbidden();
  }
};

const getAccessToken = (user) => {
  return TokenService.create(user);
};
