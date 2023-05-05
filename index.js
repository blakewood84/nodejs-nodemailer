const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "___",
    pass: "___",
  },
});

const mailOptions = {
  from: "___",
  to: "___",
  subject: "Time Sheet",
  text: "Here is your time sheet...",
  attachments: [
    {
      path: "./attachments/timesheet.pdf",
    },
  ],
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
