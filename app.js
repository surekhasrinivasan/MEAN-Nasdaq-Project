var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require("./api/routes");

app.set('port', process.env.PORT);

app.use(function(request, response,next){
    console.log(request.method, request.url);
    next();
});


var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Magic happens on port" + port);    
});