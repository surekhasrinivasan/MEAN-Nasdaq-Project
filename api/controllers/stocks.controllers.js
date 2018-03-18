var dbconn = require('../data/dbconnection.js');
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
        .toArray(function(err, docs){
            console.log('Found stocks', docs);
            res
                .status(200)
                .json(docs);
        });
};    
//     console.log('db', db);
    
//     console.log("GET the stocks");
//     console.log(req.query);
    

    
//     var returnData = stockData.slice(offset, offset + count);

//     res
//         .status(200)
//         .json(returnData);
// };