const mongoose = require('mongoose');
require('dotenv').config();

//database connection
const uri = process.env.MONGO_DB_URL;
mongoose.connect(uri) ;
const db = mongoose.connection;
db.once('open', () => {
  console.log(" Connected Database Successfully");
})
    

// Code for manually using the mongodb of local system

// const db = mongoose.connection

// db.on('error', console.error.bind(console, 'error connecting to database'));

// db.once('open', ()=>{
//     console.log("successfully connected to database : mongoDB");
// });

module.exports = mongoose;