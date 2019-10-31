
// Dependencies
var express = require("express");
var path = require("path");


// Set up the Express App
var app = express();
var PORT = 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());