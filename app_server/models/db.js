const mongoose = require('mongoose');

const mongoDbUri = "mongodb://localhost/Loc8r";
mongoose.connect(mongoDbUri, {useNewUrlParser: true});

mongoose.connection.on('connected',() => {
  console.log(`Moongose connected to ${mongoDbUri}`);  
});


mongoose.connection.on('error', err => {
 console.log(`Mongoose connection error `, err) ;
});

mongoose.connection.on('disconected', () => {
  console.log(`Mongoose disconected`)  ;
});
