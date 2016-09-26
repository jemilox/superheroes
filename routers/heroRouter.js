
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Hero = require('../models/superhero');

router.post('/add', function (req, res) {
  console.log('in / post');
  console.log('req.body', req.body);
  var sendData = req.body;
  var newHero = new Hero({
    alias: sendData.alias,
    fname: sendData.fname,
    lname: sendData.lname,
    city: sendData.city,
    power: sendData.power
  });
  newHero.save(function (err) {
    if(err){
      console.log('error occured:', err);
      res.sendStatus(500);
    }else{
      console.log('assignment saved successfully!');
      res.sendStatus(201);
    }
  });

});

router.get('/all', function (req, res) {
  console.log('in /all');
  Hero.find({}, function (err, heroResults) {
    console.log('petResults', heroResults);
    res.send(heroResults);
  });
});

module.exports = router;
