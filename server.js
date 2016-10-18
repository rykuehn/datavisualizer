var express = require('express');
var parser = require('body-parser');
//var mongoose = require('mongoose');
require('./db');
var Response = require('./responsemodel');

var app = express();

app.use(parser.json());

app.get('/', function(req, res){
  Response.find({}, function(err, responses) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ responses: responses });
  });
});

app.post('/newresponse', function(req, res){
  var response = req.body;
  Response.create(response, function(err, response) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'flavor': response, count: 0 });
  });
});
 

app.listen(8080, function(err){
  if(err) {
    console.log('there was an error connecting');
  }
  console.log('Server listening on port 8080');
})