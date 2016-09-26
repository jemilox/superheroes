var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('in superhero model');

var heroSchema = new Schema ({
  alias: String,
  fname: String,
  lname: String,
  city: String,
  power: String
});

var Hero = mongoose.model('heroes', heroSchema);

module.exports = Hero;
