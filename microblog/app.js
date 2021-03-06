var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// express 3.0+ 取消了对默认layout.ejs的支持，必须手动引用express-partials
var partials = require('express-partials');
// var session = require('express-session');

// var MongoStore = require('connect-mongo')(session);
// var settings = require('./settings');

// console.log(MongoStore);



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials()); // 这里必须要use

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// mongodb
// app.use(session({
//     secret: settings.cookieSecret,
//     store: new MongoStore({
//         db: settings.db
//     })
// }));

// 测试页面路由规则定义
var routes = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');
var helper = require('./routes/helper');

// 微博系统路由规则定义
var reg = require('./routes/reg');


app.use('/', routes);
app.use('/users', users);
app.use('/hello', hello);
app.use('/helper', helper);

app.use('/reg', reg);

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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

console.log("Express server listening on port %d in %s mode \n", 3000, app.settings.env);