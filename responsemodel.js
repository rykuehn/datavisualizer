
var mongoose = require('./db');


var responseSchema = mongoose.Schema({
  flavor: String,
  count: Number
});

var FlavorModel = mongoose.model('Response', responseSchema);


module.exports = FlavorModel;