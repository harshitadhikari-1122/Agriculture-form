require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/submit', upload.none(), async (req, res) => {
  const { name, number, email, message } = req.body;
  console.log('Received Form Data:', req.body);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: "harshitadhikari9013@gmail.com",
    subject: "New Form Submission",
    text: `Form data:\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.json({ message: 'Form Data received and email sent', data: req.body });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
