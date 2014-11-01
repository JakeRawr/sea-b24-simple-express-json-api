'use strict';

var express = require('express');
var date = new Date();

var app = express();

app.get('/', function (req, res) {
  res.status(200);
  res.send('Click the following link for local time display <br><br> <a href="/date">Dispaly Date</a>');
});

app.get('/date', function (req, res) {
  res.status(200);

  //Get local time
  //"Sat Nov 01 2014 08:22:00 GMT-0700 (PDT)" to "08:22:00"
  var time = date.toString().split(' ')[4];
  res.json({time: time});
});

app.get('/msg/:name', function (req, res) {
  res.status(200);
  res.json({ msg: 'Hello ' + req.params.name});
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server started on port', port);
});

module.exports = app;

