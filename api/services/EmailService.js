const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<email>',
    pass: '<password>'
  }
});

let mailOptions = {
  from: '"<name>" <email>', // sender address
  to: '<receivers>', // list of receivers
  subject: 'Message from NODE!', // Subject line
  html: '<b>Let me know if you receive this ?</b>' // html body
};

module.exports = {
  sendMail: async () => {
    let isSuccess = true;
    let sentResult = {};
    try {
      sentResult = await transporter.sendMail(mailOptions);

      if (sentResult.rejected.length > 0) {
        isSuccess = false;
      }
    } catch (err) {
      sentResult = err;
      isSuccess = false;
    }

    return {isSuccess, sentResult};
  }
};

// # reference
// # https://nodemailer.com/about/
