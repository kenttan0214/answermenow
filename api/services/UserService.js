module.exports = {
  createUserAccount: async (user) => {
    let response = {};
    let isSuccess = true;
    
    try {
      response = await User.create(user); // eslint-disable-line no-undef
    } catch (err) {
      response = err;
      isSuccess = false;
    }

    return {response, isSuccess};
  },
  findUser: async (criteria) => {
    let response = {};
    let isSuccess = true;
    
    try {
      response = await User.findOne(criteria);
    } catch (err) {
      isSuccess = false;
      response = err;
    }
    
    return {response, isSuccess};
  },
  getUserFields: async (criteria, fields) => {
    let response = {};
    let isSuccess = true; 
    
    try {
      response = await User.findOne(criteria);
      
      if (response) {
        var filteredRecord = {};
        for (let field of fields) {
          filteredRecord[field] = record[field];
        }
        response = filteredRecord;
      }
    } catch (err) {
      isSuccess = false;
      response = err;
    }
    
    return {response, isSuccess};
  }
};

// User.find(criteria, {fields: {_id: 1}}).exec(function (err, record) { // eslint-disable-line no-undef
//   if (!err && record) {
//     return done(true, record);
//   } else {
//     return done(false, err);
//   }
// });
