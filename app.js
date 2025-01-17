require('./api/data/dbconnection.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require("./api/routes");

//Define the port to run on
app.set('port', process.env.PORT);

//Add middleware to console log every request
app.use(function(request, response,next){
    console.log(request.method, request.url);
    next();
});

//Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

//Enable parsing of posted forms
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json()); 

//Add some routing
app.use('/api', routes);

//Listen for requests 
var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Magic happens on port" + port);    
});