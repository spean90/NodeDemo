var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');//HTTP request logger middleware for node.js
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
//var redisrouter = require('./routes/redisrouter');
global.user_id = 200000000000;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}))
app.use(express.static(path.join(__dirname, 'public')));//如果没有找到、则在public目录下寻找
app.use('/',function(req,res,next){
    console.log('in..intercept========拦截器 验证是否登录================');
    if(req.url == '/login'){
        next();
    }else{
        if(req.session.user == null){
            return res.redirect('/login.html');

        }else{
            next();
        }
    }

});
app.use('/', routes);
app.use('/user', users);
app.use('/test', test);
//app.use('/redis', redisrouter);
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
