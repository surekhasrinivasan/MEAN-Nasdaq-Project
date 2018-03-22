/*global angular*/
angular.module('meannasdaq').controller('StockController', StockController);

function StockController($http, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    
    $http.get('/api/stocks/' + id).then(function(response){
        //console.log(response.data);
        vm.stock = response.data;
    }); 
}