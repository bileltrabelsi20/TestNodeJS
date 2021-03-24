const mongoose = require ('mongoose')
const mongoUrl ="mongodb+srv://bilel:trabelsi@cluster0.dn70h.mongodb.net/bilelDataBase?retryWrites=true&w=majority"

const connectToDataBase = mongoose.connect (mongoUrl , {

  useNewUrlParser: true,
  useUnifiedTopology: true

}).then (result => ()=>{
  console.log('server is open on http://localhost:3000');
}).catch(error => console.log('erreur'))