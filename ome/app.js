const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/omeDB', {
  useMongoClient: true
});


require('./models/person');
require('./models/event');
require('./models/expense');

require('./config/pasport');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

var distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));
app.use(passport.initialize());

if (!process.env.SIGN_SECRET) {
  const result = require('dotenv').config()
  if (result.error) {
    throw result.error;
  }
}

const person = require('./routes/person');
const event = require('./routes/event');
const expense = require('./routes/expense');

app.use('/api/people', person);
app.use('/api/events', event);
app.use('/api/expenses', expense);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json(err);
});

module.exports = app;
