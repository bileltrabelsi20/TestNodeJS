
// installer : mongoose - bodyParser - router - express - nodemailer - nodemon - multer //

const express = require('express') ;
const connect = require ('./dataBase/connect');

const app = express() ;

const  userApi = require ('./routes/userApi');
const commandeApi = require ('./routes/commandeApi');

const mailer = require ('./routes/mailer');
const upload = require ('./routes/upload')
var multer  = require('multer');


var bodyParser = require('body-parser');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//bilel//

app.use('/user' , userApi)
app.use('/commande' , commandeApi)
app.use('/email' , mailer)
app.use('/upload' , upload )

app.listen (3000 , () =>{
    console.log('done');
})