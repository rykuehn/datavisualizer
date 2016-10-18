var express = require('express');
var parser = require('body-parser');


//var mongoose = require('mongoose');
require('./db');
var FlavorModel = require('./responsemodel');


var app = express();

app.use(parser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  FlavorModel.find({}, function(err, responses) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.send({ responses: responses });
  });
});

app.post('/newresponse', function(req, res){
  var flavor = req.body.flavor

  FlavorModel.findOne({ 'flavor': flavor }, function(err, data) {
    if(data) {
      console.log(data)
      data.count = data.count + 1;
      data.save(function(err) {
        if(err) {
          res.end();
        } else {
          res.end();
        }
      })
    } else {
      var newFlavor = new FlavorModel({flavor: flavor, count: 1});
      newFlavor.save(function(err){
        if(err) {
          res.send('error with save');
        }
        res.send('successful save in database')
      })

    }
  })

});

app.listen(8080, function(err){
  if(err) {
    console.log('there was an error connecting');
  }
  console.log('Server listening on port 8080');
})