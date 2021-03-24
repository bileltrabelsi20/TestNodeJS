const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commandeSchema = new Schema ({

    productName:String,
    productPrice:String,

} , {timestamps : true});

const Commande = mongoose.model ('Commande' , commandeSchema );

module.exports = Commande ;