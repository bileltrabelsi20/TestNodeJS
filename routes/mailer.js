var express = require('express');
var router =express.Router();

var nodemailer = require('nodemailer');


router.post ('/sendMail' , async  (req,res)=> {
   
  
    let transporter = nodemailer.createTransport({
      
      service: 'gmail', 
      auth: {
        user:'bileltrabelsi445@gmail.com', 
        pass: '20204749900'
      },
    });
  
    let info = await transporter.sendMail({
      from: 'bileltrabelsi445@gmail.com', 
      to: "tunizeek@gmail.com", 
      subject: "Hello", 
      text: "test nodeMailer", 
    });
  res.json({message:"msg sent"})
   
    })
  
  module.exports = router;
