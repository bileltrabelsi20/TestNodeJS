const express = require ('express')
const router = express.Router();

const User = require('../models/user') //user.create


router.get('/',(req,res)=>{

    res.send('11')

});

router.post('/addNewUser',(req,res) => {

   const user= User.create(req.body)
    .then (result => {res.json(user)})
    .catch ( error => console.log(error))
  });


  ///////////////// affect comande to user /////////////
  
  router.put ('/affect/:idUser/:idCommande' , (req,res) =>{

    User.findByIdAndUpdate(req.params.idUser , {$push:{lesCommandes :  req.params.idCommande}})
    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  
  })


  module.exports=router;