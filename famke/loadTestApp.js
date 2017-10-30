var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var defaultRouter = require('./routes/default');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', defaultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Hard error handler
app.use(function(err, req, res, next) {
    //res.status(404);
    //res.send("Error")
    next(err);
  }
);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(req, res, next) {
      res.status(err.status || 500);
      res.json({
          status: err.status, 
          message: err.message,
          stack: err.stack
      });
  });
}



module.exports = app;
