var express = require('express');
var app = express();
var lowest = 99;

app.get('/fewest-guesses', function (req, res) {
  // compare # of guesses with lowest
  // send back whatever number is lowest + feedback
  res.send('GET request')
})

app.post('/fewest-guesses', function (req, res) {
  res.send('POST request')
})
