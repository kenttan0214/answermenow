module.exports.policies = {
  QrController: {
    '*': ['tokenAuth', 'isUser']
  }
};
