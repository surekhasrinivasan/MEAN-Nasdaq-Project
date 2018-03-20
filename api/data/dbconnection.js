//Using Mongoose connection
var mongoose = require('mongoose');
var dburl = 'mongodb://surekhasrinivasan-firstworkspace-5563392/meannasdaq';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log("Mongoose connected to " + dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose disconnected");
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose connection error: " + err);
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose disconnected through app termination (SIGINT)");
      process.exit(0);
    });
});
process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose disconnected through app termination (SIGTERM)");
      process.exit(0);
    });
});
process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose disconnected through app termination (SIGUSR2)");
      process.kill(process.pid, 'SIGUSR2');
    });
});

//BRING IN SCHEMAS AND MODELS
require('./stocks.model.js');


//Native-driver connection
// var MongoClient = require('mongodb').MongoClient;
// var dburl = 'mongodb://surekhasrinivasan-firstworkspace-5563392';

// var _connection = null;

// var open = function(){
//     MongoClient.connect(dburl, function(err, client){
//         if(err) {
//             console.log("DB connection failed");
//             return;
//         }
//     // set _connection
//         _connection = client.db("meannasdaq");
//         console.log("DB connection open", client);
//     });
// };

// var get = function() {
//     return _connection;
// };

// module.exports = {
//     open : open,
//     get : get
// };
