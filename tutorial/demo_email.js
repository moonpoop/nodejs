var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'moonpoop@gmail.com',
    pass: 'pwd'
  }
});

var mailOptions = {
  from: 'moonpoop@gmail.com',
  to: 'moonpoop@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'These aren\'t the correct credentials and emails current do not exist, as far as I know'
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
