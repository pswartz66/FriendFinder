
// Dependencies
const express = require("express");
const path = require("path");


// Set up the Express App
const app = express();
const PORT = 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res, next) => {
    res.send('Hello world!');
});

app.listen(PORT, function(){

    console.log('App listening on: http://localhost:'+PORT)

});