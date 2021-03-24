const mongoose = require('mongoose');
const { schema } = require('./commande');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: String,
    adresse: String,
    phone: String,

    lesCommandes : [{type : Schema.Types.ObjectId , ref : 'commandeSchema'}]

      
  },{timestamps : true})

const User = mongoose.model (  'User' , userSchema ) ;

module.exports = User ;