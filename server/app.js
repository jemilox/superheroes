var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});
var mongoose = require('mongoose');

app.use(bodyParser.json());
//connect to my db

//routers
var Pet = require('../models/pet');
//var petRouter = require('../routers/petRouter');

var mongoURI = "mongodb://localhost:27017/pets";
var MongoDB = mongoose.connect(mongoURI);
//
// MongoDB.on('error', function () {
//   console.log('mongodb connection err:', err);
// });
//
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

//use routers, if /pet, go to petRouter
//app.use('/pet', petRouter);


app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));



var server = app.listen('3000', function () {
  var port = server.address().port;
  console.log('Port up');
});

app.post('/', function (req, res) {
  console.log('in / post');
  console.log('req.body', req.body);
  var sendData = req.body;
  var newPet = new Pet({
    name: sendData.name,
    animal: sendData.animal,
    age: sendData.age,
    imageurl: sendData.imageUrl
  });
  newPet.save(function (err) {
    if(err){
      console.log('error occured:', err);
      res.sendStatus(500);
    }else{
      console.log('assignment saved successfully!');
      res.sendStatus(201);
    }
  });

});

app.get('/all', function (req, res) {
  console.log('in /all');
  Pet.find({}, function (err, petResults) {
    console.log('petResults', petResults);
    res.send(petResults);
  });
});
