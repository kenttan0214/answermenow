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
  },
  getUserFields: function (criteria, fields, done) {
    User.findOne(criteria).exec(function (err, record) { // eslint-disable-line no-undef
      if (!err && record) {
        var filteredRecord = {};
        for (var i = 0; i < fields.length; ++i) {
          var field = fields[i];
          filteredRecord[field] = record[field];
        }
        return done(true, filteredRecord);
      } else {
        return done(false, err);
      }
    });
  }
};

// User.find(criteria, {fields: {_id: 1}}).exec(function (err, record) { // eslint-disable-line no-undef
//   if (!err && record) {
//     return done(true, record);
//   } else {
//     return done(false, err);
//   }
// });
