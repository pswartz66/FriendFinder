
// Dependencies
const express = require("express");
const path = require("path");


// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const surveyResponse = [];

// serve static css file in folder before css folder
app.use(express.static('app'));

// require the api route; call before html routes
require('./app/routing/apiRoutes.js')(app);

// require the html routes
require('./app/routing/htmlRoutes.js')(app);


app.get("/api/friendslist", function(req, res){

    return res.json(surveyResponse);

});

app.post("/api/friendslist", function(req, res){

    console.log(req.body);

    surveyResponse.push(req.body);

    console.log(surveyResponse);

    res.end();

});


app.listen(PORT, function(){
    console.log('App listening on: http://localhost:'+PORT)
});