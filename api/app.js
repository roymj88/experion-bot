var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var failure = require('./helper/response').failure;
var config = require('./config.json');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongoose.connect(config.mongodb.url);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// HTTP access control (CORS)
var cors = require('./cors')(app);

// routes
var routes = require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json(failure(err.message, err.status));
});

// error handler
app.use(function(err, req, res, next) {
  res.json(failure(err.message, err.status));
});

module.exports = app;
