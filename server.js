const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML file is in a 'public' folder

app.post('/send-email', async (req, res) => {
  try {
    // Extract form data
    const { subject, email, name, message } = req.body;

    // Create a Nodemailer transporter
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'chrismitto9@gmail.com',
        pass: 'Qwerty2005#*!',
      },
    });
    
    const mailOptions = {
      from: 'mittoshukrani@gmail.com',
      to: 'chrismitto9@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email from Nodemailer.',
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error('Error:', error);
      }
      console.log('Email sent:', info.response);
    });
    
    
    await transporter.sendMail(mailOptions);

    
    res.send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const imaps = require('imap-simple');
const config = {
    imap: {
      user: 'chrismitto9@gmail.com',
      password: 'Qwerty2005#*!',
      host: 'imap.gmail.com',
      port: 993,
      tls: {
        ca: [fs.readFileSync('path/to/ca-certificate-bundle.pem')],
      },
      authTimeout: 3000,
    },
  };
  
imaps.connect(config).then((connection) => {
  return connection.openBox('INBOX').then(() => {
    const searchCriteria = ['UNSEEN'];
    const fetchOptions = { bodies: ['HEADER.FIELDS (FROM SUBJECT DATE)'], markSeen: true };

    return connection.search(searchCriteria, fetchOptions).then((messages) => {
      messages.forEach((message) => {
        console.log('Received email:', message.parts[0].body.subject);
      });
    });
  });
}).catch((err) => {
  console.error('Error connecting to IMAP server:', err);
});
