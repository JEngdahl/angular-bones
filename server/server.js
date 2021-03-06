var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
var request = require('request');

//npm dotenv -->lets u use process.envs....
//Server is here
var app = express();

//Sets What To Use
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'))


var routes = require('./routes.js')(app, express);

app.listen(8000);


console.log("server running on 8000")

module.exports = app;
