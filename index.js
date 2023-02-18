const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "___",
    serviceClient: "___",
    privateKey:
      "___"
  },
});

const mailOptions = {
  from: "___",
  to: "___",
  subject: "Test Subject",
  text: "Some text",
};

async function sendMail() {
  console.log("Sending mail...");
  await transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Mail Sent!");
    })
    .catch((e) => {
      console.log("ERROR: ", e);
    });
}

sendMail();
