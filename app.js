/**
 * Module dependencies.
 */
var express = require('express');
var service = require('./routes/service');
var http = require('http');
var path = require('path');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.cookieParser());
app.use(express.session({
    secret: 'com.github.greengerong'
}));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/token', service.token);
app.get('/user', function(req, res, next) {
    console.log(req.headers.token, "token in header");
    console.log(req.session.token,  req.sessionID, "token in session");

    if (!req.session.token || req.headers.token != req.session.token) {
        return res.send(403, "You can access this service.");
    }
    next();
}, service.user);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});