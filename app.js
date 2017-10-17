var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
require('./models/models');

mongoose.connect("mongodb://localhost:27017/agentstest", { useMongoClient: true });


var apiagents = require('./routes/apiagents');
var apihome = require('./routes/apihome');
//var api = require('./routes/api');
var default_router = function(req, res)   {
     res.status(500).send("Error");
}

var app = express(); 

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use('/', apihome);
app.use('/agents', apiagents);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            status: err.status, 
            message: err.message
            ,stack: err.stack
        });
    });
}

module.exports = app;

/*
function agentCleanup() {
  console.log("Cleanup");
  mongoose.model('Agent').remove({},function(err) {
    if (err){
      console.log(err.message);
    }
  });
}
setInterval(agentCleanup, 7200000);

app.listen(80, function () {
  console.log('Server listening...')
})
*/
