var express = require('express');
var parser = require('body-parser');
//var mongoose = require('mongoose');
require('./db');

var app = express();

app.use(parser.json());

app.get('/', function(req, res){
  res.send('get works')
});

app.post('/', function(req, res){
  
  res.send(req.body);
});

app.listen(8080, function(err){
  if(err) {
    console.log('there was an error connecting');
  }
    console.log('Server listening on port 8080');
})