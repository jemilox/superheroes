var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: true});
var mongoose = require('mongoose');

app.use(bodyParser.json());
//connect to my db
var mongoURI = "mongodb://localhost:27017/superheroes";
var MongoDB = mongoose.connect(mongoURI);

//routers
//var Hero = require('../models/superhero');
var heroRouter = require('../routers/heroRouter');



//
// MongoDB.on('error', function () {
//   console.log('mongodb connection err:', err);
// });
//
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

//use routers, if /hero, go to petRouter
app.use('/hero', heroRouter);


app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));



var server = app.listen('4242', function () {
  var port = server.address().port;
  console.log('Port up');
});
