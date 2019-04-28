const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
"430093604864-9sd59r4suuag3m7bv4crr55arjn5mhj9.apps.googleusercontent.com", // ClientID
"k-wVOUUUDUGxcY-IGueMZsF-", // Client Secret
"https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.setCredentials({
  refresh_token: "ya29.Glv0BovOnpidacwzyRo6dsYpyJPzrPdJuWTfeq7WvgMuePwLRw27SwX5mBLhWYi0MdLt8EHhSDsWcrTVnCBMbuZDd1EzymegCQc6TGaknLsVqBp7TO7zQYEOmH5R"
});
send();
async function send() {
  const tokens = await oauth2Client.refreshAccessToken();
  const accessToken = tokens.credentials.access_token;

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "swaroop.srini@gmail.com",
      clientId: "430093604864-9sd59r4suuag3m7bv4crr55arjn5mhj9.apps.googleusercontent.com",
      clientSecret: "k-wVOUUUDUGxcY-IGueMZsF-",
      refreshToken: "",
      accessToken: accessToken
    }
  });


  const mailOptions = {
    from: "swaroop.srini@gmail.com",
    to: "swaroop.srini@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
  };


  smtpTransport.sendMail(mailOptions, (error, response) => {
    console.log("Sending mail");
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
};