var express = require('express');
var app = express();
var lowest = 99;

app.get('/fewestGuesses', function (req, res) {
  // compare # of guesses with lowest
  // send back whatever number is lowest + feedback

  res.send(lowest);
})

app.post('/fewest-guesses', function (req, res) {
  res.send('POST request')
})

app.listen(process.env.PORT || 8080, process.env.IP);

console.log('Listening');
