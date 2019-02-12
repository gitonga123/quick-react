var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dishRouter = require('./routes/dishRouter');
var leaderRouter = require('./routes/leaderRouter');
var promoRouter = require('./routes/promoRouter');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation.js');

const url = 'mongodb://localhost:27017';
const dbname = 'conFusion';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dboper.insertDocument(db, {
          name: "Vadonut",
          description: "Test"
        },
        "dishes")
      .then((result) => {
        console.log("Insert Document:\n", result.ops);

        return dboper.findDocuments(db, "dishes");
      })
      .then((docs) => {
        console.log("Found Documents:\n", docs);

        return dboper.updateDocument(db, {
          name: "Vadonut"
        }, {
          description: "Updated Test"
        }, "dishes");

      })
      .then((result) => {
        console.log("Updated Document:\n", result.result);

        return dboper.findDocuments(db, "dishes");
      })
      .then((docs) => {
        console.log("Found Updated Documents:\n", docs);

        return db.dropCollection("dishes");
      })
      .then((result) => {
        console.log("Dropped Collection: ", result);

        return client.close();
      })
      .catch((err) => console.log(err));

  })
  .catch((err) => console.log(err));

module.exports = app;