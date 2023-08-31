require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, address1, address2, serviceDetails, postalCode } = req.body;

  // Validation
  if (!name || !email || !address1 || !serviceDetails) {
    return res.status(400).send('All fields are required');
  }

  // Initialize nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Booking From ${name}`,
    text: `${name} wants to book a consultation.\nEmail: ${email}\nPhone: ${phone}\nAddress1: ${address1}\nAddress2: ${address2}\nPostal Code: ${postalCode}\nService Detals: ${serviceDetails}`,
  };

  // Send email
  try {
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