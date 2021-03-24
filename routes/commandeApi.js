var express = require('express');
var router =express.Router();

const Commande = require ('../models/commande');



router.post('/addNewOrder',(req,res) => {

    Commande.create(req.body)
    .then (result => {res.json(result)})
    .catch ( error => console.log(error))
  })


module.exports = router;
