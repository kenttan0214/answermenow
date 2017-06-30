var QRCode = require('qrcode'); //https://github.com/soldair/node-qrcode

module.exports = {
  create: function (content, done) {
    QRCode.toDataURL(content, function (err, url) {
      done(err, url);
    });
  }
};
