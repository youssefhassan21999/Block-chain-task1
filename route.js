var express = require('express');
var app = express.Router();

app.get('/', function(req, res, next){
    res.send('resourcee plz');
});

app.get('/pablo', function(req, res){
    res.send('MothaFuka on the stage!');
});

module.exports = app;