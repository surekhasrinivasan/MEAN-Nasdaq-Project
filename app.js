require('./api/data/dbconnection.js');
var express = require('express');
var app = express();
var path = require('path');

var routes = require("./api/routes");

app.set('port', process.env.PORT);

app.use(function(request, response,next){
    console.log(request.method, request.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Magic happens on port" + port);    
});