module.exports = {
  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true,
      minLength: 5
    },
    password: {
      type: 'string',
      required: true
    },
    isActive: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
