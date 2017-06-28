module.exports = {
  createUserAccount: function (user, done) {
    User.create(user).exec(function (err, userAccount) { // eslint-disable-line no-undef
      if (!err) {
        return done(true, userAccount);
      } else {
        return done(false, err);
      }
    });
  }
};
