var relic = require('newrelic');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/config');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.disable('x-powered-by'); //Remove the default express header


app.use(require('./route.js'));
app.use(express.static(__dirname + '/public'));

//Start server
var server = app.listen(config.serverPort, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server  listening at http://%s:%s", host, port);
});