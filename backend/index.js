require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const app = express();

app.use(express.json());
app.use(cors());

const createTransporter = async () => {
  try {
    const oauth2Client = new OAuth2(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
      );

      oauth2Client.setCredentials({
        refresh_token: process.env.OAUTH_REFRESH_TOKEN,
      });

      const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
          if (err) {
            console.log("*ERR: ", err)
            reject();
          }
          resolve(token); 
        });
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_USER,
          accessToken,
          clientId: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      });
      return transporter;
  } catch (err) {
    return err
  }
};

app.post('/send-email', async (req, res) => {
  const { name, email, phone, address1, address2, serviceDetails, postalCode } = req.body;
  
  if (!name || !email || !address1 || !serviceDetails) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Booking From ${name}`,
    text: `${name} wants to book a consultation.\nEmail: ${email}\nPhone: ${phone}\nAddress1: ${address1}\nAddress2: ${address2}\nPostal Code: ${postalCode}\nService Details: ${serviceDetails}`,
  };

  try {
    const transporter = await createTransporter();
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
