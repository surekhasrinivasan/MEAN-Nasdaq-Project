var stockData = require('../data/stock-data.json');

module.exports.stocksGetAll = function(req, res){
    console.log("GET the stocks");
    console.log(req.query);
    
    var offset = 0;
    var count = 5;
    
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    var returnData = stockData.slice(offset, offset + count);

    res
        .status(200)
        .json(returnData);
};