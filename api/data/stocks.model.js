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
    sector : {
        type : String
    },
    marketCap : {
        type : Number
    },
    lastSale : {
        type : Number
    },
    industry : {
        type : String 
    }
});

mongoose.model('Stock', stockSchema);