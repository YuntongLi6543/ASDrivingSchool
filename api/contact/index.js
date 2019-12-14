var express = require('express');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');
var cors = require('cors');


app.use(cors());
app.use(express.json());

// app.set('port', port);

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    secure: false,

    auth: {
      user: '',  // Change email address, from 
      pass: ''             // your email password
      // if have errors during runtime, try turn off 'Less secure app access' in https://myaccount.google.com/security
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/myData', (req, res, next) => {
  var name = req.body.fields["name"];
  var email = req.body.fields["email"];
  var message = req.body.fields["message"];
  var content = 'Name: ' + name + ' \nEmail: '+email+ '\nMessage:'+ message;

  var mail = {
    from: name,
    to: 'xxx@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Us Page',
    text: content
  }


  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: false
      })
    } else {
      res.json({
       status: true
      })
    }
  })
})


var port = parseInt(process.env.PORT, 10) || 3000;
app.use('/', router);
app.listen(port);
console.log('Server working: port ' + port);