
// Dependencies
const express = require("express");
const path = require("path");


// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// serve static css file in folder before css folder
app.use(express.static('app'));


// require the html routes
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
    console.log('App listening on: http://localhost:'+PORT)
});