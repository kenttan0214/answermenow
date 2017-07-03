module.exports = {
  index: function (req, res) {
    if (req.method.toUpperCase() != 'GET') {
      return res.forbidden();
    }

    const {userDetails} = req;
    const userId = JSON.stringify({id: userDetails.id});

    QRService.create(userId, function (err, url) {
      if (err) {
        return res.forbidden(err);
      } else {
        return res.json({qrCode: url});
      }
    });
  }
};
