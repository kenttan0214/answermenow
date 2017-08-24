module.exports.routes = {
  'GET /status': 'api.status',
  'GET /qr': 'qr.getQRCode',
  'POST /user/register': 'googleSignIn.createUser',
  'POST /user/signin': 'googleSignIn.signIn'
};
