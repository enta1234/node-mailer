const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
  {
    host: "mail.entronica.in.th",
    port: 25,
    secure: false,
    auth: {
      user: "my-scheduler@entronica.in.th",
      pass: "entronica1234",
    },
    tls: {
      rejectUnauthorized: false,
    }
  }
)

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
