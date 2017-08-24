module.exports.policies = {
  '*': ['tokenAuth', 'isUser'],
  ApiController: {
    status: true
  },
  GoogleSignInController: {
    '*' : true
  }
};
