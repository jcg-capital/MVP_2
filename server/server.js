'use strict';
var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    //fs      = require('fs'),
    // Added config.js to gitignore  - has quandl api key and sets process.env.NODE_ENV = 'development',
    config  = require('./config.js'),
    path    = require('path');
    //url     = require('url');

// ***********************************//
// Start the server
// ***********************************//
server.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// ***********************************//
// ???? not sure
// ***********************************//
exports = module.exports = app;

// ***********************************//
// Setup base options for /../client?
// ***********************************//
var options = {
  root: __dirname + '/../client/',
  dotfiles: 'deny',
  headers: {
    'x-timestamp' : Date.now(),
    'x-sent' : true
  }
};

// ***********************************//
// Static serving of client?
// ***********************************//
app.use(express.static('client'));

// ***********************************//
// Serve all /node_modules/* files
// ***********************************//
app.get('/node_modules/*', function(req, res){
  var options = {
    root: __dirname + '/../',
    dotfiles: 'deny',
    headers: {
      'x-timestamp' : Date.now(),
      'x-sent' : true
    }
  };
  options.root = options.root + path.parse(req.url).dir;
  res.sendFile(path.parse(req.url).base, options, function(err){
      if (err) {
        console.log(err, options);
      } 
    });
});


// ***********************************//
// server all /client/* files
// ***********************************//
app.get('/client/*', function(req, res){
  var options = {
    root: __dirname + '/../',
    dotfiles: 'deny',
    headers: {
      'x-timestamp' : Date.now(),
      'x-sent' : true
    }
  };
  options.root = options.root + path.parse(req.url).dir;
  res.sendFile(path.parse(req.url).base, options, function(err){
      if (err) {
        console.log(err, options);
      } 
    });
});

// ***********************************//
// serve all build/* files
// ***********************************//
app.get('/build/*', function(req, res){
  var options = {
    root: __dirname + '/../',
    dotfiles: 'deny',
    headers: {
      'x-timestamp' : Date.now(),
      'x-sent' : true
    }
  };
  options.root = options.root + path.parse(req.url).dir;
  res.sendFile(path.parse(req.url).base, options, function(err){
      if (err) {
        console.log(err, options);
      } 
    });
});

// ***********************************//
// endpoint to serve index.html
// ***********************************//
app.get('/', function(req, res){
  res.sendFile('index.html', options, function(err){
    if (err) {
      console.log(err, options);
    } 
  });
});


// ***********************************//
// Example of how to setup quandl connection
//
// TODO: eventually abstract this into its
// own module
// ***********************************//
var Quandl = require('quandl');
var quandl = new Quandl({
    auth_token: config.QUANDL_TOKEN,
    api_version: 1,
});

// ***********************************//
// Example API call to retrieve stock history
// by a sorted and ranged search query 
//
// See https://www.quandl.com/help/api#A-Simple-Example
// AND https://www.quandl.com/help/api
// ***********************************//
app.get('/testdata', function(req, res){
  console.log('url: ', req.url);
  console.log('body: ', req.body);
  var code = {
    'source': 'WIKI',
    'table': 'AAPL'
  };
  var options = { 
    column:'4',
    sort_order:'asc',
    collapse:'quarterly',
    trim_start:'2012-01-01',
    trim_end:'2013-12-31'
  };
  quandl.dataset(code, options, function(err, response){
      if(err){
        console.log('ENDPOINT: /testdata : ERROR',err);
      }
      res.end(response);
  });
});