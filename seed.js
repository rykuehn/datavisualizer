'use strict';

var Response = require('./responsemodel');

var responses = [
  'vanilla',
  'chocolate',
  'mint',
  'butter pecan',
  'rocky road',
  'french vanilla'
];

responses.forEach(function (response, index) {


  Response.find({ 'flavor': response }, function(err, responses) {
    console.log(arguments)
    if(err) {
      console.log('error');
    }
    if (!err && !responses.length) {
      Response.create({ flavor: response, count: 0 });

    } 

  });
});
