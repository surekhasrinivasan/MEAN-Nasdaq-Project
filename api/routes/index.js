var express = require("express");
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
router
    .route('/stocks')
    .get(ctrlStocks.stocksGetAll);
    //.post(ctrlHotels.hotelsAddOne);

module.exports = router;


















// var express = require('express');
// var router = express.Router();

// // var ctrlStocks = require('../controllers/stocks.controllers.js');

// router
//  .route('/json')
// // .get(ctrlStocks.stocksGetAll);
// .get(function(req, res){
//         console.log("GET the json");
//         res
//             .status(200)
//             .json({"jsonData" : true});
//     })
//     .post(function(req, res){
//         console.log("POST the json route");
//         res
//             .status(200)
//             .json({"jsonData" : "POST received"});
//     });

// module.exports = router;