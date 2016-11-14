var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var fewestGuesses = 99;

app.use(cors());

app.get('/fewest-guesses', function (req, res) {
  
  fewestGuesses = fewestGuesses;

  res.json({fewestGuesses: fewestGuesses});
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/fewest-guesses', function (req, res) {

  fewestGuesses = req.body.fewestGuesses;
  res.json({fewestGuesses: fewestGuesses});
})

app.listen(process.env.PORT || 8080, process.env.IP);

console.log('Listening');
