
var mongoose = require('./db');

var responseSchema = mongoose.Schema({
  flavor: String,
  count: Number
});

var Response = mongoose.model('Response', responseSchema);


module.exports = Response;