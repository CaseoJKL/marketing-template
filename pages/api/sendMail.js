const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  const { nameContents, emailContents, messageContents } = req.body;

  const msg = {
    to: "info@example.com",
    from: "example@gmail.com",
    subject: "Brand Website Form",
    html: `
            Name: ${nameContents} <br>
            Email: ${emailContents} <br>
            Message: ${messageContents} <br>
            `,
  };
  if (req.headers.referer === "https://www.example.com.au/") {
    try {
      await sgMail.send(msg);
      res.status(204).end();
    } catch (err) {
      console.log("err123", err);
      res.status(500);
    }
  }
};

module.exports = allowCors(handler);
