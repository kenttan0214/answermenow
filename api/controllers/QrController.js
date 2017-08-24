module.exports = {
  getQRCode: function (req, res) {
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
