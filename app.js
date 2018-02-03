var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "saida": "Olá Mundo!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "saida": "Olá Mundo!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
