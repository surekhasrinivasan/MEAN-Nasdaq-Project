/*global angular*/
angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($http) {
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    $http.get('/api/stocks?count=15').then(function(response){
        //console.log(response);
    vm.stocks = response.data;
    });
}