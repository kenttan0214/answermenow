const GoogleAuth = require('google-auth-library');
const CLIENT_ID = '52777281258-h142bvv7ljcj9nbild06n285hnmjuqdn.apps.googleusercontent.com';

module.exports = {
  verifyIdToken: (token) => {
    return new Promise((resolve, reject) => {
      let auth = new GoogleAuth();
      var client = new auth.OAuth2(CLIENT_ID, '', '');

      client.verifyIdToken(
        token,
        CLIENT_ID,
        function (e, login) {
          if (login) {
            const payload = login.getPayload();
            resolve(payload);
          } else {
            reject({error: true});
          }
        });
    }).catch((error) => {
      return error;
    });
  }
};
