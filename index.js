
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const db = require('./config/mongoose');

require('dotenv').config();

const Port = 8080;

// Routes
app.use('/',require('./routes/index'));
   
app.listen(Port, function(err){
    if(err){
        console.log(err);
    }
    console.log(`Server is running fine on ${Port}`);
})