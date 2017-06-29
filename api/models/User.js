module.exports = {
  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 7
    },
    isActive: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};