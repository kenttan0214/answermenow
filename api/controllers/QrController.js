module.exports = {
  index: function (req, res) {
    if (req.method.toUpperCase() != 'GET') {
      return res.forbidden();
    }

    var userDetails = req.userDetails;
    var userId = JSON.stringify({id: userDetails.id});

    QRService.create(userId, function (err, url) { // eslint-disable-line no-undef
      if (err) {
        return res.forbidden(err);
      } else {
        return res.json({qrCode: url});
      }
    });
  }
};
