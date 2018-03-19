var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var stockData = require('../data/stock-data.json');

module.exports.stocksGetAll = function(req, res){
    var db = dbconn.get();
    var collection = db.collection('stocks');

    var offset = 0;
    var count = 5;
    
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }    
    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, docs){
            console.log('Found stocks', docs);
            res
                .status(200)
                .json(docs);
        });
};    

module.exports.stocksGetOne = function(req, res){
    var db = dbconn.get();
    var collection = db.collection('stocks');
    
    var stockId = req.params.stockId;
    console.log("GET stockId", stockId);
    
    collection
        .findOne({
            _id : ObjectId(stockId)
        }, function(err, doc){
            res
                .status(200)
                .json( doc );
        });
}
    
