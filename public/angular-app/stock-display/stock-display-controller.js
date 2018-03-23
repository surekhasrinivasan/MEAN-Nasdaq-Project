/*global angular*/
angular.module('meannasdaq').controller('StockController', StockController);

function StockController(stockDataFactory, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    
    stockDataFactory.stockDisplay(id).then(function(response){
        //console.log(response.data);
        vm.stock = response.data;
    }); 
}