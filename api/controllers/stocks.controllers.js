var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');

module.exports.stocksGetAll = function(req, res){
    
    console.log('Get the stocks');
    Stock
        .find()
        .exec(function(err, stocks){
            if(err){
                console.log("Error finding stocks");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Found stocks", stocks.length);
                res
                    .json(stocks);
            }
        });
};    

module.exports.stocksGetOne = function(req, res){

    var stockId = req.params.stockId;
    console.log("GET stockId", stockId);
    
    Stock
        .findById(stockId)
        .exec(function(err, doc){
            var response = {
                status : 200,
                message : doc
            };
            if(err){
                console.log("Error finding stocks");
                response.status = 500;
                response.message = err;
            } else if(!doc) {
                response.status = 404;
                response.message = {
                        "message" : "Stock ID not found"
                    };
            }
            res
                .status(response.status)
                .json( response.message);
        });
};

module.exports.stocksGetSymbol = function(req, res){
        
        var symbol = req.params.symbol;
        symbol = symbol.toUpperCase();
        console.log("Getting stock: ", symbol);
    
    Stock
        .findOne({
            Symbol : symbol 
        }, function(err, doc){
            if(err){
                console.log("Error finding stock");
                res
                    .status(500)
                    .json({"Error finding stock" : err});
            } else if(!doc) {
                console.log("No stock available for symbol " + symbol);
                res
                    .status(400)
                    .json({"error":"No stock available for symbol " + symbol + "."});
            } else {
            res
                .status(200)
                .json(doc); 
            }
         });
};