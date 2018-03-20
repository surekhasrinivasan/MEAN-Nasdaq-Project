var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    symbol : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    sector : String,
    marketCap : Number,
    ipoYear : Number
});

mongoose.model('Stock', stockSchema);