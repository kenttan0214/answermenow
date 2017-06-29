module.exports = {
  createUserAccount: function (user, done) {
    User.create(user).exec(function (err, userAccount) { // eslint-disable-line no-undef
      if (!err) {
        return done(true, userAccount);
      } else {
        return done(false, err);
      }
    });
  },
  findUser: function (criteria, done) {
    User.findOne(criteria).exec(function (err, record) { // eslint-disable-line no-undef
      if (!err && record) {
        return done(true, record);
      } else {
        return done(false, err);
      }
    });
  }
};
